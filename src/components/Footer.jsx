function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row">
        <p>© {new Date().getFullYear()} HelloGrid. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
          <a href="mailto:hello@example.com" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
