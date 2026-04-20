# Stage by Rino — Design System

A Y2K / streetwear design system for **林祐凡 Lin Yu-Fan (Rino)** — Lecturer at 萬能科技大學 時尚造型設計暨表演藝術系 (Vanung University, Department of Fashion Styling Design & Performing Arts). Use it to design decks, posters, social posts, motion-graphic titles, recruit collateral, and student-work templates.

> **Brand name:** Stage by Rino  
> **Language:** Bilingual — Traditional Chinese (繁體中文) and English are equal citizens.  
> **Vibe:** Stage-lit. Playful but disciplined. Chunky, tight, confident.

---

## Sources

- **Personal portfolio:** `github.com/da33/lin-yu-fan` — dark editorial, Inter + Noto Sans TC, mix-blend cursor, three.js wireframe mesh, orange flare `#ff3c00`. This is the closest thing to a "mature" Rino brand expression.
- **Cyber variant:** `github.com/da33/lin-yufan` — Orbitron + cyan/magenta/violet neons. Used selectively for motion-graphic / title-card moments.
- **Dept recruit deck:** `github.com/da33/lin-yu-fan/fashion-recruit.html` — 11-slide招生 deck, gold `#c9a84c` on black. Source of dept voice and facts.
- **Vanung assets server:** `github.com/da33/vanung-assets` — contains LINE rich-menu / consultation tooling; not design-relevant but confirms the audience (prospective students).
- **Placeholder/empty:** `da33/De` was empty at read-time.

Imagery imported from the recruit deck is in `assets/`: `cover.jpg`, `dance.jpg`, `korea.jpg`, `makeup.jpg`.

---

## Index

```
README.md                this file
SKILL.md                 Agent Skill manifest (cross-compatible)
colors_and_type.css      CSS vars: colors, type, spacing, motion, elevation
fonts/                   webfont fallbacks (Google Fonts linked by default)
assets/                  logos, hero imagery, icons
preview/                 design-system cards (auto-registered)
ui_kits/
  portfolio/             Rino personal portfolio kit (dark editorial)
  recruit/               Dept recruit / marketing kit (招生 landing)
slides/                  slide templates for decks
```

---

## Content Fundamentals

### Voice

**Direct, warm, slightly cocky.** Like a dance teacher who's actually worked on the stage — no academic hedging. The recruit deck headlines are blunt: *"錢的問題"* (The money question), *"你的老師是什麼人"* (What kind of person is your teacher), *"我們的成績"* (Our results). Don't dress it up.

- **Case:** English is ALL CAPS for labels/eyebrows, Title Case for headers, sentence case for body. Chinese has no case — use punctuation (、·—) for rhythm instead.
- **Pronouns:** 你 (you) for prospective students; 我們 (we) when speaking for the dept. First-person 我 when it's Rino himself.
- **Numbers > adjectives.** "8 年經驗", "100+ 實習合作廠商", "第60屆金馬獎". Never "many years of experience."
- **Mixing languages inline is fine** — "Dancer · Educator · Creator", "專任講師 · 踢踢兒童街舞培訓中心". Use `·` (middle dot) as the universal separator.
- **Emoji:** sparingly, as flag/icon substitutes (🇯🇵 🇫🇷 🇨🇳 🌏). Never as decoration. `✦` is the house sparkle.

### Examples (lifted from source, then generalized)

| Context | Do | Don't |
|---|---|---|
| Hero label | `◈ 萬能科大 時尚造型設計暨表演藝術系` | "Welcome to our department website!" |
| Hero headline | `用舞蹈 / 創造 / 無限可能` (break into 3 lines) | "A journey of dance and creativity" |
| Section eyebrow | `001 — ABOUT` or `01 · VISION` | "About Me" |
| Stats | `50+ 指導學生 / 8 年經驗 / 3 國際交流` | "lots of students, many years" |
| CTA | `聯繫我` · `START PROJECT` · `Let's Talk` | "Click here to learn more" |
| Faculty card | `林明惠 副教授 — 2023法國巴黎世界銀牌` | "An accomplished educator" |

### Copy Patterns

- **Numbered eyebrows:** `001 — ABOUT`, `02 · DIRECTIONS`. Three-digit with em-dash OR two-digit with middle-dot.
- **Two-line hero:** line 1 solid, line 2 outline-stroke. `<span class="t-outline">` does this.
- **Marquee strip:** short nouns `·` separated — `Dance ✦ Performance Art ✦ Education ✦ …`
- **Achievement rows:** `年份 / 獎項 / 備註` — three columns, year on the left in flare orange, title in paper, note in `--fg-3`.

---

## Visual Foundations

### Colors

**Default to dark.** Paper (`#f5f4f0`) on ink (`#0a0a0a`). One accent per composition — pick from: flare-orange (default, confident), acid-chartreuse (playful, loud), hot-pink (campy, Y2K), ultra-violet (dreamy), cyan (cyber, titles), or vanung-gold (official/dept contexts). Never mix more than two accents in one surface.

### Typography

- **Display:** Archivo Black — chunky, compressed, confident. Uppercase only, line-height 0.9.
- **Body (latin):** Space Grotesk — tight, modern, geometric.
- **Body (中文):** Noto Sans TC — W300/W400 for body, W900 for display alongside Archivo Black.
- **Mono:** JetBrains Mono — timecodes, numbered eyebrows, kbd.
- **Substitution note 🚩:** we did not receive custom font files. Everything is Google Fonts. If Rino has a brand font (common for performance brands), drop the `.woff2` into `/fonts` and update `colors_and_type.css`.

### Spacing & Layout

- 8px baseline. Section padding is generous: `96px 48px` desktop, hard breakpoint at 768px → `48px 24px`.
- Hairline dividers `1px solid rgba(245,244,240,0.12)` between sections, NOT cards with shadows.
- **Corners are SHARP by default** (`--r-0`). Only pills and tag-chips use radius. No 16px-rounded cards.
- Hero is full-viewport. Content aligns **bottom-left** (portfolio mode) or **center** (deck mode).

### Backgrounds

- Plain near-black is the hero ground — no gradients.
- **Full-bleed photography** with a `rgba(0,0,0,0.72)` dark overlay (recruit deck formula).
- Optional subtle grid: `linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px)` at 50px, very subtle.
- Optional CRT scanlines: `repeating-linear-gradient(0deg, transparent 0 2px, rgba(0,0,0,0.1) 2px 4px)` at 0.3 opacity (use for Y2K moments only).
- **No gradients as decoration.** No mesh-gradient blobs. No blurry purple blobs.

### Borders & Cards

- Cards are usually just a `1px solid var(--stroke)` rectangle. No rounded, no shadow.
- Grid cards (recruit deck pattern): N columns separated by a `1px` gutter of `var(--stroke)` color on a background of that color — inner cells are the `--bg` — reads as a hairline grid.
- Hover state: border → `var(--fg)` (paper) OR subtle brightness bump (`background: #0f0f0f`).

### Shadows

Almost never. One allowed exception: a glow on the primary accent (`--glow-flare`) for attention-grabbing title moments. No default card shadow.

### Motion & Interaction

- **Hover:** opacity 0.5 → 1 on nav links; border color change on cards; **padding-left bump** (`1rem`) on list rows — a horizontal "slide" rather than a scale.
- **Press:** no scale, no color change — keep it grown-up.
- **Entry:** `translateY(20px) opacity(0) → 0,1` over 0.7s ease. Staggered via IntersectionObserver.
- **Hero text:** line-by-line reveal with `slideUp` from 100% translateY, 0.1s stagger.
- **Marquee:** 20s linear infinite, horizontal.
- **Easing:** `cubic-bezier(0.2, 0.7, 0.2, 1)` default; `cubic-bezier(0.16, 1, 0.3, 1)` for dramatic out.
- **Durations:** 120ms (hover), 240ms (default), 480ms (entry).
- No bouncy springs. No confetti. One purposeful motion at a time.

### Cursor

Custom cursor on portfolio-mode pages: 8px dot + 40px ring, `mix-blend-mode: difference`, follower lags 12% per frame. Optional — disable on touch.

### Imagery mood

Warm B&W or sepia with high contrast. When color, it's stage-lit — amber key, magenta rim. Grain welcome. No bright airy daylight-stock looks.

### Transparency & Blur

- Overlays on photo: `rgba(0,0,0,0.72)` flat.
- Nav bar: no blur; instead use `mix-blend-mode: difference` so nav text inverts against content.
- **No frosted-glass cards.** (Not our vibe.)

---

## Iconography

- **Primary approach:** typographic + geometric. `◈` `✦` `·` `—` `→` `[` `]` `/` are load-bearing. The `[TEXT]` bracket hover on nav is a signature.
- **Flags as icons:** country flag emoji for international work (🇨🇳🇯🇵🇫🇷🌏). That is emoji's only job.
- **No custom icon set shipped in-repo.** When a UI icon is actually needed (pagination arrows, play button, close), pull from **Lucide** via CDN (`unpkg.com/lucide@latest`) — stroke-1.5 matches the system. 🚩 Substitution — flagging so Rino can swap to a bespoke set later.
- **Logos:** no formal wordmark yet. The portfolio uses the text `LIN YU-FAN` or `Lin Yu-Fan` set in Archivo Black — that's the working logo. `林祐凡.VNU` is the compact bilingual lockup. Both are recreated in `assets/logo.svg` and documented in the preview cards.
- **Background illustrations:** none. Replace with full-bleed photography or the three.js wireframe mesh (see portfolio kit).

---

## Caveats to flag on first read

1. **Font files not provided** — system uses Google Fonts. Swap in licensed webfonts if Rino has them.
2. **No logo master** — we set `LIN YU-FAN` in Archivo Black as the working mark. Replace with official artwork when available.
3. **Empty `da33/De` repo** — assumed it was placeholder; built the system from `lin-yu-fan` + `lin-yufan` + `fashion-recruit.html` instead.
4. **Icon set substituted** (Lucide) — fine for prototyping, should be revisited for brand icons.

