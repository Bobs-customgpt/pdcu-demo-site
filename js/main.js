/* People Driven Credit Union demo site — behaviour
   Carousels (featured rates, goals, testimonials, blog), nav dropdowns, login popover,
   mobile menu, footer accordions, and the CustomGPT.ai agent loader. */
(function () {
  'use strict';

  /* ---------- generic infinite carousel ---------- */
  function Carousel(root, opts) {
    this.root = root;
    this.viewport = root.querySelector('.carousel-viewport');
    this.track = root.querySelector('.carousel-track');
    this.slides = Array.prototype.slice.call(this.track.children);
    this.opts = Object.assign({ autoplay: 0, fixedWidth: 0 }, opts || {});
    this.index = 0;
    if (this.slides.length < 2) return;
    var self = this;
    // clone slides on both ends so the loop looks continuous
    this.slides.forEach(function (s) { var c = s.cloneNode(true); c.setAttribute('aria-hidden', 'true'); c.classList.add('is-clone'); self.track.appendChild(c); });
    this.slides.slice().reverse().forEach(function (s) { var c = s.cloneNode(true); c.setAttribute('aria-hidden', 'true'); c.classList.add('is-clone'); self.track.insertBefore(c, self.track.firstChild); });
    this.count = this.slides.length;
    this.all = Array.prototype.slice.call(this.track.children);
    this.jump(0, false);
    root.querySelectorAll('.carousel-arrow.prev').forEach(function (b) { b.addEventListener('click', function () { self.go(-1); }); });
    root.querySelectorAll('.carousel-arrow.next').forEach(function (b) { b.addEventListener('click', function () { self.go(1); }); });
    this.track.addEventListener('transitionend', function () { self.normalize(); });
    window.addEventListener('resize', function () { self.jump(self.index, false); });
    if (this.opts.autoplay) {
      this.timer = setInterval(function () { self.go(1); }, this.opts.autoplay);
      root.addEventListener('mouseenter', function () { clearInterval(self.timer); });
      root.addEventListener('mouseleave', function () { self.timer = setInterval(function () { self.go(1); }, self.opts.autoplay); });
    }
  }
  Carousel.prototype.slideWidth = function () {
    return this.opts.fixedWidth || this.all[0].getBoundingClientRect().width;
  };
  Carousel.prototype.jump = function (i, animate) {
    this.index = i;
    var offset = (this.count + i) * this.slideWidth();
    this.track.style.transition = animate ? '' : 'none';
    this.track.style.transform = 'translateX(' + (-offset) + 'px)';
    if (!animate) { void this.track.offsetWidth; this.track.style.transition = ''; }
  };
  Carousel.prototype.go = function (dir) { this.jump(this.index + dir, true); };
  Carousel.prototype.normalize = function () {
    if (this.index >= this.count) this.jump(this.index - this.count, false);
    else if (this.index < 0) this.jump(this.index + this.count, false);
  };

  document.querySelectorAll('[data-carousel]').forEach(function (el) {
    var auto = parseInt(el.getAttribute('data-autoplay') || '0', 10);
    var fixed = parseInt(el.getAttribute('data-fixed-width') || '0', 10);
    new Carousel(el, { autoplay: auto, fixedWidth: fixed });
  });

  /* ---------- header: dropdowns (click for touch), login popover, mobile nav ---------- */
  var header = document.querySelector('.g-header');
  document.querySelectorAll('.nav-main > .menu-item.is-parent > button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var li = btn.parentNode, open = li.classList.contains('is-open');
      document.querySelectorAll('.nav-main > .menu-item.is-open').forEach(function (x) { x.classList.remove('is-open'); });
      if (!open) li.classList.add('is-open');
    });
  });
  var loginBtn = document.querySelector('.login-trigger');
  var loginBox = document.querySelector('.c-login__container');
  if (loginBtn && loginBox) {
    loginBtn.addEventListener('click', function (e) { e.stopPropagation(); loginBox.classList.toggle('is-active'); });
    loginBox.addEventListener('click', function (e) { e.stopPropagation(); });
    loginBox.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); alert('Demo site: online banking login is disabled.'); });
  }
  document.addEventListener('click', function (e) {
    if (loginBox && !e.target.closest('.navigation__right')) loginBox.classList.remove('is-active');
    if (!e.target.closest('.nav-main')) document.querySelectorAll('.nav-main > .menu-item.is-open').forEach(function (x) { x.classList.remove('is-open'); });
  });
  var trigger = document.querySelector('.c-trigger');
  if (trigger) trigger.addEventListener('click', function () { header.classList.toggle('nav-active'); });

  /* footer accordions (mobile only, CSS decides visibility) */
  document.querySelectorAll('.g-footer__nav__heading').forEach(function (h) {
    h.addEventListener('click', function () { h.classList.toggle('is-active'); });
  });

  /* header search: inert on the demo site (the AI agent handles questions) */
  var search = document.querySelector('.c-search__form');
  if (search) search.addEventListener('submit', function (e) {
    e.preventDefault();
    var q = search.querySelector('input').value.trim();
    if (window.CustomGPTDemo && window.CustomGPTDemo.ask) window.CustomGPTDemo.ask(q);
  });

  /* ---------- CustomGPT.ai agent ---------- */
  var cfg = window.DEMO_CONFIG || {};
  var params = new URLSearchParams(location.search);
  var pid = params.get('p_id') || cfg.p_id || '';
  var pkey = params.get('p_key') || cfg.p_key || '';

  function loadAgent() {
    var s = document.createElement('script');
    s.src = 'https://cdn.customgpt.ai/js/chat.js';
    s.defer = true;
    s.onload = function () {
      if (window.CustomGPT && typeof window.CustomGPT.init === 'function') {
        window.CustomGPT.init({ p_id: pid, p_key: pkey });
      }
    };
    document.body.appendChild(s);
    window.CustomGPTDemo = { ask: function () { /* the floating widget is the entry point */ } };
  }

  function showPlaceholder() {
    var btn = document.createElement('button');
    btn.className = 'cgpt-placeholder';
    btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-8 8H7l-4 3v-6.5A8 8 0 0 1 5 5.3 8 8 0 0 1 21 12z"/></svg>' + (cfg.placeholderLabel || 'Chat with us');
    var panel = document.createElement('div');
    panel.className = 'cgpt-setup';
    panel.hidden = true;
    panel.innerHTML = '<h4>Connect the CustomGPT.ai agent</h4>' +
      '<div>No agent is wired to this demo yet. Open <strong>config.js</strong> and paste the agent\'s embed values (CustomGPT → Deploy → Embed → Live Chat):</div>' +
      '<code>p_id: "12345",<br>p_key: "your-embed-key"</code>' +
      '<div>Or test without editing by adding them to the URL:</div>' +
      '<code>index.html?p_id=12345&amp;p_key=your-embed-key</code>';
    btn.addEventListener('click', function () { panel.hidden = !panel.hidden; });
    document.body.appendChild(btn);
    document.body.appendChild(panel);
    window.CustomGPTDemo = { ask: function () { panel.hidden = false; } };
  }

  if (pid && pkey) loadAgent(); else showPlaceholder();
})();
