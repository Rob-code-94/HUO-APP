# Huo App

The creative network connecting Ohio’s creative community — UI foundation and app codebase.

**Repository:** https://github.com/Rob-code-94/HUO-APP  
**Landing (Vercel):** https://huo-app.vercel.app  
**UI kit demo:** https://huo-app.vercel.app/app  
**Google AI Studio app:** https://ai.studio/apps/a17ea1b2-e391-4d40-9790-36ecc7066132

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Editorial talent-call landing (link-in-bio) |
| `/app` | Interactive UI kit / wireframes |

## Talent call forms

- **Creatives:** [Join the talent call](https://docs.google.com/forms/d/e/1FAIpQLSeNhJLhy8YVlo33JtFDd18HiedTZXLutsomSBKLMN9LHWg86g/viewform?usp=header)
- **Business / hiring:** [Hiring form](https://docs.google.com/forms/d/e/1FAIpQLSePz9ljzfjOcUJylHiul--ufzkBD0YySXCMgyE3DPtxGxHfdg/viewform?usp=publish-editor)

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
| `src/pages/LandingPage.tsx` | Editorial landing poster |
| `src/` | Interactive UI kit, screens, wireframes |
| `docs/PRODUCT-BIBLE.md` | Authoritative product bible |
| `docs/FOUNDATION.md` | Condensed working summary |
| `docs/WORKFLOW.md` | Studio → Vercel → Cursor process |
| `Design Reference/` | Milanote screenshots, wireframes, brand references |

## Docs

1. [`docs/PRODUCT-BIBLE.md`](docs/PRODUCT-BIBLE.md)
2. [`docs/FOUNDATION.md`](docs/FOUNDATION.md)
3. [`docs/WORKFLOW.md`](docs/WORKFLOW.md)
