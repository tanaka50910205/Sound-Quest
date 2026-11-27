// おとみち — 画面と動き
(() => {
  'use strict';

  // ===== アイコン（Lucide の線アイコン） =====
  const ICON = {
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    volume: '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/><path d="M19.364 18.364a9 9 0 0 0 0-12.728"/>',
    book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    redo: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    map: '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    piano: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 4v10"/><path d="M10 4v10"/><path d="M14 4v10"/><path d="M18 4v10"/><path d="M8 14v6"/><path d="M12 14v6"/><path d="M16 14v6"/>',
    shuffle: '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-7.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    snail: '<path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"/><circle cx="10" cy="13" r="8"/><path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"/><path d="M18 3 19.1 5.2"/><path d="M22 3 20.9 5.2"/>'
  };
  const ic = (name, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICON[name]}</svg>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const $ = (sel, root = document) => root.querySelector(sel);

  // ===== 保存 =====
  const KEY = 'otomichi.v1';
  const MAX_HEARTS = 5;
  const HEART_MS = 20 * 60 * 1000; // 20分で1つ回復
  const STEPS = 4; // 1ユニット：レッスン3つ＋まとめテスト

  const fresh = () => ({
    xp: 0, days: {}, streak: 0, lastDay: null,
    hearts: MAX_HEARTS, heartTs: Date.now(),
    progress: {}, missed: {}, answered: 0, correct: 0, lessons: 0,
    settings: { vol: 0.7, theme: 'auto', goal: 30 }
  });
  let S = fresh();
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) S = Object.assign(fresh(), JSON.parse(raw));
    S.settings = Object.assign(fresh().settings, S.settings || {});
  } catch (e) { /* 保存が使えない環境では毎回まっさら */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* 何もしない */ } };

  const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const shiftDay = (n) => { const d = new Date(); d.setDate(d.getDate() + n); return dayKey(d); };
  const liveStreak = () => (S.lastDay === dayKey() || S.lastDay === shiftDay(-1)) ? S.streak : 0;
  const todayXp = () => S.days[dayKey()] || 0;

  function regenHearts() {
    if (S.hearts >= MAX_HEARTS) { S.heartTs = Date.now(); return; }
    const gained = Math.floor((Date.now() - S.heartTs) / HEART_MS);
    if (gained > 0) {
      S.hearts = Math.min(MAX_HEARTS, S.hearts + gained);
      S.heartTs = S.hearts >= MAX_HEARTS ? Date.now() : S.heartTs + gained * HEART_MS;
      save();
    }
  }
  const nextHeartMin = () => Math.max(1, Math.ceil((HEART_MS - (Date.now() - S.heartTs)) / 60000));

  function applyTheme() {
    const t = S.settings.theme;
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }
  applyTheme();
  Sound.setVolume(S.settings.vol);

  const colorOf = (u) => DEGREE_COLORS[u % DEGREE_COLORS.length];
  const prog = (u) => S.progress[UNITS[u].id] || 0;
  const unlocked = (u, step) => {
    for (let i = 0; i < u; i++) if (prog(i) < STEPS) return false;
    return prog(u) >= step;
  };
  function current() {
    for (let u = 0; u < UNITS.length; u++) if (prog(u) < STEPS) return { u, step: prog(u) };
    return null;
  }

  // ===== 画面の切り替え =====
  const app = $('#app');
  let tab = 'learn';
  let L = null; // 進行中のレッスン

  function render() {
    regenHearts();
    if (L) return renderLesson();
    document.body.className = '';
    const views = { learn: viewLearn, review: viewReview, stats: viewStats };
    app.innerHTML = topbar() + views[tab]() + tabbar();
    bindCommon();
  }

  function topbar() {
    const st = liveStreak();
    return `<header class="topbar">
      <div class="brand">${logo()}おとみち</div>
      <span class="stat streak ${st && S.lastDay === dayKey() ? 'on' : ''}" aria-label="連続${st}日">${ic('flame')}${st}</span>
      <span class="stat xp" aria-label="合計${S.xp}XP">${ic('zap')}${S.xp}</span>
      <span class="stat hearts ${S.hearts ? '' : 'empty'}" aria-label="ハート${S.hearts}">${ic('heart')}${S.hearts}</span>
    </header>`;
  }
  function logo() {
    const cols = ['#FF5C61', '#FF9A1F', '#FFC72E', '#2BCF95', '#1FB2EE', '#4D6BFF', '#B25BFF'];
    const bars = cols.map((c, i) => `<rect x="${2 + i * 3.3}" y="${22 - (i + 1) * 2.6}" width="2.6" height="${(i + 1) * 2.6}" rx="1.1" fill="${c}"/>`).join('');
    return `<svg class="brand-mark" viewBox="0 0 28 26" aria-hidden="true">${bars}</svg>`;
  }
  function tabbar() {
    const t = (id, icon, label) => `<button class="tab ${tab === id ? 'on' : ''}" data-tab="${id}">${ic(icon)}${label}</button>`;
    return `<nav class="tabbar">${t('learn', 'map', '学ぶ')}${t('review', 'redo', '復習')}${t('stats', 'chart', '記録')}</nav>`;
  }

  function goalBox() {
    const g = S.settings.goal, x = todayXp();
    const r = 22, len = 2 * Math.PI * r, p = Math.min(1, x / g);
    const week = [];
    for (let i = -6; i <= 0; i++) {
      const v = S.days[shiftDay(i)] || 0;
      week.push(`<span class="${i === 0 ? 'today' : ''}"><i style="height:${Math.min(100, v / g * 100)}%"></i></span>`);
    }
    return `<section class="goal">
      <svg class="ring" viewBox="0 0 52 52" aria-hidden="true"><circle class="bg" cx="26" cy="26" r="${r}"/><circle class="fg" cx="26" cy="26" r="${r}" stroke-dasharray="${len}" stroke-dashoffset="${len * (1 - p)}"/></svg>
      <div><div class="goal-t">${x >= g ? '今日の目標クリア' : '今日の目標'}</div><div class="goal-s">${x} / ${g} XP</div></div>
      <div class="week" aria-label="この7日間">${week.join('')}</div>
    </section>`;
  }

  function viewLearn() {
    const cur = current();
    let k = 0;
    const units = UNITS.map((unit, u) => {
      const locked = !unlocked(u, 0);
      const nodes = [];
      for (let s = 0; s < STEPS; s++) {
        const done = prog(u) > s && !locked;
        const open = unlocked(u, s);
        const isCur = cur && cur.u === u && cur.step === s;
        const trophy = s === STEPS - 1;
        const x = Math.round(Math.sin(k++ * 0.95) * 64);
        const icon = !open ? 'lock' : trophy ? 'trophy' : done ? 'check' : 'star';
        const cls = ['node', trophy && 'trophy', done && 'done', !open && 'locked', isCur && 'current', trophy && done && 'foil'].filter(Boolean).join(' ');
        const label = trophy ? 'まとめテスト' : `レッスン${s + 1}`;
        nodes.push(`<div class="node-wrap" style="transform:translateX(${x}px)">
          ${isCur ? `<span class="bubble">${prog(u) === 0 && u === 0 ? 'ここからスタート' : 'つづきから'}</span>` : ''}
          <button class="${cls}" data-node="${u}:${s}" aria-label="${esc(unit.title)} ${label}${!open ? '（まだ開いていません）' : done ? '（クリア済み）' : ''}">${ic(icon)}</button>
        </div>`);
      }
      return `<section class="unit c-${colorOf(u)} ${locked ? 'unit-locked' : ''}" ${cur && cur.u === u ? 'id="cur-unit"' : ''}>
        <div class="unit-head">
          <div class="unit-num">${u + 1}</div>
          <div class="unit-txt"><div class="unit-title">${esc(unit.title)}</div><div class="unit-sub">${esc(unit.sub)}</div></div>
          <button class="guide-btn" data-guide="${u}">${ic('book')}ポイント</button>
        </div>
        <div class="nodes">${nodes.join('')}</div>
      </section>`;
    }).join('');
    return `<main>${goalBox()}<div class="path">${units}</div></main>`;
  }

  function viewReview() {
    const ids = Object.entries(S.missed).sort((a, b) => b[1] - a[1]);
    const list = ids.slice(0, 12).map(([id, n]) => {
      const it = findItem(id);
      if (!it) return '';
      const text = typeof it.item === 'string' ? '聞き取り：' + (GEN[it.item]().q) : it.item.q;
      return `<div class="miss-item c-${colorOf(it.u)}"><span class="dot"></span><span>${esc(text)}</span><span class="cnt">${n}回ミス</span></div>`;
    }).join('');
    const doneAny = UNITS.some((_, u) => prog(u) > 0);
    return `<main class="page">
      <h1>復習</h1>
      <p class="lead">まちがえた問題を中心に出します。復習をクリアするとハートが1つ回復します。</p>
      ${ids.length ? `<div class="miss-list">${list}</div>` : `<div class="empty-state">${ic('check')}<div>${doneAny ? 'まちがえた問題はありません。<br>クリアしたところからランダムに出します。' : 'まずは「学ぶ」でレッスンを1つクリアしよう。'}</div></div>`}
      <div class="c-blue"><button class="btn" data-review ${doneAny || ids.length ? '' : 'disabled'}>${ic('redo')}復習をはじめる</button></div>
      <div class="c-sky" style="margin-top:12px"><button class="btn ghost" data-ear>${ic('volume')}耳トレだけやる</button></div>
    </main>`;
  }

  function viewStats() {
    const lessonsDone = UNITS.reduce((a, _, u) => a + prog(u), 0);
    const acc = S.answered ? Math.round(S.correct / S.answered * 100) : 0;
    const days = [];
    let max = S.settings.goal;
    for (let i = -6; i <= 0; i++) max = Math.max(max, S.days[shiftDay(i)] || 0);
    const wd = ['日', '月', '火', '水', '木', '金', '土'];
    for (let i = -6; i <= 0; i++) {
      const d = new Date(); d.setDate(d.getDate() + i);
      const v = S.days[dayKey(d)] || 0;
      days.push(`<div class="col ${v ? '' : 'zero'} ${i === 0 ? 'today' : ''}"><em>${v || ''}</em><i style="height:${v / max * 100}%"></i><span>${i === 0 ? '今日' : wd[d.getDay()]}</span></div>`);
    }
    const kpi = (color, icon, val, label) => `<div class="kpi"><span class="ic" style="background:var(--${color})">${ic(icon)}</span><div><b>${val}</b><small>${label}</small></div></div>`;
    const units = UNITS.map((u, i) => `<div class="up-row c-${colorOf(i)}"><span class="dot"></span><span class="name">${i + 1}. ${esc(u.title)}</span><span class="pips">${[0, 1, 2, 3].map((s) => `<i class="${prog(i) > s ? 'on' : ''}"></i>`).join('')}</span></div>`).join('');
    const seg = (key, opts) => `<div class="seg">${opts.map(([v, l]) => `<button data-set="${key}" data-val="${v}" class="${String(S.settings[key]) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
    return `<main class="page">
      <h1>記録</h1>
      <p class="lead">${liveStreak() ? `${liveStreak()}日つづいています。` : '今日1レッスンやると、連続記録がはじまります。'}</p>
      <div class="kpis">
        ${kpi('orange', 'flame', liveStreak() + '日', '連続日数')}
        ${kpi('sun-dk', 'zap', S.xp, '合計XP')}
        ${kpi('mint-dk', 'check', lessonsDone + '/' + UNITS.length * STEPS, 'クリアしたレッスン')}
        ${kpi('sky-dk', 'target', acc + '%', '正解率')}
      </div>
      <section class="panel"><h3>この7日間のXP</h3><div class="chart">${days.join('')}</div></section>
      <section class="panel"><h3>ユニットの進み具合</h3><div class="units-prog">${units}</div></section>
      <section class="panel"><h3>設定</h3>
        <div class="row"><label for="vol">音量</label><input id="vol" type="range" min="0" max="1" step="0.05" value="${S.settings.vol}"></div>
        <div class="row"><label>1日の目標</label>${seg('goal', [[20, '20'], [30, '30'], [50, '50']])}</div>
        <div class="row"><label>画面</label>${seg('theme', [['auto', '自動'], ['light', '明るい'], ['dark', '暗い']])}</div>
        <div class="row"><label>音が鳴らないとき</label><span style="font-size:13px;color:var(--ink-2)">iPhoneのマナースイッチと音量を確認</span></div>
        <div class="row"><label>記録を消す</label><button class="btn ghost" style="width:auto;min-height:40px" data-reset>リセット</button></div>
      </section>
      <a class="ext" href="https://soundquest.jp/" target="_blank" rel="noopener">${ic('ext')}SoundQuest（soundquest.jp）で理論を読む</a>
    </main>`;
  }

  // ===== シート・トースト =====
  function sheet(html, cls = '') {
    closeSheet();
    const el = document.createElement('div');
    el.className = 'scrim';
    el.innerHTML = `<div class="sheet ${cls}" role="dialog" aria-modal="true">${html}</div>`;
    el.addEventListener('click', (e) => { if (e.target === el || e.target.closest('[data-close]')) closeSheet(); });
    document.body.appendChild(el);
    return el;
  }
  const closeSheet = () => document.querySelectorAll('.scrim').forEach((n) => n.remove());
  function toast(msg) {
    document.querySelectorAll('.toast').forEach((n) => n.remove());
    const t = document.createElement('div');
    t.className = 'toast'; t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 2200);
  }

  function guideSheet(u) {
    const unit = UNITS[u];
    const tips = unit.notes.map(([h, p]) => `<div class="tip"><b>${esc(h)}</b><p>${esc(p)}</p></div>`).join('');
    sheet(`<h2>${esc(unit.title)}</h2><p class="lead">${esc(unit.sub)}</p>${tips}
      <a class="ext" href="https://soundquest.jp/" target="_blank" rel="noopener">${ic('ext')}SoundQuest でくわしく読む</a>
      <button class="btn ghost" data-close>閉じる</button>`, `c-${colorOf(u)}`);
  }

  function nodeSheet(u, s) {
    if (!unlocked(u, s)) { toast('前のレッスンをクリアすると開きます'); return; }
    const unit = UNITS[u];
    const trophy = s === STEPS - 1;
    const done = prog(u) > s;
    const el = sheet(`<h2>${esc(unit.title)}　${trophy ? 'まとめテスト' : `レッスン ${s + 1} / 3`}</h2>
      <p class="lead">${trophy ? '8問。ユニット全体から出ます。クリアするとトロフィーが光ります。' : '6問。1〜2分で終わります。'}${done ? ' クリア済み（もう一度やるとXPがもらえます）。' : ''}</p>
      ${S.hearts ? `<button class="btn" data-start="${u}:${s}">${ic('play')}はじめる</button>` :
        `<div class="tip"><b>ハートがありません</b><p>あと${nextHeartMin()}分で1つ回復します。復習をクリアしてもハートが1つ戻ります。</p></div>
         <button class="btn" data-review>${ic('redo')}復習でハートを取り戻す</button>`}
      <button class="btn ghost" data-guide="${u}">${ic('book')}先にポイントを読む</button>`, `c-${colorOf(u)}`);
    bindIn(el);
  }

  // ===== 問題を作る =====
  function findItem(id) {
    const [uid, idx] = id.split(':');
    const u = UNITS.findIndex((x) => x.id === uid);
    if (u < 0) return null;
    const item = UNITS[u].pool[+idx];
    return item === undefined ? null : { u, item };
  }
  function makeQ(id) {
    const f = findItem(id);
    if (!f) return null;
    const raw = typeof f.item === 'string' ? GEN[f.item]() : f.item;
    const q = { id, u: f.u, t: raw.t, q: raw.q, ex: raw.ex || '' };
    if (raw.t === 'mcq') {
      q.o = shuffle(raw.o);
      q.a = q.o.indexOf(raw.o[0]);
    } else if (raw.t === 'listen') {
      q.o = raw.o.slice(); q.a = raw.a; q.play = raw.play; q.gap = raw.gap; q.arpPlay = raw.arpPlay;
    } else if (raw.t === 'key') {
      q.a = raw.a.slice();
    } else if (raw.t === 'order') {
      q.ans = raw.tiles.slice();
      q.tiles = shuffle(raw.tiles.concat(raw.extra || []));
    }
    return q;
  }
  const idsOf = (u) => UNITS[u].pool.map((_, i) => `${UNITS[u].id}:${i}`);

  function buildLesson(u, s) {
    const n = s === STEPS - 1 ? 8 : 6;
    let ids = shuffle(idsOf(u));
    // 3つのレッスンで問題がかたよらないよう、段ごとに先頭をずらす
    if (s < STEPS - 1) ids = ids.slice(s * 2).concat(ids.slice(0, s * 2));
    let pick = ids.slice(0, n);
    // 耳や鍵盤の問題を最低1問は入れる
    if (!pick.some((id) => { const it = findItem(id).item; return typeof it === 'string' || it.t !== 'mcq'; })) {
      const alt = ids.find((id) => { const it = findItem(id).item; return typeof it === 'string' || it.t !== 'mcq'; });
      if (alt) pick[pick.length - 1] = alt;
    }
    return { mode: 'lesson', u, s, items: shuffle(pick) };
  }
  function buildReview(earOnly) {
    const opened = UNITS.map((_, u) => u).filter((u) => prog(u) > 0 || unlocked(u, 0));
    let pool = [];
    if (earOnly) {
      opened.forEach((u) => UNITS[u].pool.forEach((it, i) => { if (typeof it === 'string') pool.push(`${UNITS[u].id}:${i}`); }));
      pool = shuffle(pool).slice(0, 6);
      while (pool.length && pool.length < 6) pool.push(pick1(pool));
    } else {
      pool = Object.entries(S.missed).sort((a, b) => b[1] - a[1]).map(([id]) => id).filter(findItem).slice(0, 8);
      const done = UNITS.map((_, u) => u).filter((u) => prog(u) > 0);
      const extra = shuffle(done.flatMap(idsOf)).filter((id) => !pool.includes(id));
      while (pool.length < 6 && extra.length) pool.push(extra.shift());
    }
    const u = pool.length ? findItem(pool[0]).u : 0;
    return { mode: earOnly ? 'ear' : 'review', u, s: -1, items: shuffle(pool) };
  }
  const pick1 = (arr) => arr[Math.floor(Math.random() * arr.length)];

  function startLesson(plan) {
    Sound.init(); // ボタンを押した瞬間に音の準備（iPhoneの決まり）
    if (!plan.items.length) { toast('出せる問題がまだありません'); return; }
    closeSheet();
    L = {
      ...plan,
      queue: plan.items.map((id) => ({ id, q: makeQ(id), retry: false })),
      total: plan.items.length, solved: 0, i: 0,
      firstTry: 0, mistakes: 0, start: Date.now(),
      sel: null, checked: false
    };
    renderLesson();
  }

  // ===== レッスン画面 =====
  function renderLesson() {
    const cur = L.queue[L.i];
    const q = cur.q;
    L.sel = q.t === 'key' ? [] : q.t === 'order' ? [] : null;
    L.checked = false;
    const color = colorOf(q.u);
    const kind = { mcq: ['help', '選んで答える'], listen: ['volume', '聞いて答える'], key: ['piano', '鍵盤で答える'], order: ['shuffle', '並べて答える'] }[q.t];
    app.innerHTML = `<div class="lesson c-${color}">
      <div class="lesson-top">
        <button class="icon-btn" data-quit aria-label="やめる">${ic('x')}</button>
        <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${L.total}" aria-valuenow="${L.solved}"><i style="width:${Math.max(4, L.solved / L.total * 100)}%"></i></div>
        ${L.mode === 'lesson' ? `<span class="stat hearts ${S.hearts ? '' : 'empty'}">${ic('heart')}${S.hearts}</span>` : ''}
      </div>
      <div class="q-area" id="qa">
        <div class="q-kind">${ic(kind[0])}${cur.retry ? 'もう一度' : kind[1]}</div>
        <div class="q-text">${esc(q.q)}</div>
        ${body(q)}
      </div>
      <div class="footer" id="ft">
        <div class="fb" id="fb"></div>
        <button class="btn" id="go" disabled>確認する</button>
      </div>
    </div>`;
    bindLesson(q);
    if (q.t === 'listen') setTimeout(() => playQ(q), 350);
  }

  function body(q) {
    if (q.t === 'mcq' || q.t === 'listen') {
      const two = q.o.every((o) => o.length <= 7) && q.o.length % 2 === 0 && q.o.length <= 4;
      const opts = q.o.map((o, i) => `<button class="opt" data-opt="${i}">${two ? '' : `<span class="k">${i + 1}</span>`}${esc(o)}</button>`).join('');
      const listen = q.t === 'listen' ? `<div class="listen"><button class="play-big" data-play aria-label="もう一度聞く">${ic('volume')}</button><button class="play-slow" data-play-slow aria-label="ゆっくり聞く">${ic('snail')}ゆっくり</button></div>` : '';
      return `${listen}<div class="opts ${two ? 'two' : ''}">${opts}</div>`;
    }
    if (q.t === 'key') {
      const whites = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76];
      const blacks = { 61: 10, 63: 20, 66: 40, 68: 50, 70: 60, 73: 80, 75: 90 };
      const w = whites.map((m) => `<button class="wkey" data-key="${m}" aria-label="${NOTE_JP[m % 12]}">${m % 12 === 0 ? 'ド' : ''}</button>`).join('');
      const b = Object.entries(blacks).map(([m, left]) => `<button class="bkey" data-key="${m}" style="left:${left}%" aria-label="${NOTE_JP[m % 12]}"></button>`).join('');
      return `<div class="piano">${w}${b}</div><p class="piano-hint">${q.a.length > 1 ? `${q.a.length}つの音を選んでね（押すと鳴ります）` : '押すと音が鳴ります'}</p>`;
    }
    if (q.t === 'order') {
      return `<div class="slot-line" id="slots" aria-label="答えの並び"></div>
        <div class="tiles">${q.tiles.map((t, i) => `<button class="tile" data-tile="${i}">${esc(t)}</button>`).join('')}</div>`;
    }
    return '';
  }

  function playQ(q, slow) {
    const btn = $('[data-play]');
    if (btn) btn.classList.add('playing');
    const ms = Sound.play(q.play, { gap: q.gap, slow, arp: q.arpPlay });
    setTimeout(() => { const b = $('[data-play]'); if (b) b.classList.remove('playing'); }, ms || 600);
  }

  function setReady(ok) { const go = $('#go'); if (go && !L.checked) go.disabled = !ok; }

  function bindLesson(q) {
    const qa = $('#qa');
    $('[data-quit]').onclick = () => {
      const el = sheet(`<h2>レッスンをやめる？</h2><p class="lead">ここまでの進み具合は保存されません。</p>
        <button class="btn" data-close>つづける</button><button class="btn ghost" data-quit-yes>やめる</button>`, `c-${colorOf(q.u)}`);
      $('[data-quit-yes]', el).onclick = () => { closeSheet(); Sound.stop(); L = null; render(); };
    };
    qa.addEventListener('click', (e) => {
      if (L.checked) return;
      const opt = e.target.closest('[data-opt]');
      const key = e.target.closest('[data-key]');
      const tile = e.target.closest('[data-tile]');
      const slot = e.target.closest('[data-slot]');
      if (e.target.closest('[data-play]')) return playQ(q);
      if (e.target.closest('[data-play-slow]')) return playQ(q, true);
      if (opt) {
        qa.querySelectorAll('.opt').forEach((n) => n.classList.remove('sel'));
        opt.classList.add('sel');
        L.sel = +opt.dataset.opt;
        setReady(true);
      } else if (key) {
        const m = +key.dataset.key;
        Sound.note(m);
        if (q.a.length > 1) {
          const at = L.sel.indexOf(m);
          if (at >= 0) L.sel.splice(at, 1); else L.sel.push(m);
        } else L.sel = [m];
        qa.querySelectorAll('[data-key]').forEach((n) => n.classList.toggle('sel', L.sel.includes(+n.dataset.key)));
        setReady(L.sel.length > 0);
      } else if (tile) {
        const i = +tile.dataset.tile;
        if (L.sel.includes(i)) return;
        L.sel.push(i);
        drawSlots(q);
      } else if (slot) {
        L.sel.splice(+slot.dataset.slot, 1);
        drawSlots(q);
      }
    });
    $('#go').onclick = () => (L.checked ? next() : check(q));
  }

  function drawSlots(q) {
    $('#slots').innerHTML = L.sel.map((ti, k) => `<button class="tile" data-slot="${k}">${esc(q.tiles[ti])}</button>`).join('');
    document.querySelectorAll('[data-tile]').forEach((n) => n.classList.toggle('used', L.sel.includes(+n.dataset.tile)));
    setReady(L.sel.length > 0);
  }

  function check(q) {
    let ok = false, answer = '';
    const qa = $('#qa');
    if (q.t === 'mcq' || q.t === 'listen') {
      ok = L.sel === q.a;
      qa.querySelectorAll('.opt').forEach((n) => {
        const i = +n.dataset.opt;
        if (i === q.a) n.classList.add('right');
        else if (i === L.sel) n.classList.add('wrong');
        n.classList.remove('sel');
      });
      answer = q.o[q.a];
    } else if (q.t === 'key') {
      const want = q.a.slice().sort().join(',');
      ok = L.sel.slice().sort().join(',') === want;
      qa.querySelectorAll('[data-key]').forEach((n) => {
        const m = +n.dataset.key;
        n.classList.remove('sel');
        if (q.a.includes(m)) n.classList.add('right');
        else if (L.sel.includes(m)) n.classList.add('miss');
      });
      Sound.play([q.a], { gap: 1 });
      answer = q.a.map((m) => NOTE_JP[m % 12]).join('・');
    } else if (q.t === 'order') {
      ok = L.sel.map((i) => q.tiles[i]).join('|') === q.ans.join('|');
      answer = q.ans.join(' → ');
    }
    qa.classList.add('locked-q');
    L.checked = true;
    S.answered++;
    const cur = L.queue[L.i];
    if (ok) {
      S.correct++;
      L.solved++;
      if (!cur.retry) L.firstTry++;
      if (L.mode !== 'lesson' && S.missed[q.id]) { S.missed[q.id]--; if (S.missed[q.id] <= 0) delete S.missed[q.id]; }
    } else {
      L.mistakes++;
      S.missed[q.id] = (S.missed[q.id] || 0) + 1;
      if (L.mode === 'lesson') S.hearts = Math.max(0, S.hearts - 1);
      if (S.hearts < MAX_HEARTS && S.hearts === MAX_HEARTS - 1) S.heartTs = Date.now();
      // まちがえた問題は最後にもう一度（新しく作り直す）
      L.queue.push({ id: q.id, q: makeQ(q.id), retry: true });
    }
    save();
    Sound.cue(ok);
    const ft = $('#ft');
    ft.classList.add(ok ? 'ok' : 'ng');
    const praise = ['正解！', 'いいね！', 'その調子！', 'ばっちり！'];
    $('#fb').innerHTML = `<span class="fb-ic">${ic(ok ? 'check' : 'x')}</span><div>
      <div class="fb-t">${ok ? praise[Math.floor(Math.random() * praise.length)] : 'おしい！'}</div>
      ${ok ? '' : `<div class="fb-ans">正解：${esc(answer)}</div>`}
      ${q.ex ? `<div class="fb-ex">${esc(q.ex)}</div>` : ''}</div>`;
    const go = $('#go');
    go.disabled = false;
    go.textContent = 'つづける';
    go.className = 'btn ' + (ok ? 'ok' : 'ng');
    const bar = $('.bar i'); if (bar) bar.style.width = Math.max(4, L.solved / L.total * 100) + '%';
    const h = $('.lesson-top .hearts'); if (h) { h.innerHTML = ic('heart') + S.hearts; h.classList.toggle('empty', !S.hearts); }
    go.focus();
  }

  function next() {
    Sound.stop();
    if (L.mode === 'lesson' && S.hearts <= 0 && L.solved < L.total) {
      const u = L.u;
      L = null;
      render();
      const el = sheet(`<h2>ハートがなくなりました</h2><p class="lead">あと${nextHeartMin()}分で1つ回復します。復習をクリアするとすぐに1つ戻ります。</p>
        <button class="btn" data-review>${ic('redo')}復習でハートを取り戻す</button><button class="btn ghost" data-close>あとでやる</button>`, `c-${colorOf(u)}`);
      bindIn(el);
      return;
    }
    L.i++;
    if (L.i >= L.queue.length) return finish();
    renderLesson();
  }

  function finish() {
    const perfect = L.mistakes === 0;
    let xp = L.mode === 'lesson' ? (L.s === STEPS - 1 ? 20 : 10) : 8;
    if (perfect) xp += 5;
    const today = dayKey();
    if (S.lastDay !== today) {
      S.streak = S.lastDay === shiftDay(-1) ? S.streak + 1 : 1;
      S.lastDay = today;
    }
    const before = todayXp();
    S.xp += xp;
    S.days[today] = before + xp;
    S.lessons++;
    let unitDone = false;
    if (L.mode === 'lesson') {
      const id = UNITS[L.u].id;
      if ((S.progress[id] || 0) === L.s) {
        S.progress[id] = L.s + 1;
        unitDone = L.s + 1 === STEPS;
      }
    } else if (S.hearts < MAX_HEARTS) {
      S.hearts++;
      if (S.hearts >= MAX_HEARTS) S.heartTs = Date.now();
    }
    save();
    const sec = Math.round((Date.now() - L.start) / 1000);
    const acc = Math.round(L.firstTry / L.total * 100);
    const goalJust = before < S.settings.goal && before + xp >= S.settings.goal;
    const color = colorOf(L.u);
    const title = unitDone ? 'ユニットクリア' : perfect ? 'ノーミスでクリア' : L.mode === 'lesson' ? 'レッスンクリア' : '復習おわり';
    const sub = unitDone ? `「${UNITS[L.u].title}」のトロフィーが光りました。`
      : goalJust ? '今日の目標を達成しました。'
      : L.mode !== 'lesson' ? 'ハートが1つ回復しました。'
      : `連続${S.streak}日目。`;
    app.innerHTML = `<div class="result c-${color}">
      <div class="medal ${perfect || unitDone ? 'foil' : 'plain'}">${ic(unitDone ? 'trophy' : perfect ? 'star' : 'music')}</div>
      <h1>${title}</h1>
      <p class="lead">${esc(sub)}</p>
      <div class="scores">
        <div class="score s-xp"><small>獲得XP</small><b>+${xp}</b></div>
        <div class="score s-acc"><small>一発正解</small><b>${acc}%</b></div>
        <div class="score s-time"><small>かかった時間</small><b>${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}</b></div>
      </div>
      <div class="spacer"></div>
      <button class="btn" id="done">つづける</button>
    </div>`;
    Sound.play([[72, 76, 79], [74, 77, 81], [76, 79, 84]], { gap: 0.14 });
    $('#done').onclick = () => { L = null; tab = 'learn'; render(); scrollToCurrent(); };
    $('#done').focus();
  }

  // ===== ボタンのつなぎこみ =====
  function bindIn(root) {
    root.querySelectorAll('[data-start]').forEach((b) => b.onclick = () => {
      const [u, s] = b.dataset.start.split(':').map(Number);
      startLesson(buildLesson(u, s));
    });
    root.querySelectorAll('[data-review]').forEach((b) => b.onclick = () => startLesson(buildReview(false)));
    root.querySelectorAll('[data-guide]').forEach((b) => b.onclick = () => guideSheet(+b.dataset.guide));
  }

  function bindCommon() {
    bindIn(app);
    app.querySelectorAll('[data-tab]').forEach((b) => b.onclick = () => { tab = b.dataset.tab; render(); window.scrollTo(0, 0); if (tab === 'learn') scrollToCurrent(); });
    app.querySelectorAll('[data-node]').forEach((b) => b.onclick = () => { const [u, s] = b.dataset.node.split(':').map(Number); nodeSheet(u, s); });
    const ear = $('[data-ear]', app); if (ear) ear.onclick = () => startLesson(buildReview(true));
    const vol = $('#vol', app);
    if (vol) {
      vol.oninput = () => { S.settings.vol = +vol.value; Sound.setVolume(S.settings.vol); save(); };
      vol.onchange = () => Sound.note(67);
    }
    app.querySelectorAll('[data-set]').forEach((b) => b.onclick = () => {
      const k = b.dataset.set;
      S.settings[k] = k === 'goal' ? +b.dataset.val : b.dataset.val;
      save(); applyTheme(); render();
    });
    const rs = $('[data-reset]', app);
    if (rs) rs.onclick = () => {
      const el = sheet(`<h2>記録をすべて消しますか？</h2><p class="lead">XP・連続日数・進み具合がすべて0にもどります。元にはもどせません。</p>
        <div class="c-coral"><button class="btn" data-reset-yes>すべて消す</button></div><button class="btn ghost" data-close>やめる</button>`);
      $('[data-reset-yes]', el).onclick = () => { const st = S.settings; S = fresh(); S.settings = st; save(); closeSheet(); render(); toast('記録を消しました'); };
    };
  }

  function scrollToCurrent() {
    requestAnimationFrame(() => {
      const n = document.querySelector('.node.current');
      if (n) n.scrollIntoView({ block: 'center', behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
    });
  }

  // ハートの回復をときどき確認
  setInterval(() => {
    if (L) return;
    const before = S.hearts;
    regenHearts();
    if (S.hearts !== before) render();
  }, 30000);

  render();
  if (prog(0) > 0) scrollToCurrent();

  // ホーム画面に追加したときにオフラインでも開けるように
  if ('serviceWorker' in navigator && location.protocol.startsWith('http') && window.top === window.self) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
