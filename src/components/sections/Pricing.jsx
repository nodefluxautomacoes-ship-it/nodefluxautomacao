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
      desc: 'Ideal para organizar o WhatsApp e redes sociais com até 3 atendentes.',
      features: [
        'Até 3 atendentes simultâneos',
        'WhatsApp, WhatsMeow & WebChat',
        'Instagram, Facebook & Telegram',
        'Funil Kanban e Chatbot por setores',
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
      desc: 'CRM Omnichannel completo com Agente de IA 24/7, API Oficial e HUB.',
      features: [
        'Agente de IA 24/7 (OpenAI inclusa)',
        'WhatsApp Oficial, WhatsMeow & QR',
        'ConectHUB 360, Insta, Face & Telegram',
        'Módulo de Agenda + Disparos em massa',
        'Até 10 atendentes + Setup VIP',
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
      className={`bg-[#F5F8FF] rounded-[28px] overflow-hidden flex flex-col justify-between border transition-all duration-300 ${
        plan.badge === 'Mais Vendido'
          ? 'border-[#0E43FB] shadow-[0_20px_50px_rgba(14,67,251,0.14)]'
          : 'border-[#DCE7FE] hover:border-[#0E43FB]/40 hover:shadow-lg'
      }`}
    >
      {/* Card Upper Content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-base font-display font-bold text-[#0E43FB] whitespace-nowrap">
            {plan.name}
          </span>
          {plan.badge && (
            <span
              className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold whitespace-nowrap ${
                plan.badge === 'Parceira Oficial'
                  ? 'bg-[#E8FAF1] text-[#007D44]'
                  : 'bg-[#E8F0FF] text-[#0E43FB]'
              }`}
            >
              {plan.badge}
            </span>
          )}
        </div>

        {/* Price Row */}
        <div className="flex items-baseline gap-1.5 mb-4 whitespace-nowrap">
          {plan.isCustomPrice ? (
            <span className="text-3xl xl:text-[34px] font-display font-extrabold text-[#0F172A]">
              Ofertas PIX
            </span>
          ) : (
            <span className="text-3xl xl:text-[36px] font-display font-extrabold text-[#0F172A]">
              R$ {plan.price}
            </span>
          )}
          <span className="text-xs text-[#5B6576] font-medium">
            {plan.period}
          </span>
        </div>

        <p className="text-sm text-[#5B6576] leading-relaxed pb-6 mb-6 border-b border-[#DCE7FE]">
          {plan.desc}
        </p>

        {/* Feature List with Brand Green Circular Checkmarks */}
        <ul className="space-y-3.5">
          {plan.features.map((feat, fIdx) => (
            <li key={fIdx} className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#00A859] text-white flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              <span className="text-sm text-[#475569] font-medium">
                {feat}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Full-Width Bottom Button */}
      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-4 px-6 font-display font-bold text-sm sm:text-base text-center transition-colors block ${
          plan.badge === 'Mais Vendido'
            ? 'bg-[#0E43FB] hover:bg-[#0832C9] text-white'
            : 'bg-[#0F172A] hover:bg-[#0E43FB] text-white'
        }`}
      >
        {plan.ctaText}
      </a>
    </div>
  );

  return (
    <section id="vitrine" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="niotech-pill mb-4">
            <span>Nossos Planos</span>
            <span>🔥</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-display font-extrabold text-[#0F172A] leading-[1.15] mb-4">
            Escolha o Plano Ideal Para Você!
          </h2>
          <p className="text-sm sm:text-base text-[#5B6576] mb-8">
            Soluções completas de automação no WhatsApp, catálogo com integração iFood e licenças originais com ativação imediata via PIX.
          </p>

          {/* Pill Toggle: Monthly / Yearly */}
          <div className="inline-flex items-center p-1.5 rounded-full border border-[#D5E3FC] bg-white shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                !isAnnual
                  ? 'bg-[#0E43FB] text-white shadow-md shadow-[#0E43FB]/25'
                  : 'text-[#5B6576] hover:text-[#0F172A]'
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                isAnnual
                  ? 'bg-[#0E43FB] text-white shadow-md shadow-[#0E43FB]/25'
                  : 'text-[#5B6576] hover:text-[#0F172A]'
              }`}
            >
              Anual (-30%)
            </button>
          </div>
        </div>

        {/* Mobile Compact Plan Selector */}
        <div className="grid grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-[#F5F8FF] border border-[#DCE7FE] mb-6 lg:hidden">
          {plans.map((p, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedMobileIdx(idx)}
              className={`py-2.5 px-2 rounded-xl text-[11px] font-extrabold transition-all text-center truncate ${
                selectedMobileIdx === idx
                  ? 'bg-[#0E43FB] text-white shadow-sm'
                  : 'text-[#0F172A]'
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
