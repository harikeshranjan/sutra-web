'use client';

import { CheckCircle, Zap, GitMerge, Sparkles, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  }

  return (
    <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-600 dark:selection:text-blue-300">

      {/* Background radial glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-200 h-125 rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-blue-600/3 blur-[100px]" />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">

        {/* Badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            v0 is now live with AI Rebasing
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black dark:text-white mb-6 max-w-4xl mx-auto leading-[1.08]">
          Sutra: AI-Powered{" "}
          <span className="text-blue-500 dark:text-blue-400">Git Automation</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Let Sutra handle the Git chores. Automatic initialisation, smart commits, and seamless rebasing—powered by AI.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            size="lg"
            className="cursor-pointer w-full sm:w-auto px-8 py-4 h-auto bg-blue-500 hover:bg-blue-400 text-white font-bold text-base rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/20"
            onClick={() => router.push("/docs/getting-started/installation")}
          >
            Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer w-full sm:w-auto px-8 py-4 h-auto bg-transparent border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/10 text-black dark:text-white font-bold text-base rounded-lg transition-all duration-200"
            onClick={() => router.push("https://github.com/Harikesh-14/Sutra")}
          >
            <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </Button>
        </div>

        {/* Terminal Component */}
        <div className="max-w-4xl mx-auto mb-32 group">
          <div className="relative rounded-xl border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#0a0a0a] overflow-hidden shadow-xl shadow-neutral-200/80 dark:shadow-blue-500/10">
            {/* Window bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-white/5 bg-neutral-100 dark:bg-white/5">
              <div className="flex gap-2">
                <div className="size-3 rounded-full bg-red-400/70 border border-red-400 dark:bg-red-500/30 dark:border-red-500/50" />
                <div className="size-3 rounded-full bg-yellow-400/70 border border-yellow-400 dark:bg-yellow-500/30 dark:border-yellow-500/50" />
                <div className="size-3 rounded-full bg-green-400/70 border border-green-400 dark:bg-green-500/30 dark:border-green-500/50" />
              </div>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-widest uppercase">{`bash — 80×24`}</span>
              <div className="size-3" />
            </div>
            {/* Terminal body */}
            <div className="p-6 text-left font-mono text-sm md:text-base leading-relaxed space-y-1">
              <div className="flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">$</span>
                <span className="text-neutral-800 dark:text-white">sutra init</span>
              </div>
              <div className="text-slate-400 dark:text-slate-500">(Initializing Sutra...)</div>
              <div className="mt-3 flex gap-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">$</span>
                <span className="text-neutral-800 dark:text-white">sutra commit</span>
              </div>
              <div className="text-slate-400 dark:text-slate-500 italic">(AI analyzing changes...)</div>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle className="h-4 w-4 shrink-0" />
                <span>Commit message: &apos;Refactor user auth and add testing hooks&apos;</span>
              </div>
              <div className="text-slate-400 dark:text-slate-500">(Pushing to main...)</div>
              <div className="flex items-center gap-2 mt-3">
                <span className="text-blue-500 dark:text-blue-400 font-bold">$</span>
                <span className="text-neutral-800 dark:text-white">Done.</span>
                <span className="inline-block w-2 h-5 bg-blue-400 animate-pulse ml-1" />
              </div>
            </div>
            {/* Hover copy button */}
            <button className="cursor-pointer absolute top-14 right-4 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded bg-neutral-200 dark:bg-white/10 hover:bg-neutral-300 dark:hover:bg-white/20 text-slate-600 dark:text-slate-300">
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Smart Initialization",
              desc: "One command to set up your repository according to industry best practices. We configure hooks, linting, and ignores automatically.",
            },
            {
              icon: <Sparkles className="h-6 w-6" />,
              title: "AI Commits",
              desc: "Never think about a commit message again. Sutra analyzes your diffs and writes meaningful, conventional-compliant messages.",
            },
            {
              icon: <GitMerge className="h-6 w-6" />,
              title: "Automated Rebasing",
              desc: "Sutra handles the complexity of rebasing, pulling, and merging conflicts for you. Resolve issues with AI-assisted diffing.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group/card p-8 rounded-xl border border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-white/1 hover:border-blue-400/50 dark:hover:border-blue-500/40 hover:bg-blue-50/40 dark:hover:bg-white/2 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="size-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover/card:bg-blue-500/15 transition-colors duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">{card.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-neutral-200 dark:border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-4">How it Works</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Three simple commands to transform your development workflow with AI.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Initialize",
              cmd: "sutra init",
              desc: "Sutra scans your project, identifies the tech stack, and sets up optimized git hooks and linting rules automatically.",
            },
            {
              step: "2",
              title: "Commit",
              cmd: "sutra commit",
              desc: "AI analyzes your staged changes and generates a descriptive, conventional commit message. Review and confirm in seconds.",
            },
            {
              step: "3",
              title: "Reinit",
              cmd: "sutra reinit",
              desc: "Sutra reinitializes your codebase with the current state of the repository.",
            },
          ].map((step) => (
            <div key={step.step} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center size-8 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400 font-bold text-sm border border-blue-500/20">
                  {step.step}
                </span>
                <h4 className="text-lg font-bold text-black dark:text-white">{step.title}</h4>
              </div>
              <div className="p-4 rounded-lg bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 font-mono text-sm">
                <span className="text-blue-500 dark:text-blue-400">$ </span>
                <span className="text-neutral-800 dark:text-white">{step.cmd}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Install Section ── */}
      <section className="relative z-10 max-w-4xl mx-auto px-6 py-32 border-t border-neutral-200 dark:border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-black dark:text-white mb-4">
            Ready to start?
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Install the Sutra CLI and automate your workflow in seconds.
          </p>
        </div>

        {/** Toggle State */}
        {(() => {
          const [activeTab, setActiveTab] = useState<"git" | "npm">("git");

          return (
            <div className="bg-neutral-50 dark:bg-[#0a0a0a] border border-neutral-200 dark:border-white/10 rounded-xl overflow-hidden">

              {/* Tab Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-100 dark:bg-white/5 border-b border-neutral-200 dark:border-white/5">
                <div className="flex items-center gap-4">

                  {/* Git Tab */}
                  <button
                    onClick={() => setActiveTab("git")}
                    className={`cursor-pointer text-xs font-bold pb-1 px-1 transition-all ${activeTab === "git"
                        ? "text-black dark:text-white border-b-2 border-blue-500"
                        : "text-slate-400 dark:text-slate-500 hover:text-black dark:hover:text-white"
                      }`}
                  >
                    git
                  </button>

                  {/* NPM Tab */}
                  <button
                    onClick={() => setActiveTab("npm")}
                    className={`cursor-pointer text-xs font-bold pb-1 px-1 transition-all ${activeTab === "npm"
                        ? "text-black dark:text-white border-b-2 border-blue-500"
                        : "text-slate-400 dark:text-slate-500 hover:text-black dark:hover:text-white"
                      }`}
                  >
                    npm
                  </button>
                </div>

                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono tracking-widest uppercase">
                  Installation
                </span>
              </div>

              {/* Content */}
              <div className="p-6 bg-white dark:bg-black/40 transition-all duration-300">

                {activeTab === "git" && (
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <code className="font-mono text-sm md:text-base text-neutral-700 dark:text-slate-300 break-all">
                      <span className="text-blue-500 dark:text-blue-400">$ </span>
                      git clone https://github.com/Harikesh-14/Sutra.git
                    </code>

                    {/* Copy Button */}
                    <button
                      className="cursor-pointer p-2 rounded bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-black dark:hover:text-white transition-colors"
                      onClick={() => handleCopy("git clone https://github.com/Harikesh-14/Sutra.git")}
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                )}

                {activeTab === "npm" && (
                  <div className="flex flex-col items-start gap-3">
                    <code className="font-mono text-sm md:text-base text-slate-400 dark:text-slate-500">
                      npm install -g sutra-cli
                    </code>

                    <span
                      style={{
                        fontSize: "12px",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                      className="text-blue-500 dark:text-blue-400 font-semibold"
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })()}

        {/* Trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 dark:text-slate-500">
          {["Lightweight", "No dependencies", "Cross-platform"].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              {label}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}