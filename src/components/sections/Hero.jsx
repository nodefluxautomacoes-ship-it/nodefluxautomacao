import React from 'react';
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  MessageSquare,
  Store,
  KeyRound,
  TrendingUp,
  Zap,
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-3 px-3 sm:px-6">
      {/* Niotech Signature Rounded Pastel Container */}
      <div className="niotech-pastel-box rounded-[32px] sm:rounded-[44px] pt-24 pb-12 lg:pt-32 lg:pb-20 px-6 sm:px-10 lg:px-16 relative overflow-hidden max-w-[1400px] mx-auto">
        {/* Subtle Decorative 4-Point Sparkle (Top Left, Niotech signature) */}
        <svg
          className="hidden sm:block absolute top-24 left-10 w-9 h-9 text-[#282C32]/75 pointer-events-none"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z"
            fill="currentColor"
          />
        </svg>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Niotech Copy, Double Badge, Buttons & Customer Rating */}
            <div className="lg:col-span-7 text-left z-10">
              {/* Niotech Double Pill Badge: [ Novidade! ] CRM WhatsApp, Catálogo & Licenças 🔥 */}
              <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#E5DCFF]/90 border border-[#D7C8FF] mb-6 shadow-sm">
                <span className="bg-white text-[#282C32] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
                  Tudo em 1!
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#7444FD] flex items-center gap-1.5">
                  CRM de WhatsApp com IA, Lojas & Licenças <span>🔥</span>
                </span>
              </div>

              {/* H1 Headline - Simple, Direct, Mentions CRM & WhatsApp IA */}
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-display font-extrabold tracking-tight text-[#282C32] leading-[1.14] mb-5">
                CRM de WhatsApp com IA e Catálogo Online Para Vender Todos os Dias.
              </h1>

              {/* Frase em Destaque Principal */}
              <p className="text-base sm:text-lg text-[#282C32] font-semibold mb-4 max-w-2xl leading-relaxed">
                Atenda e venda no piloto automático 24h pelo WhatsApp com Inteligência Artificial, receba pedidos do seu catálogo próprio integrado ao{' '}
                <span className="text-[#7444FD] font-extrabold">iFood com 0% de comissão</span> e equipe sua empresa com licenças originais na{' '}
                <span className="text-[#10A36B] font-extrabold">Economia Digital</span>.
              </p>

              {/* Texto Complementar Simples embaixo (CRM & Conexões) */}
              <p className="text-sm sm:text-base text-[#6E7178] mb-5 max-w-2xl leading-relaxed font-normal">
                Nosso <strong className="text-[#282C32] font-bold">CRM Multicanal</strong> organiza toda a sua equipe no mesmo número e conecta{' '}
                <strong className="text-[#282C32] font-semibold">
                  WhatsApp, WhatsMeow, WhatsApp Oficial, Instagram, Facebook, Telegram, WebChat e ConectHUB 360
                </strong>{' '}
                em um único painel simples e fácil de usar.
              </p>

              {/* CRM Connections Mini-Strip */}
              <div className="flex flex-wrap items-center gap-1.5 mb-5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#7444FD] mr-1">
                  Conexões CRM:
                </span>
                {[
                  'WhatsApp',
                  'WhatsMeow',
                  'WhatsApp Oficial',
                  'Instagram',
                  'Facebook',
                  'ConectHUB 360',
                  'Telegram Bot & Pessoal',
                  'WebChat',
                ].map((conn) => (
                  <span
                    key={conn}
                    className="px-2.5 py-0.5 rounded-full bg-white/85 border border-[#DDD2FF] text-[11px] font-bold text-[#282C32]"
                  >
                    {conn}
                  </span>
                ))}
              </div>

              {/* Ecosystem Quick Pills (Discreet & Actionable) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <a
                  href="#sistemas"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#E2D9FF] text-xs font-bold text-[#282C32] shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#7444FD]" />
                  <span>CRM WhatsApp + IA 24h</span>
                </a>
                <a
                  href="https://nodefluxlojas.com/conheca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#E2D9FF] text-xs font-bold text-[#282C32] shadow-sm transition-all"
                >
                  <Store className="w-3.5 h-3.5 text-[#7444FD]" />
                  <span>Node Flux Lojas + iFood (30 Dias Grátis)</span>
                </a>
                <a
                  href="https://economiadigital.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#C6F6E2] text-xs font-bold text-[#282C32] shadow-sm transition-all"
                >
                  <KeyRound className="w-3.5 h-3.5 text-[#16C784]" />
                  <span>Parceira: Economia Digital (Licenças no PIX)</span>
                </a>
              </div>

              {/* Niotech Dual Pill CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <a
                  href="#vitrine"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#7444FD] hover:bg-[#5E30E6] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-[#7444FD]/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Começar Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/70 text-[#282C32] font-bold text-base px-8 py-4 rounded-full border border-[#282C32]/35 hover:border-[#7444FD] hover:text-[#7444FD] transition-all"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://www.youtube.com/watch?v=O9gtZqyDk5M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[#282C32] hover:text-[#7444FD] font-bold text-sm px-4 py-3.5 rounded-full transition-colors"
                >
                  <span className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#7444FD]">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Ver Vídeo</span>
                </a>
              </div>

              {/* Niotech Bottom Customer Trust Row (Avatars + Happy Customers | 4.9/5 Stars) */}
              <div className="flex flex-wrap items-center gap-6 pt-2 relative">
                <div className="flex items-center gap-3.5">
                  <div className="flex -space-x-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#7444FD] to-[#9F7AEA] border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      RM
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#282C32] to-[#4A5568] border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      CS
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#16C784] to-[#059669] border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      JP
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-display font-extrabold text-[#282C32] leading-tight">
                      +2.290
                    </div>
                    <div className="text-xs text-[#6E7178] font-medium">
                      Clientes Satisfeitos
                    </div>
                  </div>
                </div>

                <div className="h-9 w-px bg-[#282C32]/20 hidden sm:block" />

                <div>
                  <div className="text-lg font-display font-extrabold text-[#282C32] leading-tight">
                    4.9/5
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800]"
                      />
                    ))}
                    <span className="text-xs text-[#6E7178] font-medium ml-1">
                      Avaliação
                    </span>
                  </div>
                </div>

                {/* Gold Sparkle Decoration (Niotech style) */}
                <svg
                  className="hidden sm:block w-7 h-7 text-[#FFB800] ml-1"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>

            {/* Right Column: Niotech Concentric Lavender Circle + Smartphone SaaS Mockup */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Outer Soft Lavender Circle */}
              <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#DFD3FF]/75 flex items-center justify-center relative">
                {/* Inner Purple Ring */}
                <div className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#7444FD]/35" />
              </div>

              {/* Smartphone App Mockup Card (Tilted Niotech Style) */}
              <div className="absolute w-full max-w-[330px] sm:max-w-[350px] bg-white rounded-[36px] p-4 shadow-[0_25px_70px_rgba(40,44,50,0.18)] border-[6px] border-[#282C32] transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Notch & Top Bar */}
                <div className="flex items-center justify-between px-2 pt-1 pb-3">
                  <span className="text-[11px] font-bold text-[#282C32]">09:41</span>
                  <div className="w-16 h-4 rounded-full bg-[#282C32]" />
                  <span className="text-[10px] font-bold text-[#16C784] bg-[#ECFDF5] px-2 py-0.5 rounded-full">
                    IA Online
                  </span>
                </div>

                {/* App Header Balance / Performance */}
                <div className="px-2 pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-[11px] text-[#858585] font-medium">
                        Painel Unificado Node Flux
                      </p>
                      <p className="text-2xl font-display font-extrabold text-[#282C32]">
                        R$ 18.490,00
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#EFEAFF] text-[#7444FD] flex items-center justify-center font-bold text-xs">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Lime Green Action Pills (just like Niotech phone screen!) */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <a
                      href="#sistemas"
                      className="py-2 px-3 rounded-full bg-[#D2FF28] text-[#282C32] font-extrabold text-[11px] flex items-center justify-center gap-1 shadow-sm"
                    >
                      <Zap className="w-3 h-3" /> WhatsApp IA
                    </a>
                    <a
                      href="https://nodefluxlojas.com/conheca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-full bg-[#D2FF28] text-[#282C32] font-extrabold text-[11px] flex items-center justify-center gap-1 shadow-sm"
                    >
                      <Store className="w-3 h-3" /> Catálogo 0% Taxa
                    </a>
                  </div>
                </div>

                {/* Purple Promo Banner inside Phone (matches Niotech "Invite a friend" card) */}
                <div className="bg-gradient-to-r from-[#7444FD] to-[#5B2BE0] rounded-2xl p-3.5 text-white mb-3 shadow-md shadow-[#7444FD]/20">
                  <p className="text-xs font-extrabold leading-snug mb-1">
                    Integre iFood + Catálogo Próprio e Economize até 27%
                  </p>
                  <a
                    href="https://nodefluxlojas.com/conheca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-white/90 underline font-semibold inline-flex items-center gap-1"
                  >
                    Testar 30 dias grátis <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Live Activity Feed inside Phone */}
                <div className="px-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#282C32]">
                      Atendimentos & Pedidos
                    </span>
                    <span className="text-[10px] font-bold text-[#7444FD]">
                      Ao Vivo
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF8FF] border border-[#EFEAFF]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#EFEAFF] text-[#7444FD] flex items-center justify-center">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#282C32]">
                            Agendamento IA WhatsApp
                          </p>
                          <p className="text-[10px] text-[#858585]">
                            Clínica Odonto • Confirmado
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-extrabold text-[#16C784]">
                        +R$ 350
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#FAF8FF] border border-[#EFEAFF]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#D2FF28]/60 text-[#282C32] flex items-center justify-center">
                          <Store className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#282C32]">
                            Pedido #4892 • Lojas/iFood
                          </p>
                          <p className="text-[10px] text-[#858585]">
                            0% Comissão • PIX Aprovado
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-extrabold text-[#16C784]">
                        +R$ 142
                      </span>
                    </div>

                    <a
                      href="https://economiadigital.shop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-xl bg-[#ECFDF5]/70 border border-[#A7F3D0] hover:bg-[#ECFDF5] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src="/assets/economia-digital-logo.jpg"
                          alt="Economia Digital"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-[11px] font-bold text-[#282C32]">
                            Economia Digital • PIX
                          </p>
                          <p className="text-[10px] text-[#10A36B] font-semibold">
                            Windows 11 + Office + IA
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold text-[#7444FD]">
                        Ver Loja →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
