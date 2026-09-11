import React from 'react';
import { MessageCircle, Instagram, Share2, Facebook, Sparkles, Calendar, Send, CreditCard, Terminal } from 'lucide-react';

export default function Integrations() {
  const tools = [
    { name: 'WhatsApp Oficial', desc: 'API Oficial da Meta Cloud', icon: MessageCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
    { name: 'Instagram Direct', desc: 'Mensagens e comentários', icon: Instagram, color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20' },
    { name: 'n8n Automações', desc: 'Fluxos avançados e webhooks', icon: Share2, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
    { name: 'Facebook Messenger', desc: 'Atendimento integrado', icon: Facebook, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
    { name: 'OpenAI (ChatGPT)', desc: 'IA generativa avançada', icon: Sparkles, color: 'text-teal-400', bg: 'bg-teal-500/10 border-teal-500/20' },
    { name: 'Google Agenda', desc: 'Sincronização em tempo real', icon: Calendar, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
    { name: 'Telegram Bots', desc: 'Comunicação multicanal', icon: Send, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' },
    { name: 'Gateways de Pagamento', desc: 'Stripe, Mercado Pago e Pix', icon: CreditCard, color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
    { name: 'APIs REST Custom', desc: 'Conecte qualquer ERP ou banco', icon: Terminal, color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
  ];

  return (
    <section id="integracoes" className="py-24 bg-[#080d1c]/40 border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-semibold uppercase tracking-widest text-nf-cyan">
            Ecossistema Aberto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Conecte a Node Flux com as ferramentas que{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-nf-blue to-nf-cyan">
              sua empresa já utiliza
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Sincronização nativa e sem fricção com as plataformas líderes do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl glass-panel border border-white/10 hover:border-nf-cyan/40 hover:bg-white/[0.05] transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${tool.bg} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-nf-cyan transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {tool.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
