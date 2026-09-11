import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 left-6 z-50">
      <a
        href="https://wa.me/message/6XUWA2H7KYNAO1"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/50 hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 group"
        aria-label="Falar conosco no WhatsApp"
      >
        {/* PULSE GLOW */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white" />

        {/* TOOLTIP HOVER */}
        <span className="absolute left-16 px-3 py-1.5 rounded-lg bg-[#0a0f1e]/95 border border-white/10 text-white text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
          Atendimento via WhatsApp 👋
        </span>
      </a>
    </aside>
  );
}
