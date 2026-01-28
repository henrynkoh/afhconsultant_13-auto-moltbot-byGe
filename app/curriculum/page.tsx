export default function CurriculumPage() {
  return (
    <div className="space-y-6 text-sm text-slate-200">
      <section>
        <h2 className="text-xl font-semibold">
          AFH Compliance Automation Expert – Curriculum
        </h2>
        <p className="mt-2">
          Single, end‑to‑end curriculum for training AFH consultants, advisors, and
          concierge‑style admins to prepare and pass Washington State AFH Initial
          Inspection using Moltbot as an autonomous assistant. Goal: move beyond theory
          and provide a &quot;cookbook&quot; approach to passing the AFH Initial
          Inspection.
        </p>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">Phase 1 – Digital Infrastructure (&quot;Setting up the Kitchen&quot;)</h3>
        <p className="mt-2">
          Before preparing for an inspection, the consultant must set up the AI
          &quot;brain.&quot; Moltbot must know WAC/RCW, facility specs, and the Initial
          Inspection Preparation Checklist.
        </p>
        <div className="mt-3 space-y-3">
          <div>
            <h4 className="font-medium text-slate-100">Module 1.1 – Moltbot Environment Setup</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>Install Moltbot via CLI: <code>npm install -g moltbot@latest</code> (Node ≥ 22).</li>
              <li>
                &quot;Shadow Work&quot; concept: use a dedicated server or secondary machine for
                security; avoid running Moltbot on the same device that holds unredacted
                resident data unless properly locked down.
              </li>
              <li>
                Connect Telegram/WhatsApp so consultants can query Moltbot during on‑site
                inspections (remote &quot;advisor‑in‑the‑ear&quot;).
              </li>
              <li>
                Run <code>moltbot onboard --install-daemon</code> (or headless{" "}
                <code>--yes</code>) and <code>moltbot doctor --deep</code> to verify
                config, Gateway, and model access.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-100">Module 1.2 – Embedding the WAC/RCW Skill-Set</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Build the <span className="font-semibold">01_Compliance_Brain</span> folder
                with WAC 388‑76 (full text), RCW 70.128, DSHS Dear Provider letters, and
                the AFH Initial Inspection Preparation Checklist.
              </li>
              <li>
                Create a <code>Facility_Specs.json</code> (or knowledge.md) with square
                footage, window sizes, ramp slopes, door widths, alarm locations, and
                bedroom counts so Moltbot can &quot;reason&quot; about your specific
                property.
              </li>
              <li>
                Train Moltbot to recognize the Initial Inspection Preparation Checklist
                as the primary user intent: e.g., &quot;Audit Physical Plant&quot; or
                &quot;Generate Policy [Title].&quot;
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">Phase 2 – Paperwork Automation (&quot;The Tedious Task Slayer&quot;)</h3>
        <p className="mt-2">
          Use Moltbot as a ghostwriter and auditor to take over the tedious parts of
          AFH paperwork: policies, care plans, MAR audits, logs, and DSHS forms. The AI
          handles formatting, WAC citations, and logical flow; the human reviews and
          prints.
        </p>
        <div className="mt-3 space-y-3">
          <div>
            <h4 className="font-medium text-slate-100">Module 2.1 – Automated Policy &amp; Procedure Drafting</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Use <code>moltbot agent --message &quot;Generate a resident rights
                policy based on WAC 388-76-10500&quot;</code> and similar prompts for
                Disaster Plan (WAC 388‑76‑10460), Medication Management (WAC
                388‑76‑10430), and House Rules.
              </li>
              <li>
                Use the Browser Relay (if available) to cross‑reference the DSHS website
                for the latest form updates before generating or pre‑filling documents.
              </li>
              <li>
                Create a Moltbot &quot;Skill&quot; (skill.md) for policy drafting that
                injects Facility_Specs and WAC citations into templates.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-100">Module 2.2 – Initial Inspection Checklist Audit</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Feed Moltbot current property photos and floor plans; ask it to analyze
                for specific WAC requirements (e.g., WAC 388‑76‑10685 bedroom window
                egress) and flag discrepancies.
              </li>
              <li>
                Delegate MAR and log reviews so the AI finds missing signatures, gaps,
                and anomalies; output a compliance report for the inspector.
              </li>
              <li>
                Use browser relay to fetch and pre‑fill current DSHS forms (e.g.,
                Background Authorization, Resident Assessment) with facility information
                from config.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">Phase 3 – Logic, Reasoning &amp; Answers</h3>
        <p className="mt-2">
          Consultants must explain not only &quot;what&quot; is compliant, but also
          &quot;why&quot; – anchored in WAC/RCW, best practices, and safety/rights
          rationale. The consultant&apos;s job is to articulate the logic chain, not to
          memorize every WAC.
        </p>
        <div className="mt-3 space-y-3">
          <div>
            <h4 className="font-medium text-slate-100">Module 3.1 – Logical Defense Scripts</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Teach Moltbot to produce &quot;logic chains&quot;: e.g., &quot;If an
                inspector asks why this grab bar is at this height, provide the WAC
                citation and the safety rationale.&quot;
              </li>
              <li>
                Simulate inspector Q&amp;A using the Top 100 Question Bank; require
                every answer to include a WAC/RCW citation and a one‑sentence
                safety/rights justification.
              </li>
              <li>
                Use Moltbot to crawl AFH community forums or newsletters (where
                appropriate) for recent inspection trends and common &quot;red
                flags&quot; so consultants can anticipate questions.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-100">Module 3.2 – Best Practice Integration</h4>
            <ul className="mt-1 list-disc space-y-1 pl-5">
              <li>
                Practice real‑time &quot;advisor‑in‑the‑ear&quot; workflows via
                Telegram/WhatsApp: consultant types the inspector&apos;s question;
                Moltbot returns WAC citation and suggested answer within seconds.
              </li>
              <li>
                Emphasize what kinds of questions will be asked and how to select the
                right answer based on WAC, RCW, and best practices – and how to explain
                logically and reasonably.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">Phase 4 – Consultant Playbooks</h3>
        <p className="mt-2">
          Translate the above into repeatable playbooks for new consultants with clear
          checklists, prompts, and boundaries. This phase is the &quot;cookbook&quot;
          that ties everything together.
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <strong>Inspection prompt pack</strong>: 50+ real‑world Moltbot prompts for
            physical plant, documentation, and inspector logic (see Inspection Prompt
            Pack page).
          </li>
          <li>
            <strong>Paperwork binder</strong>: Standard AFH folder structure
            (01_Compliance_Brain, 02_Active_Residents, 03_Staff_Portal, 04_Operations)
            so Moltbot can read, audit, and generate files consistently (see Paperwork
            Binder page).
          </li>
          <li>
            <strong>AI use boundaries</strong>: What consultants may and may not
            delegate to AI (no falsifying records, no exposing PHI, no blind trust of
            AI citations without verification) – see AI Use Boundaries page.
          </li>
          <li>
            <strong>Top 100 questions</strong>: Full question bank with &quot;AI
            thinking flow&quot; sample explanations so consultants learn how to reason
            with WAC (see Top 100 Questions page).
          </li>
          <li>
            <strong>AI Playbooks</strong>: Day‑1 setup, zero‑touch paperwork scripts,
            NCP generation prompt, inspection‑day real‑time defense, and consultant
            principles (see AI Playbooks page).
          </li>
        </ul>
      </section>
    </div>
  );
}
