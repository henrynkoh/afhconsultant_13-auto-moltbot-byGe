# Tutorial – AFH Moltbot Consultant Curriculum

Step-by-step walkthrough for using the training portal and applying it with Moltbot.

---

## Part 1: Run the Portal (10 min)

### Step 1.1 – Install and start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

### Step 1.2 – Tour the pages

1. **Overview** – Read the course goal and “What this app contains.”
2. **Curriculum** – Skim Phase 1–4 and the modules (1.1, 1.2, 2.1, 2.2, 3.1, 3.2).
3. **Moltbot Scripts** – Note the top 10 commands (onboard, gateway, channels login, agent, doctor, status, etc.).
4. **Inspection Prompt Pack** – Browse the 50 prompts (Physical Plant, Documentation, Inspector Logic).
5. **Paperwork Binder** – Review the folder layout (01_Compliance_Brain through 04_Operations).
6. **AI Playbooks** – Read Day-1 setup, zero-touch scripts, NCP prompt, inspection-day workflow.
7. **AI Use Boundaries** – Review 허용 (allowed) vs. 금지 (prohibited) and the 3 principles.
8. **Top 100 Questions** – Scan the 5 categories and the AI thinking-flow samples.

---

## Part 2: Set Up Your AFH “Brain” (30 min)

### Step 2.1 – Create the folder structure

On your machine (or server where Moltbot runs), create:

```
~/AFH_Automation_Root/
├── 01_Compliance_Brain/
├── 02_Active_Residents/
├── 03_Staff_Portal/
│   └── Credentials/
└── 04_Operations/
```

Use the exact structure from the **Paperwork Binder** page.

### Step 2.2 – Add WAC and facility data

- Put **WAC 388-76** (full or key sections), **RCW 70.128**, and the **DSHS AFH Initial Inspection Checklist** in `01_Compliance_Brain/`.
- Create **Facility_Specs.json** in `01_Compliance_Brain/` with: room counts, square footage, window sizes, door widths, ramp slopes, alarm and extinguisher locations.

### Step 2.3 – Install and configure Moltbot (optional)

```bash
npm install -g moltbot@latest
moltbot onboard --install-daemon
moltbot config set models.primary 'claude-3-5-sonnet'
```

Point Moltbot’s state/config to `~/AFH_Automation_Root` (or your path) so it can read the Compliance_Brain folder.

---

## Part 3: Practice With Prompts (20 min)

### Step 3.1 – Copy one Physical Plant prompt

From **Inspection Prompt Pack** → “A. Physical Plant,” copy the first prompt (e.g. window egress checklist for WAC 388-76-10685).

Run it (after replacing paths/names if needed):

```bash
moltbot agent --thinking high --message "WAC 388-76-10685에 근거하여..."
```

### Step 3.2 – Copy one Documentation prompt

From “B. Documentation & Paperwork,” copy a MAR audit or Care Plan prompt and run it with `moltbot agent --message "..."`.

### Step 3.3 – Copy one Inspector Logic prompt

From “C. Inspector Logic & Defense,” copy a defense script prompt (e.g. resident rights poster) and run it.

---

## Part 4: Use the Question Bank (15 min)

### Step 4.1 – Pick 5 questions from Top 100

Choose one from each category (Physical Plant, Resident Rights, Medication, Staffing, Emergency).

### Step 4.2 – Answer with WAC citation

For each question, use Moltbot to generate an answer that includes:

1. WAC/RCW citation  
2. Plain-language explanation  
3. Safety or rights rationale  

Example prompt:

```
moltbot agent --message "What is the minimum square footage for a single-occupancy bedroom in a Washington AFH? Give WAC citation, plain English, and safety rationale."
```

### Step 4.3 – Compare with AI thinking-flow samples

Read the 4 “AI 사고 흐름” samples on the **Top 100 Questions** page and align your prompts with that structure (Search → Analysis → Exception check → Final answer).

---

## Part 5: Apply AI Playbooks (20 min)

### Step 5.1 – Run one zero-touch script

From **AI Playbooks**, pick one script (e.g. “Employee File Auditor” or “Log Generator”). Copy the `moltbot agent --message "..."` command, adapt paths/names, and run it.

### Step 5.2 – Generate an NCP draft

Copy the full **NCP (Negotiated Care Plan)** prompt from **AI Playbooks**. Replace `[이름]`, `[나이]`, `[진단]`, etc. with real or sample data. Run with `moltbot agent --thinking high --message "..."` and save the output as a draft in `02_Active_Residents/[Resident_Name]/`.

### Step 5.3 – Rehearse inspection-day defense

Read the “점검 당일 실전 대응” section. Simulate: an inspector asks about hallway width. Send a short query to Moltbot via Telegram/WhatsApp (or CLI): “복도 폭 WAC 규정 즉시 확인해줘.” Use the answer to practice saying the WAC number and measurement out loud.

---

## Part 6: Respect AI Boundaries (5 min)

Re-read **AI Use Boundaries**:

- **허용**: Drafts, data analysis, real-time WAC lookup, summarization.
- **금지**: Falsifying records, exposing PHI, blind trust of AI citations, altering evidence.
- **3 principles**: AI = scribe, you = editor; ask specific questions; every answer ends with a WAC number.

---

## Summary

You have:

1. Run the portal and toured all sections.  
2. Created the AFH folder structure and added WAC + facility specs.  
3. Installed/configured Moltbot and run sample prompts from the pack.  
4. Used the Top 100 bank to practice WAC-cited answers.  
5. Applied playbooks (zero-touch script, NCP draft, inspection-day defense).  
6. Reviewed AI boundaries.

For more detail, see **[Manual](MANUAL.md)**.
