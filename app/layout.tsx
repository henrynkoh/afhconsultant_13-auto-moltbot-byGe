import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "AFH Moltbot Consultant Curriculum",
  description:
    "Training portal for AFH consultants to use Moltbot to automate Initial Inspection preparation and paperwork.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="flex min-h-screen flex-col">
          <header className="shrink-0 border-b border-slate-800 bg-slate-900/50 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
              <a href="/" className="text-lg font-semibold text-white hover:text-emerald-300">
                AFH + Moltbot
              </a>
              <nav className="flex flex-wrap gap-2 text-sm">
                <a href="/curriculum" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Curriculum
                </a>
                <a href="/moltbot-scripts" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Scripts
                </a>
                <a href="/prompt-pack" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Prompts
                </a>
                <a href="/paperwork-binder" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Binder
                </a>
                <a href="/playbooks" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Playbooks
                </a>
                <a href="/ai-boundaries" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Boundaries
                </a>
                <a href="/question-bank" className="rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800 hover:text-white">
                  Top 100
                </a>
              </nav>
            </div>
          </header>
          <main className="min-h-0 flex-1">{children}</main>
          <footer className="shrink-0 border-t border-slate-800 px-4 py-3">
            <div className="mx-auto max-w-6xl text-center text-xs text-slate-400">
              Washington State AFH Initial Inspection preparation using Moltbot.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
