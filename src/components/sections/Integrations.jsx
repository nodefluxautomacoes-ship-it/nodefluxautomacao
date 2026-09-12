import React from 'react';
import { MessageCircle, Instagram, Share2, Facebook, Sparkles, Calendar, Send, CreditCard, Terminal } from 'lucide-react';

export default function Integrations() {
  const tools = [
    { name: 'WhatsApp Oficial', desc: 'API Oficial da Meta Cloud', icon: MessageCircle, color: 'text-[#00B060]', bg: 'bg-emerald-50 border-emerald-200' },
    { name: 'Instagram Direct', desc: 'Mensagens e comentários', icon: Instagram, color: 'text-pink-500', bg: 'bg-pink-50 border-pink-200' },
    { name: 'n8n Automações', desc: 'Fluxos avançados e webhooks', icon: Share2, color: 'text-rose-500', bg: 'bg-rose-50 border-rose-200' },
    { name: 'Facebook Messenger', desc: 'Atendimento integrado', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200' },
    { name: 'OpenAI (ChatGPT)', desc: 'IA generativa avançada', icon: Sparkles, color: 'text-[#0E43FB]', bg: 'bg-[#EEF4FF] border-[#D5E3FC]' },
    { name: 'Google Agenda', desc: 'Sincronização em tempo real', icon: Calendar, color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200' },
    { name: 'Telegram Bots', desc: 'Comunicação multicanal', icon: Send, color: 'text-sky-500', bg: 'bg-sky-50 border-sky-200' },
    { name: 'Gateways de Pagamento', desc: 'Stripe, Mercado Pago e Pix', icon: CreditCard, color: 'text-[#00B060]', bg: 'bg-emerald-50 border-emerald-200' },
    { name: 'APIs REST Custom', desc: 'Conecte qualquer ERP ou banco', icon: Terminal, color: 'text-[#0E43FB]', bg: 'bg-[#EEF4FF] border-[#D5E3FC]' },
  ];

  return (
    <section id="integracoes" className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Ecossistema Aberto
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Conecte a Node Flux com as ferramentas que{' '}
            <span className="text-[#0E43FB]">
              sua empresa já utiliza
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Sincronização nativa e sem fricção com as plataformas líderes do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0E43FB] hover:bg-white shadow-sm hover:shadow-md transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${tool.bg} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${tool.color}`} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0E43FB] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-500">
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
