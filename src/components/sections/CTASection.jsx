import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-10 sm:p-16 overflow-hidden bg-gradient-to-r from-[#0E43FB] via-[#0A32C4] to-[#06249A] shadow-2xl shadow-blue-900/25 text-center">
          {/* GLOW INTERNO */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#00B060]/25 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-white">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pronto para dar o próximo passo?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transforme seu atendimento e multiplique suas vendas com a Node Flux
            </h2>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto font-normal">
              Converse hoje mesmo com nossa equipe e descubra como integrar inteligência artificial, WhatsApp oficial e CRM no seu negócio em poucos dias.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/message/6XUWA2H7KYNAO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#0E43FB] font-bold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 text-[#00B060]" />
                <span>Agendar Demonstração Gratuita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#0E43FB]" />
              </a>

              <a
                href="https://wa.me/message/6XUWA2H7KYNAO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-base transition-all backdrop-blur-sm"
              >
                <span>Falar com Especialista</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 text-xs text-blue-200 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Sem fidelidade obrigatória</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Onboarding guiado incluso</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
