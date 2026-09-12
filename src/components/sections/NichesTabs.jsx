import React, { useState } from 'react';
import { Stethoscope, ShoppingBag, CheckCircle2, ArrowRight, Bot } from 'lucide-react';

export default function NichesTabs() {
  const [activeTab, setActiveTab] = useState('clinicas');

  return (
    <section id="solucoes" className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Soluções Especializadas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Projetado sob medida para o{' '}
            <span className="text-[#0E43FB]">
              seu modelo de negócio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Fluxos inteligentes pré-configurados que resolvem dores reais de conversão e atendimento no seu segmento.
          </p>

          {/* BOTÕES DE ABAS */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('clinicas')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'clinicas'
                  ? 'bg-[#0E43FB] text-white shadow-lg shadow-[#0E43FB]/25'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Clínicas & Consultórios</span>
            </button>

            <button
              onClick={() => setActiveTab('lojas')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'lojas'
                  ? 'bg-[#0E43FB] text-white shadow-lg shadow-[#0E43FB]/25'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Node Flux Lojas</span>
            </button>
          </div>
        </div>

        {/* CONTEÚDO DA ABA: CLÍNICAS */}
        {activeTab === 'clinicas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E43FB] bg-[#EEF4FF] px-3 py-1 rounded-md border border-[#D5E3FC]">
                Nicho Especializado
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                Agendamentos inteligentes e zero faltas pelo WhatsApp
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Acabe com as filas de espera e com o tempo perdido confirmando consultas manualmente. Nossa IA atende seus pacientes, tira dúvidas sobre convênios e integra diretamente com sua agenda médica.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Agendamento, remarcação e cancelamento 24h por dia',
                  'Lembretes automáticos que reduzem o no-show em até 80%',
                  'Fluxos inteligentes conectados via n8n à sua agenda',
                  'Cadastro e histórico de prontuário direto no CRM',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#0E43FB] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EEF4FF] hover:bg-[#0E43FB] text-[#0E43FB] hover:text-white border border-[#D5E3FC] font-semibold text-sm transition-all duration-200"
                >
                  <span>Ver Demonstração para Clínicas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* SIMULAÇÃO DE CHAT AO VIVO DA CLÍNICA */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-6 shadow-xl shadow-blue-900/5 relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] flex items-center justify-center text-[#0E43FB] font-bold">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Assistente Médico Virtual</div>
                      <div className="text-[11px] text-[#00B060] flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B060] animate-pulse"></span>
                        Disponível Agora
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                    n8n Workflow
                  </span>
                </div>

                {/* BALÕES DE MENSAGEM */}
                <div className="space-y-3.5 font-sans text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-white border border-slate-200 text-slate-700 shadow-sm max-w-[85%]">
                    👋 Olá! Sou o assistente virtual da clínica. Como posso te ajudar hoje?
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tr-none bg-[#0E43FB] text-white ml-auto max-w-[85%] font-medium shadow-md shadow-[#0E43FB]/20">
                    Gostaria de agendar uma consulta com o Dr. Carlos para esta semana.
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-white border border-slate-200 text-slate-700 shadow-sm max-w-[85%]">
                    Perfeito! Temos vagas na <strong>quinta-feira às 14:30</strong> ou na <strong>sexta-feira às 10:00</strong>. Qual horário fica melhor para você?
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tr-none bg-[#0E43FB] text-white ml-auto max-w-[85%] font-medium shadow-md shadow-[#0E43FB]/20">
                    Quinta-feira às 14:30, por favor!
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-emerald-50 border border-emerald-200 text-emerald-800 max-w-[85%] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00B060] flex-shrink-0" />
                    <span>Consulta confirmada! Enviamos a confirmação e adicionamos ao calendário.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* CONTEÚDO DA ABA: LOJAS */}
        {activeTab === 'lojas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B060] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                Nova Solução
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                Node Flux Lojas: Catálogo e Vendas no WhatsApp
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Crie seu catálogo online de produtos ou cardápio digital em minutos. Simples, rápido e totalmente integrado com as conversas da sua empresa no WhatsApp, Facebook e Instagram.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Catálogo de produtos e cardápio digital responsivo',
                  'Recebimento de pedidos organizados direto no WhatsApp',
                  'Integração com redes sociais e campanhas de anúncios',
                  'Gestão prática de estoque, variações e categorias',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#00B060] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E43FB] hover:bg-[#0830C8] text-white font-semibold text-sm shadow-lg shadow-[#0E43FB]/25 transition-all"
                >
                  <span>Conhecer o Node Flux Lojas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* PREVIEW DO BANNER LOJAS */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-blue-900/5 group">
                <img
                  src="/assets/banner-lojas.jpg"
                  alt="Node Flux Lojas - Catálogo Online"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
