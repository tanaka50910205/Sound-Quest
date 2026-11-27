// おとみち — 画面と動き（見た目は SoundQuest のサイトの作りに合わせる）
(() => {
  'use strict';

  // ===== アイコン（Lucide の線アイコン） =====
  const ICON = {
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h10"/>',
    book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    redo: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    list: '<path d="M3 12h.01"/><path d="M3 18h.01"/><path d="M3 6h.01"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M8 6h13"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    ext: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/>',
    signpost: '<path d="M12 13v8"/><path d="M12 3v3"/><path d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"/>',
    snail: '<path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"/><circle cx="10" cy="13" r="8"/><path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"/><path d="M18 3 19.1 5.2"/><path d="M22 3 20.9 5.2"/>',
    compass: '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    drum: '<path d="m2 2 8 8"/><path d="m22 2-8 8"/><ellipse cx="12" cy="9" rx="10" ry="5"/><path d="M7 13.4v7.9"/><path d="M12 14v8"/><path d="M17 13.4v7.9"/><path d="M2 9v8a10 5 0 0 0 20 0V9"/>',
    piano: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 4v10"/><path d="M10 4v10"/><path d="M14 4v10"/><path d="M18 4v10"/><path d="M8 14v6"/><path d="M12 14v6"/><path d="M16 14v6"/>',
    volume: '<path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><path d="M16 9a5 5 0 0 1 0 6"/>'
  };
  const ic = (name) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICON[name]}</svg>`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const $ = (sel, root = document) => root.querySelector(sel);
  // タグの言葉に黄色マーカーを引く（最初の1回だけ）
  const hl = (text, tags = []) => {
    let h = esc(text);
    tags.forEach((t) => { const e = esc(t); const i = h.indexOf(e); if (i >= 0 && !h.slice(0, i).endsWith('<mark>')) h = h.slice(0, i) + '<mark>' + e + '</mark>' + h.slice(i + e.length); });
    return h;
  };

  // ===== 保存 =====
  const KEY = 'otomichi.v2';
  const MAX_HEARTS = 5;
  const HEART_MS = 20 * 60 * 1000; // 20分で1つ回復
  const STEPS = 3;                 // 1ユニット＝レッスン3つ
  const GATE_Q = 10;               // ゲートウェイの問題数
  const EN = { intro: 'INTRO', prep: 'PRE', melody: 'MELODY', chord: 'CHORD', rhythm: 'RHYTHM' };

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

  // ===== 進み具合 =====
  const unitOf = (id) => UNITS.find((u) => u.id === id);
  const unitIndex = (id) => UNITS.findIndex((u) => u.id === id);
  const itemOf = (id) => PATH.find((p) => p.id === id);
  const prog = (id) => S.progress[id] || 0;
  const need = (it) => (it.kind === 'gate' ? 1 : STEPS);
  const isDone = (it) => prog(it.id) >= need(it);
  const isOpen = (it) => { for (const p of PATH) { if (p === it) return true; if (!isDone(p)) return false; } return false; };
  const currentItem = () => PATH.find((p) => !isDone(p)) || null;
  const numInBook = (it) => PATH.filter((p) => p.book === it.book && p.kind === 'unit').findIndex((p) => p.id === it.id) + 1;
  const bookRatio = (bk) => {
    const its = PATH.filter((p) => p.book === bk);
    const all = its.reduce((a, p) => a + need(p), 0);
    return its.reduce((a, p) => a + Math.min(need(p), prog(p.id)), 0) / all;
  };
  const bdg = (it, opts = {}) => {
    if (it.kind === 'gate') return `<span class="bdg gw"><small class="en">GW</small></span>`;
    if (opts.lock) return `<span class="bdg">${ic('lock')}</span>`;
    return `<span class="bdg"><small class="en">${BOOKS[it.book].letter}</small><b>${numInBook(it)}</b></span>`;
  };

  // ===== 画面 =====
  const app = $('#app');
  let route = { v: 'home' };
  let L = null; // 進行中のレッスン

  function go(r) { route = r; L = null; render(); window.scrollTo(0, 0); }

  function render() {
    regenHearts();
    if (L) return renderLesson();
    const views = { home: viewHome, unit: viewUnit, gate: viewGate, review: viewReview, stats: viewStats };
    app.innerHTML = header() + views[route.v]() + footer();
    bind(app);
  }

  function header() {
    const st = liveStreak();
    return `<header class="header">
      <button class="logo" data-nav="home" aria-label="目次へ"><img class="sq-logo lt" src="${SQA.logo}" alt="SoundQuest"><img class="sq-logo dk" src="${SQA.logoWhite}" alt="SoundQuest"><span class="drill">ドリル</span></button>
      <span class="hstat ${st && S.lastDay === dayKey() ? 'on' : ''}" aria-label="連続${st}日">${ic('flame')}${st}</span>
      <span class="hstat heart ${S.hearts ? '' : 'zero'}" aria-label="ハート${S.hearts}">${ic('heart')}${S.hearts}</span>
      <button class="menu-btn" data-menu aria-label="メニュー">${ic('menu')}</button>
    </header>`;
  }
  function footer() {
    return `<footer class="footer">
      <h6>このアプリについて</h6>
      すき間時間に、SoundQuest の「自由派音楽理論」を少しずつ確かめるための練習帳です。並びと用語は SoundQuest（©yuta yoshimatsu）に沿っています。くわしい解説と音源は <a href="https://soundquest.jp/quest/" target="_blank" rel="noopener">SoundQuest</a> で読めます。
    </footer>`;
  }

  function openMenu() {
    const el = document.createElement('div');
    el.className = 'menu';
    el.innerHTML = `<button class="close" data-close aria-label="閉じる">${ic('x')}</button>
      <nav>
        <button data-nav="home">${ic('list')}目次</button>
        <button data-nav="review">${ic('redo')}復習</button>
        <button data-nav="stats">${ic('chart')}記録・設定</button>
        <a href="https://soundquest.jp/quest/" target="_blank" rel="noopener">${ic('ext')}SoundQuest を開く</a>
      </nav>
      <div class="menu-foot">おとみち — 自由派音楽理論のドリル<br>内容の並びと用語：SoundQuest（©yuta yoshimatsu）</div>`;
    el.addEventListener('click', (e) => {
      const n = e.target.closest('[data-nav]');
      if (n) { el.remove(); go({ v: n.dataset.nav }); }
      else if (e.target.closest('[data-close]') || e.target.closest('a')) el.remove();
    });
    document.body.appendChild(el);
  }

  // --- 目次（トップ） ---
  function viewHome() {
    const cur = currentItem();
    const knobs = Object.keys(BOOKS).map((bk) => {
      const r = bookRatio(bk);
      return `<button class="knob-b b-${BOOKS[bk].color}" data-jump="${bk}" aria-label="${BOOKS[bk].name} ${Math.round(r * 100)}%">
        <small>${EN[bk]}</small><img class="knob-img" src="${SQA.knob[bk]}" alt="" style="transform:rotate(${-270 + 270 * r}deg)"><em>${Math.round(r * 100)}%</em></button>`;
    }).join('');
    const g = S.settings.goal, x = todayXp();
    const books = Object.keys(BOOKS).map((bk) => {
      const b = BOOKS[bk];
      let lastCh = null;
      const items = PATH.filter((p) => p.book === bk);
      const rows = [];
      items.forEach((it) => {
        const u = it.kind === 'unit' ? unitOf(it.id) : null;
        if (u && u.chapter && u.chapter !== lastCh) {
          if (rows.length) rows.push('</div>');
          rows.push(`<div class="chapter"><img class="ch-av" src="${SQA.avatar[u.chapter]}" alt="">${esc(u.chapter)}</div><div class="list">`);
          lastCh = u.chapter;
        } else if (!rows.length) rows.push('<div class="list">');
        const open = isOpen(it), done = isDone(it), isCur = cur === it, p = prog(it.id);
        const cls = ['row', done && 'done', !open && 'locked', isCur && 'cur'].filter(Boolean).join(' ');
        const title = it.kind === 'gate' ? 'ゲートウェイ' : u.title;
        const state = done ? '' : (it.kind === 'unit' && p > 0 ? `<span class="row-s">${p} / ${STEPS}</span>` : '');
        rows.push(`<button class="${cls}" data-open="${it.id}" ${isCur ? 'id="cur"' : ''}>${bdg(it, { lock: !open })}<span class="row-t">${esc(title)}</span>${state}</button>`);
        if (isCur) rows.push(`<div class="resume"><button class="cbtn sm" data-quick="${it.id}">${it.kind === 'gate' ? 'ゲートウェイへ' : p ? 'つづきから' : 'はじめる'}${ic('signpost')}</button></div>`);
      });
      rows.push('</div>');
      return `<section class="book b-${b.color}" id="bk-${bk}">
        <h2 class="book-t">${b.name}</h2>
        <p class="book-d">${esc(b.desc)}</p>
        ${rows.join('')}
      </section>`;
    }).join('');
    return `<section class="hero" style="background-image:url('${SQA.hero}')"><h1>自由派音楽理論</h1><p>すき間時間に進めるドリル</p></section>
      <div class="mixer">${knobs}</div>
      <div class="today">今日 <b>${x}</b> / ${g} XP<span class="meter"><i style="width:${Math.min(100, x / g * 100)}%"></i></span>XP合計 <b>${S.xp}</b></div>
      <main class="toc-page">${books}</main>`;
  }

  // --- ユニットのページ（記事ふう） ---
  function viewUnit() {
    const it = itemOf(route.id), u = unitOf(route.id), b = BOOKS[it.book], p = prog(u.id);
    const rows = [0, 1, 2].map((s) => {
      const done = p > s, open = isOpen(it) && p >= s;
      return `<div class="toc-row ${done ? 'done' : ''} ${open ? '' : 'locked'}">
        <span class="n">${done ? '✓' : `<img class="qg" src="${SQA.qDark}" alt="">${s + 1}.`}</span>
        <span class="t">レッスン${s + 1}<small>6問　${done ? 'クリア済み' : open ? 'つぎはここ' : 'まだ開いていません'}</small></span>
        ${open ? `<button class="cbtn sm" data-start="${u.id}:${s}">${done ? 'もう一度' : 'はじめる'}</button>` : ''}
      </div>`;
    }).join('');
    const [n1, n2, n3] = u.notes;
    const next = Math.min(p, STEPS - 1);
    return `<main class="art b-${b.color}">
      <div class="crumb"><button data-nav="home">目次</button>›<span>${b.name}</span>${u.chapter ? `›<span>${esc(u.chapter)}</span>` : ''}</div>
      <div class="u-top">${bdg(it)}<img class="ch-av" src="${SQA.avatar[u.chapter || it.book]}" alt=""></div>
      <h1>${esc(u.title)}</h1>
      <div class="share"><a class="lbtn" href="${u.links[0][1]}" target="_blank" rel="noopener">${ic('book')}SoundQuest で読む</a></div>
      <div class="hr"></div>
      <div class="chips">${u.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div>
      <div class="tocbox"><p>レッスン</p>${rows}</div>
      ${S.hearts ? '' : heartsNote()}
      <div class="band"><img class="qg" src="${SQA.q}" alt="Q"><span class="en">1.</span>ポイント</div>
      <h3>${esc(n1[0])}</h3><p>${hl(n1[1], u.tags)}</p>
      <h3>${esc(n2[0])}</h3><p>${hl(n2[1], u.tags)}</p>
      <div class="checkpoint"><h5>${ic('signpost')}Check Point</h5><p><b>${esc(n3[0])}</b>　${hl(n3[1], u.tags)}</p></div>
      <div class="band"><img class="qg" src="${SQA.q}" alt="Q"><span class="en">2.</span>記事を読む</div>
      <div class="reads">${u.links.map(([t, url]) => `<a href="${url}" target="_blank" rel="noopener">${ic('ext')}<span>${esc(t)}</span><em>SoundQuest</em></a>`).join('')}</div>
      ${isOpen(it) && S.hearts ? `<div class="continue"><button class="cbtn" data-start="${u.id}:${next}">${isDone(it) ? 'もう一度' : `レッスン${next + 1}へ`}${ic('signpost')}</button></div>` : ''}
    </main>`;
  }

  function viewGate() {
    const it = itemOf(route.id), b = BOOKS[it.book];
    const us = UNITS.filter((u) => u.book === it.book);
    return `<main class="art b-${b.color}">
      <div class="crumb"><button data-nav="home">目次</button>›<span>${b.name}</span></div>
      <div style="margin-bottom:12px">${bdg(it)}</div>
      <h1>ゲートウェイ</h1>
      <div class="hr"></div>
      <div class="chips">${us.map((u) => `<span class="chip">${esc(u.title)}</span>`).join('')}</div>
      <p style="margin-top:32px">${b.name}の内容をきちんと理解できているかを確かめるテスト場です。上のユニット全体から${GATE_Q}問。ここを通過してから先へ進むと安心です。</p>
      ${isDone(it) ? '<div class="checkpoint"><h5>' + ic('signpost') + 'Check Point</h5><p>このゲートウェイは通過済みです。もう一度挑むこともできます。</p></div>' : ''}
      ${S.hearts ? `<div class="continue"><button class="cbtn" data-gate="${it.id}">挑戦する${ic('signpost')}</button></div>` : heartsNote()}
    </main>`;
  }

  function heartsNote() {
    return `<div class="checkpoint"><h5>${ic('signpost')}Check Point</h5><p>ハートがありません。あと${nextHeartMin()}分で1つ回復します。<mark>復習を終えると、すぐに1つ戻ります。</mark></p>
      <div style="margin-top:16px"><button class="cbtn sm" data-review>復習する${ic('signpost')}</button></div></div>`;
  }

  // --- 復習 ---
  function viewReview() {
    const ids = Object.entries(S.missed).filter(([id]) => findItem(id)).sort((a, b) => b[1] - a[1]);
    const list = ids.slice(0, 12).map(([id, n]) => {
      const f = findItem(id);
      const text = typeof f.item === 'string' ? '聞き取り：' + GEN[f.item]().q : f.item.q;
      const it = itemOf(UNITS[f.u].id);
      return `<div class="miss b-${BOOKS[it.book].color}">${bdg(it)}<span>${esc(text)}</span><span class="cnt">${n}回ミス</span></div>`;
    }).join('');
    const doneAny = UNITS.some((u) => prog(u.id) > 0);
    return `<main class="art b-prep">
      <div class="crumb"><button data-nav="home">目次</button>›<span>復習</span></div>
      <h1>復習</h1>
      <div class="hr"></div>
      <p>まちがえた問題を中心に出します。復習を終えると<mark>ハートが1つ回復</mark>します。</p>
      <div class="band"><img class="qg" src="${SQA.q}" alt="Q"><span class="en">1.</span>苦手な問題</div>
      ${ids.length ? list : `<p style="color:var(--ink-2)">${doneAny ? 'まちがえた問題はありません。クリアしたところから出します。' : 'まずは目次から、レッスンをひとつ進めてみましょう。'}</p>`}
      <div class="continue" style="display:grid;gap:16px;justify-items:start">
        <button class="cbtn" data-review ${doneAny || ids.length ? '' : 'disabled'}>復習をはじめる${ic('signpost')}</button>
        <button class="tlink" data-ear>聞き取りの問題だけやる</button>
      </div>
    </main>`;
  }

  // --- 記録・設定 ---
  function viewStats() {
    const lessonsDone = UNITS.reduce((a, u) => a + Math.min(STEPS, prog(u.id)), 0);
    const acc = S.answered ? Math.round(S.correct / S.answered * 100) : 0;
    let max = S.settings.goal;
    for (let i = -6; i <= 0; i++) max = Math.max(max, S.days[shiftDay(i)] || 0);
    const wd = ['日', '月', '火', '水', '木', '金', '土'];
    const days = [];
    for (let i = -6; i <= 0; i++) {
      const d = new Date(); d.setDate(d.getDate() + i);
      const v = S.days[dayKey(d)] || 0;
      days.push(`<div class="col ${v ? '' : 'zero'} ${i === 0 ? 'today' : ''}"><em>${v || ''}</em><i style="height:${v / max * 100}%"></i><span>${i === 0 ? '今日' : wd[d.getDay()]}</span></div>`);
    }
    const seg = (key, opts) => `<div class="seg">${opts.map(([v, l]) => `<button data-set="${key}" data-val="${v}" class="${String(S.settings[key]) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
    return `<main class="art b-prep">
      <div class="crumb"><button data-nav="home">目次</button>›<span>記録・設定</span></div>
      <h1>記録・設定</h1>
      <div class="hr"></div>
      <table class="kv">
        <tr><td>連続日数</td><td>${liveStreak()}日</td></tr>
        <tr><td>合計XP</td><td>${S.xp}</td></tr>
        <tr><td>クリアしたレッスン</td><td>${lessonsDone} / ${UNITS.length * STEPS}</td></tr>
        <tr><td>正解率</td><td>${acc}%</td></tr>
      </table>
      <div class="band"><img class="qg" src="${SQA.q}" alt="Q"><span class="en">1.</span>この7日間</div>
      <div class="chart">${days.join('')}</div>
      <div class="band"><img class="qg" src="${SQA.q}" alt="Q"><span class="en">2.</span>設定</div>
      <div class="set"><label for="vol">音量</label><input id="vol" type="range" min="0" max="1" step="0.05" value="${S.settings.vol}"></div>
      <div class="set"><label>1日の目標（XP）</label>${seg('goal', [[20, '20'], [30, '30'], [50, '50']])}</div>
      <div class="set"><label>画面</label>${seg('theme', [['auto', '自動'], ['light', '明るい'], ['dark', '暗い']])}</div>
      <div class="set"><label>音のテスト</label><button class="tlink" data-soundtest>ドミソを鳴らす</button></div>
      <div class="set"><label>記録を消す</label><button class="tlink" data-reset>リセット</button></div>
    </main>`;
  }

  // ===== 確認ダイアログ・トースト =====
  function sheet(html) {
    closeSheet();
    const el = document.createElement('div');
    el.className = 'scrim';
    el.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
    el.addEventListener('click', (e) => { if (e.target === el || e.target.closest('[data-close]')) closeSheet(); });
    document.body.appendChild(el);
    bind(el);
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
    if (raw.t === 'mcq') { q.o = shuffle(raw.o); q.a = q.o.indexOf(raw.o[0]); }
    else if (raw.t === 'listen') Object.assign(q, { o: raw.o.slice(), a: raw.a, play: raw.play, gap: raw.gap, beat: raw.beat, sec: raw.sec });
    else if (raw.t === 'key') q.a = raw.a.slice();
    else if (raw.t === 'order') { q.ans = raw.tiles.slice(); q.tiles = shuffle(raw.tiles.concat(raw.extra || [])); }
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
    const it = itemOf(gid);
    const us = UNITS.map((u, i) => i).filter((i) => UNITS[i].book === it.book);
    return { mode: 'gate', id: gid, s: 0, book: it.book, items: shuffle(us.flatMap(idsOf)).slice(0, GATE_Q) };
  }
  function buildReview(earOnly) {
    const opened = UNITS.map((_, i) => i).filter((i) => isOpen(itemOf(UNITS[i].id)));
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
    if ((plan.mode === 'lesson' || plan.mode === 'gate') && !S.hearts) { toast(`ハートがありません。あと${nextHeartMin()}分で回復します`); return; }
    closeSheet();
    L = { ...plan, queue: plan.items.map((id) => ({ id, q: makeQ(id), retry: false })), total: plan.items.length, solved: 0, i: 0, n: 0, firstTry: 0, mistakes: 0, start: Date.now(), sel: null, checked: false, from: route };
    window.scrollTo(0, 0);
    renderLesson();
  }

  // ===== レッスン画面 =====
  const usesHearts = () => L.mode === 'lesson' || L.mode === 'gate';

  function renderLesson() {
    const cur = L.queue[L.i];
    const q = cur.q;
    L.sel = (q.t === 'key' || q.t === 'order') ? [] : null;
    L.checked = false;
    L.n++;
    const b = BOOKS[L.book];
    const where = L.mode === 'gate' ? `${b.name} ゲートウェイ` : L.mode === 'lesson' ? `${b.name} › ${unitOf(L.id).title} › レッスン${L.s + 1}` : L.mode === 'ear' ? '聞き取り' : '復習';
    const kind = { mcq: '選んで答える', listen: '聴いて答える', key: '鍵盤で答える', order: '並べて答える' }[q.t];
    app.innerHTML = `<div class="lesson b-${BOOKS[q.book].color}">
      <div class="lhead"><div class="lhead-in">
        <button class="x" data-quit aria-label="やめる">${ic('x')}</button>
        <span class="where">${esc(where)}</span>
        ${usesHearts() ? `<span class="hstat heart ${S.hearts ? '' : 'zero'}">${ic('heart')}${S.hearts}</span>` : ''}
      </div><div class="lbar"><i style="width:${L.solved / L.total * 100}%"></i></div></div>
      <div class="qwrap" id="qa">
        <div class="qband"><img class="qg" src="${SQA.q}" alt="Q"><span class="en">${L.n}.</span>${cur.retry ? 'もう一度' : kind}</div>
        <p class="qtext">${esc(q.q)}</p>
        ${body(q)}
      </div>
      <div class="fbar" id="fbar"><div class="fb" id="fb"></div><button class="cbtn" id="go" disabled>答え合わせ</button></div>
    </div>`;
    bindLesson(q);
    if (q.t === 'listen') setTimeout(() => playQ(q), 350);
  }

  function body(q) {
    if (q.t === 'mcq' || q.t === 'listen') {
      const opts = `<div class="opts">${q.o.map((o, i) => `<button class="opt" data-opt="${i}"><span class="dot"></span>${esc(o)}</button>`).join('')}</div>`;
      if (q.t === 'mcq') return opts;
      return `<div class="player" id="player"><button class="pb" data-play aria-label="再生">${ic('play')}</button><span class="tm">00:00</span><span class="track"><i></i></span><span class="tm" id="dur">--:--</span></div>
        <div class="player-sub"><button data-play-slow>${ic('snail')}ゆっくり再生</button></div>${opts}`;
    }
    if (q.t === 'key') {
      const whites = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76];
      const blacks = { 61: 10, 63: 20, 66: 40, 68: 50, 70: 60, 73: 80, 75: 90 };
      const w = whites.map((m) => `<button class="wkey" data-key="${m}" aria-label="${NOTE_JP[m % 12]}">${m % 12 === 0 ? '<span class="c">C</span>' : ''}</button>`).join('');
      const bl = Object.entries(blacks).map(([m, left]) => `<button class="bkey" data-key="${m}" style="left:${left}%" aria-label="${NOTE_JP[m % 12]}"></button>`).join('');
      return `<div class="piano">${w}${bl}</div><p class="piano-hint">${q.a.length > 1 ? `${q.a.length}つの音を選んでください（押すと鳴ります）` : '押すと音が鳴ります'}</p>`;
    }
    if (q.t === 'order') {
      return `<div class="slots" id="slots" aria-label="答えの並び"></div><div class="tiles">${q.tiles.map((t, i) => `<button class="tile" data-tile="${i}">${esc(t)}</button>`).join('')}</div>`;
    }
    return '';
  }

  function playQ(q, slow) {
    const pl = $('#player');
    const ms = q.beat ? Sound.beat(q.beat, q.sec, { slow }) : Sound.play(q.play, { gap: q.gap, slow });
    if (!pl) return;
    const sec = Math.max(1, Math.round((ms || 1000) / 1000));
    $('#dur').textContent = `00:${String(sec).padStart(2, '0')}`;
    pl.classList.remove('playing'); void pl.offsetWidth;
    pl.style.setProperty('--dur', (ms || 1000) + 'ms');
    pl.classList.add('playing');
  }

  function setReady(ok) { const g = $('#go'); if (g && !L.checked) g.disabled = !ok; }

  function bindLesson(q) {
    const qa = $('#qa');
    $('[data-quit]').onclick = () => {
      const el = sheet(`<h2>レッスンをやめますか？</h2><p>ここまでの進み具合は保存されません。</p>
        <button class="cbtn block" data-close>つづける${ic('signpost')}</button><button class="lnk" data-quit-yes>やめる</button>`);
      $('[data-quit-yes]', el).onclick = () => { closeSheet(); Sound.stop(); const r = L.from; L = null; go(r); };
    };
    qa.addEventListener('click', (e) => {
      if (L.checked) return;
      if (e.target.closest('[data-play]')) return playQ(q);
      if (e.target.closest('[data-play-slow]')) return playQ(q, true);
      const opt = e.target.closest('[data-opt]'), key = e.target.closest('[data-key]');
      const tile = e.target.closest('[data-tile]'), slot = e.target.closest('[data-slot]');
      if (opt) {
        qa.querySelectorAll('.opt').forEach((n) => n.classList.remove('sel'));
        opt.classList.add('sel'); L.sel = +opt.dataset.opt; setReady(true);
      } else if (key) {
        const m = +key.dataset.key;
        Sound.note(m);
        if (q.a.length > 1) { const at = L.sel.indexOf(m); if (at >= 0) L.sel.splice(at, 1); else L.sel.push(m); } else L.sel = [m];
        qa.querySelectorAll('[data-key]').forEach((n) => n.classList.toggle('sel', L.sel.includes(+n.dataset.key)));
        setReady(L.sel.length > 0);
      } else if (tile) {
        const i = +tile.dataset.tile;
        if (!L.sel.includes(i)) { L.sel.push(i); drawSlots(q); }
      } else if (slot) { L.sel.splice(+slot.dataset.slot, 1); drawSlots(q); }
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
      qa.querySelectorAll('.opt').forEach((n) => { const i = +n.dataset.opt; n.classList.remove('sel'); if (i === q.a) n.classList.add('right'); else if (i === L.sel) n.classList.add('wrong'); });
      answer = q.o[q.a];
    } else if (q.t === 'key') {
      ok = L.sel.slice().sort().join(',') === q.a.slice().sort().join(',');
      qa.querySelectorAll('[data-key]').forEach((n) => { const m = +n.dataset.key; n.classList.remove('sel'); if (q.a.includes(m)) n.classList.add('right'); else if (L.sel.includes(m)) n.classList.add('miss'); });
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
      S.correct++; L.solved++;
      if (!cur.retry) L.firstTry++;
      if (!usesHearts() && S.missed[q.id]) { S.missed[q.id]--; if (S.missed[q.id] <= 0) delete S.missed[q.id]; }
    } else {
      L.mistakes++;
      S.missed[q.id] = (S.missed[q.id] || 0) + 1;
      if (usesHearts()) { if (S.hearts === MAX_HEARTS) S.heartTs = Date.now(); S.hearts = Math.max(0, S.hearts - 1); }
      L.queue.push({ id: q.id, q: makeQ(q.id), retry: true }); // まちがえた問題は最後にもう一度
    }
    save();
    Sound.cue(ok);
    const fbar = $('#fbar');
    fbar.classList.add('on', ok ? 'ok' : 'ng');
    $('#fb').innerHTML = `<div class="fb-h">${ok ? '正解' : '不正解'}</div>
      ${ok ? '' : `<div class="fb-a">正解は <mark>${esc(answer)}</mark></div>`}
      ${q.ex ? `<div class="fb-cp"><h5>${ic('signpost')}Check Point</h5><p>${esc(q.ex)}</p></div>` : ''}`;
    const g = $('#go');
    g.disabled = false;
    g.innerHTML = `Continue${ic('signpost')}`;
    const bar = $('.lbar i'); if (bar) bar.style.width = (L.solved / L.total * 100) + '%';
    const h = $('.lhead .heart'); if (h) { h.innerHTML = ic('heart') + S.hearts; h.classList.toggle('zero', !S.hearts); }
    g.focus();
  }

  function next() {
    Sound.stop();
    if (usesHearts() && S.hearts <= 0 && L.solved < L.total) {
      const r = L.from; L = null; go(r);
      sheet(`<h2>ハートがなくなりました</h2><p>あと${nextHeartMin()}分で1つ回復します。復習を終えると、すぐに1つ戻ります。</p>
        <button class="cbtn block" data-review>復習する${ic('signpost')}</button><button class="lnk" data-close>あとでやる</button>`);
      return;
    }
    L.i++;
    if (L.i >= L.queue.length) return finish();
    window.scrollTo(0, 0);
    renderLesson();
  }

  // ===== 結果（まとめ） =====
  function finish() {
    const perfect = L.mistakes === 0;
    let xp = L.mode === 'gate' ? 25 : L.mode === 'lesson' ? 10 : 8;
    if (perfect) xp += 5;
    const today = dayKey();
    if (S.lastDay !== today) { S.streak = S.lastDay === shiftDay(-1) ? S.streak + 1 : 1; S.lastDay = today; }
    const before = todayXp();
    S.xp += xp; S.days[today] = before + xp; S.lessons++;
    let unitDone = false;
    if (L.mode === 'lesson') { if (prog(L.id) === L.s) { S.progress[L.id] = L.s + 1; unitDone = L.s + 1 === STEPS; } }
    else if (L.mode === 'gate') S.progress[L.id] = 1;
    else if (S.hearts < MAX_HEARTS) { S.hearts++; if (S.hearts >= MAX_HEARTS) S.heartTs = Date.now(); }
    save();
    const sec = Math.round((Date.now() - L.start) / 1000);
    const acc = Math.round(L.firstTry / L.total * 100);
    const goalJust = before < S.settings.goal && before + xp >= S.settings.goal;
    const b = BOOKS[L.book];
    const u = L.mode === 'lesson' ? unitOf(L.id) : null;
    const title = L.mode === 'gate' ? 'ゲートウェイ通過' : unitDone ? `${u.title} クリア` : L.mode === 'lesson' ? `レッスン${L.s + 1} クリア` : '復習おわり';
    const sums = [];
    if (u) u.notes.forEach(([h]) => sums.push(h));
    if (L.mode === 'gate') sums.push(`${b.name}の内容を確かめました。次の編へ進めます。`);
    if (L.mode === 'review' || L.mode === 'ear') sums.push('ハートが1つ回復しました。');
    if (goalJust) sums.push('今日の目標を達成しました。');
    sums.push(perfect ? 'ノーミスでした。' : `まちがえた問題は「復習」に入っています。`);
    const nextR = L.mode === 'lesson' ? { v: 'unit', id: L.id } : L.mode === 'gate' ? { v: 'home' } : { v: 'review' };
    const crumb = L.mode === 'lesson' ? `<span>${b.name}</span>›<span>${esc(u.title)}</span>` : `<span>${L.mode === 'gate' ? b.name : '復習'}</span>`;
    app.innerHTML = header() + `<main class="art b-${b.color}">
      <div class="crumb"><button data-nav="home">目次</button>›${crumb}</div>
      <img class="dj" src="${SQA.dj}" alt="">
      <h1>${esc(title)}</h1>
      <table class="score-tbl"><tr><th>獲得XP</th><th>一発正解</th><th>時間</th></tr>
        <tr><td>+${xp}</td><td>${acc}%</td><td>${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}</td></tr></table>
      <div class="matome"><h4><span>まとめ</span></h4>${sums.map((s) => `<div class="sum">${esc(s)}</div>`).join('')}</div>
      <button class="cbtn" id="done">Continue${ic('signpost')}</button>
    </main>` + footer();
    bind(app);
    Sound.play([[72, 76, 79], [74, 77, 81], [76, 79, 84]], { gap: 0.14 });
    L = null;
    $('#done').onclick = () => { go(unitDone ? { v: 'home' } : nextR); if (unitDone || nextR.v === 'home') scrollToCurrent(); };
  }

  // ===== つなぎこみ =====
  function bind(root) {
    root.querySelectorAll('[data-nav]').forEach((b) => b.onclick = () => go({ v: b.dataset.nav }));
    root.querySelectorAll('[data-menu]').forEach((b) => b.onclick = openMenu);
    root.querySelectorAll('[data-open]').forEach((b) => b.onclick = () => {
      const it = itemOf(b.dataset.open);
      if (!isOpen(it)) return toast('前の項目をクリアすると開きます');
      go({ v: it.kind === 'gate' ? 'gate' : 'unit', id: it.id });
    });
    root.querySelectorAll('[data-quick]').forEach((b) => b.onclick = () => {
      const it = itemOf(b.dataset.quick);
      if (it.kind === 'gate') startLesson(buildGate(it.id)); else startLesson(buildLesson(it.id, prog(it.id)));
    });
    root.querySelectorAll('[data-start]').forEach((b) => b.onclick = () => { const [id, s] = b.dataset.start.split(':'); startLesson(buildLesson(id, +s)); });
    root.querySelectorAll('[data-gate]').forEach((b) => b.onclick = () => startLesson(buildGate(b.dataset.gate)));
    root.querySelectorAll('[data-review]').forEach((b) => b.onclick = () => startLesson(buildReview(false)));
    root.querySelectorAll('[data-ear]').forEach((b) => b.onclick = () => startLesson(buildReview(true)));
    root.querySelectorAll('[data-jump]').forEach((b) => b.onclick = () => { const t = $('#bk-' + b.dataset.jump); if (t) window.scrollTo({ top: t.offsetTop - 64, behavior: 'smooth' }); });
    const vol = $('#vol', root);
    if (vol) { vol.oninput = () => { S.settings.vol = +vol.value; Sound.setVolume(S.settings.vol); save(); }; vol.onchange = () => Sound.note(67); }
    root.querySelectorAll('[data-set]').forEach((b) => b.onclick = () => {
      const k = b.dataset.set;
      S.settings[k] = k === 'goal' ? +b.dataset.val : b.dataset.val;
      save(); applyTheme(); render();
    });
    root.querySelectorAll('[data-soundtest]').forEach((b) => b.onclick = () => {
      Sound.unlock();
      Sound.play([[60, 64, 67]], { gap: 1 });
      setTimeout(() => { const st = Sound.state(); if (st !== 'running') toast(`音の準備ができていません（${st}）。もう一度押してください`); }, 400);
    });
    const rs = $('[data-reset]', root);
    if (rs) rs.onclick = () => {
      const el = sheet(`<h2>記録をすべて消しますか？</h2><p>XP・連続日数・進み具合がすべて0にもどります。元にはもどせません。</p>
        <button class="cbtn block" data-reset-yes>すべて消す</button><button class="lnk" data-close>やめる</button>`);
      $('[data-reset-yes]', el).onclick = () => { const st = S.settings; S = fresh(); S.settings = st; save(); closeSheet(); render(); toast('記録を消しました'); };
    };
  }

  function scrollToCurrent() {
    requestAnimationFrame(() => { const n = $('#cur'); if (n) { const y = n.getBoundingClientRect().top + window.scrollY - window.innerHeight / 3; window.scrollTo(0, Math.max(0, y)); } });
  }

  // ハートの回復をときどき確認
  setInterval(() => {
    if (L || document.querySelector('.scrim, .menu')) return;
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
