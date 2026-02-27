function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-200 dark:border-white/5 mt-30">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 opacity-50">
            <span className="text-sm font-bold tracking-tight text-black dark:text-white">Sutra</span>
          </div>

          <div className="text-center text-xs text-slate-400 dark:text-slate-600">
            {`© ${new Date().getFullYear()} Sutra CLI. All rights reserved.`}
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">Built for Developers</span>
            <span className="text-blue-500 dark:text-blue-400 text-sm">♥</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer