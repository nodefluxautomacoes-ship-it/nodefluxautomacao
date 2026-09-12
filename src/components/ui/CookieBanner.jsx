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
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 p-5 rounded-2xl bg-white/98 backdrop-blur-xl border border-slate-200 shadow-2xl shadow-slate-400/30 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fadeIn"
    >
      <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] border border-[#D5E3FC] flex items-center justify-center flex-shrink-0 text-[#0E43FB]">
        <Cookie className="w-5 h-5" />
      </div>
      <div className="text-xs text-slate-600 leading-relaxed flex-1">
        Utilizamos cookies para oferecer a melhor experiência, analisar o tráfego e personalizar conteúdos de acordo com nossa Política de Privacidade.
      </div>
      <button
        onClick={handleAccept}
        className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#0E43FB] hover:bg-[#0830C8] text-white text-xs font-bold whitespace-nowrap shadow-md shadow-[#0E43FB]/25 transition-all flex items-center justify-center gap-1.5"
      >
        <Check className="w-3.5 h-3.5" />
        <span>Aceitar</span>
      </button>
    </aside>
  );
}
