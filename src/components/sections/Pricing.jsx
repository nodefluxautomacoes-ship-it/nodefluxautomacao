import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  const plans = [
    {
      name: 'STARTER',
      tagline: 'Ideal para profissionais autônomos e pequenos negócios.',
      priceMonthly: 297,
      priceAnnual: 237,
      featured: false,
      features: [
        '1 Número de WhatsApp',
        'Até 3 Atendentes inclusos',
        'CRM de Vendas Multicanal',
        'Respostas Rápidas personalizadas',
        'Suporte em Horário Comercial',
        'Relatórios Básicos de Conversão',
      ],
      ctaText: 'Escolher Plano Starter',
      ctaHref: 'https://wa.me/message/6XUWA2H7KYNAO1?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20Plano%20Starter',
    },
    {
      name: 'BUSINESS',
      tagline: 'Para empresas que buscam escalar vendas com automação e IA.',
      priceMonthly: 697,
      priceAnnual: 557,
      featured: true,
      popularBadge: 'Mais Popular',
      features: [
        'Números e Atendentes Ilimitados',
        'IA Generativa (ChatGPT) Integrada',
        'Automações Avançadas com n8n',
        'Dashboard & Analytics em Tempo Real',
        'Catálogo Node Flux Lojas Incluso',
        'Suporte Prioritário Via WhatsApp',
      ],
      ctaText: 'Solicitar Demonstração',
      ctaHref: 'https://wa.me/message/6XUWA2H7KYNAO1?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20demonstra%C3%A7%C3%A3o%20do%20Plano%20Business',
    },
    {
      name: 'ENTERPRISE',
      tagline: 'Soluções sob medida para grandes operações e franquias.',
      priceCustom: 'Sob Consulta',
      featured: false,
      features: [
        'Múltiplos Números API Oficial Meta',
        'Infraestrutura em Nuvem Dedicada',
        'Integração Completa com ERP Próprio',
        'Gerente de Sucesso (CSM) Dedicado',
        'Treinamento Completo para sua Equipe',
        'SLA de Atendimento Garantido',
      ],
      ctaText: 'Falar com Especialista',
      ctaHref: 'https://wa.me/message/6XUWA2H7KYNAO1?text=Ol%C3%A1%2C%20gostaria%20de%20uma%20proposta%20para%20o%20Plano%20Enterprise',
    },
  ];

  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      {/* GLOW DE FUNDO */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-nf-blue/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold uppercase tracking-widest text-nf-cyan">
            Planos Transparentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Escolha o plano ideal para a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-nf-blue to-nf-cyan">
              sua empresa
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Sem taxas escondidas. Cancele ou altere seu plano quando quiser.
          </p>

          {/* TOGGLE MENSAL / ANUAL ESTILO ESOFT */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <span className={`text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400'}`}>
              Mensal
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-7 rounded-full bg-white/15 p-1 transition-colors hover:bg-white/20 focus:outline-none"
              aria-label="Alternar ciclo de faturamento"
            >
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-r from-nf-blue to-nf-cyan shadow-md transition-transform duration-200 ${
                  billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold transition-colors ${billingCycle === 'annual' ? 'text-white' : 'text-slate-400'}`}>
                Anual
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                Economize 20%
              </span>
            </div>
          </div>
        </div>

        {/* GRADE DE PLANOS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.featured
                    ? 'glass-panel border-2 border-nf-cyan/50 shadow-2xl shadow-nf-blue/20 lg:-translate-y-2 bg-[#090f24]'
                    : 'glass-panel border border-white/10 hover:border-white/20'
                }`}
              >
                {/* BADGE DE MAIS POPULAR */}
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-nf-blue to-nf-cyan text-white text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.popularBadge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* PREÇO */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    {plan.priceCustom ? (
                      <div>
                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                          Sob Consulta
                        </span>
                        <div className="text-xs text-slate-400 mt-1">Personalizado para sua demanda</div>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-slate-400">R$</span>
                        <span className="text-4xl sm:text-5xl font-extrabold text-white">
                          {price}
                        </span>
                        <span className="text-sm text-slate-400 font-medium">/mês</span>
                      </div>
                    )}
                    {billingCycle === 'annual' && !plan.priceCustom && (
                      <div className="text-xs text-emerald-400 font-medium mt-1">
                        Faturado anualmente com desconto
                      </div>
                    )}
                  </div>

                  {/* LISTA DE RECURSOS */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOTÃO CTA */}
                <a
                  href={plan.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                    plan.featured
                      ? 'bg-gradient-to-r from-nf-blue to-nf-cyan text-white shadow-lg shadow-nf-blue/25 hover:shadow-nf-cyan/40 hover:opacity-95'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
