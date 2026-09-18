import React from 'react';
import { Smile, Clock, Users, Zap, ShoppingBag, HeartHandshake, ArrowUpRight } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: Smile,
      title: 'Atendente Virtual Acolhedor',
      desc: 'Conversas empáticas e naturais que compreendem áudios, gírias e intenções. Seu cliente se sente ouvido, valorizado e respeitado desde o primeiro "Oi".',
      color: 'from-[#0E43FB] to-[#0830C8]',
      tag: 'Atendimento Humanizado',
    },
    {
      icon: Clock,
      title: 'Seu WhatsApp Aberto 24 Horas',
      desc: 'Seu cliente nunca mais fica sem resposta às 23h de um domingo ou no feriado. Respostas instantâneas e carinhosas a qualquer momento do dia.',
      color: 'from-[#00B060] to-emerald-700',
      tag: 'Zero Espera',
    },
    {
      icon: Users,
      title: 'Toda a Equipe em um Só Número',
      desc: 'Diga adeus ao celular da empresa passando de mão em mão. Vários atendentes respondem pelo mesmo WhatsApp oficial, com organização e histórico seguro.',
      color: 'from-blue-600 to-indigo-600',
      tag: 'Organização Total',
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
      desc: 'A tecnologia cuida do trabalho repetitivo para que você e sua equipe possam descansar, focar no calor humano e crescer com tranquilidade.',
      color: 'from-rose-500 to-pink-600',
      tag: 'Paz de Espírito',
    },
  ];

  return (
    <section id="recursos" className="py-24 relative overflow-hidden bg-[#F4F7FD]">
      {/* GLOW DECORATIVO TECHXEN */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Feito para Pessoas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Tudo para transformar o atendimento em um{' '}
            <span className="text-[#0E43FB]">
              motivo de encantamento
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Chega de atendimentos robóticos e clientes esperando no vácuo. Ofereça atenção imediata, acolhedora e eficiente em cada conversa.
          </p>
        </div>

        {/* GRADE DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl p-7 bg-white border border-slate-200 shadow-md shadow-slate-200/50 hover:border-[#0E43FB] hover:shadow-xl hover:shadow-blue-900/8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* TOPO DO CARD: ÍCONE + TAG */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-13 h-13 rounded-xl p-3 bg-gradient-to-br ${item.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-[#EEF4FF] border border-[#D5E3FC] text-[#0E43FB]">
                      {item.tag}
                    </span>
                  </div>

                  {/* TÍTULO E DESCRIÇÃO */}
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0E43FB] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* LINK COM ÍCONE DE SETA */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#0E43FB] transition-colors">
                  <span>Conhecer detalhes</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
