import React from 'react';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl p-10 sm:p-16 overflow-hidden border border-white/15 bg-gradient-to-br from-nf-blue/25 via-[#0c1530] to-nf-purple/20 shadow-2xl shadow-black/80 text-center">
          {/* GLOW INTERNO */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-nf-cyan/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-nf-purple/25 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-nf-cyan">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pronto para dar o próximo passo?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transforme seu atendimento e multiplique suas vendas com a Node Flux
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Converse hoje mesmo com nossa equipe e descubra como integrar inteligência artificial, WhatsApp oficial e CRM no seu negócio em poucos dias.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://wa.me/message/6XUWA2H7KYNAO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-nf-blue via-sky-500 to-nf-cyan text-white font-bold text-base shadow-xl shadow-nf-blue/30 hover:shadow-nf-cyan/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar Demonstração Gratuita</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/message/6XUWA2H7KYNAO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-base transition-all"
              >
                <span>Falar com Especialista</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Sem fidelidade obrigatória</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Onboarding guiado incluso</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
