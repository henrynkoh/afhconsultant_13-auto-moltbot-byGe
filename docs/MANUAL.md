# Manual – AFH Moltbot Consultant Curriculum

Full user manual for the AFH Moltbot Consultant Curriculum portal and how to use it with Moltbot for Washington State AFH Initial Inspection preparation.

---

## 1. Introduction

### 1.1 Purpose

This project is a **Next.js web app** that serves as a training portal for:

- **AFH consultants / advisors / concierge-style admins** whose job is to guide providers from start to finish on how to prepare and operate an AFH in compliance with the **AFH Initial Inspection**.
- **Preparation Checklist** use: leveraging a personal AI assistant (Moltbot / Clawdbot) to handle most time-consuming and tedious tasks in AFH inspection paperwork as written in WAC and related regulations.

The curriculum emphasizes:

- What kinds of questions inspectors will ask and how to choose the right answer based on WAC, RCW, and best practices.
- How to explain answers logically and reasonably.
- Top 100 questions for AFH admin training, with “AI thinking flow” explanations.

### 1.2 Audience

- Prospective or current AFH consultants and advisors.
- Providers preparing for Washington State AFH Initial Inspection.
- Anyone using Moltbot (Clawdbot) to automate AFH compliance paperwork and reasoning.

### 1.3 What You Need

- A computer with **Node.js** (≥ 18; 22 recommended for Moltbot).
- Optional: **Moltbot** installed and configured for AFH (see Moltbot docs).
- Optional: **Telegram or WhatsApp** for “advisor-in-the-ear” during inspections.

---

## 2. Portal Overview

### 2.1 Home (Overview)

- **Course goal**: Train consultants to use Moltbot to automate ~80–90% of Initial Inspection preparation (paperwork and logic).
- **What the app contains**: Curriculum, Moltbot scripts, prompt pack, paperwork binder, AI playbooks, AI boundaries, Top 100 questions.
- **How to use this portal**: Ordered steps linking to Curriculum → Moltbot Scripts → AI Playbooks → Prompt Pack & Question Bank → Paperwork Binder → AI Boundaries.

### 2.2 Curriculum

- **Phase 1 – Digital Infrastructure**: Moltbot setup, WAC/RCW knowledge base, Facility_Specs, Telegram/WhatsApp.
- **Phase 2 – Paperwork Automation**: Policy drafting, MAR/log audits, DSHS form pre-fill, checklist audit.
- **Phase 3 – Logic, Reasoning & Answers**: Logic chains, Top 100 Q&A, advisor-in-the-ear, best practices.
- **Phase 4 – Consultant Playbooks**: Prompt pack, binder structure, AI boundaries, Top 100, AI Playbooks.

Each phase is broken into **modules** (e.g. 1.1, 1.2, 2.1, 2.2, 3.1, 3.2) with concrete tasks.

### 2.3 Moltbot Scripts

- **Top 10 CLI commands**: onboard, gateway, channels login, message send, agent (with --thinking high), doctor, status, models status, logs, config.
- **AFH-specific examples**: Daily compliance crawler, pre-inspection audit, on-site advisor via channels.

Use this page as a cheat sheet when operating Moltbot.

### 2.4 Inspection Prompt Pack

- **50+ prompts** in three groups:
  - **A. Physical Plant** (15): Window egress, grab bars, alarms, ramps, water temp, hallway width, lighting, extinguishers, etc.
  - **B. Documentation & Paperwork** (20): MAR audit, Care Plan, DSHS forms, policies, NCP template, staff expiration, disaster plan, etc.
  - **C. Inspector Logic & Defense** (15): Resident rights poster, Top 10 deficiencies, fall prevention, POC drafts, WAC citation scripts, etc.

Copy prompts into `moltbot agent --message "..."` (or `--thinking high` when reasoning is critical).

### 2.5 Paperwork Binder

- **Standard folder layout** for AI-first AFH documentation:
  - **01_Compliance_Brain**: WAC, RCW, DSHS checklist, Facility_Specs.json.
  - **02_Active_Residents**: Per-resident folders (Assessment, Care Plan, MAR).
  - **03_Staff_Portal**: Staff list, Credentials (TB, CPR, background).
  - **04_Operations**: Fire drill logs, water temp logs, incident reports.

The manual recommends mirroring this under e.g. `~/AFH_Automation_Root` and pointing Moltbot at it.

### 2.6 AI Playbooks

- **Day-1 setup**: Facility_Specs, load Compliance_Brain, set context (e.g. “Washington AFH consultant, preparing for Initial Inspection”).
- **10 zero-touch scripts**: Daily compliance crawler, employee file auditor, log generator, admission agreement, WAC-to-plain-English, med error reporter, physical plant scheduler, financial audit, inspector welcome folder, disaster drill generator.
- **NCP (Negotiated Care Plan) prompt**: Full, copy-paste prompt for WAC 388-76-10355–compliant NCP (Who/When/How, Crisis Plan, Resident Rights).
- **Inspection day**: Real-time WAC defense (e.g. hallway width), POC drafting.
- **Consultant principles**: AI = scribe, you = editor; ask specific questions; every answer ends with a WAC number.

### 2.7 AI Use Boundaries

- **허용 (Allowed)**: Drafts (policies, care plans), data analysis (MAR gaps, patterns), real-time WAC lookup, summarization/translation of WAC to plain English.
- **금지 (Prohibited)**: Falsifying records (e.g. fake fire drills, fake temps), exposing PHI to external LLMs without safeguards, blind trust of AI citations without verification, altering or hiding evidence.
- **3 principles**: (1) AI is scribe, you are editor. (2) Specific questions get better answers. (3) All justification ends with a WAC number.

### 2.8 Top 100 Questions

- **100 questions** in 5 categories (20 each): Physical Plant, Resident Rights & Policies, Medication Management, Staffing & Training, Emergency Preparedness.
- Numbered **Q1–Q100** for easy reference.
- **4 AI thinking-flow samples**: Kitchen lock at night, TB before care, self-administration, wood countertop—each with Search → Analysis → Exception/Constraint → Final answer.

Use this page to drill consultants and to prompt Moltbot for WAC-cited, logically structured answers.

---

## 3. Installation and Run

### 3.1 Install Dependencies

```bash
npm install
```

### 3.2 Development

```bash
npm run dev
```

Open **http://localhost:3000**.

### 3.3 Production Build

```bash
npm run build
npm start
```

### 3.4 Lint

```bash
npm run lint
```

---

## 4. Using the Portal With Moltbot

1. **Set up Moltbot** (see Moltbot docs): install, onboard, optionally install daemon, configure models and state directory.
2. **Create AFH folder structure** (Paperwork Binder) and fill 01_Compliance_Brain with WAC, RCW, checklist, Facility_Specs.
3. **Point Moltbot** at the AFH root (e.g. state dir or config path).
4. **Use prompts** from the Inspection Prompt Pack and AI Playbooks; run via `moltbot agent --message "..."` or `--thinking high`.
5. **Practice Top 100** questions: for each, ask Moltbot for an answer with WAC citation, plain English, and safety/rights rationale.
6. **On inspection day**: use Telegram/WhatsApp (or CLI) to query Moltbot in real time for WAC citations and suggested responses; always verify WAC numbers on the official source.

---

## 5. File and Project Structure

- **app/** – Next.js App Router pages (Overview, Curriculum, Moltbot Scripts, Prompt Pack, Paperwork Binder, Playbooks, AI Boundaries, Question Bank).
- **app/*/data.ts** – Data for Prompt Pack and Question Bank (editable for your own prompts/questions).
- **docs/** – QUICKSTART.md, TUTORIAL.md, MANUAL.md, marketing/ (ad copy).
- **tasks/todo.md** – Task and progress tracking.

---

## 6. Support and References

- **Washington State WAC 388-76** – Adult Family Home regulations.
- **RCW 70.128** – Related Washington law.
- **DSHS** – AFH licensing, Dear Provider letters, Initial Inspection Preparation Checklist.
- **Moltbot / Clawdbot** – Official docs for install, config, gateway, channels, agent.

---

## 7. Changelog and Versions

- **1.0** – Initial portal: Curriculum, Moltbot Scripts, Prompt Pack (50+), Paperwork Binder, AI Playbooks, AI Boundaries, Top 100 Questions; docs (README, Quickstart, Tutorial, Manual) and marketing copy (FB, Insta, Threads, Blogger, Naver, Tistory, WordPress, newsletter, email).
