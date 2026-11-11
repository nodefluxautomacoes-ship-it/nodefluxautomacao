import React, { useState } from 'react';
import {
  Stethoscope,
  ShoppingBag,
  UtensilsCrossed,
  CheckCircle2,
  ArrowRight,
  Bot,
  LayoutDashboard,
  Eye,
  Printer,
  Flame,
  ExternalLink
} from 'lucide-react';

export default function NichesTabs() {
  const [activeTab, setActiveTab] = useState('lojas'); // Começa destacando Node Flux Lojas de forma limpa
  const [lojaView, setLojaView] = useState('cliente'); // 'cliente' | 'admin'

  return (
    <section id="solucoes" className="py-10 md:py-16 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CABEÇALHO COMPACTO */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Soluções na Prática
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Escolha a solução ideal para o{' '}
            <span className="text-[#0E43FB]">seu segmento</span>
          </h2>

          {/* BOTÕES DE ABAS COMPACTOS */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('lojas')}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                activeTab === 'lojas'
                  ? 'bg-[#0E43FB] text-white shadow-md shadow-[#0E43FB]/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Node Flux Lojas (Delivery, iFood & Comércio)</span>
            </button>

            <button
              onClick={() => setActiveTab('clinicas')}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                activeTab === 'clinicas'
                  ? 'bg-[#0E43FB] text-white shadow-md shadow-[#0E43FB]/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <Stethoscope className="w-4 h-4" />
              <span>Clínicas, Consultórios & Serviços</span>
            </button>
          </div>
        </div>

        {/* ABA 1: NODE FLUX LOJAS (DISCRETA, CLARA E COMPLETA) */}
        {activeTab === 'lojas' && (
          <div id="nodeflux-lojas" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#00B060] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                  Node Flux Lojas • 0% Comissão
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EA1D2C] bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                  <Flame className="w-3.5 h-3.5 fill-current" />
                  Integração Oficial iFood
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl font-bold text-[#0F172A] leading-tight">
                Cardápio e catálogo digital próprio integrado ao iFood e WhatsApp
              </h3>

              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Venda sem pagar taxas por pedido no seu próprio link e centralize pedidos do <strong>iFood, WhatsApp, QR Code na Mesa e Balcão</strong> em um único painel com impressão automática.
              </p>

              <div className="space-y-2">
                {[
                  'Sincronização oficial iFood + Catálogo próprio no mesmo painel',
                  'Pedidos no WhatsApp, QR Code na Mesa, Balcão e Gestão de Motoboys',
                  'Impressão térmica automática na cozinha (58mm/80mm) e pagamento PIX',
                  'Zero comissão por venda • Planos a partir de R$ 75/mês',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#00B060] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://nodefluxlojas.com/conheca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0E43FB] hover:bg-[#0830C8] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#0E43FB]/20 transition-all group"
                >
                  <span>Conhecer & Testar 30 Dias Grátis</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="https://marmitacheff.nodefluxlojas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>Ver Cardápio Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* PREVIEW INTERATIVO COMPACTO */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between bg-slate-50 p-1.5 rounded-xl border border-slate-200">
                <span className="text-xs font-bold text-slate-600 pl-2 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#0E43FB]" />
                  <span>Visualizar:</span>
                </span>
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
                  <button
                    onClick={() => setLojaView('cliente')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      lojaView === 'cliente'
                        ? 'bg-[#0E43FB] text-white'
                        : 'text-slate-600 hover:text-[#0E43FB]'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Vitrine do Cliente</span>
                  </button>
                  <button
                    onClick={() => setLojaView('admin')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-all ${
                      lojaView === 'admin'
                        ? 'bg-[#00B060] text-white'
                        : 'text-slate-600 hover:text-[#00B060]'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Painel do Lojista</span>
                  </button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-lg">
                <div className="bg-slate-900 text-white px-3.5 py-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-mono text-slate-400 text-[11px]">
                      {lojaView === 'cliente' ? 'nodefluxlojas.com/conheca' : 'painel.nodefluxlojas.com'}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400">
                    ● iFood & WhatsApp Conectados
                  </span>
                </div>
                <img
                  src={lojaView === 'cliente' ? '/assets/lojas-cardapio-cliente.png' : '/assets/lojas-painel-admin.png'}
                  alt="Node Flux Lojas"
                  className="w-full h-auto object-cover object-top max-h-[310px]"
                />
              </div>
            </div>
          </div>
        )}

        {/* ABA 2: CLÍNICAS & CONSULTÓRIOS */}
        {activeTab === 'clinicas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E43FB] bg-[#EEF4FF] px-3 py-1 rounded-md border border-[#D5E3FC]">
                Cuidado & Saúde
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-[#0F172A] leading-tight">
                Acolhimento imediato e agendamento 24h sem filas para seus pacientes
              </h3>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Atendimento carinhoso 24 horas que tira dúvidas de exames, agenda consultas e reduz faltas com lembretes automáticos no WhatsApp.
              </p>

              <div className="space-y-2">
                {[
                  'Agendamento e remarcação 24h com linguagem acolhedora',
                  'Lembretes automáticos no WhatsApp que reduzem faltas em até 80%',
                  'Envio imediato de localização e preparo pré-consulta',
                  'Transição imediata para a secretária quando necessário',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-slate-700 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0E43FB] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0E43FB] hover:bg-[#0830C8] text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <span>Ver Demonstração para Clínicas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-4 sm:p-5 shadow-md">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] flex items-center justify-center text-[#0E43FB]">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Assistente • Clínica</div>
                      <div className="text-[10px] text-[#00B060] font-medium">● Responde em segundos</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-2xl rounded-tr-none bg-[#0E43FB] text-white ml-auto max-w-[85%]">
                    Olá! Gostaria de marcar uma consulta com a Dra. Camila para esta semana.
                  </div>
                  <div className="p-3 rounded-2xl rounded-tl-none bg-white border border-slate-200 text-slate-700 max-w-[85%]">
                    Olá, Dona Maria! Tenho vaga <strong>amanhã às 15:00</strong> ou <strong>quinta às 09:30</strong>. Qual prefere?
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 max-w-[85%] font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#00B060] shrink-0" />
                    <span>Consulta confirmada para amanhã às 15:00! ❤️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
