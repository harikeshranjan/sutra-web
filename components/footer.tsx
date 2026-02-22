import { Terminal } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-200 dark:border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 opacity-50">
            <div className="size-6 bg-neutral-400 dark:bg-neutral-700 rounded flex items-center justify-center">
              <Terminal className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight text-black dark:text-white">Sutra</span>
          </div>
          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-slate-400 dark:text-slate-500">
            {["Privacy", "Terms", "Twitter", "GitHub"].map((link) => (
              <a key={link} href="#" className="cursor-pointer hover:text-black dark:hover:text-white transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
          {/* Tagline */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">Built for Developers</span>
            <span className="text-blue-500 dark:text-blue-400 text-sm">♥</span>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-400 dark:text-slate-600">
          © 2024 Sutra CLI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer