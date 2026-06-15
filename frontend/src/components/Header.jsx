// src/components/Header.jsx
// Top navigation bar

const Header = () => (
  <header className="sticky top-0 z-50 glass-card border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3" aria-label="PropInvest — Inicio">
        <div
          className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center
                     shadow-glow text-white font-black text-sm"
          aria-hidden="true"
        >
          PI
        </div>
        <span className="font-extrabold text-xl tracking-tight">
          Prop<span className="text-gradient">Invest</span>
        </span>
      </a>
    </div>
  </header>
);

export default Header;
