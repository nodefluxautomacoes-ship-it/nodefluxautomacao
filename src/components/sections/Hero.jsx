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
        {/* Subtle Decorative 4-Point Sparkle */}
        <svg
          className="hidden sm:block absolute top-24 left-10 w-9 h-9 text-[#0F172A]/75 pointer-events-none"
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
            {/* Left Column: Copy, Double Badge, Buttons & Customer Rating */}
            <div className="lg:col-span-7 text-left z-10">
              {/* Double Pill Badge: [ Tudo em 1! ] CRM WhatsApp, Lojas & Licenças 🔥 */}
              <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#DCE8FF]/90 border border-[#C4D8FF] mb-6 shadow-sm">
                <span className="bg-white text-[#0F172A] font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-sm">
                  Tudo em 1!
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#0E43FB] flex items-center gap-1.5">
                  CRM de WhatsApp com IA, Lojas & Licenças <span>🔥</span>
                </span>
              </div>

              {/* H1 Headline - Frase Principal em Destaque */}
              <h1 className="text-3xl sm:text-5xl lg:text-[48px] font-display font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-5">
                Atenda e venda no piloto automático 24h pelo WhatsApp com Inteligência Artificial.
              </h1>

              {/* Texto embaixo (Catálogo iFood + Economia Digital + CRM Multicanal) */}
              <p className="text-base sm:text-lg text-[#5B6576] mb-6 max-w-2xl leading-relaxed font-normal">
                Receba pedidos do seu catálogo próprio integrado ao{' '}
                <strong className="text-[#0F172A] font-bold">iFood com 0% de comissão</strong>, equipe sua empresa com licenças originais na{' '}
                <strong className="text-[#0F172A] font-bold">Economia Digital</strong> e organize toda a sua equipe no nosso{' '}
                <strong className="text-[#0F172A] font-bold">CRM Multicanal</strong> (WhatsApp, WhatsMeow, WhatsApp Oficial, Instagram, Facebook, Telegram, WebChat e ConectHUB 360).
              </p>

              {/* CRM Connections Mini-Strip */}
              <div className="flex flex-wrap items-center gap-1.5 mb-5">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0E43FB] mr-1">
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
                    className="px-2.5 py-0.5 rounded-full bg-white/90 border border-[#D5E3FC] text-[11px] font-bold text-[#0F172A]"
                  >
                    {conn}
                  </span>
                ))}
              </div>

              {/* Ecosystem Quick Pills (Discreet & Actionable) */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                <a
                  href="#sistemas"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#D5E3FC] text-xs font-bold text-[#0F172A] shadow-sm transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#0E43FB]" />
                  <span>CRM WhatsApp + IA 24h</span>
                </a>
                <a
                  href="https://nodefluxlojas.com/conheca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#D5E3FC] text-xs font-bold text-[#0F172A] shadow-sm transition-all"
                >
                  <Store className="w-3.5 h-3.5 text-[#0E43FB]" />
                  <span>Node Flux Lojas + iFood (30 Dias Grátis)</span>
                </a>
                <a
                  href="https://economiadigital.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white border border-[#BCEFD5] text-xs font-bold text-[#0F172A] shadow-sm transition-all"
                >
                  <KeyRound className="w-3.5 h-3.5 text-[#00A859]" />
                  <span>Parceira: Economia Digital (Licenças no PIX)</span>
                </a>
              </div>

              {/* Dual Pill CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <a
                  href="#vitrine"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#0E43FB] hover:bg-[#0832C9] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-[#0E43FB]/30 transition-all hover:-translate-y-0.5"
                >
                  <span>Começar Agora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/70 text-[#0F172A] font-bold text-base px-8 py-4 rounded-full border border-[#0F172A]/30 hover:border-[#0E43FB] hover:text-[#0E43FB] transition-all"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="https://youtu.be/gWiEFEQy8I0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-[#0F172A] hover:text-[#0E43FB] font-bold text-sm px-4 py-3.5 rounded-full transition-colors"
                >
                  <span className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-[#0E43FB]">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </span>
                  <span>Ver Vídeo</span>
                </a>
              </div>

              {/* Bottom Customer Trust Row (Avatars + Happy Customers | 4.9/5 Stars) */}
              <div className="flex flex-wrap items-center gap-6 pt-2 relative">
                <div className="flex items-center gap-3.5">
                  <div className="flex -space-x-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0E43FB] to-[#3B6BFF] border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      RM
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0F172A] to-[#334155] border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      CS
                    </div>
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#00A859] to-[#008248] border-2 border-white flex items-center justify-center text-white font-bold text-xs shadow-sm">
                      JP
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-display font-extrabold text-[#0F172A] leading-tight">
                      +2.290
                    </div>
                    <div className="text-xs text-[#5B6576] font-medium">
                      Clientes Satisfeitos
                    </div>
                  </div>
                </div>

                <div className="h-9 w-px bg-[#0F172A]/20 hidden sm:block" />

                <div>
                  <div className="text-lg font-display font-extrabold text-[#0F172A] leading-tight">
                    4.9/5
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3.5 h-3.5 text-[#FFB800] fill-[#FFB800]"
                      />
                    ))}
                    <span className="text-xs text-[#5B6576] font-medium ml-1">
                      Avaliação
                    </span>
                  </div>
                </div>

                {/* Gold Sparkle Decoration */}
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

            {/* Right Column: Concentric Ice-Blue Circle + Smartphone SaaS Mockup */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              {/* Outer Soft Ice-Blue Circle */}
              <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-[#DCE8FF]/80 flex items-center justify-center relative">
                {/* Inner Brand Blue Ring */}
                <div className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full border border-[#0E43FB]/25" />
              </div>

              {/* Smartphone App Mockup Card */}
              <div className="absolute w-full max-w-[330px] sm:max-w-[350px] bg-white rounded-[36px] p-4 shadow-[0_25px_70px_rgba(15,23,42,0.18)] border-[6px] border-[#0F172A] transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Notch & Top Bar */}
                <div className="flex items-center justify-between px-2 pt-1 pb-3">
                  <span className="text-[11px] font-bold text-[#0F172A]">09:41</span>
                  <div className="w-16 h-4 rounded-full bg-[#0F172A]" />
                  <span className="text-[10px] font-bold text-[#007D44] bg-[#E8FAF1] px-2 py-0.5 rounded-full">
                    IA Online
                  </span>
                </div>

                {/* App Header Balance / Performance */}
                <div className="px-2 pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-[11px] text-[#5B6576] font-medium">
                        Painel Unificado Node Flux
                      </p>
                      <p className="text-2xl font-display font-extrabold text-[#0F172A]">
                        R$ 18.490,00
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#E8F0FF] text-[#0E43FB] flex items-center justify-center font-bold text-xs">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Brand Action Pills (Logo Blue + Logo Green) */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <a
                      href="#sistemas"
                      className="py-2 px-3 rounded-full bg-[#E8F0FF] hover:bg-[#0E43FB] text-[#0E43FB] hover:text-white font-extrabold text-[11px] flex items-center justify-center gap-1 shadow-sm transition-colors"
                    >
                      <Zap className="w-3 h-3" /> WhatsApp IA
                    </a>
                    <a
                      href="https://nodefluxlojas.com/conheca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-full bg-[#2FE48E] hover:bg-[#1FD67E] text-[#0F172A] font-extrabold text-[11px] flex items-center justify-center gap-1 shadow-sm transition-colors"
                    >
                      <Store className="w-3 h-3" /> Catálogo 0% Taxa
                    </a>
                  </div>
                </div>

                {/* Blue-to-Green Logo Gradient Promo Banner inside Phone */}
                <div className="bg-gradient-to-r from-[#0E43FB] to-[#008248] rounded-2xl p-3.5 text-white mb-3 shadow-md shadow-[#0E43FB]/20">
                  <p className="text-xs font-extrabold leading-snug mb-1">
                    Integre iFood + Catálogo Próprio e Economize até 27%
                  </p>
                  <a
                    href="https://nodefluxlojas.com/conheca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-white/95 underline font-semibold inline-flex items-center gap-1"
                  >
                    Testar 30 dias grátis <ArrowRight className="w-3 h-3" />
                  </a>
                </div>

                {/* Live Activity Feed inside Phone */}
                <div className="px-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#0F172A]">
                      Atendimentos & Pedidos
                    </span>
                    <span className="text-[10px] font-bold text-[#0E43FB]">
                      Ao Vivo
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#F5F8FF] border border-[#DCE7FE]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#E8F0FF] text-[#0E43FB] flex items-center justify-center">
                          <MessageSquare className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#0F172A]">
                            Agendamento IA WhatsApp
                          </p>
                          <p className="text-[10px] text-[#5B6576]">
                            Clínica Odonto • Confirmado
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-extrabold text-[#007D44]">
                        +R$ 350
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#F5F8FF] border border-[#DCE7FE]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-[#E8FAF1] text-[#007D44] flex items-center justify-center">
                          <Store className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#0F172A]">
                            Pedido #4892 • Lojas/iFood
                          </p>
                          <p className="text-[10px] text-[#5B6576]">
                            0% Comissão • PIX Aprovado
                          </p>
                        </div>
                      </div>
                      <span className="text-[11px] font-extrabold text-[#007D44]">
                        +R$ 142
                      </span>
                    </div>

                    <a
                      href="https://economiadigital.shop/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2 rounded-xl bg-[#E8FAF1]/80 border border-[#A7EBC8] hover:bg-[#E8FAF1] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <img
                          src="/assets/economia-digital-logo.jpg"
                          alt="Economia Digital"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-[11px] font-bold text-[#0F172A]">
                            Economia Digital • PIX
                          </p>
                          <p className="text-[10px] text-[#007D44] font-semibold">
                            Windows 11 + Office + IA
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold text-[#0E43FB]">
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
