// Frame-buster, loaded before anything else on every page. A CSP meta tag can't carry
// frame-ancestors, so a page that finds itself inside a frame hides itself (no clickjacking
// on a blank page) and tries to take over the top window. main.tsx also refuses to start
// the app inside a frame, in case the navigation is blocked.
(function () {
  'use strict';
  var framed;
  try {
    framed = window.top !== window.self;
  } catch (e) {
    framed = true;
  }
  if (!framed) return;
  document.documentElement.style.display = 'none';
  try {
    window.top.location.replace(window.self.location.href);
  } catch (e) {
    // Blocked (sandboxed frame or no user activation): the page stays blank.
  }
})();
