// おとみち — 音を鳴らす部分（Web Audio API だけで作る。音源ファイルは使わない）
const Sound = (() => {
  let ctx = null;
  let master = null;
  let volume = 0.7;
  // 音の鳴らし方
  //   'mix'  : ほかのアプリの音楽と一緒に鳴らす（効果音あつかい）。マナースイッチがオンだと鳴らない
  //   'solo' : マナースイッチがオンでも鳴らす（再生あつかい）。かわりに、流れている音楽は止まる
  let mode = 'mix';
  function applySession() {
    try {
      if (navigator.audioSession) navigator.audioSession.type = mode === 'mix' ? 'ambient' : 'playback';
    } catch (e) { /* 対応していない端末では何もしない */ }
  }
  let playing = [];

  // ----- iPhone で音を出すための準備 -----
  // 1) マナースイッチがオンでも鳴らす：Safari 17 以降は audioSession、
  //    それより前は「無音の <audio>」を一度鳴らすと、ページの音が「再生」扱いになる
  // 2) 最初のタップの中で、無音を実際に鳴らして「鍵を開ける」
  // 3) 裏に回して戻ったとき（interrupted / suspended）に再開する
  let silentEl = null;
  function silentUrl() {
    // 0.25秒の無音の WAV をその場で作る（8kHz・8bit・モノラル）
    const n = 2000, buf = new ArrayBuffer(44 + n), v = new DataView(buf);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); v.setUint32(4, 36 + n, true); w(8, 'WAVE'); w(12, 'fmt ');
    v.setUint32(16, 16, true); v.setUint16(20, 1, true); v.setUint16(22, 1, true);
    v.setUint32(24, 8000, true); v.setUint32(28, 8000, true); v.setUint16(32, 1, true); v.setUint16(34, 8, true);
    w(36, 'data'); v.setUint32(40, n, true);
    for (let i = 0; i < n; i++) v.setUint8(44 + i, 128);
    return URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
  }
  function playSilentElement() {
    try {
      if (!silentEl) {
        silentEl = document.createElement('audio');
        silentEl.setAttribute('playsinline', '');
        silentEl.setAttribute('x-webkit-airplay', 'deny');
        silentEl.preload = 'auto';
        silentEl.loop = false;
        silentEl.src = silentUrl();
      }
      const pr = silentEl.play();
      if (pr && pr.catch) pr.catch(() => {});
    } catch (e) { /* 何もしない */ }
  }

  function create() {
    applySession();
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
    return ctx;
  }

  function wake() {
    if (ctx && ctx.state !== 'running') { try { ctx.resume(); } catch (e) { /* 何もしない */ } }
  }

  let unlocked = false;
  function unlock() {
    if (!ctx && !create()) return;
    if (mode === 'solo') playSilentElement(); // 音楽と一緒に鳴らすときは使わない（使うと音楽が止まる）
    wake();
    // 無音を1つ鳴らして、Web Audio の鍵を開ける
    try {
      const b = ctx.createBuffer(1, 1, 22050), s = ctx.createBufferSource();
      s.buffer = b; s.connect(ctx.destination); s.start(0);
    } catch (e) { /* 何もしない */ }
    if (ctx.state === 'running') unlocked = true;
  }
  // 画面のどこかを最初に触った瞬間に準備する（鳴るまで毎回試す）
  const onGesture = () => { if (!unlocked || (ctx && ctx.state !== 'running')) unlock(); };
  ['touchend', 'pointerup', 'click', 'keydown'].forEach((ev) => document.addEventListener(ev, onGesture, true));
  document.addEventListener('visibilitychange', () => { if (!document.hidden) wake(); });
  window.addEventListener('pageshow', wake);

  function init() {
    if (!ctx && !create()) return null;
    wake();
    return ctx;
  }

  function setMode(m) {
    mode = m === 'solo' ? 'solo' : 'mix';
    applySession();
    if (mode === 'mix' && silentEl) { try { silentEl.pause(); } catch (e) { /* 何もしない */ } }
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

  const state = () => (ctx ? ctx.state : 'none');
  return { init, unlock, state, play, beat, note, cue, stop, setVolume, setMode };
})();
