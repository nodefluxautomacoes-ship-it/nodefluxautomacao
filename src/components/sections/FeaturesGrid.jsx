import React from 'react';
import {
  Bot,
  CalendarCheck,
  Store,
  KeyRound,
  MessageSquare,
  QrCode,
  ArrowRight,
  Check,
} from 'lucide-react';

const steps = [
  {
    step: 'PASSO - 01',
    title: 'Escolha sua Solução',
    desc: 'Selecione entre o CRM WhatsApp com IA, o Catálogo Node Flux Lojas (+iFood) ou Licenças Originais.',
    position: 'bottom',
  },
  {
    step: 'PASSO - 02',
    title: 'Ativação Rápida & Guiada',
    desc: 'Conecte seu WhatsApp via QR Code, cadastre seus produtos ou receba sua licença original na hora via PIX.',
    position: 'top',
  },
  {
    step: 'PASSO - 03',
    title: 'Venda no Piloto Automático',
    desc: 'Sua empresa passa a atender 24h por dia, agendar horários e receber pedidos com 0% de comissão.',
    position: 'bottom',
  },
];

const leftFeatures = [
  {
    icon: Bot,
    title: 'Agentes de IA no WhatsApp 24/7',
    desc: 'Atendimento humanizado que tira dúvidas, qualifica clientes e fecha vendas sozinho dia e noite.',
    href: '#sistemas',
  },
  {
    icon: CalendarCheck,
    title: 'Gestão & Agenda para Clínicas',
    desc: 'Marcação automática de consultas e exames com lembretes no WhatsApp que reduzem faltas em 70%.',
    href: '#sistemas',
  },
  {
    icon: MessageSquare,
    title: 'CRM Multiatendimento',
    desc: 'Vários atendentes no mesmo número de WhatsApp com funil Kanban, etiquetas e relatórios completos.',
    href: '#sistemas',
  },
];

const rightFeatures = [
  {
    icon: Store,
    title: 'Node Flux Lojas + Integração iFood',
    desc: 'Cardápio e catálogo digital próprio com 0% de taxa por venda e painel único integrado ao iFood.',
    href: 'https://nodefluxlojas.com/conheca/',
    external: true,
  },
  {
    icon: KeyRound,
    title: 'Licenças Originais & IA (Economia Digital)',
    desc: 'Windows 10/11 Pro, Pacote Office 365, ChatGPT Plus, Canva Pro e n8n com desconto no PIX.',
    href: 'https://economiadigital.shop/',
    external: true,
  },
  {
    icon: QrCode,
    title: 'Checkout PIX & Suporte Humano',
    desc: 'Liberação imediata após o pagamento e suporte técnico passo a passo no WhatsApp para sua equipe.',
    href: 'https://wa.me/message/6XUWA2H7KYNAO1',
    external: true,
  },
];

const stats = [
  { value: '24/7', label: 'Atendimento Inteligente com IA no WhatsApp' },
  { value: '0%', label: 'Taxa de Comissão por Pedido no Node Flux Lojas' },
  { value: '+15k', label: 'Atendimentos, Agendamentos e Pedidos Gerados' },
  { value: '100%', label: 'Liberação Rápida & Desconto Especial no PIX' },
];

const FeaturesGrid = () => {
  return (
    <section id="solucoes" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* PART 1: "HOW IT WORK" 3-STEP BRAND WAVE */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="niotech-pill mb-4">
            <span>Como Funciona</span>
            <span>🔥</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-display font-extrabold text-[#0F172A] leading-[1.15]">
            Coloque Sua Operação Para Gerenciar Tudo Por Você!
          </h2>
        </div>

        {/* 3-Step Wave Layout */}
        <div className="relative max-w-5xl mx-auto mb-24 pt-4">
          {/* Decorative SVG Wave Line on Desktop */}
          <svg
            className="hidden md:block absolute inset-x-0 top-0 w-full h-56 pointer-events-none"
            viewBox="0 0 1000 220"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 10 140 Q 170 225, 330 115 T 500 20 T 670 115 Q 830 225, 990 140"
              stroke="#DCE7FE"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="166" cy="182" r="7" fill="#0E43FB" />
            <circle cx="500" cy="20" r="7" fill="#00A859" />
            <circle cx="834" cy="182" r="7" fill="#0E43FB" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className={`text-center px-4 ${
                  idx === 1 ? 'md:pt-12' : 'md:pt-2 md:pb-12'
                }`}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-[#E8F0FF] text-[#0E43FB] font-extrabold text-xs tracking-wider uppercase mb-3">
                  {s.step}
                </span>
                <h3 className="text-xl font-display font-extrabold text-[#0F172A] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#5B6576] max-w-xs mx-auto leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: 6 FEATURES + CENTER VISUAL */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="niotech-pill mb-4">
            <span>O Que Oferecemos</span>
            <span>🔥</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-display font-extrabold text-[#0F172A] leading-[1.15]">
            Nossas Soluções São Perfeitas Para Lojas, Clínicas e Empresas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20">
          {/* Left 3 Feature Items */}
          <div className="lg:col-span-4 space-y-7">
            {leftFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#F5F8FF] transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F8FF] group-hover:bg-[#0E43FB] border border-[#D5E3FC] flex items-center justify-center text-[#0E43FB] group-hover:text-white shrink-0 transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-extrabold text-[#0F172A] group-hover:text-[#0E43FB] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5B6576] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Center Visual: Concentric Ice-Blue Circle + Dual App Cards */}
          <div className="lg:col-span-4 flex items-center justify-center py-4">
            <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full bg-[#E8F0FF] border border-[#C4D8FF] flex items-center justify-center">
              {/* Back Tilted Card: Node Flux Lojas + iFood */}
              <div className="w-48 bg-[#0F172A] text-white rounded-3xl p-4 shadow-xl transform -rotate-12 -translate-x-8 translate-y-4 border-4 border-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#2FE48E]">
                    NODE FLUX LOJAS
                  </span>
                  <span className="text-[9px] bg-[#EA1D2C] px-1.5 py-0.5 rounded font-bold">
                    +iFood
                  </span>
                </div>
                <p className="text-lg font-display font-extrabold mb-1">
                  0% Comissão
                </p>
                <p className="text-[10px] text-white/75 mb-3">
                  Catálogo Próprio + Delivery no WhatsApp
                </p>
                <div className="space-y-1.5 text-[10px]">
                  <div className="bg-white/10 rounded-lg px-2 py-1 flex justify-between">
                    <span>Pedido #4892</span>
                    <span className="text-[#2FE48E] font-bold">PIX OK</span>
                  </div>
                  <div className="bg-white/10 rounded-lg px-2 py-1 flex justify-between">
                    <span>Frete por KM</span>
                    <span className="text-[#2FE48E] font-bold">Ativo</span>
                  </div>
                </div>
              </div>

              {/* Front Tilted Card: CRM IA + Economia Digital */}
              <div className="w-52 bg-white text-[#0F172A] rounded-3xl p-4 shadow-2xl transform rotate-6 translate-x-6 -translate-y-3 border-4 border-[#0F172A]">
                <div className="bg-gradient-to-r from-[#0E43FB] to-[#008248] text-white rounded-xl p-2.5 mb-2.5">
                  <p className="text-[10px] opacity-90">Conversão IA 24/7</p>
                  <p className="text-base font-display font-extrabold">
                    +92% Agilidade
                  </p>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0F172A]">
                    <span className="w-4 h-4 rounded-full bg-[#00A859] text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    WhatsApp IA Oficial
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0F172A]">
                    <span className="w-4 h-4 rounded-full bg-[#00A859] text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    Catálogo + iFood
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0F172A]">
                    <span className="w-4 h-4 rounded-full bg-[#00A859] text-white flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    Windows, Office & IA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 3 Feature Items */}
          <div className="lg:col-span-4 space-y-7">
            {rightFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-[#F5F8FF] transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F5F8FF] group-hover:bg-[#0E43FB] border border-[#D5E3FC] flex items-center justify-center text-[#0E43FB] group-hover:text-white shrink-0 transition-all shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-extrabold text-[#0F172A] group-hover:text-[#0E43FB] transition-colors mb-1 flex items-center gap-1.5">
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0E43FB]" />
                    </h3>
                    <p className="text-sm text-[#5B6576] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* PART 3: LOGO GRADIENT STATS COUNTER BANNER (Blue to Emerald Green) */}
        <div className="relative rounded-[32px] bg-gradient-to-r from-[#0E43FB] via-[#0B5ED7] to-[#008248] py-12 px-8 sm:px-14 text-white overflow-hidden shadow-xl shadow-[#0E43FB]/20">
          {/* Decorative Diagonal Wave Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
            viewBox="0 0 1200 300"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M-100 300 C 300 50, 700 50, 1300 280"
              stroke="white"
              strokeWidth="3"
            />
            <path
              d="M-100 220 C 400 -20, 800 20, 1300 200"
              stroke="white"
              strokeWidth="2"
            />
          </svg>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, idx) => (
              <div key={idx} className="text-left">
                <div className="text-4xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-white leading-none mb-3">
                  {item.value}
                </div>
                <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
