import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Mendes',
      role: 'Diretor Comercial',
      company: 'Grupo Retail Vendas',
      text: 'Automatizamos praticamente todo nosso primeiro atendimento. A equipe comercial reduziu o tempo de espera de 20 minutos para menos de 10 segundos com a IA, e a conversão de leads subiu 40%.',
      rating: 5,
    },
    {
      name: 'Dra. Ana Paula',
      role: 'Gestora Médica',
      company: 'Clínica Integrada',
      text: 'A IA reduziu drasticamente as faltas nas consultas. Os pacientes recebem confirmações automáticas no WhatsApp e remarcam sem precisar de recepcionista. Mudou nossa rotina!',
      rating: 5,
    },
    {
      name: 'Ricardo Lima',
      role: 'CEO & Fundador',
      company: 'Tech Solutions',
      text: 'Hoje centralizamos vendas, atendimento multicanal e CRM em um único lugar com múltiplos atendentes no mesmo número de WhatsApp. O n8n nos deu liberdade total.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Casos de Sucesso
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Empresas que evoluíram com a{' '}
            <span className="text-[#0E43FB]">
              Node Flux
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Veja o que dizem os líderes que transformaram suas operações com nossas soluções.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-200/50 hover:border-[#0E43FB] hover:shadow-xl hover:shadow-blue-900/8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* ESTRELAS */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#0E43FB]/25 mb-3" />

                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              {/* AUTOR */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0E43FB] to-[#00B060] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#0E43FB]/25">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">{item.name}</div>
                  <div className="text-xs text-slate-500">{item.role} • {item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
