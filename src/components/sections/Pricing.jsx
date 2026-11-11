import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedMobileIdx, setSelectedMobileIdx] = useState(0);

  const plans = [
    {
      name: 'Node Flux Lojas',
      tabName: 'Lojas + iFood',
      badge: '30 Dias Grátis',
      price: isAnnual ? '149,90' : '170,90',
      period: '/ Por Mês',
      desc: 'Catálogo e cardápio digital próprio integrado ao iFood com 0% de comissão.',
      features: [
        '30 dias grátis para testar tudo',
        'Integração Oficial com iFood',
        '0% de taxa nos pedidos próprios',
        'Cálculo de frete por KM e Bairro',
        'Pagamento PIX e link no WhatsApp',
      ],
      ctaText: 'Testar 30 Dias Grátis',
      href: 'https://nodefluxlojas.com/conheca/',
    },
    {
      name: 'Plano CRM Starter',
      tabName: 'CRM Starter',
      badge: null,
      price: isAnnual ? '99,90' : '147,00',
      period: '/ Por Mês',
      desc: 'Ideal para organizar o WhatsApp da sua empresa com até 3 atendentes.',
      features: [
        'Até 3 atendentes no mesmo número',
        '1 Conexão de WhatsApp',
        'Funil Kanban de Vendas visual',
        'Chatbot de triagem por setores',
        'Suporte técnico via WhatsApp',
      ],
      ctaText: 'Assinar CRM Starter',
      href: 'https://wa.me/message/6XUWA2H7KYNAO1',
    },
    {
      name: 'Plano Business + IA',
      tabName: 'Business IA',
      badge: 'Mais Vendido',
      price: isAnnual ? '199,90' : '297,00',
      period: '/ Por Mês',
      desc: 'Automação completa com Agente de Inteligência Artificial 24/7 e agenda.',
      features: [
        'Agente de IA 24/7 (OpenAI inclusa)',
        'Até 10 atendentes simultâneos',
        'Módulo de Agenda para Clínicas',
        'Disparos e campanhas em massa',
        'Setup guiado + Suporte VIP',
      ],
      ctaText: 'Começar Com IA Agora',
      href: 'https://wa.me/message/6XUWA2H7KYNAO1',
    },
    {
      name: 'Economia Digital',
      tabName: 'Licenças PIX',
      badge: 'Parceira Oficial',
      price: 'PIX',
      isCustomPrice: true,
      period: '/ Ativação Imediata',
      desc: 'Licenças originais Microsoft, ferramentas de IA e automação com desconto.',
      features: [
        'Windows 10 / 11 Pro Original',
        'Pacote Office 365 & 2021 Vitalício',
        'ChatGPT Plus, Canva Pro & CapCut',
        'Automações n8n & SMS Virtual',
        'Envio imediato + Garantia Oficial',
      ],
      ctaText: 'Acessar Loja Economia Digital',
      href: 'https://economiadigital.shop/',
    },
  ];

  const renderNiotechCard = (plan, idx) => (
    <div
      key={idx}
      className={`bg-[#FAF8FF] rounded-[28px] overflow-hidden flex flex-col justify-between border transition-all duration-300 ${
        plan.badge === 'Mais Vendido'
          ? 'border-[#7444FD] shadow-[0_20px_50px_rgba(116,68,253,0.14)]'
          : 'border-[#EFEAFF] hover:border-[#7444FD]/40 hover:shadow-lg'
      }`}
    >
      {/* Card Upper Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-base font-display font-bold text-[#7444FD] whitespace-nowrap">
            {plan.name}
          </span>
          {plan.badge && (
            <span className="px-2.5 py-1 rounded-full bg-[#EFEAFF] text-[#7444FD] text-[10px] font-extrabold whitespace-nowrap">
              {plan.badge}
            </span>
          )}
        </div>

        {/* Price Row (Exact match to niotech_8.png) */}
        <div className="flex items-baseline gap-1.5 mb-4 whitespace-nowrap">
          {plan.isCustomPrice ? (
            <span className="text-3xl xl:text-[34px] font-display font-extrabold text-[#282C32]">
              Ofertas PIX
            </span>
          ) : (
            <span className="text-3xl xl:text-[36px] font-display font-extrabold text-[#282C32]">
              R$ {plan.price}
            </span>
          )}
          <span className="text-xs text-[#858585] font-medium">
            {plan.period}
          </span>
        </div>

        <p className="text-sm text-[#858585] leading-relaxed pb-6 mb-6 border-b border-[#E9E4F5]">
          {plan.desc}
        </p>

        {/* Feature List with Green Circular Checkmarks */}
        <ul className="space-y-3.5">
          {plan.features.map((feat, fIdx) => (
            <li key={fIdx} className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#16C784] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span className="text-sm text-[#6E7178] font-medium">
                {feat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-Width Bottom Dark Charcoal Button (Exact match to niotech_8.png) */}
      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-4 px-6 bg-[#282C32] hover:bg-[#7444FD] text-white font-display font-bold text-sm sm:text-base text-center transition-colors block"
      >
        {plan.ctaText}
      </a>
    </div>
  );

  return (
    <section id="vitrine" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Niotech Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="niotech-pill mb-4">
            <span>Nossos Planos</span>
            <span>🔥</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-display font-extrabold text-[#282C32] leading-[1.15] mb-4">
            Escolha o Plano Ideal Para Você!
          </h2>
          <p className="text-sm sm:text-base text-[#858585] mb-8">
            Soluções completas de automação no WhatsApp, catálogo com integração iFood e licenças originais com ativação imediata via PIX.
          </p>

          {/* Niotech Pill Toggle: Monthly / Yearly */}
          <div className="inline-flex items-center p-1.5 rounded-full border border-[#E5DEFF] bg-white shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                !isAnnual
                  ? 'bg-[#7444FD] text-white shadow-md shadow-[#7444FD]/25'
                  : 'text-[#6E7178] hover:text-[#282C32]'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                isAnnual
                  ? 'bg-[#7444FD] text-white shadow-md shadow-[#7444FD]/25'
                  : 'text-[#6E7178] hover:text-[#282C32]'
              }`}
            >
              Anual (-30%)
            </button>
          </div>
        </div>

        {/* Mobile Compact Plan Selector */}
        <div className="grid grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-[#FAF8FF] border border-[#EFEAFF] mb-6 lg:hidden">
          {plans.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMobileIdx(idx)}
              className={`py-2.5 px-2 rounded-xl text-[11px] font-extrabold transition-all text-center truncate ${
                selectedMobileIdx === idx
                  ? 'bg-[#7444FD] text-white shadow-sm'
                  : 'text-[#282C32]'
              }`}
            >
              {p.tabName}
            </button>
          ))}
        </div>

        {/* Mobile Single Card View */}
        <div className="lg:hidden">
          {renderNiotechCard(plans[selectedMobileIdx], selectedMobileIdx)}
        </div>

        {/* Desktop 4-Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => renderNiotechCard(plan, idx))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
