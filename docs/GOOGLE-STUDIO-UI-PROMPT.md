# Google Studio — UI Foundation Prompt

Copy everything below the line into Google AI Studio. Upload the reference images listed
at the end. **UI style and layout only** — backend is built separately in Cursor.

**Live Studio app (general access):** https://ai.studio/apps/a17ea1b2-e391-4d40-9790-36ecc7066132

Product source of truth: [`PRODUCT-BIBLE.md`](PRODUCT-BIBLE.md) · Summary: [`FOUNDATION.md`](FOUNDATION.md)

---

```text
You are a senior product designer. Build a CLEAN UI foundation and high-fidelity wireframe
system for a mobile-first creative marketplace app.

═══════════════════════════════════════
PRODUCT
═══════════════════════════════════════
Name: Huo
One-liner: The creative network connecting Ohio’s creative community — showcase work,
discover opportunities, collaborate, and connect with businesses.

Problem: Creative discovery in Columbus is fragmented across Instagram, Facebook groups,
and word-of-mouth.
Solution: A local ecosystem for portfolios, gigs, collaboration, and hiring talent.
Vision: Leading Ohio creative network → city-based model nationwide.

Personality — Huo IS: Creative, Professional, Welcoming, Innovative, Community-driven
Personality — Huo is NOT: Corporate, Exclusive, Influencer-focused, Popularity-driven

Mission: Give every creative a place to be discovered, connected, and valued.
Values: Community over competition · Creativity deserves visibility · Local first ·
Authentic connections · Opportunity for everyone

Product principles (design must reflect these):
1. Reward reputation, not popularity (no follower-count theater)
2. Every screen should help people connect, hire, or collaborate
3. Local relationships matter (Columbus / Ohio context in copy and filters)

FOCUS: UI STYLE + LAYOUT ONLY.
No backend, auth logic, APIs, or real data models.
Use realistic placeholder content (Columbus creatives, local gigs, Ohio locations, rates).

═══════════════════════════════════════
UPLOADED REFERENCES (source of truth for layout feel)
═══════════════════════════════════════
Match uploaded images closely:
- Moodboard / brand assets
- Portfolio feed masonry layout
- Typography samples
- Brief / brand personality
- Navigation sitemap
- Existing wireframe screenshots if provided

Prefer clean, image-forward creative-industry UI over generic social chrome.

═══════════════════════════════════════
BRAND TOKENS (authoritative)
═══════════════════════════════════════
Colors:
- Primary pink: #FF3C75 — CTAs, active states, sparse highlights
- Black: #000000 — primary text / icons
- Grey: #888888 — muted labels, secondary chrome
- Surfaces: white / near-white paper

Typography:
- Courier New — primary UI chrome, labels, meta, brand voice
- Impact — display / headline energy ONLY (never long body copy)
- Pair with a clean neutral sans for readable body text

Photography:
- Editorial, authentic, behind-the-scenes, human-focused, real creative environments
- Finished work + BTS — not influencer / stock clout aesthetics

AVOID: purple gradients, glassmorphism, neon glow, dense SaaS dashboards, emoji decoration,
generic multi-shadow card stacks, public follower counts, popularity leaderboards

═══════════════════════════════════════
ACCOUNT TYPES (UI states)
═══════════════════════════════════════
1. Creative — portfolio, skills, gigs, messaging, reputation, Pro upsell
2. Business — company profile, search talent, post opportunities, applicant review
3. Community / Consumer — feed, explore, follow/save, request services, hire talent

═══════════════════════════════════════
BOTTOM NAVIGATION (5 tabs)
═══════════════════════════════════════
1. Home — feed of creative activity
2. Search — discover creatives, gigs, projects, businesses
3. Create (+) — central action sheet:
   - Showcase Work
   - Post Gig
   - Build Team
   - Find Collaborators
   - Ask Community
4. Messages — direct communication (+ booking / request affordance)
5. Profile — portfolio and identity (logged-out vs logged-in)

═══════════════════════════════════════
SCREENS TO DESIGN
═══════════════════════════════════════
Mobile first; desktop where noted.

A. Splash / brand intro — “Huo” as hero-level brand signal (not tiny nav text)
B. Onboarding — account type selection (Creative / Business / Community)
C. Home feed — image-forward creative activity (masonry or editorial cards)
D. Search / Discover — talent + gigs + businesses; spotlight rows (e.g. Producers)
E. Create (+) action sheet / flow picker
F. Job / Gig board (mobile + desktop)
   Filters: Role, Location, Pay, Date
   Tabs if useful: Opportunities | Applications | Invitations
G. Gig detail + Apply
H. Creative profile — photo, name, title, bio, skills, location, gear, availability,
   reputation signals (completed work / recommendations — NOT follower counts)
I. Business profile — bio, active hiring, project gallery
J. Portfolio gallery (photo + video tiles)
K. Messages list + conversation + Book / Request CTA
L. Consumer hire / request service flow (UI only)
M. Huo Free vs Pro / Business Free vs Pro surfaces (upsell UI only — no payments)
N. Empty states + skeleton loaders that feel editorial

═══════════════════════════════════════
COMPONENT FOUNDATION
═══════════════════════════════════════
Define and show:
- Color tokens, type scale, spacing (4/8), radii
- Buttons: primary pink #FF3C75, secondary black outline, ghost
- Inputs, chips/filters, tabs, list rows, media tiles
- Floating / docked bottom nav with Create (+) emphasis
- Desktop left icon rail optional for Job Board + Profile
- Reputation UI patterns that feel like trust, not likes

═══════════════════════════════════════
MONETIZATION (UI copy only)
═══════════════════════════════════════
- Creative Free vs Pro ($9.99/mo or $99/yr)
- Business Free vs Pro ($19.99/mo or $199.99/yr)
- Founding member $4.99/mo lock-in (early supporters) — optional badge treatment
Do not implement checkout.

═══════════════════════════════════════
OUTPUT FORMAT
═══════════════════════════════════════
1. Short design rationale (5–8 bullets) tied to Huo principles
2. Design tokens (colors, type, radii, spacing)
3. Screen-by-screen mobile UI (production-looking, not gray boxes)
4. Desktop adaptations for Job Board + Profile
5. Clickable flow map: Home ↔ Search ↔ Create ↔ Messages ↔ Profile
6. Dev handoff notes for later React rebuild (component names + layout structure)

CONSTRAINTS
- Columbus / Ohio local creative network — not LA influencer app
- Clean and convenient over flashy
- Image is the product; UI gets out of the way
- Pink is sparse — photography + black/white hierarchy do most of the work
- Reputation > popularity in every profile and feed pattern
```

---

## Images to upload with this prompt

From `Design Reference/milanote/`:

1. `01-moodboard.png`
2. `02-portfolio-feed-layout.png`
3. `03-typography-samples.png`
4. `04-brief.png`
5. `05-sample-navigation.png`

Also helpful: `Design Reference/huo-wireframes.html` screenshots and `IMG_2847`–`IMG_2851`.

## Tip

Run as two Studio chats if needed:

1. Design system / tokens / components only  
2. Apply system to screens A–N  

If output drifts corporate or purple: *“Reduce chrome. More photography. Use #FF3C75 pink sparsely. Match masonry feed. Reputation not followers. Courier New for chrome, Impact only for rare display.”*
