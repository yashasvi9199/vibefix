<p align="center">
  <img src="./assets/banner.png" alt="VibeFix Banner" width="100%" />
</p>

<h1 align="center">VibeFix (`vibefix`)</h1>

<p align="center">
  <strong>Stealth AI Architecture & Native Slash Commands for Google Antigravity IDE</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@yashasvi9199/vibefix"><img src="https://img.shields.io/npm/v/@yashasvi9199/vibefix?style=for-the-badge&color=f43f5e&labelColor=0f172a&logo=npm" alt="npm version" /></a>
  <a href="https://pnpm.io"><img src="https://img.shields.io/badge/pnpm-strictly_mandated-f59e0b?style=for-the-badge&labelColor=0f172a&logo=pnpm" alt="pnpm" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-Strict_Zero_Any-3178c6?style=for-the-badge&labelColor=0f172a&logo=typescript" alt="TypeScript" /></a>
  <a href="https://github.com/yashasvi9199/vibefix"><img src="https://img.shields.io/badge/Antigravity_IDE-Native_Workflows-8b5cf6?style=for-the-badge&labelColor=0f172a&logo=google" alt="Antigravity IDE" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-10b981?style=for-the-badge&labelColor=0f172a" alt="License" /></a>
</p>

<p align="center">
  <a href="#-overview">Overview</a> •
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-cli-usage--options">CLI Usage</a> •
  <a href="#-scaffolding-architecture">Architecture</a> •
  <a href="#-native-slash-commands-">Slash Commands</a> •
  <a href="#-core-engineering-invariants">Core Invariants</a> •
  <a href="#-local-development">Development</a>
</p>

---

## Overview

[![Pattern](https://img.shields.io/badge/Pattern-Three--Tier_Architecture-6366f1?style=flat-square&labelColor=0f172a)](#)
[![Context](https://img.shields.io/badge/Context-On--Demand_Routing-8b5cf6?style=flat-square&labelColor=0f172a)](#)
[![Token Cost](https://img.shields.io/badge/Token_Cost-Zero_Bloat-10b981?style=flat-square&labelColor=0f172a)](#)
[![Standard](https://img.shields.io/badge/Code_Standard-Senior_Staff_Level-38bdf8?style=flat-square&labelColor=0f172a)](#)

**VibeFix** turns unstructured, conversational "vibe-coding" into hardened, production-grade architecture. Designed specifically for **Google Antigravity IDE**, it bootstraps a complete stealth developer configuration into your project with zero token bloat.

Instead of polluting system prompts with massive monolithic instructions on every single turn, VibeFix provisions a high-efficiency, three-tier ecosystem:

1. **`GEMINI.md` (Ambient Persona & On-Demand Router):** Sets strict coding invariants and routes domain rules on-demand rather than overloading prompt context.
2. **`rules/` (Modular Domain Directives):** 8 isolated rule books covering Core Engineering, APIs, Security, Frontend, SEO, DPDP Compliance, Feature Checklists, and Documentation Ledgers.
3. **`.agent/workflows/` (Native Slash Commands):** 13 native Antigravity IDE slash commands populated directly into the chat autocomplete menu (`/`) for instantaneous, deterministic execution.

---

## Quick Start

[![Setup](https://img.shields.io/badge/Setup-Zero_Config-10b981?style=flat-square&labelColor=0f172a)](#)
[![Engine](https://img.shields.io/badge/Engine-Instant_dlx-f59e0b?style=flat-square&labelColor=0f172a&logo=pnpm)](#)
[![Registry](https://img.shields.io/badge/Registry-npm_public-f43f5e?style=flat-square&labelColor=0f172a&logo=npm)](#)

You can run VibeFix without installing it locally, or install it globally for instant access in any project workspace.

### Method 1: Instant Run (Zero Install)

Run directly inside your project root using your preferred package runner:

```bash
# Using pnpm (Recommended)
pnpm dlx @yashasvi9199/vibefix init

# Using npx
npx @yashasvi9199/vibefix init

# Using bun
bunx --bun @yashasvi9199/vibefix init
```

### Method 2: Global Installation

Install globally on your workstation to run `vibefix` from any terminal:

```bash
# Global install via pnpm
pnpm add -g @yashasvi9199/vibefix

# Global install via npm
npm install -g @yashasvi9199/vibefix

# Initialize anywhere
vibefix init
```

### Method 3: Workspace Dev Dependency

Pin VibeFix directly in your project's `devDependencies`:

```bash
# Install as dev dependency
pnpm add -D @yashasvi9199/vibefix

# Run initialization via local binary
pnpm vibefix init
```

---

## CLI Usage & Options

[![CLI](https://img.shields.io/badge/CLI-vibefix_init-6366f1?style=flat-square&labelColor=0f172a)](#)

```bash
vibefix [command] [options]
```

### Commands

| Command | Description |
|:---|:---|
| `init` | Scaffolds `rules/`, `.agent/workflows/`, and `GEMINI.md` into the current working directory. |
| `help [command]` | Displays help information for any command. |

### Options for `vibefix init`

| Option | Flag | Type | Default | Description |
|:---|:---|:---|:---|:---|
| `--force` | `-f` | `boolean` | `false` | Overwrite existing files if already present in target workspace. |
| `--help` | `-h` | `boolean` | `false` | Display help screen for the `init` command. |
| `--version` | `-V` | `boolean` | `false` | Output the current version of the installed package. |

#### Examples

```bash
# Standard scaffold (safely skips existing files)
vibefix init

# Force overwrite existing rules, prompt, and slash workflows
vibefix init --force

# Inspect version
vibefix --version
```

---

## Scaffolding Architecture

[![Structure](https://img.shields.io/badge/Scaffold-Antigravity_Native-8b5cf6?style=flat-square&labelColor=0f172a)](#)
[![Compliance](https://img.shields.io/badge/Compliance-DPDP_Act_2023-f59e0b?style=flat-square&labelColor=0f172a)](#)
[![Security](https://img.shields.io/badge/Security-Zero_Trust-10b981?style=flat-square&labelColor=0f172a)](#)

Running `vibefix init` deploys the following modular file structure into your target project root:

```text
your-project/
├── GEMINI.md                     # Ambient agent persona & on-demand domain rule router
├── rules/                        # Modular architectural directives
│   ├── CORE.md                   # Strict TypeScript, zero 'any', pnpm standards, commit hygiene
│   ├── API.md                    # REST invariants, HTTP intent, rate limits, Idempotency-Keys
│   ├── SECURITY.md               # Zero-trust validation, Zod schemas, UUIDs, ReDoS/SSTI defense
│   ├── FRONTEND.md               # SSR, Tailwind, co-located styles/types, PWA, mobile UX
│   ├── SEO.md                    # Canonical meta titles, Open Graph, dynamic sitemaps, robots.txt
│   ├── COMPLIANCE.md             # India DPDP Act 2023, consent checkboxes & privacy notices
│   ├── DOCS.md                   # Ephemeral staging docs, CHANGELOG, and immutable DATABASE.sql
│   └── CHECKLIST.md              # Feature debt tracking, pre-commit & pre-deployment verification
└── .agent/
    └── workflows/                # Native Antigravity IDE slash commands
        ├── vibe-task-sync.md          # /vibe-task-sync
        ├── vibe-audit-security.md     # /vibe-audit-security
        ├── vibe-harden-headers.md     # /vibe-harden-headers
        ├── vibe-audit-seo.md          # /vibe-audit-seo
        ├── vibe-open-graph.md         # /vibe-open-graph
        ├── vibe-gen-sitemap.md        # /vibe-gen-sitemap
        ├── vibe-setup-telemetry.md    # /vibe-setup-telemetry
        ├── vibe-dpdp-scaffold.md      # /vibe-dpdp-scaffold
        ├── vibe-dpdp-cookies.md       # /vibe-dpdp-cookies
        ├── vibe-dpdp-audit.md         # /vibe-dpdp-audit
        ├── vibe-gen-errors.md         # /vibe-gen-errors
        ├── vibe-setup-pwa.md          # /vibe-setup-pwa
        └── vibe-gen-conversion.md     # /vibe-gen-conversion
```

---

## Native Slash Commands (`/`)

[![Trigger](https://img.shields.io/badge/Trigger-Type_%2F_in_Chat-4285F4?style=flat-square&labelColor=0f172a&logo=google)](#)
[![Catalog](https://img.shields.io/badge/Catalog-13_Production_Workflows-ec4899?style=flat-square&labelColor=0f172a)](#)
[![Execution](https://img.shields.io/badge/Mode-Deterministic_Prompts-10b981?style=flat-square&labelColor=0f172a)](#)

Open the **Google Antigravity IDE** chat panel and type `/`. The following slash commands appear instantly in your autocomplete menu:

| Slash Command | Category | Action Description |
|:---|:---|:---|
| **`/vibe-task-sync`** | `Docs & Debt` | Scans codebase against `rules/`, populates `.pending-tasks/checklist.md`, and updates debt. |
| **`/vibe-audit-security`** | `Security` | Audits dependencies (`pnpm audit`), validates `.env` secrecy, and checks for secret leaks. |
| **`/vibe-harden-headers`** | `Security` | Scaffolds and audits strict Content Security Policy (CSP), HSTS, and dynamic CORS headers. |
| **`/vibe-audit-seo`** | `SEO & CWV` | Inspects semantic HTML, page titles, meta descriptions, canonical tags, and alt attributes. |
| **`/vibe-open-graph`** | `Assets` | Generates Open Graph social preview cards (1200x630) and complete favicon suites. |
| **`/vibe-gen-sitemap`** | `SEO` | Crawls active route trees and outputs compliant `sitemap.xml` and `robots.txt`. |
| **`/vibe-setup-telemetry`** | `Analytics` | Scaffolds type-safe event taxonomies, SPA route listeners, and privacy-consent gates. |
| **`/vibe-dpdp-scaffold`** | `Compliance` | Scaffolds Privacy Policy, Terms, and Grievance Redressal forms with data deletion actions. |
| **`/vibe-dpdp-cookies`** | `Compliance` | Injects an interactive cookie banner tied to `localStorage` and telemetry gates. |
| **`/vibe-dpdp-audit`** | `Compliance` | Audits form inputs to verify mandatory unticked DPDP consent checkboxes. |
| **`/vibe-gen-errors`** | `Frontend` | Scaffolds dedicated fallback views for 404, 500 error boundaries, redirects, and downtime. |
| **`/vibe-setup-pwa`** | `Frontend` | Sets up offline-first Service Worker, Web App Manifest, and Cache Storage. |
| **`/vibe-gen-conversion`** | `Frontend` | Generates post-conversion Thank You page with transactional metadata and analytics triggers. |

> [!TIP]
> Each workflow file in `.agent/workflows/` is fully customizable. You can adjust the steps to suit your organization's specific tech stack or continuous integration gates.

---

## Core Engineering Invariants

[![Typing](https://img.shields.io/badge/Type_System-Strict_No_Any-3178C6?style=flat-square&labelColor=0f172a&logo=typescript)](#)
[![Validation](https://img.shields.io/badge/Validation-Zero--Trust_Zod-10b981?style=flat-square&labelColor=0f172a)](#)
[![Package](https://img.shields.io/badge/Tooling-Strict_pnpm-f59e0b?style=flat-square&labelColor=0f172a&logo=pnpm)](#)
[![Git](https://img.shields.io/badge/Commits-Semantic_Micro--Commits-f43f5e?style=flat-square&labelColor=0f172a)](#)

VibeFix establishes unwavering invariants that prevent common AI failure modes:

* **Zero AI Fingerprints:** Bans hand-holding inline comments, conversational fluff, and redundant preamble. Code is written directly at senior-staff grade.
* **Strict TypeScript Types:** Absolute ban on the `any` datatype. Every feature domain encapsulates its own dedicated `.types.ts` file; central monolithic `global.d.ts` is prohibited.
* **Strict pnpm Standard:** `npm` and `yarn` are strictly banned in target workspaces to eliminate phantom dependencies and lockfile drift.
* **Co-located Isolated Styles:** Monolithic global stylesheets are prohibited. Feature components must maintain isolated `.styles.css` modules.
* **Defensive Async Operations:** All asynchronous operations must be wrapped in structured `try/catch` handlers with actionable errors.
* **Zero-Trust Input Validation:** Zod schemas are enforced on every boundary. UUID primary keys are mandated; raw sequential database IDs are never exposed.
* **Atomic Micro-Commits:** Granular, semantic Git commits (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`) executed immediately upon code verification.

---

## Local Development

[![Node](https://img.shields.io/badge/Node->=_20.0.0-339933?style=flat-square&labelColor=0f172a&logo=node.js)](#)
[![Build](https://img.shields.io/badge/Build-pnpm_run_build-f59e0b?style=flat-square&labelColor=0f172a&logo=pnpm)](#)
[![PRs](https://img.shields.io/badge/PRs-welcome-10b981?style=flat-square&labelColor=0f172a)](#)

To test or extend VibeFix locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/yashasvi9199/vibefix.git
cd vibefix

# 2. Install dependencies via pnpm
pnpm install

# 3. Compile TypeScript and copy template assets
pnpm run build

# 4. Test the CLI locally in development
node dist/bin/cli.js --help
node dist/bin/cli.js init
```

---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-38bdf8?style=flat-square&labelColor=0f172a)](LICENSE)

Distributed under the **MIT License**. See [LICENSE](file:///home/drone/Programming/vibefix/LICENSE) for more information.