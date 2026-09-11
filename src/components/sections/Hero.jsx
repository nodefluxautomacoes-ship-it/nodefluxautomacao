import React from 'react';
import { ArrowRight, CheckCircle2, Cpu, Activity, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  const checkItems = [
    'IA Conversacional',
    'CRM Integrado',
    'WhatsApp Oficial',
    'APIs REST',
    'Integração n8n',
    'Multiatendimento',
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* BACKGROUND GLOW ORBS ESTILO ESOFT */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-nf-blue/20 via-nf-purple/15 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-nf-cyan/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-nf-purple/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* GRID DE FUNDO SUAVE */}
      <div className="absolute inset-0 bg-mesh-grid opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUNA ESQUERDA: TEXTOS E CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            {/* BADGE DE NOVIDADE ESTILO ESOFT */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nf-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nf-cyan"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-nf-cyan">
                Plataforma SaaS com Inteligência Artificial
              </span>
            </div>

            {/* HEADLINE PRINCIPAL */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.15] text-white">
              Automatize seu atendimento, aumente suas vendas e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-nf-blue to-nf-purple">
                centralize tudo
              </span>{' '}
              em um só lugar.
            </h1>

            {/* SUBTÍTULO */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              A Node Flux conecta WhatsApp Oficial, Instagram, Facebook, Telegram, CRM, APIs e IA Generativa para transformar o relacionamento com seus clientes e escalar sua operação.
            </p>

            {/* LISTA DE BENEFÍCIOS RÁPIDOS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-lg mx-auto lg:mx-0 pt-1">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-nf-cyan flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* BOTÕES DE AÇÃO (DUAL CTA) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="https://wa.me/message/6XUWA2H7KYNAO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-nf-blue via-sky-500 to-nf-cyan text-white font-semibold text-base shadow-xl shadow-nf-blue/30 hover:shadow-nf-cyan/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Agendar Demonstração</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#recursos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white font-medium text-base transition-all duration-200"
              >
                <span>Conhecer Recursos</span>
              </a>
            </div>

            {/* MÉTRICAS / PROVA SOCIAL */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">+120</div>
                <div className="text-xs text-slate-400 font-medium">Empresas Ativas</div>
              </div>
              <div className="text-center lg:text-left border-x border-white/10 px-2 sm:px-4">
                <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-nf-blue">3,2M</div>
                <div className="text-xs text-slate-400 font-medium">Mensagens / Mês</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-nf-green">99,9%</div>
                <div className="text-xs text-slate-400 font-medium">Uptime Estável</div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: DASHBOARD SHOWCASE COM FLOATING CARDS */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* JANELA DO DASHBOARD COM MOLDURA ESTILO BROWSER */}
            <div className="relative w-full rounded-2xl overflow-hidden glass-panel border border-white/15 shadow-2xl shadow-black/80 group">
              {/* TOP BAR CHROME */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="px-3 py-0.5 rounded-md bg-black/40 text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-nf-cyan" />
                  <span>painel.nodeflux.app</span>
                </div>
                <div className="w-10" />
              </div>

              {/* IMAGEM DO DASHBOARD REAL */}
              <div className="relative bg-[#080d1a] overflow-hidden">
                <img
                  src="/assets/dashboard-real.jpg"
                  alt="Painel Node Flux Automação"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a16]/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* FLOATING CARD 1: PIPELINE STATUS (TOP RIGHT) */}
            <div className="absolute -top-4 -right-2 sm:-right-4 px-4 py-2.5 rounded-xl glass-panel border border-emerald-500/30 bg-[#0a0f1e]/90 shadow-xl backdrop-blur-md flex items-center gap-3 animate-float">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Status Operacional</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                  Pipeline Ativo [99.8%]
                </span>
              </div>
            </div>

            {/* FLOATING CARD 2: DADOS & EVENTOS (BOTTOM LEFT) */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 px-4 py-3 rounded-xl glass-panel border border-nf-purple/30 bg-[#0a0f1e]/90 shadow-2xl backdrop-blur-md flex items-center gap-3.5 animate-float-slow">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-nf-purple to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-nf-purple/30">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-semibold text-slate-400">Processamento em Tempo Real</span>
                <span className="text-sm font-bold text-white tracking-wide">10M+ Eventos/s</span>
              </div>
            </div>

            {/* FLOATING CARD 3: WHATSAPP OFICIAL (BOTTOM RIGHT) */}
            <div className="hidden sm:flex absolute bottom-8 -right-4 px-3.5 py-2.5 rounded-xl glass-panel border border-sky-400/30 bg-[#0a0f1e]/90 shadow-xl backdrop-blur-md items-center gap-2.5 animate-float">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400">WhatsApp Cloud API</span>
                <span className="text-xs font-semibold text-sky-400">Meta Oficial</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
