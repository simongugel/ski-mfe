(function () {
  'use strict';

  var C = window.CONTENT;
  var STORE_KEY = 'mfe-ski-v1';
  var view = document.getElementById('view');
  var titleEl = document.getElementById('tabTitle');
  var tabButtons = Array.prototype.slice.call(document.querySelectorAll('.tabbar button'));

  /* ---------- Zustand (Tag, Fokus, abgehakte Aufgaben) – bleibt auf dem Gerät ---------- */
  var state = { day: 1, focus: 'aw', done: {} };
  try {
    var saved = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
    if (saved.day === 1 || saved.day === 2) state.day = saved.day;
    if (saved.focus && C.fokus[saved.focus]) state.focus = saved.focus;
    if (saved.done && typeof saved.done === 'object') state.done = saved.done;
  } catch (e) { /* Speicher nicht verfügbar – App läuft trotzdem */ }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* ignorieren */ }
  }

  /* ---------- DOM-Helfer (nur textContent, nie innerHTML) ---------- */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  var SVG_NS = 'http://www.w3.org/2000/svg';
  function svg(path, extraAttrs) {
    var s = document.createElementNS(SVG_NS, 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('aria-hidden', 'true');
    var p = document.createElementNS(SVG_NS, 'path');
    p.setAttribute('d', path);
    s.appendChild(p);
    return s;
  }

  /* ---------- Blöcke ---------- */
  function linkNode(cls, text, url) {
    var a = el('a', cls);
    if (url) {
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    } else {
      // Noch kein Link hinterlegt: sichtbar, aber ohne Wirkung (URL in content.js eintragen).
      a.href = '#';
      a.setAttribute('data-todo-link', '');
      a.addEventListener('click', function (e) { e.preventDefault(); });
    }
    return a;
  }

  /* Video: Vorschaubild mit Play-Knopf, der Player wird erst beim Antippen geladen (spart Datenvolumen am Berg). */
  var YT_ID = /^[\w-]{11}$/;
  function videoEmbed(title, id) {
    var fig = el('figure', 'embed');
    var btn = el('button', 'yt-facade');
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Video abspielen: ' + title);
    btn.style.backgroundImage = 'url("https://i.ytimg.com/vi/' + id + '/hqdefault.jpg")';
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?rel=0&autoplay=1&playsinline=1';
      f.title = title;
      f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      f.allowFullscreen = true;
      btn.replaceWith(f);
    });
    fig.appendChild(btn);
    fig.appendChild(el('figcaption', null, title));
    var alt = el('a', 'yt-open', 'Auf YouTube öffnen');
    alt.href = 'https://www.youtube.com/watch?v=' + id;
    alt.target = '_blank';
    alt.rel = 'noopener noreferrer';
    fig.appendChild(alt);
    return fig;
  }

  function block(line, tabId, gi, i) {
    var a = line.split('|');
    var t = a[0];
    var n;
    if (t === 'r') {
      n = el('div', 'row');
      var when = el('div', 'when');
      when.appendChild(el('span', null, a[1]));
      if (a[2]) when.appendChild(el('span', 'chip ' + a[2], a[2]));
      n.appendChild(when);
      n.appendChild(el('div', 'what', a[3]));
      return n;
    }
    if (t === 'v' && YT_ID.test(a[2] || '')) return videoEmbed(a[1], a[2]);
    if (t === 'v' || t === 'k') {
      var isV = t === 'v';
      n = linkNode(isV ? 'video' : 'button', a[1], a[2]);
      if (isV) {
        var play = el('span', 'play');
        play.appendChild(svg('M8 5v14l11-7z'));
        n.appendChild(play);
        n.appendChild(el('span', null, a[1]));
      } else {
        n.appendChild(el('span', null, a[1]));
        n.appendChild(svg('M7 17L17 7M9 7h8v8'));
      }
      return n;
    }
    var text = a.slice(1).join('|');
    if (t === 'h') return el('h3', null, text);
    if (t === 'b') return el('div', 'strong', text);
    if (t === 'p') return el('p', null, text);
    if (t === 'l') return el('div', 'li', text);
    if (t === 'q') return el('div', 'quote', text);
    if (t === 'c') {
      var key = tabId + '-' + gi + '-' + i;
      n = el('button', 'check');
      n.type = 'button';
      n.setAttribute('aria-pressed', state.done[key] ? 'true' : 'false');
      var box = el('span', 'box');
      var s = svg('M5 12l5 5 9-10');
      box.appendChild(s);
      n.appendChild(box);
      n.appendChild(el('span', null, text));
      n.addEventListener('click', function () {
        state.done[key] = !state.done[key];
        save();
        n.setAttribute('aria-pressed', state.done[key] ? 'true' : 'false');
      });
      return n;
    }
    return el('div', null, text);
  }

  function segment() {
    var wrap = el('div', 'seg');
    [1, 2].forEach(function (d) {
      var b = el('button', null, 'Tag ' + d);
      b.type = 'button';
      b.setAttribute('aria-pressed', state.day === d ? 'true' : 'false');
      b.addEventListener('click', function () { state.day = d; save(); render(true); });
      wrap.appendChild(b);
    });
    return wrap;
  }

  function matrix(card) {
    var grid = el('div', 'matrix');
    ['aw', 'ae', 'iw', 'ie'].forEach(function (k) {
      var f = C.fokus[k];
      var b = el('button', 'tile');
      b.type = 'button';
      b.setAttribute('aria-pressed', state.focus === k ? 'true' : 'false');
      b.appendChild(el('b', null, f.title));
      b.appendChild(el('small', null, f.sub));
      b.addEventListener('click', function () { state.focus = k; save(); render(true); });
      grid.appendChild(b);
    });
    card.appendChild(grid);
    var sel = C.fokus[state.focus];
    var d = el('div', 'detail');
    d.setAttribute('aria-live', 'polite');
    d.appendChild(el('div', 't', sel.title));
    d.appendChild(el('p', null, sel.d));
    var e = el('div', 'e');
    e.appendChild(el('strong', null, 'Im Schneesport: '));
    e.appendChild(document.createTextNode(sel.e));
    d.appendChild(e);
    card.appendChild(d);
  }

  /* ---------- Rendering ---------- */
  var current = 'ablauf';

  function render(keepScroll) {
    var tab = C.tabs.filter(function (t) { return t.id === current; })[0] || C.tabs[0];
    var top = keepScroll ? view.scrollTop : 0;
    view.textContent = '';
    tab.groups.forEach(function (g, gi) {
      var card = el('section', 'card' + (g.hl ? ' hl' : ''));
      card.appendChild(el('h2', null, g.title));
      if (g.seg) card.appendChild(segment());
      var lines = g.seg ? (state.day === 1 ? C.prog1 : C.prog2) : g.lines;
      if (g.matrix) matrix(card);
      lines.forEach(function (line, i) { card.appendChild(block(line, tab.id, gi, i)); });
      view.appendChild(card);
    });
    titleEl.textContent = tab.title;
    document.title = tab.title + ' · MFE Skifahren';
    tabButtons.forEach(function (b) {
      if (b.getAttribute('data-tab') === tab.id) b.setAttribute('aria-current', 'page');
      else b.removeAttribute('aria-current');
    });
    view.scrollTop = top;
  }

  function go(id) {
    current = id;
    if (location.hash !== '#' + id) history.replaceState(null, '', '#' + id);
    render(false);
  }

  tabButtons.forEach(function (b) {
    b.addEventListener('click', function () { go(b.getAttribute('data-tab')); });
  });
  window.addEventListener('hashchange', function () {
    var id = location.hash.slice(1);
    if (C.tabs.some(function (t) { return t.id === id; }) && id !== current) go(id);
  });

  var start = location.hash.slice(1);
  current = C.tabs.some(function (t) { return t.id === start; }) ? start : 'ablauf';
  render(false);

  /* ---------- Offline-Betrieb (wichtig bei schlechtem Empfang am Berg) ---------- */
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* ignorieren */ });
    });
  }
})();
