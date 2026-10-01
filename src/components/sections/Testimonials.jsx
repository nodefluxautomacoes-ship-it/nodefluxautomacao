import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Dra. Mariana Siqueira',
      role: 'Médica & Fundadora',
      company: 'Clínica Bem Viver',
      text: 'Nossos pacientes elogiam todos os dias o carinho e a rapidez no agendamento. As faltas caíram 80% e a recepção finalmente tem tempo para acolher quem chega na clínica com um cafezinho e sorriso no rosto.',
      rating: 5,
    },
    {
      name: 'Renato Barbosa',
      role: 'Proprietário',
      company: 'Empório & Bistrô das Oliveiras',
      text: 'Antes eu perdia vendas toda noite porque não dava conta de responder mensagens e dar atenção aos clientes no salão ao mesmo tempo. Agora o cardápio no WhatsApp fecha pedidos sozinho e o cliente fica encantado.',
      rating: 5,
    },
    {
      name: 'Carla Medeiros',
      role: 'Diretora de Relacionamento',
      company: 'Flor de Liz Boutique',
      text: 'O atendimento é tão afetuoso e natural que nossos clientes mandam "Deus te abençoe" achando que é uma atendente dedicada 24h. Zeramos o tempo de espera e nossas vendas aumentaram 45%.',
      rating: 5,
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Histórias Reais
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Quem usou, se apaixonou pelo{' '}
            <span className="text-[#0E43FB]">
              resultado
            </span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            Veja como empresas reais recuperaram a paz de espírito e transformaram a relação com seus clientes.
          </p>
        </div>

        {/* CARROSSEL NO MOBILE / GRADE NO DESKTOP */}
        <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none gap-4 md:gap-8 pb-3 md:pb-0 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#0E43FB] hover:shadow-xl hover:shadow-blue-900/8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* ESTRELAS */}
                <div className="flex items-center gap-1 text-amber-400 mb-4 sm:mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#0E43FB]/25 mb-2 sm:mb-3" />

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              {/* AUTOR */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#0E43FB] to-[#00B060] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md shadow-[#0E43FB]/25 flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0F172A]">{item.name}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500">{item.role} • {item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DICA DE SWIPE NO MOBILE */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-[11px] text-slate-500">
          <span>← Deslize para ver mais depoimentos →</span>
        </div>

      </div>
    </section>
  );
}
