import React from 'react';
import { 
  Users, 
  MessageSquare, 
  Kanban, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Zap,
  Sparkles
} from 'lucide-react';

export default function CrmShowcase() {
  const features = [
    {
      icon: Users,
      title: 'Múltiplos Atendentes em 1 Só Número',
      desc: 'Acabe com o celular passando de mão em mão. Toda a sua equipe atende pelo mesmo WhatsApp oficial, com acessos individuais e organização total.',
      tag: 'Multiatendimento',
      color: 'text-[#0E43FB]',
      bg: 'bg-blue-50 border-blue-200'
    },
    {
      icon: Clock,
      title: 'Filas de Atendimento & Triagem',
      desc: 'Separe conversas em "Atendendo" e "Aguardando", distribuindo automaticamente para departamentos como Vendas, Suporte ou Recepção.',
      tag: 'Fila Inteligente',
      color: 'text-[#00B060]',
      bg: 'bg-emerald-50 border-emerald-200'
    },
    {
      icon: MessageSquare,
      title: 'Chat Interno da Equipe',
      desc: 'Troque notas privadas e converse com seus colegas dentro do próprio chamado, sem que o cliente veja. Alinhamento perfeito em tempo real.',
      tag: 'Colaboração',
      color: 'text-purple-600',
      bg: 'bg-purple-50 border-purple-200'
    },
    {
      icon: Kanban,
      title: 'Funil Kanban & Tags Coloridas',
      desc: 'Classifique seus clientes com etiquetas (ex: #LeadQuente, #ConsultaAgendada, #Pago) e acompanhe o fluxo visual de cada negociação.',
      tag: 'Gestão Visual',
      color: 'text-amber-600',
      bg: 'bg-amber-50 border-amber-200'
    },
    {
      icon: Zap,
      title: 'Respostas Rápidas & Templates Meta',
      desc: 'Responda dúvidas comuns em 1 clique com atalhos de teclado e use modelos de mensagens oficiais aprovados pela Meta para disparos seguros.',
      tag: 'Agilidade',
      color: 'text-rose-600',
      bg: 'bg-rose-50 border-rose-200'
    },
    {
      icon: ShieldCheck,
      title: 'Histórico Completo & Centralizado',
      desc: 'Todas as conversas, áudios e comprovantes ficam salvos com segurança. Se um colaborador faltar, outro continua o atendimento sem ruídos.',
      tag: 'Memória Segura',
      color: 'text-sky-600',
      bg: 'bg-sky-50 border-sky-200'
    },
  ];

  return (
    <section id="crm" className="py-24 relative overflow-hidden bg-white border-y border-slate-200/80">
      {/* GLOW DECORATIVO DE FUNDO */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            <Layers className="w-3.5 h-3.5" />
            <span>CRM Multiatendimento Node Flux</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            A central definitiva que coloca{' '}
            <span className="text-[#0E43FB]">
              ordem no seu WhatsApp
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Esqueça o caos de conversas perdidas, mensagens esquecidas e celulares disputados. Tenha um painel profissional onde você e sua equipe atendem juntos com clareza, rapidez e controle total.
          </p>
        </div>

        {/* MOCKUP PRINCIPAL DA INTERFACE DO CRM */}
        <div className="relative mb-20">
          <div className="relative mx-auto rounded-2xl sm:rounded-3xl p-2 sm:p-4 bg-slate-900/5 border border-slate-300/80 shadow-2xl shadow-blue-900/15 backdrop-blur-md">
            
            {/* BARRA SUPERIOR ESTILO NAVEGADOR / MAC OS */}
            <div className="bg-slate-900 text-white rounded-t-xl sm:rounded-t-2xl px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline-block">
                  app.nodeflux.com.br — Painel de Atendimento Multiusuário
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B060] animate-pulse" />
                  API Oficial Meta Conectada
                </span>
              </div>
            </div>

            {/* IMAGEM REAL DA PLATAFORMA NODE FLUX */}
            <div className="relative overflow-hidden rounded-b-xl sm:rounded-b-2xl bg-slate-100 group border border-slate-200">
              <img 
                src="/assets/crm-nodeflux.png" 
                alt="Interface do CRM Multiatendimento Node Flux" 
                className="w-full h-auto object-cover object-top shadow-inner transition-transform duration-700 group-hover:scale-[1.01]"
              />

              {/* OVERLAY SUTIL NA BASE */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* BADGES FLUTUANTES DESTACANDO FUNCIONALIDADES REAIS DO PRINT */}
            <div className="absolute -top-4 -left-2 sm:left-6 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl p-3.5 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF4FF] border border-[#D5E3FC] flex items-center justify-center text-[#0E43FB]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0F172A]">Múltiplos Atendentes</div>
                <div className="text-[11px] text-slate-500">Filas "Atendendo" e "Aguardando"</div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-2 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl p-3.5 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00B060]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#0F172A]">Chat Interno & Notas Privadas</div>
                <div className="text-[11px] text-slate-500">Comunicação da equipe sem o cliente ver</div>
              </div>
            </div>
          </div>
        </div>

        {/* GRADE DE RECURSOS DO CRM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-6 sm:p-7 bg-[#F8FAFC] border border-slate-200/90 shadow-sm hover:border-[#0E43FB] hover:bg-white hover:shadow-xl hover:shadow-blue-900/8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bg} ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-[#0E43FB]">
                  <CheckCircle2 className="w-4 h-4 text-[#00B060]" />
                  <span>Incluso nos planos Business e Enterprise</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTÃO DE CTA PARA DEMO DO CRM */}
        <div className="mt-14 text-center">
          <a
            href="https://wa.me/message/6XUWA2H7KYNAO1?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20CRM%20Multiatendimento%20da%20Node%20Flux"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0E43FB] hover:bg-[#0830C8] text-white font-bold text-base shadow-xl shadow-[#0E43FB]/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 group"
          >
            <span>Quero Ver o CRM em Ação na Minha Empresa</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-slate-500 mt-3">
            Agende uma demonstração ao vivo e veja como organizar seus atendimentos em minutos.
          </p>
        </div>

      </div>
    </section>
  );
}
