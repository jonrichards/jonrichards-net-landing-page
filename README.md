# jonrichards-net-landing-page

Personal landing page for [jonrichards.net](https://jonrichards.net) — a small static page that renders a fake terminal session introducing Jon Richards (Enterprise Architect) and links to his profiles.

Built with vanilla HTML, CSS, and JavaScript. Hosted on AWS Amplify, which auto-deploys on push to `main`.

## Files

- `index.html` — page markup with inlined CSS (terminal palette, responsive padding, cursor animation, `prefers-reduced-motion` handling), SEO/Open Graph metadata, JSON-LD `Person` schema, and the static no-JS fallback content.
- `script.js` — typewriter animation with humanized cadence, dynamic "Last login" banner, and the idle skill cycle (reads from JSON-LD `knowsAbout` so the page has a single source of truth for expertise areas).
- `favicon.svg`, `favicon-32.png`, `favicon-180.png` — site icons.

## Local preview

Just open `index.html` in a browser, or serve the directory with anything (e.g., `python3 -m http.server`). There is no build step.
