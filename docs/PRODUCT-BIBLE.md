# HUO Product Bible

| Field | Value |
| --- | --- |
| Version | 1.0 |
| Last Updated | 2026-08-03 |
| Founder | TBD |
| Status | Concept / Planning |

This is the product operating document for **Huo**. Prefer this file for brand, positioning,
MVP scope, monetization, and go-to-market. Visual screenshots and Milanote exports live in
`Design Reference/`. A condensed working summary lives in `docs/FOUNDATION.md`.

---

## 1. Executive Summary

### Product Name

Huo

### One-Line Description

Huo is the creative network connecting Ohio's creative community by helping creatives
showcase their work, discover opportunities, collaborate, and connect with businesses.

### The Problem

Columbus has a growing creative economy, but creatives and businesses lack a centralized
platform to discover each other. Opportunities are fragmented across Instagram, Facebook
groups, word-of-mouth, and personal networks.

### The Solution

Huo creates a local ecosystem where creatives can build professional portfolios, find gigs,
collaborate on projects, and connect directly with people looking for creative talent.

### Long-Term Vision

Become the leading creative network in Ohio and eventually a city-based platform model that
connects creative communities nationwide.

---

## 2. Brand Identity

### Mission Statement

To give every creative a place to be discovered, connected, and valued.

### Vision Statement

A world where creative opportunities are accessible through community, not connections alone.

### Core Values

1. **Community Over Competition** — Huo exists to strengthen the local creative ecosystem,
   not to rank people against each other. Collaboration beats clout.
2. **Creativity Deserves Visibility** — Great work should be discoverable on merit and craft,
   not only follower count or algorithm luck.
3. **Local First** — Start with Columbus, then Ohio cities, then replicate city by city.
   In-person gigs and real local relationships are the product.
4. **Authentic Connections** — Prefer real collaboration, completed work, and trust signals
   over performative networking.
5. **Opportunity For Everyone** — From freelancers to businesses to everyday people hiring
   talent — access should not depend on already “knowing someone.”

---

## 3. Brand Personality

If Huo were a person:

**Huo is:** Creative · Professional · Welcoming · Innovative · Community-driven

**Huo is not:** Corporate · Exclusive · Influencer-focused · Popularity-driven

---

## 4. Brand Guidelines

### Logo

TBD — variations to be defined.

### Color Palette (authoritative for product UI)

| Role | Name | Hex | Notes |
| --- | --- | --- | --- |
| Primary | Pink | `#FF3C75` | Brand accent / primary CTA |
| Secondary | Black | `#000000` | Text, icons, high contrast |
| Accent | Grey | `#888888` | Muted labels, secondary chrome |

> Note: Milanote moodboard earlier captured Coral `#FFB5AF` / Stone `#C0C0C0`. Those remain
> inspirational WIP. **Product Bible pink `#FF3C75` is the shipping brand primary** unless
> the founder updates this section.

### Typography

| Role | Font | Notes |
| --- | --- | --- |
| Primary | Courier New | Labels, meta, system/UI chrome, brand voice |
| Secondary | Impact | Display / headline energy only — sparse use |
| Body UI | Clean neutral sans | Readable app body (pair with Courier/Impact) |

### Photography Style

Editorial, authentic, behind-the-scenes, human-focused, real creative environments.
Prefer finished work + BTS over stock influencer aesthetics.

---

## 5. Target Audience

### Primary User: Creative Professional

| Field | Value |
| --- | --- |
| Name | TBD |
| Age | TBD |
| Occupation | Photographer, videographer, designer, editor, DJ, MUA, etc. |
| Location | Columbus / Ohio |

**Goals**

- Get discovered for paid local work
- Build a professional portfolio
- Find collaborators and crew
- Grow reputation through completed work

**Pain Points**

- Opportunities scattered across Instagram DMs and Facebook groups
- Hard to look professional without a website
- Local gigs hard to find in one place

**Why they use Huo**

A local creative network built for gigs and real collaboration — not a popularity contest.

### Secondary User: Business / Organization

| Field | Value |
| --- | --- |
| Company | TBD |
| Industry | Production, agencies, events, local business |
| Size | TBD |

**Goals**

- Find vetted local creative talent quickly
- Post opportunities and review applicants
- Hire for campaigns, events, and content

**Pain Points**

- No reliable local creative directory
- Slow to assemble crew
- Hard to evaluate portfolios in one place

**Why they use Huo**

Search, post, message, and hire local creatives in one ecosystem.

### Tertiary User: Community / Consumer

Everyday people and fans of local creativity — discover, follow/save work, and hire talent
for personal projects (birthday photographer, wedding videographer, logo, event musician,
social content).

---

## 6. Market Positioning

| Competitor | Strengths | Weaknesses | How Huo differs |
| --- | --- | --- | --- |
| Instagram | Heavy photo/video | Popularity contest | Built for gigs + connection, not clout |
| LinkedIn | Professional networking | Intimidating / corporate for creatives | Comfortable creative-first identity |
| Fiverr / Upwork | Booking gigs | Mostly virtual / remote | In-person, Columbus-niche, local collaboration |

### Competitive Advantage

Huo is built specifically around **local creative communities** and **real-world creative
collaboration**.

---

## 7. Product Principles

These guide every feature decision.

1. **Huo rewards reputation, not popularity.** Trust comes from completed work,
   recommendations, and verified experience — not follower counts.
2. **Every feature should create meaningful connections.** If a feature doesn’t help people
   find work, collaborate, or hire, it doesn’t ship.
3. **Local relationships matter.** Prioritize in-person gigs, city context, and community
   over global marketplace scale theater.

---

## 8. User Types (Account Model)

### Creative Account (supply)

**Purpose:** Create, showcase, collaborate, get discovered.

Features: Portfolio · Skills · Gigs · Messaging · Reputation · Huo Pro

### Business Account (demand)

**Purpose:** Find talent and post opportunities.

Features: Company profile · Search creatives · Post opportunities · Messaging · Hiring tools · Business Pro

### Community Account (audience)

**Purpose:** Discover and support local creativity.

Features: Feed · Explore · Follow · Save · Engage

> Earlier Google Doc also listed models, production companies, event clients, and everyday
> consumers as personas. Those map into Creative / Business / Community accounts above
> (models → Creative; production/agencies/event clients → Business; consumers → Community).

---

## 9. Core User Journeys

### Creative Journey

Create Account → Build Profile → Upload Portfolio → Discover Opportunities → Apply →
Connect → Complete Work → Build Reputation

### Business Journey

Create Business Profile → Post Opportunity → Review Applicants → Message Candidates →
Select Creative → Complete Project

---

## 10. Navigation Structure

### Bottom Navigation

| Tab | Purpose |
| --- | --- |
| **Home** | Feed of creative activity |
| **Search** | Discover creatives, gigs, projects, businesses |
| **Create (+)** | Create opportunities — Showcase Work, Post Gig, Build Team, Find Collaborators, Ask Community |
| **Messages** | Direct communication |
| **Profile** | Portfolio and identity |

---

## 11. MVP Feature List

### Must Have

**Accounts** — Registration, login, user type selection

**Profiles** — Bio, skills, location, portfolio, contact

**Feed** — Create posts, view posts, like / comment / save

**Marketplace** — Post gigs, browse gigs, apply, review applicants

**Messaging** — Conversations, notifications

### Future Features

Payments · Contracts · AI matching · Events · Groups · Reviews · Verified experience ·
Crew building · Analytics

---

## 12. Feature Requirements (example)

### Feature: Post a Gig

**User story:** As a production company, I want to post a job opportunity so I can find
qualified creatives.

**User can:**

- Create gig title
- Add description
- Add pay
- Add location
- Add date
- Receive applications

**Success metric:** Number of completed connections.

---

## 13. Reputation System

**Purpose:** Reward trust instead of popularity.

**Possible signals:** Completed projects · Recommendations · Response rate · Portfolio
quality · Verified work

**Avoid:** Public follower counts · Popularity rankings

---

## 14. Database Overview

| Entity | Stores |
| --- | --- |
| Users | Account info, profile info, user type |
| Portfolios | Projects, images, videos, descriptions |
| Posts | Feed content |
| Gigs | Opportunities |
| Applications | Who applied, application status |
| Messages | Conversations |
| Projects | Completed work history |

---

## 15. Technical Architecture

| Layer | Responsibility |
| --- | --- |
| Front end | Mobile application — iOS and Android (web may follow) |
| Backend | User accounts, authentication, data processing, notifications |
| Database | Users, posts, gigs, messages |
| Storage | Photos, videos, portfolio files |

---

## 16. Analytics & Success Metrics

**Growth:** Users created · Active users · Profiles completed

**Marketplace:** Gigs posted · Applications submitted · Connections created · Hires reported

**Community:** Posts created · Messages sent · Collaborations formed

---

## 17. Launch Strategy

### Phase 1: Columbus Beta

**Target:** Production companies, freelancers, local businesses

**Example goals:** 500 creatives · 50 businesses · 100 gigs posted

### Phase 2: Columbus Growth

More industries · Partnerships · Events

### Phase 3: Ohio Expansion

Cleveland · Cincinnati

---

## 18. Open Questions

- Should Huo have followers?
- How should reputation work in detail?
- Should payments exist in MVP or later?
- How do we verify creatives?
- How do we prevent spam?
- What categories launch first?
- Logo variations and final Impact usage in product UI
- Consumer booking fee (if any) at public launch

---

## 19. Go-To-Market & Monetization Strategy

### Beta Phase 1: Founding Community (Months 0–3)

**Goal:** Validate Huo’s core experience with a small, highly engaged group.

**Users:** 50 invited beta users · Columbus creatives and organizations · full access free

**Objectives:** Validate onboarding · test profiles/portfolios · measure engagement ·
identify needs · collect feedback · build initial network

**Success metrics:** Profile completion · WAU · connections · collaborations · opportunities posted

### Beta Phase 2: Community Expansion (Months 3–6)

**Growth model:** Each Beta 1 member gets 2 invitations → ~50 + 100 = **200 founding users**

**Benefits:** Full access · early access benefits · founding member opportunity

**Objectives:** Test network effects · improve marketplace activity · validate retention ·
prepare for public launch

### Huo Pro Launch — Founding Member Program

After Beta Phase 2:

| | |
| --- | --- |
| Who | First 200 users |
| Price | **$4.99/month** lifetime founding lock-in |
| Benefits | Huo Pro features + recognition as early supporters |

### Public Launch Pricing

#### Creative Accounts

**Huo Free**

- Profile creation
- Portfolio
- Discover creatives
- Browse opportunities
- Basic messaging

**Huo Pro** — **$9.99/month** or **$99/year**

- Enhanced profile customization
- Advanced portfolio tools
- Analytics
- Increased visibility
- Professional tools
- Premium networking features

#### Business Accounts

**Business Free**

- Business profile
- Discover creatives
- Limited opportunity posting
- Basic messaging

**Business Pro** — **$19.99/month** or **$199.99/year**

- Unlimited opportunity posts
- Advanced creative search
- Applicant management
- Team collaboration
- Hiring analytics
- Featured business profile

#### Consumer Accounts

**Consumer Free** — discover and hire creative talent (birthday photographer, wedding
videographer, logo designer, event musician, social creator)

Includes: Browse creatives · Request services · Contact creatives · Save favorites

---

## 20. Future Vision

Huo becomes the operating system for local creative communities — connecting talent,
businesses, education, and opportunities city by city.
