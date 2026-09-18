import React from 'react';
import { Smile, Users, Sparkles } from 'lucide-react';

export default function AiShowcase() {
  const cards = [
    {
      icon: Smile,
      title: 'Atendimento Acolhedor & Paciente',
      desc: 'Responde cada cliente com empatia, naturalidade e sem pressa. Compreende mensagens de texto, áudios e gírias regionais com facilidade e carinho.',
      gradient: 'from-[#0E43FB] to-[#0830C8]',
    },
    {
      icon: Users,
      title: 'Transição Suave para sua Equipe',
      desc: 'Quando o cliente precisa de atenção especial, a IA resume todo o contexto e chama sua equipe humana na hora, sem ninguém precisar repetir nada.',
      gradient: 'from-[#00B060] to-emerald-700',
    },
    {
      icon: Sparkles,
      title: 'Atenção Imediata a Qualquer Hora',
      desc: 'Seu cliente nunca mais vai dormir na dúvida. Ele recebe atenção imediata e respostas precisas no almoço, tarde da noite ou finais de semana.',
      gradient: 'from-blue-600 to-indigo-600',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#F4F7FD]">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[650px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Inteligência com Alma
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Uma IA que conversa com o{' '}
            <span className="text-[#0E43FB]">
              coração da sua marca
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Chega de robôs travados e menus numéricos chatos. Proporcione uma experiência de conversa agradável, humana e resolutiva para quem procura você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-8 bg-white border border-slate-200 shadow-md shadow-slate-200/50 hover:border-[#0E43FB] hover:shadow-xl hover:shadow-blue-900/8 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl p-3.5 bg-gradient-to-br ${card.gradient} text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0E43FB] transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
