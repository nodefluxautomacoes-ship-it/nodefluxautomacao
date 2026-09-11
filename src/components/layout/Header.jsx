import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Recursos', href: '#recursos' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Integrações', href: '#integracoes' },
    { name: 'Planos', href: '#planos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060a16]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <svg width="180" height="40" viewBox="0 0 220 45" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>
            <g transform="translate(0, 1) scale(0.95)">
              <path
                d="M 22.5 3 C 11.73 3 3 11.73 3 22.5 C 3 26.5 4.2 30.2 6.2 33.2 L 3 42 L 12.5 39 C 15.5 41 18.9 42 22.5 42 C 33.27 42 42 33.27 42 22.5 C 42 11.73 33.27 3 22.5 3 Z"
                fill="none"
                stroke="url(#headerGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M 10 8 L 10 18 L 14 22 L 14 28" fill="none" stroke="url(#headerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="14" cy="28" r="2.5" fill="url(#headerGrad)" />
              <path d="M 16 3 L 16 12 L 20 16 L 20 26" fill="none" stroke="url(#headerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="26" r="2.5" fill="url(#headerGrad)" />
              <path d="M 24 3 L 24 16 L 28 20 L 28 32" fill="none" stroke="url(#headerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="28" cy="32" r="2.5" fill="url(#headerGrad)" />
              <path d="M 32 5 L 32 14 L 36 18 L 36 24" fill="none" stroke="url(#headerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="36" cy="24" r="2.5" fill="url(#headerGrad)" />
              <path d="M 22.5 42 L 22.5 34 L 16 27.5" fill="none" stroke="url(#headerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <text x="48" y="20" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="20" fill="#f8fafc">Node Flux</text>
            <text x="50" y="38" fontFamily="'Poppins', sans-serif" fontWeight="400" fontSize="13" fill="#38bdf8">AUTOMAÇÃO</text>
          </svg>
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-nf-cyan transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* HEADER ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://app.nodeflux.app/login"
            className="text-sm font-medium text-slate-300 hover:text-white px-4 py-2 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            Entrar
          </a>
          <a
            href="https://wa.me/message/6XUWA2H7KYNAO1"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-xl bg-gradient-to-r from-nf-blue via-sky-500 to-nf-cyan hover:opacity-95 shadow-lg shadow-nf-blue/25 hover:shadow-nf-cyan/40 hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Solicitar Demonstração</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1e]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-nf-cyan py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="https://app.nodeflux.app/login"
                className="w-full text-center text-sm font-semibold text-slate-300 py-3 rounded-xl border border-white/15 bg-white/5"
              >
                Entrar na Plataforma
              </a>
              <a
                href="https://wa.me/message/6XUWA2H7KYNAO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white py-3 rounded-xl bg-gradient-to-r from-nf-blue to-nf-cyan shadow-lg shadow-nf-blue/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Solicitar Demonstração</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
