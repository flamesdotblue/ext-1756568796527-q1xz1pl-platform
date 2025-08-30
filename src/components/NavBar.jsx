function NavBar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="h-6 w-6 rounded bg-red-500" aria-hidden="true" />
          <span className="font-semibold tracking-tight">HelloGrid</span>
        </a>
        <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
          <a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
          <a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
          <a className="hover:text-slate-900 transition-colors" href="https://spline.design" target="_blank" rel="noreferrer">Spline</a>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
