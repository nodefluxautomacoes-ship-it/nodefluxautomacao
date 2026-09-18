import React, { useState } from 'react';
import { Stethoscope, ShoppingBag, UtensilsCrossed, CheckCircle2, ArrowRight, Bot, LayoutDashboard, Eye, Printer } from 'lucide-react';

export default function NichesTabs() {
  const [activeTab, setActiveTab] = useState('clinicas');
  const [lojaView, setLojaView] = useState('cliente'); // 'cliente' | 'admin'

  return (
    <section id="solucoes" className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Soluções Sob Medida
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Desenhado para o cuidado com o{' '}
            <span className="text-[#0E43FB]">
              seu cliente final
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Experiências simples, calorosas e práticas que conquistam quem está do outro lado da tela do WhatsApp.
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
              <UtensilsCrossed className="w-4 h-4" />
              <span>Restaurantes & Lojas</span>
            </button>
          </div>
        </div>

        {/* CONTEÚDO DA ABA: CLÍNICAS */}
        {activeTab === 'clinicas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0E43FB] bg-[#EEF4FF] px-3 py-1 rounded-md border border-[#D5E3FC]">
                Cuidado & Saúde
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                Acolhimento imediato e agendamento sem filas para seus pacientes
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Seus pacientes não precisam mais esperar horas por uma resposta quando mais precisam de ajuda. Um atendimento carinhoso 24 horas que esclarece dúvidas, orienta horários e reduz faltas com lembretes gentis.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Agendamento, remarcação e orientações 24h com calma e paciência',
                  'Lembretes gentis no WhatsApp que reduzem faltas em até 80%',
                  'Localização da clínica e instruções pré-consulta enviadas na hora',
                  'Transição carinhosa para a secretária nos casos que exigem atenção especial',
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
                    <div className="w-10 h-10 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] flex items-center justify-center text-[#0E43FB] font-bold">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Assistente Acolhedora • Clínica</div>
                      <div className="text-[11px] text-[#00B060] flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00B060] animate-pulse"></span>
                        Disponível Agora • Responde em segundos
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium text-blue-700 bg-[#EEF4FF] px-2.5 py-1 rounded-md border border-[#D5E3FC]">
                    Atendimento Humanizado
                  </span>
                </div>

                {/* BALÕES DE MENSAGEM */}
                <div className="space-y-3.5 font-sans text-xs sm:text-sm">
                  <div className="p-3.5 rounded-2xl rounded-tr-none bg-[#0E43FB] text-white ml-auto max-w-[85%] font-medium shadow-md shadow-[#0E43FB]/20">
                    Olá! Gostaria de marcar uma consulta com a Dra. Camila para esta semana. Estou com muita dor nas costas.
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-white border border-slate-200 text-slate-700 shadow-sm max-w-[85%]">
                    Olá, Dona Maria! Sinto muito pelo incômodo. Vamos agendar rapidinho para a senhora ser atendida logo! Tenho vaga <strong>amanhã às 15:00</strong> ou <strong>quinta às 09:30</strong>. Qual horário fica mais confortável para a senhora?
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tr-none bg-[#0E43FB] text-white ml-auto max-w-[85%] font-medium shadow-md shadow-[#0E43FB]/20">
                    Amanhã às 15:00 seria maravilhoso!
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-none bg-emerald-50 border border-emerald-200 text-emerald-900 max-w-[85%] font-medium flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00B060] flex-shrink-0 mt-0.5" />
                    <span>Perfeito, Dona Maria! Sua consulta está confirmada para <strong>amanhã às 15:00</strong>. Já enviei as orientações e localização. Conte conosco! ❤️</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* CONTEÚDO DA ABA: LOJAS */}
        {activeTab === 'lojas' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B060] bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                Node Flux Lojas • Restaurantes, Bares & Comércio
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                Cardápio e catálogo digital próprio para bares, restaurantes e lojas venderem online
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Diga adeus às comissões abusivas dos apps de entrega e marketplaces. Com a plataforma <strong className="text-slate-800">Node Flux Lojas</strong>, seu restaurante, delivery ou comércio físico vende diretamente para seus clientes com cardápio interativo, catálogo de produtos e painel gerencial em tempo real.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  'Cardápio digital para bares e restaurantes & catálogo online completo para lojas',
                  'Controle "Aberto para Pedidos" em 1 clique com horário, delivery e pedido mínimo',
                  'Impressão automática de comandas na cozinha ou balcão sem retrabalho',
                  'Gestão em tempo real de faturamento, estoque, pedidos do mês e cupons',
                  'Zero comissões por venda: 100% do lucro dos seus pedidos fica com você',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-[#00B060] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="https://nodefluxlojas.com/conheca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#0E43FB] hover:bg-[#0830C8] text-white font-bold text-sm shadow-xl shadow-[#0E43FB]/25 hover:shadow-[#0E43FB]/40 hover:scale-[1.02] active:scale-95 transition-all group"
                >
                  <span>Demonstração 30 Dias Grátis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B060]" />
                  Teste completo sem compromisso
                </span>
              </div>
            </div>

            {/* PREVIEW INTERATIVO DA LOJA E DO PAINEL BASEADO NAS FOTOS REAIS */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* SELETOR DE VISUALIZAÇÃO: VITRINE vs PAINEL DO LOJISTA */}
              <div className="flex items-center justify-between bg-slate-50 p-2 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider pl-2 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#0E43FB]" />
                  <span>Ver na prática:</span>
                </span>
                
                <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
                  <button
                    onClick={() => setLojaView('cliente')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      lojaView === 'cliente'
                        ? 'bg-[#0E43FB] text-white shadow-md shadow-blue-500/20'
                        : 'text-slate-600 hover:text-[#0E43FB] hover:bg-slate-50'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Vitrine do Cliente</span>
                  </button>

                  <button
                    onClick={() => setLojaView('admin')}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      lojaView === 'admin'
                        ? 'bg-[#00B060] text-white shadow-md shadow-emerald-500/20'
                        : 'text-slate-600 hover:text-[#00B060] hover:bg-slate-50'
                    }`}
                  >
                    <LayoutDashboard className="w-3.5 h-3.5" />
                    <span>Painel do Lojista</span>
                  </button>
                </div>
              </div>

              {/* MOCKUP EMOLDURADO */}
              <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xl shadow-blue-900/8 transition-all">
                {/* BARRA SUPERIOR DO NAVEGADOR */}
                <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
                    <span className="ml-2 font-mono text-slate-400 text-[11px] truncate max-w-[200px] sm:max-w-none">
                      {lojaView === 'cliente'
                        ? 'nodefluxlojas.com/conheca'
                        : 'admin.nodefluxlojas.com/painel'}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B060] animate-pulse" />
                    {lojaView === 'cliente' ? 'Estabelecimento Aberto' : 'Aberto para Pedidos'}
                  </span>
                </div>

                {/* IMAGEM REAL */}
                <div className="relative overflow-hidden bg-slate-50">
                  <img
                    src={lojaView === 'cliente' ? '/assets/lojas-cardapio-cliente.png' : '/assets/lojas-painel-admin.png'}
                    alt={lojaView === 'cliente' ? 'Vitrine do Cliente Node Flux Lojas' : 'Painel Administrativo Node Flux Lojas'}
                    className="w-full h-auto object-cover object-top transition-all duration-300 max-h-[380px] sm:max-h-[420px]"
                  />
                </div>

                {/* BARRA INFERIOR DE DESTAQUES */}
                <div className="p-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                  {lojaView === 'cliente' ? (
                    <>
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <ShoppingBag className="w-4 h-4 text-[#0E43FB]" />
                        <span>Cardápio & Catálogo Próprio Online</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#00B060] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Zero taxas por pedido • Pedido mínimo & delivery</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                        <Printer className="w-4 h-4 text-[#00B060]" />
                        <span>Impressão automática de comandas na cozinha</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[#0E43FB] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Faturamento, 97+ pedidos e cupons de desconto</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
