import React from 'react';
import {
  MessageCircle,
  Zap,
  ShieldCheck,
  Facebook,
  Instagram,
  Grid,
  Share2,
  Send,
  UserCheck,
  MessageSquare,
  Network,
  Store,
  KeyRound,
} from 'lucide-react';

const crmConnections = [
  { name: 'WhatsApp', icon: MessageCircle, color: 'text-[#25D366]', bg: 'bg-[#25D366]/10' },
  { name: 'WhatsMeow', icon: Zap, color: 'text-[#00A859]', bg: 'bg-[#00A859]/10' },
  { name: 'WhatsApp Oficial', icon: ShieldCheck, color: 'text-[#128C7E]', bg: 'bg-[#128C7E]/10' },
  { name: 'Facebook', icon: Facebook, color: 'text-[#1877F2]', bg: 'bg-[#1877F2]/10' },
  { name: 'Instagram', icon: Instagram, color: 'text-[#E4405F]', bg: 'bg-[#E4405F]/10' },
  { name: 'ConectHUB 360', icon: Grid, color: 'text-[#0E43FB]', bg: 'bg-[#0E43FB]/10' },
  { name: 'HUB de Conexões', icon: Share2, color: 'text-[#3B82F6]', bg: 'bg-[#3B82F6]/10' },
  { name: 'Telegram Bot (@BotFather)', icon: Send, color: 'text-[#229ED9]', bg: 'bg-[#229ED9]/10' },
  { name: 'Telegram Pessoal (MTProto)', icon: UserCheck, color: 'text-[#0088CC]', bg: 'bg-[#0088CC]/10' },
  { name: 'WebChat', icon: MessageSquare, color: 'text-[#0E43FB]', bg: 'bg-[#0E43FB]/10' },
  { name: 'HUB Omnichannel', icon: Network, color: 'text-[#00A859]', bg: 'bg-[#00A859]/10' },
];

const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <div className="niotech-pill mb-3">
          <span>Múltiplos Canais Integrados</span>
          <span>🔥</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#0F172A] mb-2">
          Todas as Conexões Possíveis em um Único CRM
        </h2>
        <p className="text-xs sm:text-sm text-[#5B6576] max-w-2xl mx-auto mb-7">
          Conecte todas as suas redes sociais, números de WhatsApp, Telegram e chat do site na mesma tela de atendimento.
        </p>

        {/* All 11 CRM Connections Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {crmConnections.map((conn, idx) => {
            const Icon = conn.icon;
            return (
              <a
                key={idx}
                href="#sistemas"
                className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#F5F8FF] hover:bg-white border border-[#DCE7FE] hover:border-[#0E43FB]/40 shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span className={`w-7 h-7 rounded-xl ${conn.bg} ${conn.color} flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-xs sm:text-sm font-display font-bold text-[#0F172A] group-hover:text-[#0E43FB] transition-colors">
                  {conn.name}
                </span>
              </a>
            );
          })}

          {/* Plus Ecosystem Links */}
          <a
            href="https://nodefluxlojas.com/conheca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#E8F0FF] hover:bg-[#0E43FB] text-[#0E43FB] hover:text-white font-display font-extrabold text-xs sm:text-sm transition-all"
          >
            <Store className="w-4 h-4" />
            <span>Node Flux Lojas (+iFood)</span>
          </a>

          <a
            href="https://economiadigital.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#E8FAF1] hover:bg-[#00A859] text-[#007D44] hover:text-white font-display font-extrabold text-xs sm:text-sm transition-all"
          >
            <KeyRound className="w-4 h-4" />
            <span>Economia Digital (PIX)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
