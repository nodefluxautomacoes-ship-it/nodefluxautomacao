import React from 'react';
import { Sparkles, MessageSquareCode, Target, BrainCircuit, Check } from 'lucide-react';

export default function AiShowcase() {
  const cards = [
    {
      icon: MessageSquareCode,
      title: 'Atendimento Inteligente 24/7',
      desc: 'Respostas instantâneas, humanas e ultra personalizadas. A IA compreende o contexto do cliente e conduz a conversa com naturalidade.',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: Target,
      title: 'Qualificação Instantânea de Leads',
      desc: 'Identifique o perfil do cliente, poder de compra e urgência antes de repassar para seu time de fechamento, aumentando a taxa de conversão.',
      gradient: 'from-nf-cyan to-teal-500',
    },
    {
      icon: BrainCircuit,
      title: 'IA Generativa Integrada',
      desc: 'Gere respostas inteligentes, crie resumos automáticos dos atendimentos para o CRM e redija follow-ups persuasivos automaticamente.',
      gradient: 'from-purple-500 to-indigo-600',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold uppercase tracking-widest text-purple-400">
            Inteligência Artificial Avançada
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Uma IA treinada para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-400 to-nf-cyan">
              atender, vender e reter
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Automatize desde o primeiro contato até o pós-venda, mantendo atendimento humanizado e disponível 24 horas por dia em todos os seus canais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-8 glass-panel border border-white/10 hover:border-purple-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl p-3.5 bg-gradient-to-br ${card.gradient} text-white mb-6 shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
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
