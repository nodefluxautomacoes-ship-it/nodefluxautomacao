import React, { useState } from 'react';
import { ChevronsRight, Store, KeyRound, MessageSquare, CheckCircle2 } from 'lucide-react';

const faqs = [
  {
    q: 'Como funciona a integração do Node Flux Lojas com o iFood?',
    a: 'Você conecta sua conta iFood ao painel Node Flux Lojas em poucos cliques. Assim, todos os pedidos do iFood e do seu cardápio digital próprio chegam na mesma tela, com aviso sonoro, impressão automática e 0% de comissão nas vendas pelo seu link.',
  },
  {
    q: 'Preciso pagar comissão por venda no meu catálogo próprio?',
    a: 'Não! Diferente dos marketplaces tradicionais, no Node Flux Lojas o lucro é 100% seu. Você paga apenas uma assinatura mensal fixa e pode testar gratuitamente por 30 dias.',
  },
  {
    q: 'As licenças da loja parceira Economia Digital são originais?',
    a: 'Sim! A Economia Digital (economiadigital.shop) fornece licenças auditadas de Windows 10/11 Pro, Pacote Office 365, ferramentas de IA e automações n8n com pagamento via PIX, envio imediato e suporte humano no WhatsApp.',
  },
  {
    q: 'Posso usar meu número atual de WhatsApp no CRM com IA?',
    a: 'Com certeza! Você conecta seu número atual lendo o QR Code ou via API Oficial da Meta, mantendo todo o seu histórico e colocando vários atendentes + Inteligência Artificial 24/7 no mesmo número.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Niotech FAQ Accordion (Matches niotech_5.png) */}
          <div className="lg:col-span-6">
            <div className="niotech-pill mb-4">
              <span>FAQs</span>
              <span>🔥</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-display font-extrabold text-[#282C32] leading-[1.15] mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-sm sm:text-base text-[#858585] mb-8 leading-relaxed">
              Tire suas dúvidas sobre nossas automações com IA no WhatsApp, o catálogo Node Flux Lojas integrado ao iFood e as licenças da Economia Digital.
            </p>

            <div className="space-y-3.5">
              {faqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#FAF8FF] border border-[#EFEAFF] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                    >
                      <span className="text-sm sm:text-base font-display font-bold text-[#282C32]">
                        {item.q}
                      </span>
                      <ChevronsRight
                        className={`w-5 h-5 text-[#7444FD] shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-[#858585] leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Niotech Lavender Dashboard Overview Visual (Matches niotech_5.png) */}
          <div className="lg:col-span-6">
            <div className="bg-[#ECE6FF] rounded-[32px] p-6 sm:p-8 relative overflow-hidden shadow-sm">
              {/* Top Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/assets/logo-oficial.png"
                    alt="Node Flux Automação"
                    className="w-9 h-9 rounded-xl object-cover border border-white shadow-sm"
                  />
                  <span className="font-display font-extrabold text-[#282C32] text-base">
                    Node Flux Automação
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white text-[#7444FD] font-bold text-xs shadow-sm">
                  Visão Geral em Tempo Real
                </span>
              </div>

              {/* 2 Blue/Purple Credit-Style Summary Cards (Matches BankDash in niotech_5.png) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-[#3734FF] to-[#7444FD] text-white rounded-2xl p-5 shadow-md">
                  <p className="text-[11px] opacity-80 mb-1">
                    Vendas Diretas (0% Comissão)
                  </p>
                  <p className="text-2xl font-display font-extrabold mb-4">
                    R$ 14.850,00
                  </p>
                  <div className="flex items-center justify-between text-[11px] opacity-90 pt-2 border-t border-white/15">
                    <span>NODE FLUX LOJAS + IFOOD</span>
                    <span className="font-bold">ATIVO</span>
                  </div>
                </div>

                <div className="bg-white text-[#282C32] rounded-2xl p-5 shadow-sm">
                  <p className="text-[11px] text-[#858585] mb-1">
                    Atendimentos IA & Licenças PIX
                  </p>
                  <p className="text-2xl font-display font-extrabold mb-4">
                    +1.420 / mês
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-[#7444FD] font-bold pt-2 border-t border-slate-100">
                    <span>CRM IA + ECONOMIA DIGITAL</span>
                    <span className="text-[#16C784]">100% ONLINE</span>
                  </div>
                </div>
              </div>

              {/* Weekly Activity Bars + Quick Links */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-display font-extrabold text-[#282C32]">
                    Produtividade Semanal da Operação
                  </span>
                  <div className="flex items-center gap-3 text-[11px] font-bold">
                    <span className="flex items-center gap-1 text-[#7444FD]">
                      <span className="w-2 h-2 rounded-full bg-[#7444FD]" /> IA WhatsApp
                    </span>
                    <span className="flex items-center gap-1 text-[#16C784]">
                      <span className="w-2 h-2 rounded-full bg-[#16C784]" /> Pedidos PIX
                    </span>
                  </div>
                </div>

                {/* Stylized Bar Chart (Matches niotech_5.png) */}
                <div className="grid grid-cols-7 gap-3 items-end h-28 pt-2 px-2">
                  {[65, 80, 55, 95, 85, 100, 90].map((h, i) => (
                    <div key={i} className="flex items-end justify-center gap-1 h-full">
                      <div
                        style={{ height: `${h}%` }}
                        className="w-2.5 rounded-full bg-[#3734FF]"
                      />
                      <div
                        style={{ height: `${Math.max(40, h - 20)}%` }}
                        className="w-2.5 rounded-full bg-[#16C784]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
