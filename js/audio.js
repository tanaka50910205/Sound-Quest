// おとみち — 音を鳴らす部分（Web Audio API だけで作る。音源ファイルは使わない）
const Sound = (() => {
  let ctx = null;
  let master = null;
  let volume = 0.7;
  let playing = [];

  function init() {
    try {
      // iPhone のマナーモードでも鳴るようにする（Safari 17 以降）
      if (navigator.audioSession) navigator.audioSession.type = 'playback';
    } catch (e) { /* 対応していない端末では何もしない */ }
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.ratio.value = 4;
      master = ctx.createGain();
      master.gain.value = volume;
      master.connect(comp);
      comp.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function setVolume(v) {
    volume = v;
    if (master) master.gain.value = v;
  }

  const freq = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

  // ピアノっぽい音：三角波＋少しの倍音、すぐに減衰
  function tone(midi, start, dur, vel = 0.32) {
    const f = freq(midi);
    const out = ctx.createGain();
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(Math.min(9000, f * 9), start);
    lp.frequency.exponentialRampToValueAtTime(Math.max(400, f * 2.2), start + dur);
    out.gain.setValueAtTime(0.0001, start);
    out.gain.exponentialRampToValueAtTime(vel, start + 0.012);
    out.gain.exponentialRampToValueAtTime(vel * 0.35, start + 0.35);
    out.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    lp.connect(out);
    out.connect(master);

    const partials = [[1, 'triangle', 1], [2, 'sine', 0.28], [3, 'sine', 0.08]];
    partials.forEach(([mul, type, g]) => {
      const o = ctx.createOscillator();
      const og = ctx.createGain();
      o.type = type;
      o.frequency.value = f * mul;
      o.detune.value = (Math.random() - 0.5) * 4;
      og.gain.value = g;
      o.connect(og);
      og.connect(lp);
      o.start(start);
      o.stop(start + dur + 0.05);
      playing.push(o);
    });
  }

  // ドラム（リズム編用）：k=キック s=スネア h=ハイハット H=強いハイハット
  let noiseBuf = null;
  function noise() {
    if (!noiseBuf) {
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    playing.push(src);
    return src;
  }
  function drum(kind, t) {
    const g = ctx.createGain();
    g.connect(master);
    if (kind === 'k') {
      const o = ctx.createOscillator();
      o.frequency.setValueAtTime(140, t);
      o.frequency.exponentialRampToValueAtTime(42, t + 0.18);
      g.gain.setValueAtTime(0.9, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
      o.connect(g); o.start(t); o.stop(t + 0.4);
      playing.push(o);
    } else if (kind === 's') {
      const n = noise(), bp = ctx.createBiquadFilter();
      bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.8;
      g.gain.setValueAtTime(0.5, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
      n.connect(bp); bp.connect(g); n.start(t); n.stop(t + 0.25);
      const o = ctx.createOscillator(), og = ctx.createGain();
      o.frequency.value = 190; og.gain.setValueAtTime(0.25, t); og.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      o.connect(og); og.connect(master); o.start(t); o.stop(t + 0.12);
      playing.push(o);
    } else {
      const n = noise(), hp = ctx.createBiquadFilter();
      hp.type = 'highpass'; hp.frequency.value = 7000;
      g.gain.setValueAtTime(kind === 'H' ? 0.32 : 0.14, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.05);
      n.connect(hp); hp.connect(g); n.start(t); n.stop(t + 0.07);
    }
  }

  // ドラムのパターンを鳴らす。steps: [['k','h'], ['h'], ...]、stepSec: 1コマの長さ
  function beat(steps, stepSec, opts = {}) {
    if (!init()) return 0;
    stop();
    const s = stepSec * (opts.slow ? 1.4 : 1);
    let t = ctx.currentTime + 0.05;
    steps.forEach((st) => { (st || []).forEach((k) => drum(k, t)); t += s; });
    return (t - ctx.currentTime) * 1000;
  }

  function stop() {
    playing.forEach((o) => { try { o.stop(); } catch (e) { /* もう止まっている */ } });
    playing = [];
  }

  // steps: [[60,64,67], [62], null(休み), ...]
  // opts.gap: 1ステップの長さ（秒） opts.slow: ゆっくり
  function play(steps, opts = {}) {
    if (!init()) return 0;
    stop();
    const slow = opts.slow ? 1.6 : 1;
    const gap = (opts.gap || 0.85) * slow;
    let t = ctx.currentTime + 0.05;
    steps.forEach((step) => {
      if (step && step.length) {
        const vel = step.length > 1 ? 0.22 : 0.32;
        step.forEach((m, i) => tone(m, t + (opts.arp ? i * 0.05 : 0), Math.max(gap * 1.6, 0.9), vel));
      }
      t += gap;
    });
    return (t - ctx.currentTime) * 1000;
  }

  function note(midi) {
    if (!init()) return;
    tone(midi, ctx.currentTime + 0.01, 0.9, 0.3);
  }

  // 正解・不正解の小さな合図
  function cue(ok) {
    if (!init()) return;
    const t = ctx.currentTime + 0.01;
    if (ok) { tone(84, t, 0.35, 0.16); tone(91, t + 0.09, 0.5, 0.16); }
    else { tone(52, t, 0.4, 0.18); tone(51, t + 0.12, 0.5, 0.16); }
  }

  return { init, play, beat, note, cue, stop, setVolume };
})();
