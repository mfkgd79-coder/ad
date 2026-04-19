// js/ui-library.js
(function () {
  'use strict';

  var grid          = document.getElementById('libraryGrid');
  var modal         = document.getElementById('elementModal');
  var modalLive     = document.getElementById('modalLivePreview');
  var htmlCodeEl    = document.getElementById('htmlCode');
  var cssCodeEl     = document.getElementById('cssCode');
  var copyBtn       = document.getElementById('copyBtn');
  var modalClose    = document.getElementById('modalClose');
  var catFilters    = document.getElementById('catFilters');
  var componentCount = document.getElementById('componentCount');
  var footerCount   = document.getElementById('footerCount');
  var elementCat    = document.getElementById('elementCategory');
  var libEmpty      = document.getElementById('libEmpty');

  if (!grid || typeof components === 'undefined') return;

  var activeCategory = 'all';

  /* ── Category helpers ── */
  function getCategories() {
    var seen = {};
    var cats = [];
    components.forEach(function (c) {
      if (!seen[c.category]) { seen[c.category] = true; cats.push(c.category); }
    });
    cats.sort();
    return ['all'].concat(cats);
  }

  function catLabel(cat) {
    if (cat === 'all') return 'All';
    return cat.split('-').map(function (w) { return w[0].toUpperCase() + w.slice(1); }).join(' ');
  }

  function catCount(cat) {
    if (cat === 'all') return components.length;
    return components.filter(function (c) { return c.category === cat; }).length;
  }

  /* ── Build filter pills ── */
  function buildFilters() {
    if (!catFilters) return;
    catFilters.innerHTML = '';
    getCategories().forEach(function (cat) {
      var btn = document.createElement('button');
      btn.className = 'cat-pill' + (cat === activeCategory ? ' active' : '');
      btn.dataset.cat = cat;
      btn.innerHTML = catLabel(cat) + ' <span class="pill-cnt">' + catCount(cat) + '</span>';
      btn.addEventListener('click', function () {
        activeCategory = cat;
        document.querySelectorAll('.cat-pill').forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        renderGrid();
      });
      catFilters.appendChild(btn);
    });
  }

  /* ── Shadow DOM preview ── */
  function makeShadowPreview(comp, scale) {
    var host = document.createElement('div');
    host.style.cssText = 'display:flex;align-items:center;justify-content:center;width:100%;height:100%;';
    var shadow = host.attachShadow({ mode: 'open' });
    var wrap = document.createElement('div');
    wrap.style.cssText = 'transform:scale(' + (scale || 0.72) + ');transform-origin:center;display:flex;align-items:center;justify-content:center;max-width:100%;max-height:100%;';
    wrap.innerHTML = comp.html || '';
    var style = document.createElement('style');
    style.textContent = '*{box-sizing:border-box;}:host{display:flex;align-items:center;justify-content:center;width:100%;height:100%;}' + (comp.css || '');
    shadow.appendChild(style);
    shadow.appendChild(wrap);
    return host;
  }

  /* ── Render grid ── */
  function renderGrid() {
    var filtered = activeCategory === 'all'
      ? components
      : components.filter(function (c) { return c.category === activeCategory; });

    grid.innerHTML = '';
    if (libEmpty)       libEmpty.style.display = filtered.length ? 'none' : 'block';
    if (componentCount) componentCount.textContent = filtered.length + ' components';
    if (footerCount)    footerCount.textContent    = components.length;

    filtered.forEach(function (comp, i) {
      var card = document.createElement('div');
      card.className = 'element-card';
      card.style.animationDelay = Math.min(i * 0.025, 0.25) + 's';

      var pw = document.createElement('div');
      pw.className = 'preview-wrapper';
      pw.appendChild(makeShadowPreview(comp));

      var meta = document.createElement('div');
      meta.className = 'element-meta';

      var catSpan = document.createElement('span');
      catSpan.className = 'comp-category';
      catSpan.innerHTML = '<i class="far fa-file-code"></i>' + comp.category;

      var expBtn = document.createElement('button');
      expBtn.className = 'expand-btn';
      expBtn.innerHTML = '<i class="far fa-eye"></i> expand';
      expBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        openModal(comp);
      });

      meta.appendChild(catSpan);
      meta.appendChild(expBtn);
      card.appendChild(pw);
      card.appendChild(meta);
      grid.appendChild(card);
    });
  }

  /* ── Modal ── */
  function openModal(comp) {
    modalLive.innerHTML = '';
    modalLive.appendChild(makeShadowPreview(comp, 1));
    htmlCodeEl.textContent = comp.html || '';
    cssCodeEl.textContent  = comp.css  || '';
    if (elementCat) elementCat.textContent = catLabel(comp.category);

    document.querySelectorAll('.tab-btn').forEach(function (t) { t.classList.remove('active'); });
    var htmlTab = document.querySelector('.tab-btn[data-lang="html"]');
    if (htmlTab) htmlTab.classList.add('active');
    htmlCodeEl.style.display = '';
    cssCodeEl.style.display  = 'none';

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  /* ── Code tabs ── */
  document.querySelectorAll('.tab-btn').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.tab-btn').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      var lang = tab.dataset.lang;
      htmlCodeEl.style.display = lang === 'html' ? '' : 'none';
      cssCodeEl.style.display  = lang === 'css'  ? '' : 'none';
    });
  });

  /* ── Copy ── */
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var active = document.querySelector('.tab-btn.active');
      var code   = (active && active.dataset.lang === 'css') ? cssCodeEl.textContent : htmlCodeEl.textContent;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(code).then(function () {
          var orig = copyBtn.innerHTML;
          copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
          setTimeout(function () { copyBtn.innerHTML = orig; }, 2000);
        });
      }
    });
  }

  /* ── Init ── */
  buildFilters();
  renderGrid();
})();