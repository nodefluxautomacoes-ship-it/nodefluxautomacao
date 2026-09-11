import React, { useState } from 'react';
import { Stethoscope, ShoppingBag, CheckCircle2, ArrowRight, Bot, Calendar, Sparkles } from 'lucide-react';

export default function NichesTabs() {
  const [activeTab, setActiveTab] = useState('clinicas');

  return (
    <section id="solucoes" className="py-24 bg-[#080d1c]/40 border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold uppercase tracking-widest text-nf-cyan">
            Soluções Especializadas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Projetado sob medida para o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-nf-blue to-nf-cyan">
              seu modelo de negócio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Fluxos inteligentes pré-configurados que resolvem dores reais de conversão e atendimento no seu segmento.
          </p>

          {/* BOTÕES DE ABAS (INTERACTIVE TABS ESTILO ESOFT) */}
          <div className="flex items-center justify-center gap-3 pt-4">
            <button
              onClick={() => setActiveTab('clinicas')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'clinicas'
                  ? 'bg-gradient-to-r from-nf-blue to-nf-cyan text-white shadow-lg shadow-nf-blue/25'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/10 hover:bg-white/[0.08]'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Clínicas & Consultórios</span>
            </button>

            <button
              onClick={() => setActiveTab('lojas')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeTab === 'lojas'
                  ? 'bg-gradient-to-r from-nf-blue to-nf-cyan text-white shadow-lg shadow-nf-blue/25'
                  : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/10 hover:bg-white/[0.08]'
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
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-md border border-sky-500/20">
                Nicho Especializado
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                Agendamentos inteligentes e zero faltas pelo WhatsApp
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Acabe com as filas de espera e com o tempo perdido confirmando consultas manualmente. Nossa IA atende seus pacientes, tira dúvidas sobre convênios e integra diretamente com sua agenda médica.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Agendamento, remarcação e cancelamento 24h por dia',
                  'Lembretes automáticos que reduzem o no-show em até 80%',
                  'Fluxos inteligentes conectados via n8n à sua agenda',
                  'Cadastro e histórico de prontuário direto no CRM',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-200 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm transition-all"
                >
                  <span>Ver Demonstração para Clínicas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* SIMULAÇÃO DE CHAT AO VIVO DA CLÍNICA */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl glass-panel border border-white/15 p-6 shadow-2xl relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Assistente Médico Virtual</div>
                      <div className="text-[11px] text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        Disponível Agora
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                    n8n Workflow
                  </span>
                </div>

                {/* BALÕES DE MENSAGEM */}
                <div className="space-y-3.5 font-sans text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-white/[0.07] border border-white/10 text-slate-200 max-w-[85%]">
                    👋 Olá! Sou o assistente virtual da clínica. Como posso te ajudar hoje?
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tr-none bg-gradient-to-r from-nf-blue to-sky-500 text-white ml-auto max-w-[85%] font-medium">
                    Gostaria de agendar uma consulta com o Dr. Carlos para esta semana.
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-white/[0.07] border border-white/10 text-slate-200 max-w-[85%]">
                    Perfeito! Temos vagas na <strong>quinta-feira às 14:30</strong> ou na <strong>sexta-feira às 10:00</strong>. Qual horário fica melhor para você?
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tr-none bg-gradient-to-r from-nf-blue to-sky-500 text-white ml-auto max-w-[85%] font-medium">
                    Quinta-feira às 14:30, por favor!
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 max-w-[85%] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20">
                Nova Solução
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                Node Flux Lojas: Catálogo e Vendas no WhatsApp
              </h3>
              <p className="text-slate-300 leading-relaxed text-base">
                Crie seu catálogo online de produtos ou cardápio digital em minutos. Simples, rápido e totalmente integrado com as conversas da sua empresa no WhatsApp, Facebook e Instagram.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Catálogo de produtos e cardápio digital responsivo',
                  'Recebimento de pedidos organizados direto no WhatsApp',
                  'Integração com redes sociais e campanhas de anúncios',
                  'Gestão prática de estoque, variações e categorias',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-200 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-all"
                >
                  <span>Conhecer o Node Flux Lojas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* PREVIEW DO BANNER LOJAS */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden glass-panel border border-white/15 shadow-2xl group">
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
