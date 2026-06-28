/* MAJUBAH — comportements partagés (progressive enhancement, sans dépendance). */
(function () {
  "use strict";
  var cfg = window.MAJUBAH || {};

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    // ---- Menu mobile accessible ----
    var nav = document.querySelector(".nav");
    var toggle = nav && nav.querySelector(".nav__toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var open = nav.getAttribute("data-open") === "true";
        nav.setAttribute("data-open", String(!open));
        toggle.setAttribute("aria-expanded", String(!open));
      });
      // Referme au clic sur un lien
      nav.querySelectorAll(".nav__menu a, .nav__cta a").forEach(function (a) {
        a.addEventListener("click", function () {
          nav.setAttribute("data-open", "false");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // ---- Lien de navigation actif ----
    var path = location.pathname.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
    document.querySelectorAll(".nav__link").forEach(function (a) {
      var href = a.getAttribute("href") || "";
      var target = href.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
      if (target !== "/" && path.indexOf(target.replace(/^\//, "")) !== -1) {
        a.setAttribute("aria-current", "page");
      } else if (target === "/" && path === "/") {
        a.setAttribute("aria-current", "page");
      }
    });

    // ---- Année courante ----
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });

    // ---- Valeurs métier depuis la config (data-mjb="chemin.dans.config") ----
    document.querySelectorAll("[data-mjb]").forEach(function (el) {
      var val = path_get(cfg, el.getAttribute("data-mjb"));
      if (val != null && val !== "") el.textContent = String(val);
    });
    // Prix formatés en euros (data-mjb-eur="chemin") → « 1 600 € »
    var eur = (window.Intl && Intl.NumberFormat) ? new Intl.NumberFormat("fr-FR") : null;
    document.querySelectorAll("[data-mjb-eur]").forEach(function (el) {
      var val = path_get(cfg, el.getAttribute("data-mjb-eur"));
      if (val != null && val !== "") el.textContent = (eur ? eur.format(val) : val) + " €";
    });
    // Liens dynamiques (data-mjb-href)
    document.querySelectorAll("[data-mjb-href]").forEach(function (el) {
      var val = path_get(cfg, el.getAttribute("data-mjb-href"));
      if (val) el.setAttribute("href", String(val));
    });

    // ---- Masquer les éléments dont la donnée config est vide (data-mjb-optional) ----
    document.querySelectorAll("[data-mjb-optional]").forEach(function (el) {
      var val = path_get(cfg, el.getAttribute("data-mjb-optional"));
      if (val == null || val === "") el.hidden = true;
    });

    // ---- Témoignages LinkedIn (carrousel circulaire) depuis la config ----
    (function () {
      var root = document.getElementById("testimonialsCarousel");
      if (!root) return;
      var items = (cfg.testimonials || []).filter(function (t) { return t && t.quote; });
      if (!items.length) return; // reste masqué → seul le bouton LinkedIn s'affiche
      root.hidden = false;

      function initials(name) { return String(name || "").trim().split(/\s+/).slice(0, 2).map(function (w) { return w.charAt(0).toUpperCase(); }).join(""); }
      var photosWrap = root.querySelector(".ctest__photos");
      var nameEl = root.querySelector(".ctest__name");
      var roleEl = root.querySelector(".ctest__role");
      var quoteEl = root.querySelector(".ctest__quote");
      var prevBtn = root.querySelector("[data-ctest-prev]");
      var nextBtn = root.querySelector("[data-ctest-next]");
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var n = items.length, active = 0, timer = null;

      var cards = items.map(function (t) {
        var card = document.createElement("div");
        card.className = "ctest__photo";
        if (t.photo) {
          var img = document.createElement("img");
          img.src = t.photo; img.alt = ""; img.loading = "lazy";
          card.appendChild(img);
        } else {
          card.className += " ctest__photo--initials";
          card.textContent = initials(t.name);
        }
        photosWrap.appendChild(card);
        return card;
      });

      function layout() {
        cards.forEach(function (card, i) {
          var off = (i - active + n) % n, tf, op, z;
          if (off === 0) { tf = "rotate(0deg) translate(0,0) scale(1)"; op = "1"; z = 30; }
          else if (off === 1) { tf = "rotate(6deg) translate(16px,-12px) scale(.94)"; op = ".5"; z = 20; }
          else if (off === 2) { tf = "rotate(-5deg) translate(-12px,10px) scale(.9)"; op = ".3"; z = 10; }
          else { tf = "scale(.85)"; op = "0"; z = 0; }
          card.style.transform = reduce ? "none" : tf;
          card.style.opacity = op;
          card.style.zIndex = String(z);
          card.style.pointerEvents = off === 0 ? "auto" : "none";
        });
      }
      function entrance(el, delay) {
        el.style.transition = "none"; el.style.opacity = "0"; el.style.transform = "translateY(10px)";
        void el.offsetWidth; // reflow
        el.style.transition = "opacity .45s var(--ease) " + delay + "ms, transform .45s var(--ease) " + delay + "ms";
        el.style.opacity = "1"; el.style.transform = "none";
      }
      function renderText() {
        var t = items[active];
        nameEl.textContent = t.name || "";
        roleEl.textContent = t.role || "";
        quoteEl.innerHTML = "";
        if (reduce) { quoteEl.textContent = t.quote || ""; return; }
        entrance(nameEl, 0); entrance(roleEl, 60);
        var words = String(t.quote || "").split(/\s+/);
        var frag = document.createDocumentFragment(), spans = [];
        words.forEach(function (w) {
          var s = document.createElement("span");
          s.className = "ctest__word"; s.textContent = w;
          frag.appendChild(s); frag.appendChild(document.createTextNode(" "));
          spans.push(s);
        });
        quoteEl.appendChild(frag);
        spans.forEach(function (s, i) {
          window.setTimeout(function () { s.classList.add("in"); }, 120 + Math.min(i * 15, 900));
        });
      }
      function go(d) { active = (active + d + n) % n; layout(); renderText(); }
      function start() { if (n > 1 && !reduce && !timer) timer = window.setInterval(function () { go(1); }, 6000); }
      function stop() { if (timer) { window.clearInterval(timer); timer = null; } }
      function restart() { stop(); start(); }

      if (n <= 1) { prevBtn.style.display = "none"; nextBtn.style.display = "none"; }
      prevBtn.addEventListener("click", function () { go(-1); restart(); });
      nextBtn.addEventListener("click", function () { go(1); restart(); });
      root.addEventListener("mouseenter", stop);
      root.addEventListener("mouseleave", start);
      root.addEventListener("focusin", stop);
      root.addEventListener("focusout", start);

      layout();
      renderText();
      start();
    })();

    // ---- Newsletter (section robot) : le formulaire est envoyé nativement à Brevo
    //      (action sibforms dans le HTML). Brevo gère la confirmation et le double opt-in.
    //      Pas d'interception JS ici, sinon l'envoi vers Brevo serait bloqué.

    // ---- Apparition en cascade : les enfants des grilles révélées entrent un par un ----
    document.querySelectorAll(".reveal.grid, .reveal.mode-grid").forEach(function (g) {
      g.classList.add("is-stagger");
      var kids = g.children;
      for (var i = 0; i < kids.length; i++) { kids[i].style.transitionDelay = (i * 70) + "ms"; }
    });

    // ---- Apparition au scroll ----
    var reveals = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (el) { io.observe(el); });
    }

    // ---- Barre de progression de lecture (corail) ----
    var bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
    var barTick = false;
    function updateBar() {
      barTick = false;
      var h = document.documentElement;
      var max = (h.scrollHeight - h.clientHeight) || 1;
      var p = (h.scrollTop || window.pageYOffset || 0) / max;
      bar.style.width = (Math.min(Math.max(p, 0), 1) * 100) + "%";
    }
    window.addEventListener("scroll", function () { if (!barTick) { barTick = true; window.requestAnimationFrame(updateBar); } }, { passive: true });
    window.addEventListener("resize", updateBar);
    updateBar();

    // ---- Composant « tablette 3D » : chaque .mjb-tablet se redresse au scroll ----
    (function () {
      var tablets = [].slice.call(document.querySelectorAll(".mjb-tablet"));
      if (!tablets.length) return;
      if (reduce) { tablets.forEach(function (t) { t.style.transform = "none"; }); return; }
      var ticking = false;
      function up() {
        ticking = false;
        var vh = window.innerHeight || document.documentElement.clientHeight;
        tablets.forEach(function (card) {
          var r = card.getBoundingClientRect();
          var start = vh, end = vh * 0.5 - r.height * 0.5;
          var p = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
          card.style.transform = "rotateX(" + (20 * (1 - p)) + "deg) scale(" + (1.04 - 0.04 * p) + ")";
        });
      }
      function on() { if (!ticking) { ticking = true; window.requestAnimationFrame(up); } }
      window.addEventListener("scroll", on, { passive: true });
      window.addEventListener("resize", on);
      up();
    })();

    // ---- Composant « scroll and see » : médias .scroll-reveal qui s'ouvrent au scroll ----
    (function () {
      if (reduce) return;
      var blocks = [].slice.call(document.querySelectorAll(".scroll-reveal")).map(function (sec) {
        return { sec: sec, media: sec.querySelector(".scroll-reveal__media") };
      }).filter(function (b) { return b.media; });
      if (!blocks.length) return;
      var ticking = false;
      function up() {
        ticking = false;
        var vh = window.innerHeight || document.documentElement.clientHeight;
        blocks.forEach(function (b) {
          var total = b.sec.offsetHeight - vh;
          if (total <= 0) return;
          var p = Math.max(0, Math.min(1, (-b.sec.getBoundingClientRect().top) / total));
          var ep = Math.min(1, p / 0.7);
          var iy = 35 * (1 - ep), ix = 42 * (1 - ep), r = 1000 - (1000 - 16) * ep;
          b.media.style.clipPath = "inset(" + iy + "% " + ix + "% " + iy + "% " + ix + "% round " + r + "px)";
        });
      }
      function on() { if (!ticking) { ticking = true; window.requestAnimationFrame(up); } }
      window.addEventListener("scroll", on, { passive: true });
      window.addEventListener("resize", on);
      up();
    })();
  });

  function path_get(obj, p) {
    if (!obj || !p) return undefined;
    return p.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
  }
})();
