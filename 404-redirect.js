(function () {
  'use strict';
  var base = "/board/";
  var full = window.location.pathname + window.location.search + window.location.hash;
  if (full.indexOf(base) !== 0) return;
  var rest = full.substring(base.length);
  if (!rest || rest === 'index.html') return;
  window.location.replace(base + '?__redirect=' + encodeURIComponent(rest));
})();
