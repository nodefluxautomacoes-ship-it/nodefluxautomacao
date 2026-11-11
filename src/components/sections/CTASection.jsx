import React from 'react';
import { ArrowRight, Store, KeyRound, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contato" className="py-8 px-3 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Niotech Purple CTA Banner */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#7444FD] py-12 lg:py-16 px-6 sm:px-12 lg:px-16 text-white overflow-hidden shadow-xl shadow-[#7444FD]/25">
          {/* Decorative Wave Lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
            viewBox="0 0 1200 400"
            fill="none"
            preserveAspectRatio="none"
          >
            <circle cx="1050" cy="200" r="240" stroke="white" strokeWidth="2" />
            <circle cx="1050" cy="200" r="170" stroke="white" strokeWidth="2" />
          </svg>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-white text-xs sm:text-sm font-bold mb-4">
                <span>Nosso App & Ecossistema</span>
                <span>🔥</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-white leading-[1.15] mb-4">
                Ative Sua Automação ou Loja Digital e Comece Seu Teste Hoje Mesmo!
              </h2>

              <p className="text-sm sm:text-base text-white/85 max-w-2xl mb-8 leading-relaxed">
                Fale com nossa equipe no WhatsApp para ativar seu CRM com IA, criar seu catálogo Node Flux Lojas com 30 dias grátis (+iFood) ou adquirir licenças originais via PIX.
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#282C32] hover:bg-black text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#16C784]" />
                  <span>Falar no WhatsApp Agora</span>
                </a>

                <a
                  href="https://nodefluxlojas.com/conheca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#282C32] font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5"
                >
                  <Store className="w-4 h-4 text-[#7444FD]" />
                  <span>Node Flux Lojas (30 Dias Grátis)</span>
                </a>

                <a
                  href="https://economiadigital.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-bold text-sm px-6 py-4 rounded-full transition-all"
                >
                  <KeyRound className="w-4 h-4" />
                  <span>Economia Digital</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual Badge Card */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="bg-white text-[#282C32] rounded-[28px] p-6 shadow-2xl max-w-xs w-full">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-[#7444FD] uppercase">
                    Ecossistema Completo
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#10A36B] font-extrabold text-[11px]">
                    PIX Ativo
                  </span>
                </div>
                <p className="text-xl font-display font-extrabold text-[#282C32] mb-2">
                  Pronto em Minutos
                </p>
                <p className="text-xs text-[#858585] mb-4 leading-relaxed">
                  Suporte humano passo a passo para configurar seu WhatsApp, iFood ou licença original.
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#282C32]">
                  <span>Atendimento 24/7</span>
                  <span className="text-[#16C784]">★ 4.9/5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
