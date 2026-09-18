import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'O atendimento não vai parecer um robô chato e frio?',
      a: 'De jeito nenhum! Nossos atendentes inteligentes são configurados com a alma e o tom da sua marca. Eles conversam de forma calorosa, compreendem áudios, gírias e até usam emojis com bom senso. A sensação para o cliente é de estar conversando com uma pessoa atenciosa e educada.',
    },
    {
      q: 'E se o cliente quiser falar com uma pessoa ou a IA não souber responder?',
      a: 'A transição é suave e imediata. A IA avisa com toda gentileza que vai chamar alguém da equipe humana e transfere a conversa para o painel dos seus atendentes, já com um resumo de tudo o que foi conversado para seu cliente não ter que repetir nada.',
    },
    {
      q: 'Preciso deixar um computador ligado o dia todo?',
      a: 'Não! O sistema funciona 100% nas nuvens. Você e seus colaboradores podem responder pelo celular, tablet ou computador de onde estiverem. E mesmo se todo mundo for dormir ou desligar os aparelhos, o robô continua atendendo e registrando clientes 24 horas por dia.',
    },
    {
      q: 'Posso usar o meu número atual de WhatsApp?',
      a: 'Sim! Você pode conectar o número que sua empresa já usa ou cadastrar um novo. Conectamos via API Oficial da Meta, o que garante estabilidade total e elimina qualquer risco de ter seu chip banido.',
    },
    {
      q: 'Eu não entendo de tecnologia. Vou ter ajuda para configurar?',
      a: 'Com certeza! Nós pegamos na sua mão. Nossa equipe realiza a configuração inicial junto com você, personaliza as mensagens com as regras do seu negócio e ensina passo a passo como você e sua equipe vão usar a plataforma.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-[#F4F7FD]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Tire Suas Dúvidas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Perguntas{' '}
            <span className="text-[#0E43FB]">
              Frequentes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Tudo o que você precisa saber para transformar o atendimento do seu negócio com tranquilidade.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden transition-all duration-200 hover:border-[#0E43FB]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#0F172A]">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#EEF4FF] text-[#0E43FB]' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
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
