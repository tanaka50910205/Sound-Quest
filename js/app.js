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
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    redo: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    list: '<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    piano: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 4v10"/><path d="M10 4v10"/><path d="M14 4v10"/><path d="M18 4v10"/><path d="M8 14v6"/><path d="M12 14v6"/><path d="M16 14v6"/>',
    snail: '<path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"/><circle cx="10" cy="13" r="8"/><path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"/><path d="M18 3 19.1 5.2"/><path d="M22 3 20.9 5.2"/>',
    compass: '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    drum: '<path d="m2 2 8 8"/><path d="m22 2-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9"/><path d="M12 14v8"/><path d="M17 13.4v7.9"/><path d="M2 9v8a10 5 0 0 0 20 0V9"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    flag: '<path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    shuffle: '<path d="m18 14 4 4-4 4"/><path d="m18 2 4 4-4 4"/><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-7.6a4 4 0 0 1 3.3-1.7H22"/><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"/><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"/>'
  };
  const ic = (name, cls = '') => `<svg class="i ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICON[name]}</svg>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const $ = (sel, root = document) => root.querySelector(sel);

  // ===== 保存 =====
  const KEY = 'otomichi.v2';
  const MAX_HEARTS = 5;
  const HEART_MS = 20 * 60 * 1000; // 20分で1つ回復
  const STEPS = 3;                 // 1ユニット＝レッスン3つ
  const GATE_Q = 10;               // ゲートウェイの問題数

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

  // ===== 道の進み具合 =====
  const unitOf = (id) => UNITS.find((u) => u.id === id);
  const unitIndex = (id) => UNITS.findIndex((u) => u.id === id);
  const prog = (id) => S.progress[id] || 0;
  const need = (it) => (it.kind === 'gate' ? 1 : STEPS);
  const isDone = (it) => prog(it.id) >= need(it);
  const isOpen = (it) => { for (const p of PATH) { if (p === it) return true; if (!isDone(p)) return false; } return false; };
  const currentItem = () => PATH.find((p) => !isDone(p)) || null;
  // 準備編の何番目か（バッジの番号）
  const numInBook = (it) => PATH.filter((p) => p.book === it.book && p.kind === 'unit').findIndex((p) => p.id === it.id) + 1;
  const badge = (it, inner) => {
    const b = BOOKS[it.book];
    if (inner) return `<span class="badge">${inner}</span>`;
    return `<span class="badge"><small>${b.letter}</small><b>${numInBook(it)}</b></span>`;
  };

  // ===== 画面の切り替え =====
  const app = $('#app');
  let tab = 'learn';
  let L = null; // 進行中のレッスン

  function render() {
    regenHearts();
    if (L) return renderLesson();
    const views = { learn: viewLearn, review: viewReview, stats: viewStats };
    app.innerHTML = topbar() + views[tab]() + tabbar();
    bindCommon();
  }

  function logo() {
    const cols = ['#6F564A', '#EA5506', '#2CA9E1', '#F8B500', '#808F7C'];
    const bars = cols.map((c, i) => `<rect x="${3 + i * 5}" y="${23 - (i + 2) * 3.4}" width="3.4" height="${(i + 2) * 3.4}" rx="1.7" fill="${c}"/>`).join('');
    return `<svg class="brand-mark" viewBox="0 0 30 28" aria-hidden="true">${bars}</svg>`;
  }
  function topbar() {
    const st = liveStreak();
    return `<header class="topbar">
      <div class="brand">${logo()}<div><div class="brand-t">おとみち</div><div class="brand-s">自由派音楽理論のドリル</div></div></div>
      <span class="stat streak ${st && S.lastDay === dayKey() ? 'on' : ''}" aria-label="連続${st}日">${ic('flame')}<span class="num">${st}</span></span>
      <span class="stat xp" aria-label="合計${S.xp}XP">${ic('zap')}<span class="num">${S.xp}</span></span>
      <span class="stat hearts ${S.hearts ? '' : 'zero'}" aria-label="ハート${S.hearts}">${ic('heart')}<span class="num">${S.hearts}</span></span>
    </header>`;
  }
  function tabbar() {
    const t = (id, icon, label) => `<button class="tab ${tab === id ? 'on' : ''}" data-tab="${id}">${ic(icon)}${label}</button>`;
    return `<nav class="tabbar">${t('learn', 'list', '目次')}${t('review', 'redo', '復習')}${t('stats', 'chart', '記録')}</nav>`;
  }

  function goalBox() {
    const g = S.settings.goal, x = todayXp();
    const r = 18, len = 2 * Math.PI * r, p = Math.min(1, x / g);
    const week = [];
    for (let i = -6; i <= 0; i++) {
      const v = S.days[shiftDay(i)] || 0;
      week.push(`<span class="${i === 0 ? 'today' : ''}"><i style="height:${Math.min(100, v / g * 100)}%"></i></span>`);
    }
    return `<section class="goal">
      <svg class="ring" viewBox="0 0 44 44" aria-hidden="true"><circle class="bg" cx="22" cy="22" r="${r}"/><circle class="fg" cx="22" cy="22" r="${r}" stroke-dasharray="${len}" stroke-dashoffset="${len * (1 - p)}"/></svg>
      <div><div class="goal-t">${x >= g ? '今日の目標を達成' : '今日の目標'}</div><div class="goal-s"><span class="num">${x} / ${g}</span> XP</div></div>
      <div class="week" aria-label="この7日間">${week.join('')}</div>
    </section>`;
  }

  function viewLearn() {
    const cur = currentItem();
    const books = Object.keys(BOOKS).map((bk) => {
      const b = BOOKS[bk];
      const items = PATH.filter((p) => p.book === bk);
      const rows = items.map((it, k) => {
        const open = isOpen(it), done = isDone(it), isCur = cur === it;
        const p = prog(it.id);
        const cls = ['item', it.kind === 'gate' && 'gate', done && 'done', !open && 'locked'].filter(Boolean).join(' ');
        let title, desc, bdg, state;
        if (it.kind === 'gate') {
          title = 'ゲートウェイ';
          desc = `${b.name}の内容をきちんと理解できているかを確かめるテスト場。${GATE_Q}問。`;
          bdg = done ? `<span class="badge foil">${ic('flag')}</span>` : badge(it, ic(open ? 'flag' : 'lock'));
          state = done ? '通過' : '';
        } else {
          const u = unitOf(it.id);
          title = u.title; desc = u.sub;
          bdg = open ? badge(it) : badge(it, ic('lock'));
          state = done ? 'クリア' : '';
        }
        const pips = it.kind === 'unit' ? `<div class="pips">${[0, 1, 2].map((s) => `<i class="${p > s ? 'on' : ''}"></i>`).join('')}<span>${done ? '3 / 3' : `${p} / 3`}</span></div>` : '';
        const cta = isCur && open ? `<div class="item-cta"><button class="btn sm" data-go="${it.id}">${ic('play')}${it.kind === 'gate' ? 'ゲートウェイに挑む' : p ? 'つづきから' : 'はじめる'}</button></div>` : '';
        return `<div class="${cls}" ${isCur ? 'id="cur"' : ''}>
          <button class="item-row" data-item="${it.id}" aria-label="${esc(title)}${!open ? '（まだ開いていません）' : ''}">${bdg}<span class="item-title">${esc(title)}</span><span class="item-state">${state}</span></button>
          <div class="item-box">${esc(desc)}${pips}${cta}</div>
        </div>${k < items.length - 1 ? `<div class="chev">${ic('chev')}</div>` : ''}`;
      }).join('');
      return `<section class="book b-${b.color}">
        <div class="book-head"><span class="book-ic">${ic(b.icon)}</span><span class="book-name">${b.name}</span></div>
        <p class="book-desc">${esc(b.desc)}</p>
        ${rows}
      </section>`;
    }).join('');
    return `<main>${goalBox()}<div class="path">${books}</div></main>`;
  }

  function viewReview() {
    const ids = Object.entries(S.missed).filter(([id]) => findItem(id)).sort((a, b) => b[1] - a[1]);
    const list = ids.slice(0, 12).map(([id, n]) => {
      const f = findItem(id);
      const text = typeof f.item === 'string' ? '聞き取り：' + GEN[f.item]().q : f.item.q;
      const it = PATH.find((p) => p.id === UNITS[f.u].id);
      return `<div class="miss-item b-${BOOKS[UNITS[f.u].book].color}"><span class="badge"><b>${numInBook(it)}</b></span><span>${esc(text)}</span><span class="cnt">${n}回ミス</span></div>`;
    }).join('');
    const doneAny = UNITS.some((u) => prog(u.id) > 0);
    return `<main class="page b-prep">
      <div class="page-head"><h1>復習</h1></div>
      <p class="lead">まちがえた問題を中心に出します。復習を終えるとハートが1つ回復します。</p>
      ${ids.length ? `<div class="miss-list">${list}</div>` : `<div class="empty-state">${ic('check')}<div>${doneAny ? 'まちがえた問題はありません。<br>クリアしたところから出します。' : 'まずは目次から、レッスンをひとつ進めてみましょう。'}</div></div>`}
      <button class="btn" data-review ${doneAny || ids.length ? '' : 'disabled'}>${ic('redo')}復習をはじめる</button>
      <div class="b-melody" style="margin-top:12px"><button class="btn ghost" data-ear>${ic('volume')}聞き取りだけやる</button></div>
    </main>`;
  }

  function viewStats() {
    const lessonsDone = UNITS.reduce((a, u) => a + Math.min(STEPS, prog(u.id)), 0);
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
    const kpi = (color, icon, val, label) => `<div class="kpi"><span style="color:var(--${color})">${ic(icon)}</span><div><b>${val}</b><small>${label}</small></div></div>`;
    const units = PATH.filter((p) => p.kind === 'unit').map((it) => {
      const u = unitOf(it.id);
      return `<div class="up-row b-${BOOKS[it.book].color}"><span class="badge"><b>${numInBook(it)}</b></span><span class="name">${esc(u.title)}</span><span class="pips">${[0, 1, 2].map((s) => `<i class="${prog(it.id) > s ? 'on' : ''}"></i>`).join('')}</span></div>`;
    }).join('');
    const seg = (key, opts) => `<div class="seg">${opts.map(([v, l]) => `<button data-set="${key}" data-val="${v}" class="${String(S.settings[key]) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
    return `<main class="page">
      <div class="page-head"><h1>記録</h1></div>
      <p class="lead">${liveStreak() ? `${liveStreak()}日つづいています。` : '今日ひとつ進めると、連続記録がはじまります。'}</p>
      <div class="kpis">
        ${kpi('prep', 'flame', liveStreak() + '日', '連続日数')}
        ${kpi('chord-dk', 'zap', S.xp, '合計XP')}
        ${kpi('melody', 'check', lessonsDone + '/' + UNITS.length * STEPS, 'クリアしたレッスン')}
        ${kpi('rhythm', 'target', acc + '%', '正解率')}
      </div>
      <section class="panel"><h3>この7日間のXP</h3><div class="chart">${days.join('')}</div></section>
      <section class="panel"><h3>ユニットの進み具合</h3><div class="units-prog">${units}</div></section>
      <section class="panel"><h3>設定</h3>
        <div class="row"><label for="vol">音量</label><input id="vol" type="range" min="0" max="1" step="0.05" value="${S.settings.vol}"></div>
        <div class="row"><label>1日の目標</label>${seg('goal', [[20, '20'], [30, '30'], [50, '50']])}</div>
        <div class="row"><label>画面</label>${seg('theme', [['auto', '自動'], ['light', '明るい'], ['dark', '暗い']])}</div>
        <div class="row"><label>音が鳴らないとき</label><span style="font-size:12px;color:var(--ink-2)">マナースイッチと音量を確認</span></div>
        <div class="row"><label>記録を消す</label><button class="btn ghost sm" data-reset>リセット</button></div>
      </section>
      <p class="credit">内容の並びと用語は <a href="https://soundquest.jp/" target="_blank" rel="noopener">SoundQuest</a>（©yuta yoshimatsu）の<br>「自由派音楽理論」に沿っています。くわしい解説と音源は本家で。</p>
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
    bindIn(el);
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

  function heartsBlock() {
    return `<div class="tip"><b>ハートがありません</b><p>あと${nextHeartMin()}分で1つ回復します。復習を終えてもハートが1つ戻ります。</p></div>
      <button class="btn" data-review>${ic('redo')}復習でハートを取り戻す</button>`;
  }

  function itemSheet(id) {
    const it = PATH.find((p) => p.id === id);
    if (!isOpen(it)) { toast('前の項目をクリアすると開きます'); return; }
    const b = BOOKS[it.book];
    if (it.kind === 'gate') {
      sheet(`<div class="sheet-top">${badge(it, ic('flag'))}<h2>${b.name}　ゲートウェイ</h2></div>
        <p class="lead">${b.name}のユニット全体から${GATE_Q}問。ここを通過してから先へ進むと安心です。${isDone(it) ? '（通過済み）' : ''}</p>
        ${S.hearts ? `<button class="btn" data-gate="${it.id}">${ic('flag')}ゲートウェイに挑む</button>` : heartsBlock()}
        <button class="btn ghost" data-close>閉じる</button>`, `b-${b.color}`);
      return;
    }
    const u = unitOf(id), p = prog(id);
    const names = ['レッスン1', 'レッスン2', 'レッスン3'];
    const steps = names.map((n, s) => {
      const done = p > s, open = p >= s;
      return `<div class="step ${done ? 'done' : ''} ${open ? '' : 'locked'}">
        <span class="dot">${done ? ic('check') : s + 1}</span>
        <span class="step-t">${n}<small>6問　${done ? 'クリア済み' : open ? 'つぎはここ' : ''}</small></span>
        ${open && S.hearts ? `<button class="btn sm ${done ? 'ghost' : ''}" data-start="${id}:${s}">${done ? 'もう一度' : 'はじめる'}</button>` : ''}
      </div>`;
    }).join('');
    const tips = u.notes.map(([h, t]) => `<div class="tip"><b>${esc(h)}</b><p>${esc(t)}</p></div>`).join('');
    const links = u.links.map(([t, url]) => `<a class="ext" href="${url}" target="_blank" rel="noopener">${ic('book')}<span>${esc(t)}</span><em>SoundQuest</em></a>`).join('');
    sheet(`<div class="sheet-top">${badge(it)}<h2>${esc(u.title)}</h2></div>
      <p class="lead">${esc(u.sub)}</p>
      ${S.hearts ? '' : heartsBlock()}
      <div class="steps">${steps}</div>
      <div class="sec-label">ポイント</div>${tips}
      <div class="sec-label">記事を読む</div><div class="links">${links}</div>
      <div style="height:16px"></div><button class="btn ghost" data-close>閉じる</button>`, `b-${b.color}`);
  }

  // ===== 問題を作る =====
  function findItem(id) {
    const [uid, idx] = id.split(':');
    const u = unitIndex(uid);
    if (u < 0) return null;
    const item = UNITS[u].pool[+idx];
    return item === undefined ? null : { u, item };
  }
  function makeQ(id) {
    const f = findItem(id);
    if (!f) return null;
    const raw = typeof f.item === 'string' ? GEN[f.item]() : f.item;
    const q = { id, u: f.u, book: UNITS[f.u].book, t: raw.t, q: raw.q, ex: raw.ex || '' };
    if (raw.t === 'mcq') {
      q.o = shuffle(raw.o);
      q.a = q.o.indexOf(raw.o[0]);
    } else if (raw.t === 'listen') {
      Object.assign(q, { o: raw.o.slice(), a: raw.a, play: raw.play, gap: raw.gap, beat: raw.beat, sec: raw.sec });
    } else if (raw.t === 'key') {
      q.a = raw.a.slice();
    } else if (raw.t === 'order') {
      q.ans = raw.tiles.slice();
      q.tiles = shuffle(raw.tiles.concat(raw.extra || []));
    }
    return q;
  }
  const idsOf = (u) => UNITS[u].pool.map((_, i) => `${UNITS[u].id}:${i}`);
  const notMcq = (id) => { const it = findItem(id).item; return typeof it === 'string' || it.t !== 'mcq'; };

  function buildLesson(uid, s) {
    const u = unitIndex(uid);
    let ids = shuffle(idsOf(u));
    ids = ids.slice(s * 2).concat(ids.slice(0, s * 2));
    const pick = ids.slice(0, 6);
    if (!pick.some(notMcq)) { const alt = ids.find(notMcq); if (alt) pick[5] = alt; }
    return { mode: 'lesson', id: uid, s, book: UNITS[u].book, items: shuffle(pick) };
  }
  function buildGate(gid) {
    const it = PATH.find((p) => p.id === gid);
    const us = UNITS.map((u, i) => i).filter((i) => UNITS[i].book === it.book);
    const all = shuffle(us.flatMap(idsOf));
    return { mode: 'gate', id: gid, s: 0, book: it.book, items: all.slice(0, GATE_Q) };
  }
  function buildReview(earOnly) {
    const opened = UNITS.map((_, i) => i).filter((i) => isOpen(PATH.find((p) => p.id === UNITS[i].id)));
    let pool = [];
    if (earOnly) {
      opened.forEach((u) => UNITS[u].pool.forEach((it, i) => { if (typeof it === 'string') pool.push(`${UNITS[u].id}:${i}`); }));
      pool = shuffle(pool);
      const base = pool.slice();
      while (base.length && pool.length < 6) pool.push(base[pool.length % base.length]);
      pool = pool.slice(0, 6);
    } else {
      pool = Object.entries(S.missed).sort((a, b) => b[1] - a[1]).map(([id]) => id).filter(findItem).slice(0, 8);
      const done = UNITS.map((_, i) => i).filter((i) => prog(UNITS[i].id) > 0);
      const extra = shuffle(done.flatMap(idsOf)).filter((id) => !pool.includes(id));
      while (pool.length < 6 && extra.length) pool.push(extra.shift());
    }
    const book = pool.length ? UNITS[findItem(pool[0]).u].book : 'prep';
    return { mode: earOnly ? 'ear' : 'review', id: null, s: -1, book, items: shuffle(pool) };
  }

  function startLesson(plan) {
    Sound.init(); // ボタンを押した瞬間に音の準備（iPhoneの決まり）
    if (!plan.items.length) { toast('出せる問題がまだありません'); return; }
    closeSheet();
    L = {
      ...plan,
      queue: plan.items.map((id) => ({ id, q: makeQ(id), retry: false })),
      total: plan.items.length, solved: 0, i: 0,
      firstTry: 0, mistakes: 0, start: Date.now(), sel: null, checked: false
    };
    renderLesson();
  }

  // ===== レッスン画面 =====
  const usesHearts = () => L.mode === 'lesson' || L.mode === 'gate';

  function renderLesson() {
    const cur = L.queue[L.i];
    const q = cur.q;
    L.sel = (q.t === 'key' || q.t === 'order') ? [] : null;
    L.checked = false;
    const b = BOOKS[q.book];
    const it = PATH.find((p) => p.id === UNITS[q.u].id);
    const kind = { mcq: '選んで答える', listen: '聴いて答える', key: '鍵盤で答える', order: '並べて答える' }[q.t];
    app.innerHTML = `<div class="lesson b-${BOOKS[L.book].color}">
      <div class="lesson-top">
        <button class="icon-btn" data-quit aria-label="やめる">${ic('x')}</button>
        <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${L.total}" aria-valuenow="${L.solved}"><i style="width:${Math.max(3, L.solved / L.total * 100)}%"></i></div>
        ${usesHearts() ? `<span class="stat hearts ${S.hearts ? '' : 'zero'}">${ic('heart')}<span class="num">${S.hearts}</span></span>` : ''}
      </div>
      <div class="q-area b-${b.color}" id="qa">
        <div class="q-meta"><span class="badge"><b>${numInBook(it)}</b></span>${esc(UNITS[q.u].title)}　·　${cur.retry ? 'もう一度' : kind}</div>
        <div class="q-text">${esc(q.q)}</div>
        ${body(q)}
      </div>
      <div class="footer" id="ft"><div class="fb" id="fb"></div><button class="btn" id="go" disabled>確認する</button></div>
    </div>`;
    bindLesson(q);
    if (q.t === 'listen') setTimeout(() => playQ(q), 350);
  }

  function body(q) {
    if (q.t === 'mcq' || q.t === 'listen') {
      const two = q.o.every((o) => o.length <= 8) && q.o.length % 2 === 0 && q.o.length <= 4;
      const opts = q.o.map((o, i) => `<button class="opt" data-opt="${i}">${two ? '' : `<span class="k">${i + 1}</span>`}${esc(o)}</button>`).join('');
      const bars = Array.from({ length: 28 }, (_, i) => `<i style="height:${30 + Math.round(Math.abs(Math.sin(i * 1.7) * 60 + Math.sin(i * .6) * 10))}%"></i>`).join('');
      const player = q.t === 'listen' ? `<div class="player"><button class="play-btn" data-play aria-label="もう一度聴く">${ic('play')}</button><div class="wave" aria-hidden="true">${bars}</div><button class="slow-btn" data-play-slow aria-label="ゆっくり聴く">${ic('snail')}ゆっくり</button></div>` : '';
      return `${player}<div class="opts ${two ? 'two' : ''}">${opts}</div>`;
    }
    if (q.t === 'key') {
      const whites = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76];
      const blacks = { 61: 10, 63: 20, 66: 40, 68: 50, 70: 60, 73: 80, 75: 90 };
      const w = whites.map((m) => `<button class="wkey" data-key="${m}" aria-label="${NOTE_JP[m % 12]}">${m % 12 === 0 ? 'C' : ''}</button>`).join('');
      const bl = Object.entries(blacks).map(([m, left]) => `<button class="bkey" data-key="${m}" style="left:${left}%" aria-label="${NOTE_JP[m % 12]}"></button>`).join('');
      return `<div class="piano">${w}${bl}</div><p class="piano-hint">${q.a.length > 1 ? `${q.a.length}つの音を選んでください（押すと鳴ります）` : '押すと音が鳴ります'}</p>`;
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
    const ms = q.beat ? Sound.beat(q.beat, q.sec, { slow }) : Sound.play(q.play, { gap: q.gap, slow });
    setTimeout(() => { const b = $('[data-play]'); if (b) b.classList.remove('playing'); }, ms || 600);
  }

  function setReady(ok) { const go = $('#go'); if (go && !L.checked) go.disabled = !ok; }

  function bindLesson(q) {
    const qa = $('#qa');
    $('[data-quit]').onclick = () => {
      const el = sheet(`<h2>レッスンをやめますか？</h2><p class="lead" style="margin-left:0">ここまでの進み具合は保存されません。</p>
        <button class="btn" data-close>つづける</button><button class="btn ghost" data-quit-yes>やめる</button>`, `b-${BOOKS[L.book].color}`);
      $('[data-quit-yes]', el).onclick = () => { closeSheet(); Sound.stop(); L = null; render(); };
    };
    qa.addEventListener('click', (e) => {
      if (L.checked) return;
      if (e.target.closest('[data-play]')) return playQ(q);
      if (e.target.closest('[data-play-slow]')) return playQ(q, true);
      const opt = e.target.closest('[data-opt]');
      const key = e.target.closest('[data-key]');
      const tile = e.target.closest('[data-tile]');
      const slot = e.target.closest('[data-slot]');
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
        if (!L.sel.includes(i)) { L.sel.push(i); drawSlots(q); }
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
        n.classList.remove('sel');
        if (i === q.a) n.classList.add('right'); else if (i === L.sel) n.classList.add('wrong');
      });
      answer = q.o[q.a];
    } else if (q.t === 'key') {
      ok = L.sel.slice().sort().join(',') === q.a.slice().sort().join(',');
      qa.querySelectorAll('[data-key]').forEach((n) => {
        const m = +n.dataset.key;
        n.classList.remove('sel');
        if (q.a.includes(m)) n.classList.add('right'); else if (L.sel.includes(m)) n.classList.add('miss');
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
      if (!usesHearts() && S.missed[q.id]) { S.missed[q.id]--; if (S.missed[q.id] <= 0) delete S.missed[q.id]; }
    } else {
      L.mistakes++;
      S.missed[q.id] = (S.missed[q.id] || 0) + 1;
      if (usesHearts()) {
        if (S.hearts === MAX_HEARTS) S.heartTs = Date.now();
        S.hearts = Math.max(0, S.hearts - 1);
      }
      L.queue.push({ id: q.id, q: makeQ(q.id), retry: true }); // まちがえた問題は最後にもう一度
    }
    save();
    Sound.cue(ok);
    $('#ft').classList.add(ok ? 'ok' : 'ng');
    const praise = ['正解です', 'いいですね', 'その調子', 'ばっちり'];
    $('#fb').innerHTML = `<div class="fb-head">${ic(ok ? 'check' : 'x')}${ok ? praise[Math.floor(Math.random() * praise.length)] : 'おしい'}</div>
      ${ok ? '' : `<div class="fb-ans">正解：${esc(answer)}</div>`}
      ${q.ex ? `<div class="check"><b>Check Point</b>${esc(q.ex)}</div>` : ''}`;
    const go = $('#go');
    go.disabled = false;
    go.textContent = 'つづける';
    go.className = 'btn ' + (ok ? 'ok' : 'ng');
    const bar = $('.bar i'); if (bar) bar.style.width = Math.max(3, L.solved / L.total * 100) + '%';
    const h = $('.lesson-top .hearts'); if (h) { h.innerHTML = ic('heart') + `<span class="num">${S.hearts}</span>`; h.classList.toggle('zero', !S.hearts); }
    go.focus();
  }

  function next() {
    Sound.stop();
    if (usesHearts() && S.hearts <= 0 && L.solved < L.total) {
      const book = L.book;
      L = null;
      render();
      sheet(`<h2>ハートがなくなりました</h2><p class="lead" style="margin-left:0">あと${nextHeartMin()}分で1つ回復します。復習を終えるとすぐに1つ戻ります。</p>
        <button class="btn" data-review>${ic('redo')}復習でハートを取り戻す</button><button class="btn ghost" data-close>あとでやる</button>`, `b-${BOOKS[book].color}`);
      return;
    }
    L.i++;
    if (L.i >= L.queue.length) return finish();
    renderLesson();
  }

  function finish() {
    const perfect = L.mistakes === 0;
    let xp = L.mode === 'gate' ? 25 : L.mode === 'lesson' ? 10 : 8;
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
    let unitDone = false, gatePassed = false;
    if (L.mode === 'lesson') {
      if (prog(L.id) === L.s) { S.progress[L.id] = L.s + 1; unitDone = L.s + 1 === STEPS; }
    } else if (L.mode === 'gate') {
      gatePassed = !isDone(PATH.find((p) => p.id === L.id));
      S.progress[L.id] = 1;
    } else if (S.hearts < MAX_HEARTS) {
      S.hearts++;
      if (S.hearts >= MAX_HEARTS) S.heartTs = Date.now();
    }
    save();
    const sec = Math.round((Date.now() - L.start) / 1000);
    const acc = Math.round(L.firstTry / L.total * 100);
    const goalJust = before < S.settings.goal && before + xp >= S.settings.goal;
    const b = BOOKS[L.book];
    const u = L.id && L.mode === 'lesson' ? unitOf(L.id) : null;
    const title = L.mode === 'gate' ? `${b.name}のゲートウェイを通過` : unitDone ? `「${u.title}」をクリア` : L.mode === 'lesson' ? `レッスン${L.s + 1}をクリア` : '復習おわり';
    const sub = goalJust ? '今日の目標を達成しました。'
      : L.mode === 'review' || L.mode === 'ear' ? 'ハートが1つ回復しました。'
      : perfect ? 'ノーミスでした。' : `連続${S.streak}日目。`;
    const matome = unitDone ? `<div class="matome"><b>まとめ</b><ul>${u.notes.map(([h]) => `<li>${esc(h)}</li>`).join('')}</ul></div>` : '';
    app.innerHTML = `<div class="result b-${b.color}">
      <div class="medal ${L.mode === 'gate' ? 'foil' : ''}">${ic(L.mode === 'gate' ? 'flag' : unitDone ? 'check' : 'music')}</div>
      <h1>${esc(title)}</h1>
      <p class="lead">${esc(sub)}</p>
      <div class="scores">
        <div class="score s-xp"><small>獲得XP</small><b>+${xp}</b></div>
        <div class="score"><small>一発正解</small><b>${acc}%</b></div>
        <div class="score"><small>かかった時間</small><b>${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}</b></div>
      </div>
      ${matome}
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
      const [id, s] = b.dataset.start.split(':');
      startLesson(buildLesson(id, +s));
    });
    root.querySelectorAll('[data-gate]').forEach((b) => b.onclick = () => startLesson(buildGate(b.dataset.gate)));
    root.querySelectorAll('[data-review]').forEach((b) => b.onclick = () => startLesson(buildReview(false)));
  }

  function bindCommon() {
    bindIn(app);
    app.querySelectorAll('[data-tab]').forEach((b) => b.onclick = () => { tab = b.dataset.tab; render(); window.scrollTo(0, 0); if (tab === 'learn') scrollToCurrent(); });
    app.querySelectorAll('[data-item]').forEach((b) => b.onclick = () => itemSheet(b.dataset.item));
    app.querySelectorAll('[data-go]').forEach((b) => b.onclick = () => {
      const it = PATH.find((p) => p.id === b.dataset.go);
      if (!S.hearts) return itemSheet(it.id);
      if (it.kind === 'gate') startLesson(buildGate(it.id));
      else startLesson(buildLesson(it.id, prog(it.id)));
    });
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
      const el = sheet(`<h2>記録をすべて消しますか？</h2><p class="lead" style="margin-left:0">XP・連続日数・進み具合がすべて0にもどります。元にはもどせません。</p>
        <button class="btn ng" data-reset-yes>すべて消す</button><button class="btn ghost" data-close>やめる</button>`);
      $('[data-reset-yes]', el).onclick = () => { const st = S.settings; S = fresh(); S.settings = st; save(); closeSheet(); render(); toast('記録を消しました'); };
    };
  }

  function scrollToCurrent() {
    requestAnimationFrame(() => { const n = $('#cur'); if (n) n.scrollIntoView({ block: 'center' }); });
  }

  // ハートの回復をときどき確認
  setInterval(() => {
    if (L || document.querySelector('.scrim')) return;
    const before = S.hearts;
    regenHearts();
    if (S.hearts !== before) render();
  }, 30000);

  render();
  if (PATH.some((p) => prog(p.id) > 0)) scrollToCurrent();

  // ホーム画面に追加したときにオフラインでも開けるように
  if ('serviceWorker' in navigator && location.protocol.startsWith('http') && window.top === window.self) {
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
