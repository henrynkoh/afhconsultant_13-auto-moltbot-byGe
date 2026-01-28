export default function PaperworkBinderPage() {
  return (
    <div className="space-y-6 text-sm text-slate-200">
      <section>
        <h2 className="text-xl font-semibold">
          Paperwork Automation Binder (AI‑First Structure)
        </h2>
        <p className="mt-2">
          This structure is designed so Moltbot can read, audit, and generate AFH
          paperwork with minimal human effort. Mirror this layout in{" "}
          <code>~/AFH_Automation_Root</code> and point Moltbot&apos;s config/stateDir to
          it.
        </p>
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">Folder Layout</h3>
        <pre className="mt-2 overflow-x-auto rounded bg-slate-950 px-3 py-2 text-xs text-slate-100">
{`/AFH_Automation_Root
├── 01_Compliance_Brain
│   ├── WAC_388-76_Full_Text.md
│   ├── DSHS_Initial_Checklist.pdf
│   ├── Facility_Specs.json
│   └── Initial_Checklist_Logic.md
├── 02_Active_Residents
│   └── [Resident_Name]/
│       ├── Assessment.pdf
│       ├── Care_Plan_Current.docx
│       └── MAR_Log_2026_01.xlsx
├── 03_Staff_Portal
│   ├── Staff_Master_List.csv
│   └── Credentials/
│       └── *.pdf (TB, CPR, Background Check)
└── 04_Operations
    ├── Fire_Drill_Logs.docx
    ├── Water_Temp_Logs.xlsx
    └── Incident_Reports.docx`}
        </pre>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold">01_Compliance_Brain</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Purpose</span>: single &quot;source of
              truth&quot; for WAC/RCW and facility specs; Moltbot never has to &quot;look
              up&quot; laws manually.
            </li>
            <li>
              <span className="font-semibold">Moltbot role</span>: embed WAC 388‑76,
              RCW 70.128, DSHS letters, and your Initial Inspection checklist logic.
            </li>
            <li>
              <span className="font-semibold">Key command</span>: tell Moltbot to crawl
              this folder and generate self‑audit reports before inspections.
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold">02_Active_Residents</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Purpose</span>: resident‑level assessments,
              care plans, and MARs for NCP and WAC compliance.
            </li>
            <li>
              <span className="font-semibold">Automation</span>: MAR gap detection,
              care‑plan completeness checks, and negotiated care plan drafting.
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold">03_Staff_Portal</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Purpose</span>: training, TB, CPR, and
              background check tracking.
            </li>
            <li>
              <span className="font-semibold">Automation</span>: upcoming expiration
              alerts and draft reminder emails for staff.
            </li>
          </ul>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
          <h3 className="font-semibold">04_Operations</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <span className="font-semibold">Purpose</span>: logs and drills that
              inspectors ask for first.
            </li>
            <li>
              <span className="font-semibold">Automation</span>: generate and pre‑fill
              water temperature logs, drill scenarios, and maintenance schedules.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

