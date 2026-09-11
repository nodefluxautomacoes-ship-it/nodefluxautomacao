import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'A plataforma possui WhatsApp Oficial?',
      a: 'Sim. A Node Flux é integrada diretamente com a Cloud API Oficial da Meta, garantindo selo de verificação, envio de mensagens em escala, ausência de riscos de bloqueio e múltiplos atendentes simultâneos no mesmo número.',
    },
    {
      q: 'A Inteligência Artificial pode responder clientes de verdade?',
      a: 'Sim! Nossos agentes utilizam modelos generativos de última geração (como GPT-4o) parametrizados com a base de conhecimento e regras da sua empresa. A IA compreende o contexto, responde perguntas frequentes, consulta preços e transfere para um atendente humano quando necessário.',
    },
    {
      q: 'Posso integrar com o meu ERP ou sistema próprio?',
      a: 'Com certeza. Contamos com APIs REST completas, Webhooks e suporte nativo ao n8n, permitindo conexões diretas com Bling, Tiny, Omie, plataformas de e-commerce e qualquer banco de dados SQL ou NoSQL.',
    },
    {
      q: 'Como funciona a implantação e o suporte?',
      a: 'Nossa equipe acompanha você durante todo o processo de onboarding, desde a validação da conta no WhatsApp Business Manager até a criação dos fluxos e treinamento dos seus atendentes. O suporte é humanizado diretamente via WhatsApp.',
    },
    {
      q: 'Existe período de teste ou demonstração?',
      a: 'Sim! Disponibilizamos demonstrações interativas guiadas por nossos especialistas para que você veja a automação em tempo real no seu segmento antes de tomar qualquer decisão.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold uppercase tracking-widest text-nf-cyan">
            Dúvidas Comuns
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Perguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-nf-blue to-nf-cyan">
              Frequentes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Tire suas dúvidas técnicas e comerciais sobre a plataforma Node Flux.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-nf-cyan/20 text-nf-cyan' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
