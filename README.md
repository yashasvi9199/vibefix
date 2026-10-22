# **VibeFix (`vibefix`)**

## **Stealth AI Architecture & Command Scaffolder for Antigravity IDE**

VibeFix turns conversational, unstructured "vibe-coding" into production-grade, deterministic architecture. It bootstraps a complete stealth developer configuration into your project with zero token bloat, ensuring AI agents code like meticulous senior engineers without leaving generic AI fingerprints, boilerplate comments, or loose types.

# **What VibeFix Does**

Running vibefix init in any workspace installs a modular, three-tier architecture:

* **`GEMINI.md` (Ambient Persona & Router):** A hyper-optimized system prompt that sets strict coding invariants and routes domain tasks on demand rather than overloading prompt tokens on every turn.  
* **`rules/` (Modular Domain Rules):** 8 isolated markdown rule books covering Core Engineering, APIs, Security, Frontend, SEO, DPDP Compliance, Feature Checklists, and Documentation Ledgers.  
* **`.agent/workflows/` (Native Slash Commands):** 13 native Antigravity IDE slash commands populated directly in the agent's autocomplete popup (`/`) with linear descriptions.

# **Installation & Quickstart**

## **Method 1: Run Remotely (Recommended)**

Run directly inside any existing or newly created project directory:\# Using pnpm (strictly enforced)

pnpm dlx @yashasvi9199/vibefix init

\# Or using npx

npx @yashasvi9199/vibefix init

## **Method 2: Global Installation**

Install globally on your machine to use `vibefix` anywhere:pnpm add \-g @yashasvi9199/vibefix

vibefix init

## **Method 3: Local Development & Linking**

If you are developing or customizing `vibefix` locally:h  
pnpm install  
pnpm run build  
pnpm add \-g .

\#\# Scaffolding Structure

When initialized, VibeFix creates the following layout in the target project root:

\`\`\`text

your-project/

├── GEMINI.md                     \# Ambient agent persona & on-demand rule router

├── rules/                        \# Modular domain-specific rule books

│   ├── CORE.md                   \# Strict TS, pnpm mandate, async safety, commits

│   ├── API.md                    \# REST invariants, HTTP verbs, rate limiting

│   ├── SECURITY.md               \# Zero-trust schemas, SQLi/NoSQL defense, upload safety

│   ├── FRONTEND.md               \# SSR, Tailwind, co-located styles/types, PWA, mobile UI

│   ├── SEO.md                    \# Metadata, Open Graph, sitemap, robots, image alt text

│   ├── COMPLIANCE.md             \# DPDP Act, privacy notices, consent checkboxes

│   ├── CHECKLIST.md              \# Feature debt tracking and task states

│   └── DOCS.md                   \# SemVer CHANGELOG, GUIDE, immutable DATABASE.sql

└── .agent/

    └── workflows/                \# Native Antigravity IDE slash commands

        ├── task-sync.md          \# /task-sync

        ├── audit-security.md     \# /audit-security

        ├── harden-headers.md     \# /harden-headers

        ├── audit-seo.md          \# /audit-seo

        ├── open-graph.md         \# /open-graph

        ├── gen-sitemap.md        \# /gen-sitemap

        ├── setup-telemetry.md    \# /setup-telemetry

        ├── dpdp-scaffold.md      \# /dpdp-scaffold

        ├── dpdp-cookies.md       \# /dpdp-cookies

        ├── dpdp-audit.md         \# /dpdp-audit

        ├── gen-errors.md         \# /gen-errors

        ├── setup-pwa.md          \# /setup-pwa

        └── gen-conversion.md     \# /gen-conversion

# **Native Slash Commands (`/`)**

Open the Antigravity Agent chat panel and type `/`. The following commands will appear in your autocomplete menu with their descriptions:

| Command | Action Description |
| :---- | :---- |
| **`/task-sync`** | Scans codebase against `rules/`, populates `.pending-tasks/checklist.md`, and updates debt. |
| **`/audit-security`** | Audits dependencies (`pnpm audit`), validates `.env` secrecy, and checks for secret leaks. |
| **`/harden-headers`** | Scaffolds and audits strict Content Security Policy (CSP), HSTS, and dynamic CORS headers. |
| **`/audit-seo`** | Inspects semantic HTML, page titles, meta descriptions, canonical tags, and alt attributes. |
| **`/open-graph`** | Generates Open Graph social cards (1200x630) and complete cross-platform favicon suites. |
| **`/gen-sitemap`** | Crawls active route trees and outputs compliant `sitemap.xml` and `robots.txt`. |
| **`/setup-telemetry`** | Scaffolds type-safe event taxonomies, SPA route listeners, and privacy-consent gates. |
| **`/dpdp-scaffold`** | Scaffolds Privacy Policy, Terms, and Grievance Redressal forms with data deletion actions. |
| **`/dpdp-cookies`** | Injects an interactive cookie banner tied to `localStorage` and telemetry gates. |
| **`/dpdp-audit`** | Audits form inputs to verify mandatory unticked DPDP consent checkboxes. |
| **`/gen-errors`** | Scaffolds dedicated fallback views for 404, 500 error boundaries, redirects, and downtime. |
| **`/setup-pwa`** | Sets up offline-first Service Worker, Web App Manifest, and Cache Storage. |
| **`/gen-conversion`** | Generates post-conversion Thank You page with transactional metadata and analytics triggers. |

# **Core Engineering Invariants**

* **Zero AI Fingerprints:** Bans hand-holding inline comments, conversational fluff, and redundant explanations.  
* **Strict Typing:** Absolute ban on the `any` datatype. Every feature encapsulates its own `.types.ts`.  
* **Isolated Styles:** Monolithic global CSS is banned; each component module maintains isolated `.styles.css`.  
* **Strict pnpm Standard:** `npm` and `yarn` are strictly banned in target workspaces to prevent phantom dependencies.  
* **Defensive Async Operations:** All asynchronous logic must be wrapped in structured `try/catch` handlers.  
* **Micro-Commits:** Granular, semantic Git micro-commits (`feat:`, `fix:`, `chore:`, `refactor:`) authored under `yashasvi9199`.

# **CLI Development**

\# Install dependencies

pnpm install

\# Run locally in development

pnpm run dev init

\# Build TypeScript to dist/

pnpm run build

# **License**

This project is licensed under the MIT License \- open-source and free for all developers.