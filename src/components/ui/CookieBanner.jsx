import React, { useState, useEffect } from 'react';
import { Cookie, Check } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('nodeflux_cookies_accepted');
    if (!accepted) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('nodeflux_cookies_accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Consentimento de Cookies"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-5 rounded-2xl bg-[#090e1f]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fadeIn"
    >
      <div className="w-10 h-10 rounded-xl bg-nf-blue/15 border border-nf-blue/30 flex items-center justify-center flex-shrink-0 text-nf-cyan">
        <Cookie className="w-5 h-5" />
      </div>
      <div className="text-xs text-slate-300 leading-relaxed flex-1">
        Utilizamos cookies para oferecer a melhor experiência, analisar o tráfego e personalizar conteúdos de acordo com nossa Política de Privacidade.
      </div>
      <button
        onClick={handleAccept}
        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-nf-blue to-nf-cyan text-white text-xs font-bold whitespace-nowrap shadow-md hover:opacity-90 transition-all flex items-center justify-center gap-1.5"
      >
        <Check className="w-3.5 h-3.5" />
        <span>Aceitar</span>
      </button>
    </aside>
  );
}
