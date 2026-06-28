# MAJUBAH Consulting — Design System

> Organisme de formation certifié **Qualiopi**.
> Domaines : Stratégie d'entreprise · Management · Intelligence Artificielle · Marketing stratégique · Communication.

This is the single source of truth for designing MAJUBAH-branded interfaces, decks and documents. Consumers link one file — `styles.css` — to inherit every colour, font and spacing token.

## Sources

Built entirely from the brand's own materials (no codebase or Figma was provided):

- `uploads/MAJUBAH_Charte-graphique.pdf` — official 2024 brand book by **LIV Studio** (livstudio.fr). Colours, typography, logo rules and clear-space all come from here.
- `uploads/MAJUBAH_BLANC.jpg` — horizontal full-colour lockup.
- `uploads/MAJUBAH_SIGLE_BLEU.jpg`, `…_ORANGE.jpg`, `…_NOIR.jpg` — the circular sigle in each colour.

Processed, transparent-background versions live in `assets/logo/`.

---

## Positioning — what to make people feel

MAJUBAH Consulting is **not just an AI vendor**. It is a serious training organisation that helps companies, leaders and trainers **structure, transmit and transform** skills. Every artifact should read: premium yet accessible, institutional but human, expert and field-proven — **never cold, never sci-fi**.

Supports it must serve: présentations commerciales · formations IA · accompagnements Qualiopi · formation de formateurs · appels d'offres · communication LinkedIn · documents premium pour dirigeants, managers, OPCO et partenaires institutionnels.

---

## CONTENT FUNDAMENTALS

**Language.** French (France), professional register. Accents always correct (é, à, ç). Use the **vous** form — respectful, institutional. Speak about the client's outcomes ("**vos** équipes", "**votre** transformation"), and about MAJUBAH as **nous**.

**Tone.** Confident, clear, operational. Short declarative sentences. Lead with the human and the result, not the technology. Avoid hype, avoid jargon walls, avoid "révolutionnaire / disruptif / game-changer". Prefer verbs of pedagogy and transformation: *structurer, transmettre, transformer, accompagner, monter en compétence, piloter, déployer*.

**Casing.** Titles in French sentence case **or** UPPERCASE-with-tracking for short eyebrows/labels (echoing the wordmark). Never Title Case Every Word (that's an anglicism). Eyebrows are uppercase, tracked, corail.

**Examples (house voice):**
- Eyebrow: `INTELLIGENCE ARTIFICIELLE`
- Title: *"Former vos équipes à l'IA, sans esthétique science-fiction."*
- Lead: *"Nous structurons, transmettons et transformons les compétences au sein des organisations."*
- CTA: *"Demander un devis"*, *"Réserver un échange"*, *"Télécharger le programme"*
- Reassurance line: *"Organisme de formation certifié Qualiopi."*

**Numbers & proof.** Cite real, sober proof (taux de satisfaction, nombre de sessions, financements OPCO). No invented stats, no decorative metrics. One strong figure beats five weak ones.

**Emoji.** Never. The brand uses no emoji. Use the line-icon set instead (see Iconography).

---

## VISUAL FOUNDATIONS

**Colour.** Two brand colours only: **bleu nuit `#194759`** (confidence, strategy, technology) and **corail `#eb5436`** (energy, the MAJUBAH accent). The charte's six accompaniment shades (anthracite, bleu ardoise, bleu acier, corail vif, corail clair, saumon) enrich layouts *"en toute élégance et modernité"*. Corail is an **accent** — used in touches (eyebrows, one CTA, rules, a single highlighted word), never as a flood. Backgrounds are predominantly **white and light cool grey** ("beaucoup d'espace blanc"); navy is the premium dark surface; corail backgrounds are rare and deliberate. The logo may sit on **white, bleu or corail only**.

**Typography.** Display/titrage = **Sora** (geometric grotesque — substitute for proprietary *Nipera*). Body/UI = **Lato** (the charte's official accompaniment font, on Google Fonts). Hierarchy is decisive: strong display titles, short subheads, very airy body (line-height 1.55–1.7). Eyebrows uppercase tracked corail. Numbers/stats in Sora.

**Layout & whitespace.** Minimalist, generous. 4px spacing grid; sections breathe (`--section-y` = 96px). Content max-widths keep measure comfortable (~54ch for body). Asymmetric, editorial compositions over dense grids. Little text per view.

**Backgrounds.** Flat colour first — white, `--surface-muted` grey, or navy. **No flashy gradients, no neon, no purple.** The circular **sigle** may be used large at low opacity (~12–18%) as a watermark/motif on navy panels — the system's signature texture. Real photography or realistic mockups when imagery is needed, treated with a white / bleu / corail filter per the charte (warm, human, cool-professional — never artificial AI render, never humanoid robots).

**Cards.** White surface, 1px `--border-subtle`, radius `--radius-lg` (14px), soft navy-tinted shadow (`--shadow-sm`). Optional corail rule across the top (`accent`). Navy and corail variants for emphasis. Hover (interactive): lift 3px + `--shadow-lg`. **No coloured-left-border cards.**

**Borders & radii.** Sober. Hairline 1px borders; radii 6–14px for surfaces; **buttons are full pills** (`--radius-pill`). Corail 3px rule for emphasis accents.

**Shadows.** Soft, low-spread, tinted with the navy (`rgba(18,55,71,…)`). Never black, never heavy, never gl.

**Motion.** Calm and confident. `--ease-standard` / `--ease-out`, 120–320ms. Fades and small translations (≤4px). **No bounce, no spring, no infinite decorative loops.**

**Hover / press.** Hover = darker fill (primary→`--primary-hover`) or subtle tint for outline/ghost. Press = `translateY(1px)` + a darker press token. Focus = 3px `--focus-ring` (bleu acier) ring.

**Imagery vibe.** Warm-but-professional, human, real. Cool institutional crops, soft natural light. Avoid stocky "AI" clichés, purple/neon, sci-fi robots.

---

## ICONOGRAPHY

The brand book defines **no icon set**. The visual language is **thin, single-weight line art** (the sigle itself is one continuous ~outline stroke). To match it we standardise on **[Lucide](https://lucide.dev)** — open-source, 1.5–2px stroke, rounded joins — which sits naturally beside the logo.

> ⚠️ **Substitution flagged:** Lucide is our recommended match, not an official MAJUBAH asset. If MAJUBAH adopts a bespoke icon set, replace this.

**Usage.**
- Load from CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`; or import individual SVGs.
- Stroke width **1.5–2**, `stroke="currentColor"` so icons inherit text colour (navy in body, corail on accents, white on navy).
- Sizes: 16 (inline), 20 (UI), 24 (feature). Keep them line, never filled.
- No emoji, ever. No multicolour icons.

Logos & marks (real assets, in `assets/logo/`): `majubah-horizontal.png`, `majubah-horizontal-white.png`, `sigle-bleu.png`, `sigle-orange.png`, `sigle-noir.png`, `sigle-white.png` (transparent backgrounds). Use the `Logo` component to place them.

---

## INDEX — what's in this system

**Root**
- `styles.css` — the only file consumers link. `@import`s everything below.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.
- `readme.md` — this guide. · `SKILL.md` — Agent-Skill manifest.

**Components** (`window.MAJUBAHConsultingDesignSystem_a0b600.*`)
- `components/core/` — **Button**, **Badge**, **Card**
- `components/forms/` — **Input**, **Select**
- `components/brand/` — **Logo**

**Foundation cards** (Design System tab) — `guidelines/*.card.html`: brand colours, accompaniment, neutrals, semantic; Sora display, Lato text, hierarchy-in-use; spacing scale, radii, shadows; logo backgrounds, sigle motif.

**UI kit** — `ui_kits/site-vitrine/` — marketing website recreation (hero, domaines, formations, témoignages, contact).

**Slides** — `templates/deck/` — branded presentation template (Design Component).

**Assets** — `assets/logo/` — processed logo & sigle PNGs.

---

### Caveats / substitutions
- **Nipera** (logo wordmark + titling) and **Glamour** (logo baseline) are proprietary → display set in **Sora**; baseline font not reproduced outside the logo lockup. Provide the licensed files to swap in.
- **Lato** is exact (official charte font).
- **Lucide** icons are a recommended match, not an official asset.
