const coreScripts = [
  {
    title: "Onboard & install daemon",
    command: "moltbot onboard --install-daemon",
    purpose:
      "Initial guided setup of Moltbot, including optional background Gateway service."
  },
  {
    title: "Run Gateway",
    command: "moltbot gateway --port 18789 --verbose",
    purpose: "Start the long‑running WebSocket control plane used by all agents."
  },
  {
    title: "Login channels (Telegram / WhatsApp)",
    command: "moltbot channels login",
    purpose:
      "Pair messaging channels so consultants can talk to Moltbot from their phone on‑site."
  },
  {
    title: "Send test message",
    command: 'moltbot message send --to +15555550123 --message "Hello from Moltbot"',
    purpose: "Verify channel connectivity and outbound messaging."
  },
  {
    title: "Talk to agent with high reasoning",
    command: 'moltbot agent --message "Ship checklist" --thinking high',
    purpose: "Use Moltbot as the AFH compliance brain with deeper reasoning."
  },
  {
    title: "Doctor (deep health check)",
    command: "moltbot doctor --deep",
    purpose:
      "Run diagnostics to ensure config, Gateway, models, and AFH knowledge folders are healthy."
  },
  {
    title: "Status snapshot",
    command: "moltbot status --all",
    purpose: "Quick view of Gateway, agent, and configuration state before client sessions."
  },
  {
    title: "Models / provider status",
    command: "moltbot models status",
    purpose:
      "Confirm Anthropic / OpenAI credentials are valid and the preferred model is available."
  },
  {
    title: "Tail logs during inspection",
    command: "moltbot logs --follow",
    purpose:
      "Watch live logs while reproducing issues or running complex AFH audits and crawlers."
  },
  {
    title: "Configure primary model",
    command: "moltbot config set models.primary 'claude-3-5-sonnet'",
    purpose:
      "Select a strong reasoning model for complex WAC/RCW interpretation and inspection logic."
  }
];

export default function MoltbotScriptsPage() {
  return (
    <div className="space-y-6 text-sm text-slate-200">
      <section>
        <h2 className="text-xl font-semibold">Top 10 Moltbot / Clawdbot Scripts</h2>
        <p className="mt-2">
          Use these commands as your operational cheat‑sheet to turn Moltbot into an
          &quot;Autonomous Compliance Officer&quot; for AFH Initial Inspection prep.
        </p>
      </section>

      <section className="space-y-3">
        {coreScripts.map((s) => (
          <div
            key={s.title}
            className="rounded-lg border border-slate-800 bg-slate-900/60 p-4"
          >
            <h3 className="font-semibold">{s.title}</h3>
            <p className="mt-1 text-slate-300">{s.purpose}</p>
            <pre className="mt-2 overflow-x-auto rounded bg-slate-950 px-3 py-2 text-xs text-slate-100">
              <code>{s.command}</code>
            </pre>
          </div>
        ))}
      </section>

      <section className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
        <h3 className="font-semibold">AFH‑Specific Automation Examples</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>
            <span className="font-semibold">Daily compliance crawler</span>: configure an
            agent that checks DSHS AFH Initial Inspection Preparation Checklist changes
            every morning and emails a diff.
          </li>
          <li>
            <span className="font-semibold">Pre‑inspection audit</span>: run deep agents
            that read your AFH binder folders and generate a gap report mapped to WAC
            citations.
          </li>
          <li>
            <span className="font-semibold">On‑site advisor</span>: use{" "}
            <code>moltbot channels login</code> and talk to Moltbot via phone while
            walking the property with an inspector.
          </li>
        </ul>
      </section>
    </div>
  );
}

