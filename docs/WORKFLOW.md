# Workflow — Studio → Vercel → Cursor

How we build Huo without fighting tools.

## Roles

| Tool | Job |
| --- | --- |
| **Google AI Studio** | UI exploration & visual edits |
| **Vercel (Hobby / free)** | Always-on client demo URL |
| **Cursor** | Wiring fixes, backend, packaging, production |

## Day-to-day

1. **Edit UI in Studio** when you want fast visual changes.
2. **Pull / paste updated `src/` into this repo** (or sync from Studio export / GitHub if connected).
3. **Push to `main`** → Vercel auto-deploys the client demo.
4. **Fix bugs & product wiring in Cursor** (types, props, build, backend later).
5. When ready to ship for real: **pack & harden in Cursor** (auth, API, env, store builds) — not Studio Publish.

## Local commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

## First-time Vercel setup (free Hobby)

1. Sign up at https://vercel.com with GitHub (`Rob-code-94`).
2. **Add New Project** → import `Rob-code-94/HUO-APP`.
3. Framework preset: **Vite** (auto-detected). Build: `npm run build`. Output: `dist`.
4. Deploy. You get a URL like `https://huo-app.vercel.app`.
5. Send that URL to the client — no AI Studio chrome, no Google Cloud billing.

Optional CLI:

```bash
npx vercel login
npx vercel          # preview
npx vercel --prod   # production
```

## Studio share (optional)

For a quick in-Studio peek without Vercel:

https://ai.studio/apps/a17ea1b2-e391-4d40-9790-36ecc7066132?fullscreenApplet=true

Prefer **Vercel** for client testing once the repo builds.

## Rules of the road

- Do **not** rely on Studio **Publish** + Google Cloud billing for demos.
- Do **not** casually overwrite working Cursor fixes when pasting Studio exports — merge carefully.
- Product truth stays in `docs/PRODUCT-BIBLE.md`.
