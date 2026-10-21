<p align="center">
  <img src="./assets/banner.png" alt="VibeFix Banner" width="100%" />
</p>

<h1 align="center">VibeFix</h1>

<p align="center">
  <strong>Stealth architecture rules, zero-trust security standards, and agent workflows for Antigravity IDE.</strong>
</p>

<p align="center">
  <a href="https://github.com/yashasvi9199/vibefix/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT License" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://pnpm.io/"><img src="https://img.shields.io/badge/pnpm-ready-F69220?style=flat-square&logo=pnpm&logoColor=white" alt="pnpm" /></a>
  <a href="https://github.com/yashasvi9199/vibefix/stargazers"><img src="https://img.shields.io/github/stars/yashasvi9199/vibefix?style=flat-square" alt="GitHub Stars" /></a>
  <a href="https://github.com/yashasvi9199/vibefix/issues"><img src="https://img.shields.io/github/issues/yashasvi9199/vibefix?style=flat-square" alt="Open Issues" /></a>
</p>

---

## ⚡ Overview

**VibeFix** automates the injection of battle-tested software engineering standards, security guardrails, and AI agent slash commands into any codebase. Designed natively for **Google Antigravity IDE**, it bridges the gap between autonomous AI coding agents and hardened, production-grade architecture.

With a single command, VibeFix scaffolds modular system prompts, DPDP compliance standards, zero-trust validation rules, and executable `.agent/workflows/` that turn your IDE assistant into an elite senior staff engineer.

---

## 🚀 Quick Start (Zero Install)

Run VibeFix directly in your project root using your package manager of choice:

### **pnpm** (Recommended)
```bash
# Run directly via GitHub repository
pnpm dlx github:yashasvi9199/vibefix init

# Or via npm package registry
pnpm dlx vibefix init
```

### **npm / npx**
```bash
# Run directly via GitHub repository
npx github:yashasvi9199/vibefix init

# Or via npm package registry
npx vibefix init
```

### **bun**
```bash
# Run directly via GitHub repository
bunx --bun github:yashasvi9199/vibefix init

# Or via npm package registry
bunx vibefix init
```

### **yarn**
```bash
# Run directly via GitHub repository
yarn dlx github:yashasvi9199/vibefix init

# Or via npm package registry
yarn dlx vibefix init
```

---

## 📦 Global Installation

Install VibeFix globally to use the `vibefix` command anywhere across your system:

| Package Manager | Global Install Command | Project Init Command |
|---|---|---|
| **pnpm** | `pnpm add -g github:yashasvi9199/vibefix` | `vibefix init` |
| **npm** | `npm install -g github:yashasvi9199/vibefix` | `vibefix init` |
| **bun** | `bun add -g github:yashasvi9199/vibefix` | `vibefix init` |
| **yarn** | `yarn global add github:yashasvi9199/vibefix` | `vibefix init` |

> [!TIP]
> Once installed globally, navigate to any workspace and run `vibefix init`.

---

## 🛠️ Project Dev Dependency Installation

If you prefer pinning VibeFix inside your repository's `package.json`:

### 1. Install as dev dependency
```bash
# pnpm
pnpm add -D github:yashasvi9199/vibefix

# npm
npm install -D github:yashasvi9199/vibefix

# bun
bun add -d github:yashasvi9199/vibefix

# yarn
yarn add -D github:yashasvi9199/vibefix
```

### 2. Run initialization
```bash
pnpm vibefix init
# or: npx vibefix init / bunx vibefix init / yarn vibefix init
```

---

## 💻 CLI Usage & Flags

```
Usage: vibefix [options] [command]

Scaffold rules, GEMINI.md, and Antigravity slash commands

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  init [options]  Scaffold rules/, .agent/workflows/, and GEMINI.md into project
  help [command]  display help for command
```

### Command Options: `vibefix init`

| Option | Shorthand | Description | Default |
|---|---|---|---|
| `--force` | `-f` | Overwrite existing files if they already exist in destination | `false` |
| `--help` | `-h` | Display help for the `init` command | - |

```bash
# Force overwrite existing configs
vibefix init --force
```

---

## 🏗️ What VibeFix Scaffolds

Running `vibefix init` provisions three mission-critical subsystems in your repository:

```
your-project/
├── GEMINI.md                     # Agent routing prompt & behavioral enforcement
├── rules/                        # Modular architectural directives
│   ├── CORE.md                   # Strict TypeScript, zero 'any', pnpm standards
│   ├── API.md                    # REST, gRPC, SSE, Webhooks, idempotency & rate limits
│   ├── SECURITY.md               # Zero-trust validation, Zod schemas, UUIDs, ReDoS/SSTI defense
│   ├── FRONTEND.md               # SSR, Tailwind, Zustand, TanStack Query, Offline-first PWA
│   ├── SEO.md                    # Canonical meta titles, dynamic Open Graph, sitemaps
│   ├── COMPLIANCE.md             # India DPDP Act 2023, consent checkboxes & privacy policies
│   ├── DOCS.md                   # Ephemeral staging docs, CHANGELOG, and DATABASE.sql ledgers
│   └── CHECKLIST.md              # Pre-commit & pre-deployment verification matrix
└── .agent/
    └── workflows/                # Interactive slash commands for Antigravity IDE
        ├── /audit-security       # Full zero-trust vulnerability & data exposure scan
        ├── /audit-seo            # Meta tags, crawler indexability & Open Graph audit
        ├── /dpdp-audit           # Verify statutory compliance with DPDP Act 2023
        ├── /dpdp-cookies         # Scaffold GDPR/DPDP compliant consent banners
        ├── /dpdp-scaffold        # Generate compliant Privacy Policy and Terms & Conditions
        ├── /gen-conversion       # Scaffold high-conversion 'Thank You' post-purchase flows
        ├── /gen-errors           # Generate standardized custom 404, 500 & maintenance views
        ├── /gen-sitemap          # Auto-generate dynamic sitemap.xml and robots.txt
        ├── /harden-headers       # Inject CSP, HSTS, X-Frame-Options, and CORS controls
        ├── /open-graph           # Scaffold dynamic edge-rendered social preview cards
        ├── /setup-pwa            # Generate offline-first service worker & web manifest
        ├── /setup-telemetry      # Setup privacy-respecting client analytics
        └── /task-sync            # Sync task completion to RELEASE.md & CHANGELOG.md
```

---

## 🎯 Architectural Philosophy

VibeFix enforces strict, production-first development rules:

- **Strict Typing**: Ban on `any`, isolated `.types.ts` per feature domain, and strict compiler boundaries.
- **Deterministic Tooling**: Standardized on `pnpm` exclusively; eliminates phantom dependencies and lockfile drift.
- **Zero-Trust Input Validation**: Mandates Zod schemas, parameterized ORMs (Drizzle / Prisma), and UUID primary keys.
- **Modern Edge & Frontend**: SSR architectures, TanStack Query / Zustand separation, and mobile breakpoint parity.
- **Regulatory Compliance**: Built-in compliance mechanisms for modern data protection acts (DPDP 2023, GDPR).

---

## 🤖 Using with Antigravity IDE

1. Run `vibefix init` in your project root.
2. Open the project in **Google Antigravity IDE**.
3. Open the chat panel and type `/` to see all injected agent workflows:

```
/audit-security   - Run security audit
/setup-pwa        - Scaffold offline-first PWA
/harden-headers   - Configure security headers
/task-sync        - Update staging docs & changelog
```

Your AI assistant will immediately adhere to all guidelines defined in `GEMINI.md` and `rules/`.

---

## 🛠️ Local Development & Contribution

Want to contribute new rules or workflows to VibeFix?

```bash
# 1. Clone the repository
git clone https://github.com/yashasvi9199/vibefix.git
cd vibefix

# 2. Install dependencies
pnpm install

# 3. Build TypeScript source
pnpm run build

# 4. Test CLI locally
pnpm run dev init
```

---

## 📄 License

Distributed under the **MIT License**. See [LICENSE](file:///home/drone/Programming/vibefix/LICENSE) for more information.

---

<p align="center">
  Crafted by <a href="https://github.com/yashasvi9199"><strong>Yash Haldiya</strong></a>
</p>