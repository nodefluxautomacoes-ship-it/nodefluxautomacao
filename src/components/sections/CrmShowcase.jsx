import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  MessageSquare,
  Store,
  KeyRound,
  ExternalLink,
  UtensilsCrossed,
  LayoutDashboard,
  MessageCircle,
  Zap,
  ShieldCheck,
  Facebook,
  Instagram,
  Grid,
  Share2,
  Send,
  UserCheck,
  Network,
} from 'lucide-react';

const demoStores = [
  { name: 'Marmita Chef', url: 'https://marmitacheff.nodefluxlojas.com/' },
  { name: 'Doceria Gourmet', url: 'https://docet.nodefluxlojas.com/' },
  { name: 'Beauty Cosméticos', url: 'https://beautb.nodefluxlojas.com/' },
  { name: 'Pet Shop Amigo', url: 'https://pets.nodefluxlojas.com/' },
];

const allCrmChannels = [
  { name: 'WhatsApp', icon: MessageCircle, color: 'text-[#25D366]' },
  { name: 'WhatsMeow', icon: Zap, color: 'text-[#16C784]' },
  { name: 'WhatsApp Oficial', icon: ShieldCheck, color: 'text-[#128C7E]' },
  { name: 'Facebook', icon: Facebook, color: 'text-[#1877F2]' },
  { name: 'Instagram', icon: Instagram, color: 'text-[#E4405F]' },
  { name: 'ConectHUB 360', icon: Grid, color: 'text-[#7444FD]' },
  { name: 'HUB de Conexões', icon: Share2, color: 'text-[#3B82F6]' },
  { name: 'Telegram Bot (@BotFather)', icon: Send, color: 'text-[#229ED9]' },
  { name: 'Telegram pessoal (MTProto)', icon: UserCheck, color: 'text-[#0088CC]' },
  { name: 'WebChat', icon: MessageSquare, color: 'text-[#2563EB]' },
  { name: 'HUB', icon: Network, color: 'text-[#10B981]' },
];

const CrmShowcase = () => {
  const [activeTab, setActiveTab] = useState('crm');
  const [lojasView, setLojasView] = useState('vitrine');

  const tabs = [
    {
      id: 'crm',
      label: 'CRM Omnichannel & IA 24/7',
      icon: MessageSquare,
    },
    {
      id: 'lojas',
      label: 'Node Flux Lojas + iFood',
      icon: Store,
    },
    {
      id: 'economia',
      label: 'Parceira: Economia Digital',
      icon: KeyRound,
    },
  ];

  return (
    <section id="sistemas" className="py-6 px-3 sm:px-6">
      {/* Niotech Soft Lavender Rounded Container */}
      <div className="bg-[#FAF8FF] border border-[#EFEAFF] rounded-[32px] sm:rounded-[44px] py-14 lg:py-20 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Interactive Platform Switcher Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all ${
                    isActive
                      ? 'bg-[#7444FD] text-white shadow-lg shadow-[#7444FD]/25'
                      : 'bg-white text-[#282C32] hover:text-[#7444FD] border border-[#E5DEFF]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: CRM OMNICHANNEL & IA 24/7 (Default Tab with All 11 Connections) */}
          {activeTab === 'crm' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="niotech-pill mb-4">
                  <span>CRM Completo & Múltiplas Conexões</span>
                  <span>🔥</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-display font-extrabold text-[#282C32] leading-[1.15] mb-4">
                  Conecte Todos os Seus Canais de Atendimento em um Só CRM!
                </h2>

                <p className="text-[#6E7178] text-sm sm:text-base leading-relaxed mb-6">
                  Chega de perder mensagens em vários celulares ou abas diferentes. Nosso <strong className="text-[#282C32]">CRM Node Flux</strong> centraliza todas as suas conexões com vários atendentes simultâneos, Funil Kanban e <strong className="text-[#282C32]">Inteligência Artificial respondendo 24h</strong>.
                </p>

                {/* All 11 Connections Box (Exact match to the CRM Connections Menu) */}
                <div className="bg-white rounded-3xl p-5 border border-[#EFEAFF] shadow-sm mb-7">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#7444FD] mb-3">
                    Todas as conexões disponíveis no nosso CRM:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {allCrmChannels.map((ch, idx) => {
                      const Icon = ch.icon;
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FAF8FF] border border-[#EFEAFF]"
                        >
                          <Icon className={`w-4 h-4 ${ch.color} shrink-0`} />
                          <span className="text-xs font-bold text-[#282C32] truncate">
                            {ch.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-7">
                  {[
                    'Agentes de IA Humanizados 24/7',
                    'Vários Atendentes no Mesmo Número',
                    'Funil Kanban & Etiquetas',
                    'Agendamento para Clínicas',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-[#16C784] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span className="text-sm font-bold text-[#282C32]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://wa.me/message/6XUWA2H7KYNAO1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#7444FD] hover:bg-[#5E30E6] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#7444FD]/25 transition-all"
                  >
                    <span>Agendar Demonstração</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://app.nodeflux.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#282C32] font-bold text-sm px-6 py-4 rounded-full border border-[#282C32]/20 transition-all"
                  >
                    <LayoutDashboard className="w-4 h-4 text-[#7444FD]" />
                    <span>Acessar CRM</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white rounded-[32px] p-5 sm:p-6 border border-[#EFEAFF] shadow-[0_20px_60px_rgba(116,68,253,0.08)]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <span className="text-xs font-extrabold text-[#282C32]">
                      Painel Multicanal • Node Flux CRM
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#10A36B] font-extrabold text-xs">
                      11 Canais Integrados
                    </span>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-slate-100 bg-[#FAF8FF] mb-4">
                    <img
                      src="/assets/crm-nodeflux.png"
                      alt="Painel CRM Multiatendimento Node Flux"
                      className="w-full h-[290px] sm:h-[330px] object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#282C32] px-2">
                    <span>✓ WhatsApp, WhatsMeow & Oficial</span>
                    <span>✓ Instagram, Facebook & Telegram</span>
                    <span className="text-[#16C784]">✓ ConectHUB 360 & WebChat</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NODE FLUX LOJAS + IFOOD */}
          {activeTab === 'lojas' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="niotech-pill mb-4">
                  <span>Destaque Node Flux Lojas</span>
                  <span>🔥</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-[#282C32] leading-[1.15] mb-5">
                  Tenha Seu Cardápio e Catálogo Próprio Integrado ao iFood!
                </h2>

                <p className="text-[#858585] text-base leading-relaxed mb-7">
                  Ideal para restaurantes, lanchonetes, pizzarias, açaiterias, pet shops e lojas em geral. Seu cliente faz o pedido pelo link sem baixar nada, e você recebe pedidos do{' '}
                  <strong className="text-[#282C32]">iFood + Catálogo Próprio</strong> na mesma tela com{' '}
                  <strong className="text-[#16C784]">0% de comissão</strong>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Integração Oficial iFood',
                    '0% Taxa no Catálogo Próprio',
                    'Frete Automático por KM/Bairro',
                    '30 Dias Grátis Para Testar',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#16C784] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#282C32]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-7">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#7444FD] mb-2.5">
                    Teste uma loja demonstrativa ao vivo:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {demoStores.map((store) => (
                      <a
                        key={store.name}
                        href={store.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#7444FD] text-[#282C32] hover:text-white border border-[#E5DEFF] text-xs font-bold transition-all shadow-sm"
                      >
                        <span>{store.name}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://nodefluxlojas.com/conheca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#7444FD] hover:bg-[#5E30E6] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#7444FD]/25 transition-all"
                  >
                    <span>Criar Minha Loja Grátis</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="https://nodefluxlojas.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#282C32] font-bold text-sm px-6 py-4 rounded-full border border-[#282C32]/20 transition-all"
                  >
                    <span>Login do Lojista</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white rounded-[32px] p-5 sm:p-6 border border-[#EFEAFF] shadow-[0_20px_60px_rgba(116,68,253,0.08)]">
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-[#EA1D2C]/10 text-[#EA1D2C] font-extrabold text-xs flex items-center gap-1">
                        <UtensilsCrossed className="w-3 h-3" /> iFood
                      </span>
                      <span className="text-xs font-bold text-[#858585]">+</span>
                      <span className="px-2.5 py-1 rounded-full bg-[#EFEAFF] text-[#7444FD] font-extrabold text-xs">
                        Node Flux Lojas
                      </span>
                    </div>

                    <div className="inline-flex rounded-full bg-[#FAF8FF] p-1 border border-[#EFEAFF]">
                      <button
                        onClick={() => setLojasView('vitrine')}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                          lojasView === 'vitrine'
                            ? 'bg-[#7444FD] text-white'
                            : 'text-[#282C32]'
                        }`}
                      >
                        Vitrine Cliente
                      </button>
                      <button
                        onClick={() => setLojasView('painel')}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                          lojasView === 'painel'
                            ? 'bg-[#7444FD] text-white'
                            : 'text-[#282C32]'
                        }`}
                      >
                        Painel Gestor
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-slate-100 bg-[#FAF8FF] mb-4">
                    <img
                      src={
                        lojasView === 'vitrine'
                          ? '/assets/lojas-cardapio-cliente.png'
                          : '/assets/lojas-painel-admin.png'
                      }
                      alt="Node Flux Lojas e Integração iFood"
                      className="w-full h-[270px] sm:h-[310px] object-cover object-top"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-2xl bg-[#FAF8FF] border border-[#EFEAFF]">
                      <span className="text-[11px] font-bold text-[#EA1D2C] block">
                        Pedido #4892 • iFood
                      </span>
                      <span className="text-xs font-extrabold text-[#282C32]">
                        Sincronizado na Cozinha
                      </span>
                    </div>
                    <div className="p-3 rounded-2xl bg-[#ECFDF5] border border-[#A7F3D0]">
                      <span className="text-[11px] font-bold text-[#10A36B] block">
                        Pedido #4893 • Catálogo
                      </span>
                      <span className="text-xs font-extrabold text-[#282C32]">
                        PIX Aprovado • 0% Taxa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: LOJA PARCEIRA ECONOMIA DIGITAL */}
          {activeTab === 'economia' && (
            <div id="licencas" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6">
                <div className="niotech-pill mb-4">
                  <span>Parceira Oficial Node Flux</span>
                  <span>🔥</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-extrabold text-[#282C32] leading-[1.15] mb-5">
                  Loja Economia Digital: Licenças Originais e IA no PIX!
                </h2>

                <p className="text-[#858585] text-base leading-relaxed mb-7">
                  Equipe os computadores da sua empresa, clínica ou escritório com softwares originais, ferramentas de Inteligência Artificial e automação com entrega imediata e suporte no WhatsApp.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Windows 10/11 Pro & Office 365',
                    'ChatGPT Plus, Canva Pro & IA',
                    'Automações n8n & Produtividade',
                    'Envio Imediato & Desconto no PIX',
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#16C784] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[#282C32]">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://economiadigital.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#7444FD] hover:bg-[#5E30E6] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg shadow-[#7444FD]/25 transition-all"
                >
                  <span>Acessar economiadigital.shop</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="lg:col-span-6">
                <a
                  href="https://economiadigital.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-[32px] p-6 border border-[#EFEAFF] shadow-[0_20px_60px_rgba(116,68,253,0.08)] hover:border-[#7444FD]/40 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="/assets/economia-digital-logo.jpg"
                        alt="Economia Digital"
                        className="w-12 h-12 rounded-2xl object-cover border border-slate-200"
                      />
                      <div>
                        <h3 className="text-base font-display font-extrabold text-[#282C32]">
                          ECONOMIA DIGITAL
                        </h3>
                        <p className="text-xs text-[#16C784] font-bold">
                          Parceira Verificada • economiadigital.shop
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#ECFDF5] text-[#10A36B] font-extrabold text-xs">
                      100% PIX
                    </span>
                  </div>

                  <div className="rounded-2xl overflow-hidden mb-4 border border-slate-100">
                    <img
                      src="/assets/economia-digital-banner.jpg"
                      alt="Banner Loja Economia Digital"
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs font-extrabold text-[#7444FD]">
                    <span>Clique para ver o catálogo de licenças com desconto</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CrmShowcase;
