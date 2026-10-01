import React from 'react';
import { Smile, Clock, Users, Zap, ShoppingBag, HeartHandshake, ArrowUpRight } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Smile,
      title: 'Atendente Virtual com IA Humanizada',
      desc: 'Conversas empáticas e naturais que compreendem áudios, gírias e intenções. Seu cliente se sente ouvido, valorizado e respeitado desde o primeiro "Oi".',
      color: 'from-[#0E43FB] to-[#0830C8]',
      tag: 'IA com Alma',
    },
    {
      icon: Clock,
      title: 'Seu WhatsApp Aberto 24 Horas',
      desc: 'Seu cliente nunca mais fica sem resposta às 23h de um domingo ou no feriado. Respostas instantâneas e acolhedoras a qualquer momento do dia.',
      color: 'from-[#00B060] to-emerald-700',
      tag: 'Zero Espera',
    },
    {
      icon: Users,
      title: 'Transição Suave para a Equipe',
      desc: 'Quando o caso exige atenção humana, a IA resume todo o contexto e chama sua equipe na hora, sem o cliente precisar repetir nada.',
      color: 'from-blue-600 to-indigo-600',
      tag: 'Atenção Humana',
    },
    {
      icon: Zap,
      title: 'Resposta Imediata em Segundos',
      desc: 'Elimine a frustração de esperar no vácuo. Dúvidas frequentes, tabelas e orientações são entregues em até 5 segundos com extrema clareza.',
      color: 'from-amber-500 to-orange-500',
      tag: 'Agilidade Real',
    },
    {
      icon: ShoppingBag,
      title: 'Compras e Pedidos sem Atrito',
      desc: 'Apresente seus produtos e serviços de forma visual e direta. O consumidor escolhe, tira dúvidas e faz pedidos no WhatsApp com poucos toques.',
      color: 'from-[#0E43FB] to-sky-500',
      tag: 'Venda Descomplicada',
    },
    {
      icon: HeartHandshake,
      title: 'Mais Tempo Livre para Viver',
      desc: 'A tecnologia cuida do trabalho repetitivo para que você e sua equipe possam descansar, focar no relacionamento e crescer com tranquilidade.',
      color: 'from-rose-500 to-pink-600',
      tag: 'Paz de Espírito',
    },
  ];

  return (
    <section id="recursos" className="py-12 md:py-20 lg:py-24 relative overflow-hidden bg-[#F4F7FD]">
      {/* GLOW DECORATIVO TECHXEN */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Feito para Pessoas & Empresas
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Tudo para transformar o atendimento em um{' '}
            <span className="text-[#0E43FB]">
              motivo de encantamento
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            Chega de atendimentos robóticos e clientes esperando no vácuo. Ofereça atenção imediata, acolhedora e inteligente em cada conversa.
          </p>
        </div>

        {/* GRADE DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-5 sm:p-7 bg-white border border-slate-200 shadow-sm hover:border-[#0E43FB] hover:shadow-xl hover:shadow-blue-900/8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* TOPO DO CARD: ÍCONE + TAG */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl p-2.5 sm:p-3 bg-gradient-to-br ${item.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#EEF4FF] border border-[#D5E3FC] text-[#0E43FB]">
                      {item.tag}
                    </span>
                  </div>

                  {/* TÍTULO E DESCRIÇÃO */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] mb-2 sm:mb-3 group-hover:text-[#0E43FB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* LINK COM ÍCONE DE SETA */}
                <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#0E43FB] transition-colors">
                  <span>Incluso na plataforma</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#0E43FB]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
