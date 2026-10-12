/*
 * Optional light/dark switch.
 *
 * Privacy: nothing is stored unless the visitor clicks the button, and then
 * only the word "light" or "dark" under the key "theme" in localStorage, and
 * only when it differs from the visitor's system setting (choosing the system
 * value again removes the key). Nothing is sent anywhere.
 * Without JavaScript the button stays hidden and the site follows the system.
 */
(function () {
  "use strict";
  var KEY = "theme";
  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function systemTheme() {
    return media && media.matches ? "dark" : "light";
  }

  function read() {
    try { return window.localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function write(value) {
    try {
      if (value) { window.localStorage.setItem(KEY, value); }
      else { window.localStorage.removeItem(KEY); }
    } catch (e) { /* storage unavailable: the choice lasts for this page only */ }
  }

  function current() {
    return root.getAttribute("data-theme") || systemTheme();
  }

  // Apply a saved choice before first paint (this file is loaded in <head>).
  var saved = read();
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  }

  function init() {
    var button = document.getElementById("theme-toggle");
    if (!button) { return; }

    function refresh() {
      var next = current() === "dark" ? "light" : "dark";
      button.setAttribute("aria-label", "Switch to " + next + " mode");
      button.setAttribute("title", "Switch to " + next + " mode");
    }

    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      if (next === systemTheme()) {
        root.removeAttribute("data-theme");
        write(null);
      } else {
        root.setAttribute("data-theme", next);
        write(next);
      }
      refresh();
    });

    if (media && media.addEventListener) {
      media.addEventListener("change", refresh);
    }

    button.hidden = false;
    refresh();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
