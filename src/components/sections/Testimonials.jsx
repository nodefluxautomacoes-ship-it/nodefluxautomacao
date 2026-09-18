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
    <section className="py-24 bg-white border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] text-xs font-semibold uppercase tracking-widest text-[#0E43FB]">
            Histórias Reais
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Quem usou, se apaixonou pelo{' '}
            <span className="text-[#0E43FB]">
              resultado
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Veja como empresas reais recuperaram a paz de espírito e transformaram a relação com seus clientes.
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
