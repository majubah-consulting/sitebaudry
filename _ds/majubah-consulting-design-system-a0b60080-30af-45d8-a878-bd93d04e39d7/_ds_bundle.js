/* @ds-bundle: {"format":3,"namespace":"MAJUBAHConsultingDesignSystem_a0b600","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"0b47a265a67a","components/core/Badge.jsx":"0d47887e057c","components/core/Button.jsx":"aad92a7a3b67","components/core/Card.jsx":"602366273b51","components/forms/Input.jsx":"cb5407082ae5","ui_kits/site-vitrine/app.jsx":"aa6839c8c0b9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MAJUBAHConsultingDesignSystem_a0b600 = window.MAJUBAHConsultingDesignSystem_a0b600 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Renders the official MAJUBAH lockups from the asset library.
   `basePath` must point at the folder holding the logo PNGs (default "assets/logo").
   Per the charte, the logo may only appear on white, bleu or corail backgrounds. */

const FILES = {
  horizontal: {
    color: 'majubah-horizontal.png',
    white: 'majubah-horizontal-white.png'
  },
  sigle: {
    color: 'sigle-bleu.png',
    navy: 'sigle-bleu.png',
    bleu: 'sigle-bleu.png',
    orange: 'sigle-orange.png',
    corail: 'sigle-orange.png',
    noir: 'sigle-noir.png',
    white: 'sigle-white.png'
  }
};
function Logo({
  variant = 'horizontal',
  tone = 'color',
  height,
  basePath = 'assets/logo',
  alt,
  style,
  ...rest
}) {
  const set = FILES[variant] || FILES.horizontal;
  const file = set[tone] || set.color || Object.values(set)[0];
  const h = height || (variant === 'sigle' ? 40 : 34);
  const label = alt || (variant === 'sigle' ? 'MAJUBAH Consulting — sigle' : 'MAJUBAH Consulting');
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}/${file}`,
    alt: label,
    style: {
      height: typeof h === 'number' ? `${h}px` : h,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mjb-badge{
  display:inline-flex; align-items:center; gap:.45em;
  font-family:var(--font-body); font-weight:var(--fw-semibold);
  font-size:var(--text-xs); line-height:1; white-space:nowrap;
  padding:.42em .75em; border-radius:var(--radius-pill);
  border:1px solid transparent;
}
.mjb-badge--solid-navy{ background:var(--primary); color:#fff; }
.mjb-badge--solid-corail{ background:var(--accent); color:#fff; }
.mjb-badge--soft-navy{ background:var(--surface-bleu-wash); color:var(--color-bleu-nuit); }
.mjb-badge--soft-corail{ background:var(--surface-corail-wash); color:var(--color-corail-vif); }
.mjb-badge--outline{ background:transparent; color:var(--text-body); border-color:var(--border-default); }
.mjb-badge--success{ background:var(--color-success-bg); color:var(--color-success); }
.mjb-badge--warning{ background:var(--color-warning-bg); color:var(--color-warning); }
.mjb-badge--danger{ background:var(--color-danger-bg); color:var(--color-danger); }
.mjb-badge__dot{ width:.5em; height:.5em; border-radius:50%; background:currentColor; flex:none; }
.mjb-badge--caps{ text-transform:uppercase; letter-spacing:var(--tracking-caps); font-weight:var(--fw-bold); font-size:var(--text-2xs); }
`;
let injected = false;
function ensureStyles() {
  if (!injected && typeof document !== 'undefined') {
    const s = document.createElement('style');
    s.setAttribute('data-mjb', 'badge');
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Badge({
  children,
  variant = 'soft-navy',
  dot = false,
  caps = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const cls = ['mjb-badge', `mjb-badge--${variant}`, caps ? 'mjb-badge--caps' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "mjb-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/* Injects component CSS once, scoped under .mjb-btn. Styling reads brand tokens. */
const CSS = `
.mjb-btn{
  --_bg:var(--primary); --_fg:var(--on-primary); --_bd:transparent;
  display:inline-flex; align-items:center; justify-content:center; gap:.6em;
  font-family:var(--font-body); font-weight:var(--fw-bold);
  letter-spacing:var(--tracking-wide); line-height:1; white-space:nowrap;
  border:var(--border-thick) solid var(--_bd); border-radius:var(--radius-pill);
  background:var(--_bg); color:var(--_fg); cursor:pointer;
  transition:background var(--dur-base) var(--ease-standard),
             border-color var(--dur-base) var(--ease-standard),
             transform var(--dur-fast) var(--ease-standard);
}
.mjb-btn:hover{ background:var(--_bgh,var(--_bg)); border-color:var(--_bdh,var(--_bd)); text-decoration:none; }
.mjb-btn:active{ transform:translateY(1px); background:var(--_bgp,var(--_bgh,var(--_bg))); }
.mjb-btn:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
.mjb-btn[disabled],.mjb-btn[aria-disabled="true"]{ opacity:.45; pointer-events:none; }
.mjb-btn--md{ font-size:var(--text-sm); padding:.72em 1.5em; }
.mjb-btn--sm{ font-size:var(--text-xs); padding:.6em 1.15em; }
.mjb-btn--lg{ font-size:var(--text-base); padding:.85em 1.9em; }
.mjb-btn--full{ width:100%; }
.mjb-btn--primary{ --_bg:var(--primary); --_fg:var(--on-primary); --_bgh:var(--primary-hover); --_bgp:var(--primary-press); }
.mjb-btn--accent{ --_bg:var(--accent); --_fg:var(--on-accent); --_bgh:var(--accent-hover); --_bgp:var(--accent-press); }
.mjb-btn--secondary{ --_bg:transparent; --_fg:var(--primary); --_bd:var(--border-default); --_bgh:var(--surface-muted); --_bdh:var(--primary); }
.mjb-btn--ghost{ --_bg:transparent; --_fg:var(--primary); --_bd:transparent; --_bgh:var(--surface-sunken); }
.mjb-btn--link{ --_bg:transparent; --_fg:var(--accent); --_bd:transparent; border-radius:var(--radius-xs); padding-inline:.2em; }
.mjb-btn--link:hover{ text-decoration:underline; text-underline-offset:3px; }
/* on navy surfaces */
.mjb-btn--on-navy.mjb-btn--secondary{ --_fg:#fff; --_bd:var(--border-on-navy); --_bgh:rgba(255,255,255,.08); --_bdh:rgba(255,255,255,.5); }
.mjb-btn__icon{ display:inline-flex; flex:none; }
`;
let injected = false;
function ensureStyles() {
  if (!injected && typeof document !== 'undefined') {
    const s = document.createElement('style');
    s.setAttribute('data-mjb', 'btn');
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  as,
  href,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onNavy = false,
  disabled = false,
  className = '',
  ...rest
}) {
  ensureStyles();
  const Tag = as || (href ? 'a' : 'button');
  const cls = ['mjb-btn', `mjb-btn--${variant}`, `mjb-btn--${size}`, fullWidth ? 'mjb-btn--full' : '', onNavy ? 'mjb-btn--on-navy' : '', className].filter(Boolean).join(' ');
  const props = {
    className: cls,
    ...rest
  };
  if (Tag === 'a') {
    props.href = href;
    if (disabled) props['aria-disabled'] = 'true';
  } else {
    props.disabled = disabled;
    props.type = rest.type || 'button';
  }
  return /*#__PURE__*/React.createElement(Tag, props, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "mjb-btn__icon"
  }, leftIcon), children, rightIcon && /*#__PURE__*/React.createElement("span", {
    className: "mjb-btn__icon"
  }, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mjb-card{
  position:relative; background:var(--surface-card);
  border:1px solid var(--border-subtle); border-radius:var(--radius-card);
  box-shadow:var(--shadow-sm); padding:var(--space-6);
  transition:box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard);
}
.mjb-card--flat{ box-shadow:none; }
.mjb-card--muted{ background:var(--surface-muted); border-color:var(--border-subtle); box-shadow:none; }
.mjb-card--navy{ background:var(--surface-navy); border-color:transparent; color:var(--text-on-navy); }
.mjb-card--navy :where(h1,h2,h3,h4){ color:#fff; }
.mjb-card--corail{ background:var(--surface-corail); border-color:transparent; color:#fff; }
.mjb-card--corail :where(h1,h2,h3,h4){ color:#fff; }
.mjb-card--interactive{ cursor:pointer; }
.mjb-card--interactive:hover{ box-shadow:var(--shadow-lg); transform:translateY(-3px); border-color:var(--border-default); }
.mjb-card--accent::before{
  content:""; position:absolute; left:var(--space-6); right:var(--space-6); top:0; height:var(--border-accent);
  background:var(--accent); border-radius:0 0 var(--radius-pill) var(--radius-pill);
}
.mjb-card--pad-lg{ padding:var(--space-10); }
.mjb-card--pad-sm{ padding:var(--space-4); }
`;
let injected = false;
function ensureStyles() {
  if (!injected && typeof document !== 'undefined') {
    const s = document.createElement('style');
    s.setAttribute('data-mjb', 'card');
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Card({
  children,
  variant = 'default',
  interactive = false,
  accent = false,
  padding = 'md',
  as = 'div',
  className = '',
  ...rest
}) {
  ensureStyles();
  const Tag = as;
  const pad = padding === 'lg' ? 'mjb-card--pad-lg' : padding === 'sm' ? 'mjb-card--pad-sm' : '';
  const cls = ['mjb-card', variant !== 'default' ? `mjb-card--${variant}` : '', interactive ? 'mjb-card--interactive' : '', accent ? 'mjb-card--accent' : '', pad, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.mjb-field{ display:flex; flex-direction:column; gap:.4em; font-family:var(--font-body); }
.mjb-field__label{ font-size:var(--text-sm); font-weight:var(--fw-semibold); color:var(--text-strong); }
.mjb-field__req{ color:var(--accent); margin-left:.15em; }
.mjb-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
.mjb-field__error{ font-size:var(--text-xs); color:var(--color-danger); font-weight:var(--fw-semibold); }
.mjb-inputwrap{ position:relative; display:flex; align-items:center; }
.mjb-inputwrap__icon{ position:absolute; left:.85em; display:inline-flex; color:var(--text-subtle); pointer-events:none; }
.mjb-input{
  width:100%; font-family:var(--font-body); font-size:var(--text-sm); color:var(--text-strong);
  background:var(--surface-card); border:1px solid var(--border-default); border-radius:var(--radius-md);
  padding:.72em .9em; transition:border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard);
}
.mjb-input::placeholder{ color:var(--text-subtle); }
.mjb-input:hover{ border-color:var(--border-strong); }
.mjb-input:focus{ outline:none; border-color:var(--primary); box-shadow:var(--shadow-focus); }
.mjb-input--icon{ padding-left:2.5em; }
.mjb-input--err{ border-color:var(--color-danger); }
.mjb-input--err:focus{ box-shadow:0 0 0 3px var(--color-danger-bg); }
.mjb-input[disabled]{ background:var(--surface-sunken); color:var(--text-muted); cursor:not-allowed; }
select.mjb-input{ appearance:none; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%236f8085' stroke-width='1.6' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-position:right .9em center; padding-right:2.4em; }
`;
let injected = false;
function ensureStyles() {
  if (!injected && typeof document !== 'undefined') {
    const s = document.createElement('style');
    s.setAttribute('data-mjb', 'input');
    s.textContent = CSS;
    document.head.appendChild(s);
    injected = true;
  }
}
function Field({
  label,
  required,
  hint,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: "mjb-field",
    htmlFor: htmlFor
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "mjb-field__label"
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "mjb-field__req"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "mjb-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "mjb-field__hint"
  }, hint) : null);
}
function Input({
  label,
  hint,
  error,
  required,
  leftIcon,
  className = '',
  id,
  ...rest
}) {
  ensureStyles();
  const cls = ['mjb-input', leftIcon ? 'mjb-input--icon' : '', error ? 'mjb-input--err' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    required: required,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "mjb-inputwrap"
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "mjb-inputwrap__icon"
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: cls
  }, rest))));
}
function Select({
  label,
  hint,
  error,
  required,
  children,
  className = '',
  id,
  ...rest
}) {
  ensureStyles();
  const cls = ['mjb-input', error ? 'mjb-input--err' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    required: required,
    hint: hint,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: cls
  }, rest), children));
}
Object.assign(__ds_scope, { Input, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Card,
  Logo,
  Input,
  Select
} = window.MAJUBAHConsultingDesignSystem_a0b600;
const {
  useState,
  useEffect
} = React;
const LOGO = "../../assets/logo";
const Icon = ({
  name,
  ...rest
}) => /*#__PURE__*/React.createElement("i", _extends({
  "data-lucide": name
}, rest));
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav__in"
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "color",
    height: 32,
    basePath: LOGO
  }), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#domaines"
  }, "Domaines"), /*#__PURE__*/React.createElement("a", {
    href: "#formations"
  }, "Formations"), /*#__PURE__*/React.createElement("a", {
    href: "#approche"
  }, "Notre approche"), /*#__PURE__*/React.createElement("a", {
    href: "#temoignages"
  }, "Avis")), /*#__PURE__*/React.createElement("div", {
    className: "nav__cta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qbadge"
  }, /*#__PURE__*/React.createElement("i", null), "Certifi\xE9 Qualiopi"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    href: "#contact"
  }, "Demander un devis"))));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "in hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Organisme de formation certifi\xE9 Qualiopi"), /*#__PURE__*/React.createElement("h1", {
    className: "hero"
  }, "Structurer, transmettre, transformer les comp\xE9tences."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 22,
      maxWidth: "46ch"
    }
  }, "MAJUBAH Consulting accompagne dirigeants, managers et formateurs sur la strat\xE9gie, le management et l'intelligence artificielle \u2014 avec une p\xE9dagogie active et op\xE9rationnelle."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#contact",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "R\xE9server un \xE9change"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    href: "#formations"
  }, "Voir les formations")), /*#__PURE__*/React.createElement("div", {
    className: "hero-proof"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("b", null, "+120"), /*#__PURE__*/React.createElement("span", null, "sessions anim\xE9es")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("b", null, "96%"), /*#__PURE__*/React.createElement("span", null, "taux de satisfaction")), /*#__PURE__*/React.createElement("div", {
    className: "stat"
  }, /*#__PURE__*/React.createElement("b", null, "OPCO"), /*#__PURE__*/React.createElement("span", null, "financements mobilisables")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-visual"
  }, /*#__PURE__*/React.createElement("img", {
    className: "motif",
    src: `${LOGO}/sigle-white.png`,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "topband"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k"
  }, "Expertise terrain"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, "Du dirigeant au formateur")), /*#__PURE__*/React.createElement("div", {
    className: "floatcard"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Qualiopi \u2014 Actions de formation"), /*#__PURE__*/React.createElement("span", null, "Qualit\xE9 certifi\xE9e, finan\xE7able"))))));
}
const DOMAINES = [{
  ic: "target",
  t: "Stratégie d'entreprise",
  d: "Clarifier la vision, structurer la feuille de route et aligner les équipes."
}, {
  ic: "users",
  t: "Management",
  d: "Manager avec impact à l'ère de l'incertitude et de l'IA."
}, {
  ic: "cpu",
  t: "Intelligence Artificielle",
  d: "Comprendre, cadrer et déployer l'IA sans esthétique science-fiction."
}, {
  ic: "trending-up",
  t: "Marketing stratégique",
  d: "Positionner l'offre et construire une croissance durable."
}, {
  ic: "megaphone",
  t: "Communication",
  d: "Transmettre un message clair, à l'écrit comme à l'oral."
}];
function Domaines() {
  return /*#__PURE__*/React.createElement("section", {
    id: "domaines",
    style: {
      background: "var(--surface-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Domaines d'intervention"), /*#__PURE__*/React.createElement("h2", {
    className: "sec"
  }, "Cinq expertises, une exigence p\xE9dagogique.")), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      maxWidth: "34ch",
      margin: 0
    }
  }, "Des parcours con\xE7us pour passer de l'intention \xE0 la ma\xEEtrise.")), /*#__PURE__*/React.createElement("div", {
    className: "domaines"
  }, DOMAINES.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.t,
    className: "dom",
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ic-tile"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: d.ic
  })), /*#__PURE__*/React.createElement("h3", null, d.t), /*#__PURE__*/React.createElement("p", null, d.d))))));
}
const COURSES = [{
  cat: "Intelligence Artificielle",
  v: "soft-corail",
  t: "L'IA au service des managers",
  d: "Cadrer les cas d'usage, outiller les équipes et déployer en confiance.",
  dur: "2 jours · 14h",
  price: "1 490 €",
  fin: "Finançable OPCO"
}, {
  cat: "Management",
  v: "soft-navy",
  t: "Manager une équipe en transformation",
  d: "Posture, rituels et leviers concrets pour embarquer durablement.",
  dur: "3 jours · 21h",
  price: "1 890 €",
  fin: "Finançable OPCO"
}, {
  cat: "Formation de formateurs",
  v: "soft-navy",
  t: "Concevoir & animer une formation",
  d: "De l'ingénierie pédagogique à l'animation qui marque les esprits.",
  dur: "3 jours · 21h",
  price: "1 990 €",
  fin: "Éligible Qualiopi"
}];
function Formations() {
  return /*#__PURE__*/React.createElement("section", {
    id: "formations"
  }, /*#__PURE__*/React.createElement("div", {
    className: "in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Formations phares"), /*#__PURE__*/React.createElement("h2", {
    className: "sec"
  }, "Des programmes pr\xEAts \xE0 d\xE9ployer.")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    href: "#",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Tout le catalogue")), /*#__PURE__*/React.createElement("div", {
    className: "formations"
  }, COURSES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.t,
    className: "course",
    accent: true,
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: c.v,
    caps: true
  }, c.cat), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, c.dur)), /*#__PURE__*/React.createElement("h3", null, c.t), /*#__PURE__*/React.createElement("p", null, c.d), /*#__PURE__*/React.createElement("div", {
    className: "foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, c.price, /*#__PURE__*/React.createElement("small", null, c.fin)), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Programme")))))));
}
const STEPS = [{
  n: "01",
  t: "Structurer",
  d: "Nous clarifions les compétences cibles et bâtissons une architecture pédagogique solide."
}, {
  n: "02",
  t: "Transmettre",
  d: "Une animation active, concrète et incarnée — pensée pour ancrer durablement."
}, {
  n: "03",
  t: "Transformer",
  d: "Nous mesurons, ajustons et accompagnons la mise en pratique sur le terrain."
}];
function Approche() {
  return /*#__PURE__*/React.createElement("section", {
    id: "approche",
    className: "band"
  }, /*#__PURE__*/React.createElement("img", {
    className: "motif",
    src: `${LOGO}/sigle-white.png`,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Notre approche"), /*#__PURE__*/React.createElement("h2", {
    className: "sec",
    style: {
      color: "#fff",
      maxWidth: "20ch"
    }
  }, "Pas seulement un prestataire IA. Un partenaire de la mont\xE9e en comp\xE9tence."), /*#__PURE__*/React.createElement("div", {
    className: "steps"
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "step",
    key: s.n
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, s.n), /*#__PURE__*/React.createElement("h3", null, s.t), /*#__PURE__*/React.createElement("p", null, s.d))))));
}
const AVIS = [{
  q: "Une montée en compétence concrète sur l'IA, sans jargon. Nos managers ont appliqué dès la semaine suivante.",
  n: "Camille Royer",
  r: "DRH · ETI industrielle",
  c: "var(--color-bleu-nuit)"
}, {
  q: "MAJUBAH a structuré notre parcours de formateurs internes de A à Z. Sérieux, humain, opérationnel.",
  n: "Yann Lemoine",
  r: "Directeur Académie · Groupe services",
  c: "var(--color-corail)"
}, {
  q: "Un accompagnement Qualiopi sans accroc et des supports premium pour nos appels d'offres.",
  n: "Souad Benali",
  r: "Responsable formation · OPCO",
  c: "var(--color-bleu-ardoise)"
}];
function Temoignages() {
  return /*#__PURE__*/React.createElement("section", {
    id: "temoignages",
    style: {
      background: "var(--surface-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "in"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow center",
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, "Ils nous font confiance"), /*#__PURE__*/React.createElement("h2", {
    className: "sec",
    style: {
      textAlign: "center"
    }
  }, "Des r\xE9sultats qui se transmettent."), /*#__PURE__*/React.createElement("div", {
    className: "temoins"
  }, AVIS.map(a => /*#__PURE__*/React.createElement(Card, {
    key: a.n,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    className: "quote",
    style: {
      marginTop: 12
    }
  }, "\xAB ", a.q, " \xBB"), /*#__PURE__*/React.createElement("div", {
    className: "who"
  }, /*#__PURE__*/React.createElement("span", {
    className: "av",
    style: {
      background: a.c
    }
  }, a.n.split(" ").map(w => w[0]).join("")), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, a.n), /*#__PURE__*/React.createElement("span", null, a.r))))))));
}
function Contact() {
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "in contact-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Parlons de votre projet"), /*#__PURE__*/React.createElement("h2", {
    className: "sec"
  }, "Demander un devis ou un \xE9change."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      marginTop: 16,
      maxWidth: "40ch"
    }
  }, "D\xE9crivez votre besoin : nous revenons vers vous sous 24h ouvr\xE9es avec une proposition adapt\xE9e et finan\xE7able."), /*#__PURE__*/React.createElement("div", {
    className: "contact-list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Email"), /*#__PURE__*/React.createElement("span", null, "contact@majubah-consulting.fr"))), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "T\xE9l\xE9phone"), /*#__PURE__*/React.createElement("span", null, "01 23 45 67 89 \u2014 du lundi au vendredi"))), /*#__PURE__*/React.createElement("div", {
    className: "item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Qualiopi"), /*#__PURE__*/React.createElement("span", null, "Actions de formation \u2014 qualit\xE9 certifi\xE9e"))))), /*#__PURE__*/React.createElement(Card, {
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "ok"
  }, /*#__PURE__*/React.createElement("div", {
    className: "check"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check"
  })), /*#__PURE__*/React.createElement("h3", null, "Demande envoy\xE9e"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Merci. Notre \xE9quipe vous recontacte sous 24h ouvr\xE9es."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Nouvelle demande"))) : /*#__PURE__*/React.createElement("form", {
    className: "form-card",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "fn",
    label: "Pr\xE9nom",
    required: true,
    placeholder: "Camille"
  }), /*#__PURE__*/React.createElement(Input, {
    id: "ln",
    label: "Nom",
    required: true,
    placeholder: "Royer"
  })), /*#__PURE__*/React.createElement(Input, {
    id: "em",
    label: "Email professionnel",
    type: "email",
    required: true,
    placeholder: "vous@entreprise.fr",
    leftIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail"
    })
  }), /*#__PURE__*/React.createElement(Select, {
    id: "dm",
    label: "Domaine concern\xE9",
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Choisir un domaine\u2026"), DOMAINES.map(d => /*#__PURE__*/React.createElement("option", {
    key: d.t
  }, d.t)), /*#__PURE__*/React.createElement("option", null, "Formation de formateurs")), /*#__PURE__*/React.createElement(Input, {
    id: "ms",
    label: "Votre besoin en bref",
    placeholder: "Ex. former 12 managers \xE0 l'IA",
    hint: "Nous vous r\xE9pondons sous 24h ouvr\xE9es."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    fullWidth: true,
    type: "submit",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "Envoyer ma demande")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("div", {
    className: "in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "foot-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    tone: "white",
    height: 34,
    basePath: LOGO
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      fontSize: 14,
      maxWidth: "30ch",
      color: "rgba(255,255,255,.7)"
    }
  }, "Organisme de formation certifi\xE9 Qualiopi. Strat\xE9gie, management, IA, marketing & communication.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Domaines"), DOMAINES.map(d => /*#__PURE__*/React.createElement("a", {
    key: d.t,
    href: "#domaines"
  }, d.t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Formations"), /*#__PURE__*/React.createElement("a", {
    href: "#formations"
  }, "Catalogue"), /*#__PURE__*/React.createElement("a", {
    href: "#formations"
  }, "Formation de formateurs"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Sur-mesure intra"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Financement OPCO")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Demander un devis"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Nous \xE9crire"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Mentions l\xE9gales"))), /*#__PURE__*/React.createElement("div", {
    className: "foot-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 MAJUBAH Consulting \u2014 Tous droits r\xE9serv\xE9s."), /*#__PURE__*/React.createElement("span", null, "Certifi\xE9 Qualiopi \xB7 Actions de formation"))));
}
function App() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "site"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Domaines, null), /*#__PURE__*/React.createElement(Formations, null), /*#__PURE__*/React.createElement(Approche, null), /*#__PURE__*/React.createElement(Temoignages, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
