import React from 'react';
import { MessageCircle, Instagram, Bot, Send, Calendar, Cpu, Sparkles, CreditCard, Share2 } from 'lucide-react';

export default function PartnersMarquee() {
  const partners = [
    { name: 'WhatsApp Oficial API', icon: MessageCircle, color: 'text-emerald-400' },
    { name: 'Instagram Direct', icon: Instagram, color: 'text-pink-400' },
    { name: 'n8n Automações', icon: Share2, color: 'text-rose-400' },
    { name: 'OpenAI (ChatGPT)', icon: Sparkles, color: 'text-teal-400' },
    { name: 'Google Agenda', icon: Calendar, color: 'text-blue-400' },
    { name: 'Telegram Bots', icon: Send, color: 'text-sky-400' },
    { name: 'APIs REST & Webhooks', icon: Cpu, color: 'text-purple-400' },
    { name: 'Stripe & MercadoPago', icon: CreditCard, color: 'text-amber-400' },
  ];

  // Duplicando a lista para criar o efeito contínuo infinito
  const marqueeItems = [...partners, ...partners];

  return (
    <div className="py-10 border-y border-white/[0.06] bg-[#080d1c]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
          Conectado nativamente às principais ferramentas e ecossistemas globais
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* GRADIENT MASKS NAS PONTAS PARA FADE SUAVE */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-nf-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-nf-bg to-transparent z-10 pointer-events-none" />

        {/* TRACK DO MARQUEE COM ANIMAÇÃO CSS */}
        <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.08] transition-all duration-200 group cursor-default"
              >
                <Icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
