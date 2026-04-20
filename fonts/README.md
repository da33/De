# Fonts

This system uses Google Fonts, loaded via `@import` in `colors_and_type.css`:

- **Archivo Black** — display (chunky uppercase)
- **Space Grotesk** 300/400/500/600/700 — latin body
- **Noto Sans TC** 300/400/500/700/900 — 繁體中文 body + display
- **JetBrains Mono** 400/700 — mono / timecodes / numbered labels

## 🚩 Substitution note

No custom font files were provided for this brand. Everything above is a **best-match from Google Fonts**, chosen to fit the Y2K / streetwear brief:

- Archivo Black ≈ the chunkiest free grotesque on Google Fonts (a typical Rino brand would use something like PP Neue Machina or PP Editorial New — licensed).
- Space Grotesk was picked over Inter/Roboto to avoid tech-startup defaults.

**To upgrade:** drop licensed `.woff2` files into this folder and replace the `@import` at the top of `colors_and_type.css` with `@font-face` blocks.
