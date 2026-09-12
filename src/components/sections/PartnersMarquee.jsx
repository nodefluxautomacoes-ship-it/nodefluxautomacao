import React from 'react';
import { MessageCircle, Instagram, Share2, Calendar, Cpu, Sparkles, CreditCard, Send } from 'lucide-react';

export default function PartnersMarquee() {
  const partners = [
    { name: 'WhatsApp Oficial API', icon: MessageCircle, color: 'text-[#00B060]' },
    { name: 'Instagram Direct', icon: Instagram, color: 'text-pink-500' },
    { name: 'n8n Automações', icon: Share2, color: 'text-rose-500' },
    { name: 'OpenAI (ChatGPT)', icon: Sparkles, color: 'text-[#0E43FB]' },
    { name: 'Google Agenda', icon: Calendar, color: 'text-blue-500' },
    { name: 'Telegram Bots', icon: Send, color: 'text-sky-500' },
    { name: 'APIs REST & Webhooks', icon: Cpu, color: 'text-[#0E43FB]' },
    { name: 'Stripe & MercadoPago', icon: CreditCard, color: 'text-amber-500' },
  ];

  const marqueeItems = [...partners, ...partners];

  return (
    <div className="py-10 border-y border-slate-200/80 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
          Conectado nativamente às principais ferramentas e ecossistemas globais
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* GRADIENT MASKS NAS PONTAS */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* TRACK DO MARQUEE */}
        <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0E43FB] hover:bg-white shadow-sm transition-all duration-200 group cursor-default"
              >
                <Icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-[#0E43FB] transition-colors">
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
