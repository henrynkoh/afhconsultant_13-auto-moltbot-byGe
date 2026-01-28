"use client";

import Link from "next/link";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "course-goal", label: "Course Goal" },
  { id: "for-consultants", label: "For Consultants" },
  { id: "whats-inside", label: "What's Inside" },
  { id: "curriculum", label: "Curriculum" },
  { id: "moltbot-scripts", label: "Moltbot Scripts" },
  { id: "prompt-pack", label: "Prompt Pack" },
  { id: "paperwork-binder", label: "Paperwork Binder" },
  { id: "playbooks", label: "AI Playbooks" },
  { id: "ai-boundaries", label: "AI Boundaries" },
  { id: "top-100", label: "Top 100 Questions" },
  { id: "how-to-use", label: "How to Use" },
  { id: "footer", label: "Footer" },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function LandingPage() {
  return (
    <div className="relative flex min-h-[calc(100vh-8rem)] w-full flex-col md:flex-row">
      {/* Left sidebar - sticky, scrollable (hidden on small screens; use header nav on mobile) */}
      <aside
        className="sticky top-4 hidden h-[calc(100vh-6rem)] w-56 shrink-0 overflow-y-auto overflow-x-hidden rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-4 shadow-xl backdrop-blur md:block"
        aria-label="Page navigation"
      >
        <nav className="flex flex-col gap-1">
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Navigate
          </p>
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="rounded-lg px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-emerald-500/20 hover:text-emerald-300"
            >
              {label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Mobile section nav (visible when sidebar is hidden) */}
      <div className="flex overflow-x-auto gap-2 px-4 py-2 border-b border-white/10 bg-slate-900/60 md:hidden">
        {SECTIONS.slice(0, 8).map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className="shrink-0 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-emerald-500/20 hover:text-emerald-300"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Main content - scrollable */}
      <main className="min-w-0 flex-1 px-4 py-6 md:px-8">
        {/* Hero */}
        <section
          id="hero"
          className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600/30 via-cyan-600/20 to-violet-600/30 px-6 py-12 text-center shadow-2xl md:px-12 md:py-16"
        >
          <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow md:text-4xl lg:text-5xl">
            AFH Compliance Automation
            <span className="block bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
              with Moltbot
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
            One curriculum for consultants & advisors to delegate AFH Initial Inspection
            logic and paperwork to AI. Modern, visual, and ready to use.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/curriculum"
              className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-400"
            >
              Start Curriculum
            </Link>
            <Link
              href="/moltbot-scripts"
              className="rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Moltbot Scripts
            </Link>
          </div>
        </section>

        {/* Course Goal */}
        <section id="course-goal" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">Course Goal</h2>
          <div className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 shadow-lg">
            <p className="text-slate-200">
              Train AFH consultants, advisors, and concierge-style admins to operate as
              <strong className="text-emerald-300"> AI-augmented compliance strategists</strong>
              {" "}who use Moltbot to automate 80–90% of Initial Inspection preparation
              paperwork and reasoning.
            </p>
          </div>
        </section>

        {/* For Consultants */}
        <section id="for-consultants" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">For Consultants</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-6 shadow-lg">
              <h3 className="font-semibold text-emerald-300">Step-by-step cookbook</h3>
              <p className="mt-2 text-sm text-slate-200">
                AFH Initial Inspection prep from start to finish with clear, repeatable steps.
              </p>
            </div>
            <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/30 p-6 shadow-lg">
              <h3 className="font-semibold text-cyan-300">Delegate to Moltbot</h3>
              <p className="mt-2 text-sm text-slate-200">
                Regulatory reading, paperwork drafting, and self-audits handled by AI.
              </p>
            </div>
            <div className="rounded-2xl border border-violet-500/30 bg-violet-950/30 p-6 shadow-lg md:col-span-2">
              <h3 className="font-semibold text-violet-300">WAC/RCW-backed answers</h3>
              <p className="mt-2 text-sm text-slate-200">
                Answer inspectors with logic grounded in WAC/RCW, not guesswork or memory.
              </p>
            </div>
          </div>
        </section>

        {/* What's Inside */}
        <section id="whats-inside" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">What&apos;s Inside</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/curriculum"
              className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-4 font-semibold text-slate-100 transition hover:scale-[1.02] hover:shadow-lg"
            >
              Curriculum
            </Link>
            <Link
              href="/moltbot-scripts"
              className="rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-4 font-semibold text-slate-100 transition hover:scale-[1.02] hover:shadow-lg"
            >
              Moltbot Scripts
            </Link>
            <Link
              href="/prompt-pack"
              className="rounded-xl border border-violet-500/30 bg-violet-950/30 p-4 font-semibold text-slate-100 transition hover:scale-[1.02] hover:shadow-lg"
            >
              Prompt Pack (50+)
            </Link>
            <Link
              href="/paperwork-binder"
              className="rounded-xl border border-amber-500/30 bg-amber-950/30 p-4 font-semibold text-slate-100 transition hover:scale-[1.02] hover:shadow-lg"
            >
              Paperwork Binder
            </Link>
            <Link
              href="/playbooks"
              className="rounded-xl border border-rose-500/30 bg-rose-950/30 p-4 font-semibold text-slate-100 transition hover:scale-[1.02] hover:shadow-lg"
            >
              AI Playbooks
            </Link>
            <Link
              href="/ai-boundaries"
              className="rounded-xl border border-sky-500/30 bg-sky-950/30 p-4 font-semibold text-slate-100 transition hover:scale-[1.02] hover:shadow-lg"
            >
              AI Boundaries
            </Link>
            <Link
              href="/question-bank"
              className="rounded-xl border border-fuchsia-500/30 bg-fuchsia-950/30 p-4 font-semibold text-slate-100 transition hover:scale-[1.02] hover:shadow-lg"
            >
              Top 100 Questions
            </Link>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">Curriculum</h2>
          <p className="mb-4 text-slate-300">
            Four phases with detailed modules: Digital Infrastructure → Paperwork Automation → Logic & Reasoning → Playbooks.
          </p>
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-500"
          >
            View full curriculum →
          </Link>
        </section>

        {/* Moltbot Scripts */}
        <section id="moltbot-scripts" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">Moltbot Scripts</h2>
          <p className="mb-4 text-slate-300">
            Top 10 CLI commands: onboard, gateway, channels login, agent, doctor, status, and more. AFH-specific automation examples included.
          </p>
          <Link
            href="/moltbot-scripts"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-500"
          >
            See all scripts →
          </Link>
        </section>

        {/* Prompt Pack */}
        <section id="prompt-pack" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">Inspection Prompt Pack</h2>
          <p className="mb-4 text-slate-300">
            50+ real-world prompts: Physical Plant, Documentation & Paperwork, Inspector Logic & Defense. Copy-paste into Moltbot.
          </p>
          <Link
            href="/prompt-pack"
            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-500"
          >
            Browse prompts →
          </Link>
        </section>

        {/* Paperwork Binder */}
        <section id="paperwork-binder" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">Paperwork Binder</h2>
          <p className="mb-4 text-slate-300">
            Standard folder structure: 01_Compliance_Brain, 02_Active_Residents, 03_Staff_Portal, 04_Operations. AI-first AFH documentation.
          </p>
          <Link
            href="/paperwork-binder"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-500"
          >
            View structure →
          </Link>
        </section>

        {/* Playbooks */}
        <section id="playbooks" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">AI Playbooks</h2>
          <p className="mb-4 text-slate-300">
            Zero-touch scripts, NCP generation prompt, inspection-day real-time defense, consultant principles.
          </p>
          <Link
            href="/playbooks"
            className="inline-flex items-center gap-2 rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-500"
          >
            Open playbooks →
          </Link>
        </section>

        {/* AI Boundaries */}
        <section id="ai-boundaries" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">AI Use Boundaries</h2>
          <p className="mb-4 text-slate-300">
            Allowed vs. prohibited: drafts and analysis ✅; falsifying records and exposing PHI ❌. Three consultant principles.
          </p>
          <Link
            href="/ai-boundaries"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-500"
          >
            Read boundaries →
          </Link>
        </section>

        {/* Top 100 */}
        <section id="top-100" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">Top 100 Questions</h2>
          <p className="mb-4 text-slate-300">
            Full AFH admin & inspection question bank in 5 categories, plus AI thinking-flow samples.
          </p>
          <Link
            href="/question-bank"
            className="inline-flex items-center gap-2 rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-semibold text-white hover:bg-fuchsia-500"
          >
            Open question bank →
          </Link>
        </section>

        {/* How to Use */}
        <section id="how-to-use" className="mb-16 scroll-mt-24">
          <h2 className="mb-4 text-2xl font-bold text-white">How to Use This Portal</h2>
          <ol className="list-decimal space-y-2 pl-5 text-slate-200">
            <li>Start with <strong className="text-emerald-300">Curriculum</strong> for the full training path.</li>
            <li>Set up Moltbot using <strong className="text-cyan-300">Moltbot Scripts</strong>.</li>
            <li>Use <strong className="text-rose-300">AI Playbooks</strong> for zero-touch scripts and inspection-day defense.</li>
            <li>Practice with <strong className="text-violet-300">Prompt Pack</strong> and <strong className="text-fuchsia-300">Top 100 Questions</strong>.</li>
            <li>Implement the <strong className="text-amber-300">Paperwork Binder</strong> structure and connect Moltbot.</li>
            <li>Follow <strong className="text-sky-300">AI Use Boundaries</strong> for ethics and compliance.</li>
          </ol>
        </section>

        {/* Footer */}
        <section id="footer" className="scroll-mt-24 pb-8">
          <div className="rounded-2xl border border-white/10 bg-slate-800/50 px-6 py-4 text-center text-sm text-slate-400">
            Designed for Washington State AFH Initial Inspection preparation using Moltbot.
          </div>
        </section>
      </main>

      {/* Bottom-right GitHub link (set NEXT_PUBLIC_GITHUB_URL in .env.local for your repo) */}
      <a
        href={process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-10 flex items-center gap-2 rounded-xl border border-white/20 bg-slate-900/90 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur transition hover:scale-105 hover:border-emerald-500/50 hover:bg-slate-800"
        aria-label="View on GitHub"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        View on GitHub
      </a>
    </div>
  );
}
