# Huo App

The creative network connecting Ohio’s creative community — UI foundation and app codebase.

**Repository:** https://github.com/Rob-code-94/HUO-APP  
**Google AI Studio app:** https://ai.studio/apps/a17ea1b2-e391-4d40-9790-36ecc7066132  
**Client demo host:** Vercel (after first deploy — see [`docs/WORKFLOW.md`](docs/WORKFLOW.md))

## Workflow (locked)

| Stage | Tool |
| --- | --- |
| Edit UI / explore layouts | Google AI Studio |
| Shareable client demo | **Vercel** (free Hobby) |
| Fixes, backend, final pack | **Cursor** |

Full detail: [`docs/WORKFLOW.md`](docs/WORKFLOW.md)

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build && npm run preview
```

## What’s in this repo

| Path | Purpose |
| --- | --- |
| `src/` | Interactive UI kit, screens, wireframes (Studio-origin + Cursor fixes) |
| `docs/PRODUCT-BIBLE.md` | Authoritative product bible |
| `docs/FOUNDATION.md` | Condensed working summary |
| `docs/WORKFLOW.md` | Studio → Vercel → Cursor process |
| `docs/GOOGLE-STUDIO-UI-PROMPT.md` | Prompt used for UI generation |
| `Design Reference/` | Milanote screenshots, wireframes, brand references |

## Docs

1. [`docs/PRODUCT-BIBLE.md`](docs/PRODUCT-BIBLE.md)
2. [`docs/FOUNDATION.md`](docs/FOUNDATION.md)
3. [`docs/WORKFLOW.md`](docs/WORKFLOW.md)
