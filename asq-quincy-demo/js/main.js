/* Demo site — mobile nav + floating chat (chat.js) + top-bar SGE (sge.js) */
(function () {
  var cfg = window.DEMO_CONFIG || {};
  var params = new URLSearchParams(window.location.search);
  var pid = params.get('p_id') || cfg.p_id || '';
  var pkey = params.get('p_key') || cfg.p_key || '';
  var spid = params.get('search_p_id') || cfg.search_p_id || '';
  var spkey = params.get('search_p_key') || cfg.search_p_key || '';

  function isPending(v) {
    return !v || String(v).toUpperCase() === 'PENDING';
  }

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  function loadChat() {
    if (isPending(pid) || isPending(pkey)) {
      console.warn('[demo] No CustomGPT chat p_id/p_key in config.js yet (PENDING).');
      return;
    }
    var s = document.createElement('script');
    s.src = 'https://cdn.customgpt.ai/js/chat.js';
    s.async = true;
    s.onload = function () {
      if (window.CustomGPT && typeof window.CustomGPT.init === 'function') {
        window.CustomGPT.init({ p_id: String(pid), p_key: String(pkey) });
      }
    };
    document.body.appendChild(s);
  }

  function loadSge() {
    if (isPending(spid) || isPending(spkey)) {
      console.warn('[demo] No CustomGPT search p_id/p_key in config.js yet (PENDING).');
      return;
    }
    if (document.querySelector('script[data-demo-sge]')) return;
    var s = document.createElement('script');
    s.src = 'https://cdn.customgpt.ai/js/sge.js';
    s.defer = true;
    s.setAttribute('div_id', 'customgpt_search');
    s.setAttribute('p_id', String(spid));
    s.setAttribute('p_key', String(spkey));
    s.setAttribute('data-demo-sge', '1');
    document.body.appendChild(s);
  }

  window.demoSearchSubmit = function (event) {
    if (event) event.preventDefault();
    var input = document.getElementById('demo-hsearch');
    var q = (input && input.value ? input.value : '').trim();
    if (!q) return false;
    var u = new URL(window.location.href);
    u.searchParams.set('q', q);
    u.searchParams.set('s', q);
    u.searchParams.set('query', q);
    u.searchParams.set('search', q);
    window.location.href = u.toString();
    return false;
  };

  window.demoCloseSearchDrop = function () {
    var d = document.getElementById('demo-searchdrop');
    if (d) d.style.display = 'none';
  };

  function openDropIfQuery() {
    var u = new URLSearchParams(window.location.search);
    var q = u.get('q') || u.get('s') || u.get('query') || u.get('search');
    if (!q) return;
    var el = document.getElementById('demo-hsearch');
    if (el) el.value = q;
    var label = document.getElementById('demo-sd-q');
    if (label) label.textContent = '"' + q + '"';
    var d = document.getElementById('demo-searchdrop');
    if (d) d.style.display = 'block';
  }

  function boot() {
    loadChat();
    loadSge();
    openDropIfQuery();
    var form = document.getElementById('demo-search-form');
    if (form) form.addEventListener('submit', window.demoSearchSubmit);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
