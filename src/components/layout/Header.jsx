import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown, Store, KeyRound } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#' },
    { name: 'Como Funciona', href: '#solucoes', hasChevron: true },
    { name: 'Sistemas & Lojas', href: '#sistemas', hasChevron: true },
    { name: 'Planos', href: '#vitrine', hasChevron: true },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.05)] py-3.5'
          : 'bg-transparent py-6 sm:py-7'
      }`}
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Left: Official Node Flux Automação Logo */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <svg width="190" height="44" viewBox="0 0 220 45" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-[1.02] transition-transform">
              <defs>
                <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0E43FB" />
                  <stop offset="100%" stopColor="#00B060" />
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
              <text x="48" y="21" fontFamily="'Urbanist', 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="20" fill="#0F172A">Node Flux</text>
              <text x="50" y="38" fontFamily="'Urbanist', 'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="11" letterSpacing="2" fill="#0E43FB">AUTOMAÇÃO</text>
            </svg>
          </a>

          {/* Center: Clean Navigation Links (Niotech Style) */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="inline-flex items-center gap-1 text-[14px] xl:text-[15px] font-semibold text-[#282C32] hover:text-[#7444FD] transition-colors whitespace-nowrap"
              >
                {link.name}
                {link.hasChevron && <ChevronDown className="w-3.5 h-3.5 opacity-70 shrink-0" />}
              </a>
            ))}
          </nav>

          {/* Right: Ecosystem Quick Link + Niotech Rounded Pill CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://nodefluxlojas.com/conheca/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/80 hover:bg-white border border-[#E5DEFF] text-xs font-bold text-[#7444FD] shadow-sm transition-all whitespace-nowrap"
            >
              <Store className="w-3.5 h-3.5 shrink-0" />
              Node Flux Lojas
            </a>

            <a
              href="https://app.nodeflux.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-[#282C32] hover:text-[#7444FD] px-1.5 transition-colors whitespace-nowrap"
            >
              Entrar
            </a>

            <a
              href="https://wa.me/message/6XUWA2H7KYNAO1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7444FD] hover:bg-[#5E30E6] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-[#7444FD]/25 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span>Começar Agora</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2.5 rounded-full text-[#282C32] bg-white/90 hover:bg-white border border-[#E5DEFF] shadow-sm transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 p-5 rounded-3xl bg-white border border-[#EFEAFF] shadow-xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#282C32] hover:text-[#7444FD] hover:bg-[#FAF8FF] font-bold py-2.5 px-3.5 rounded-xl text-sm transition-colors flex items-center justify-between"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#7444FD]" />
              </a>
            ))}

            <div className="grid grid-cols-2 gap-2 pt-2 mt-1 border-t border-slate-100">
              <a
                href="https://nodefluxlojas.com/conheca/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FAF8FF] text-[#7444FD] border border-[#E5DEFF] font-bold text-xs"
              >
                <Store className="w-3.5 h-3.5" />
                Node Flux Lojas
              </a>
              <a
                href="https://economiadigital.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#ECFDF5] text-[#10A36B] border border-[#A7F3D0] font-bold text-xs"
              >
                <KeyRound className="w-3.5 h-3.5" />
                Economia Digital
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="https://app.nodeflux.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[#282C32] font-bold py-2.5 rounded-full border border-slate-200 text-sm"
              >
                Acessar Painel CRM
              </a>
              <a
                href="https://wa.me/message/6XUWA2H7KYNAO1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7444FD] text-white text-center font-bold py-3 rounded-full text-sm shadow-md shadow-[#7444FD]/25 flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Falar com Especialista</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
