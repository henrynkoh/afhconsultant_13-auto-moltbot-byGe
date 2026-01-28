# AFH Moltbot Consultant Curriculum

A **Next.js training portal** for AFH consultants, advisors, and concierge-style admins who use **Moltbot (Clawdbot)** to automate Washington State **AFH Initial Inspection** preparation and paperwork.

---

## What This Project Provides

| Section | Description |
|--------|-------------|
| **Curriculum** | End-to-end training path (4 phases, detailed modules) to become an AI-augmented AFH compliance strategist. |
| **Moltbot Scripts** | Top 10 CLI commands and AFH-specific automation examples. |
| **Inspection Prompt Pack** | 50+ real-world Moltbot prompts for physical plant, documentation, and inspector Q&A. |
| **Paperwork Binder** | Standard folder structure (01_Compliance_Brain, 02_Active_Residents, etc.) for AI-first AFH documentation. |
| **AI Playbooks** | Zero-touch scripts, NCP generation prompt, inspection-day workflow, consultant principles. |
| **AI Use Boundaries** | Clear guidance on what AI may / may not do (ethics and compliance). |
| **Top 100 Questions** | Full AFH admin & inspection question bank with AI thinking-flow samples. |

---

## Quick Links

- **[Quickstart](docs/QUICKSTART.md)** – Get running in minutes.
- **[Tutorial](docs/TUTORIAL.md)** – Step-by-step walkthrough.
- **[Manual](docs/MANUAL.md)** – Full user manual.

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 (recommended: 22 for Moltbot)
- **npm** or **pnpm**

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:3000** in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Using Alongside Moltbot

- Configure Moltbot with your AFH automation root (e.g. `~/AFH_Automation_Root`).
- Use the **Moltbot Scripts** and **Inspection Prompt Pack** pages to:
  - Build a WAC / RCW knowledge base.
  - Automate AFH paperwork creation and audits.
  - Rehearse inspection Q&A with WAC-backed logic.

---

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── page.tsx            # Home / Overview
│   ├── curriculum/         # Full curriculum
│   ├── moltbot-scripts/    # Top 10 scripts
│   ├── prompt-pack/        # 50+ inspection prompts
│   ├── paperwork-binder/   # Folder structure
│   ├── playbooks/          # AI delegation playbooks
│   ├── ai-boundaries/      # AI use boundaries
│   └── question-bank/      # Top 100 questions
├── docs/
│   ├── QUICKSTART.md       # Quickstarter
│   ├── TUTORIAL.md         # Tutorial
│   ├── MANUAL.md           # Full manual
│   └── marketing/          # Ad copy (FB, Insta, etc.)
├── tasks/todo.md           # Task tracking
└── README.md               # This file
```

---

## License & Audience

Designed for **Washington State AFH** Initial Inspection preparation using Moltbot. For consultants, advisors, and providers who want to delegate inspection logic and paperwork to AI while staying compliant with WAC/RCW.
