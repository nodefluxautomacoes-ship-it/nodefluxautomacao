import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Ricardo Mendes',
    role: 'Diretor Clínico • OdontoPrime',
    initials: 'RM',
    bg: 'bg-[#0E43FB]',
    text: 'A IA da Node Flux agenda consultas no WhatsApp até de madrugada e envia lembretes automáticos. Reduzimos as faltas em 70% logo no primeiro mês.',
  },
  {
    name: 'Camila & Marcos',
    role: 'Proprietários • Sabor & Brasa Delivery',
    initials: 'CM',
    bg: 'bg-[#0F172A]',
    text: 'Com o Node Flux Lojas integrado ao iFood, recebemos tudo na mesma tela e migramos os clientes recorrentes para o nosso link próprio com 0% de taxa!',
  },
  {
    name: 'Juliana Paiva',
    role: 'Gestora de TI • Escritório Contábil',
    initials: 'JP',
    bg: 'bg-[#00A859]',
    text: 'Equipamos todos os computadores do escritório com Windows 11 Pro e Office 365 pela parceira Economia Digital. Pagamento via PIX e ativação na hora.',
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-6 px-3 sm:px-6">
      {/* Brand Rounded Pastel Container */}
      <div className="niotech-pastel-box rounded-[32px] sm:rounded-[44px] py-16 lg:py-24 px-6 sm:px-10 lg:px-16 max-w-[1400px] mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="niotech-pill mb-4">
              <span>Depoimentos</span>
              <span>🔥</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-display font-extrabold text-[#0F172A] leading-[1.15]">
              O Que Nossos Clientes Dizem?
            </h2>
          </div>

          {/* 3 White Testimonial Cards */}
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-center bg-white rounded-[28px] p-7 sm:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Avatar + Name + Role */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-14 h-14 rounded-2xl ${t.bg} text-white font-display font-extrabold text-lg flex items-center justify-center shadow-sm shrink-0`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-extrabold text-[#0F172A]">
                        {t.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5B6576] font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* 5 Orange Stars (#FF7A00) */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#FF7A00] fill-[#FF7A00]"
                      />
                    ))}
                  </div>

                  {/* Testimonial Copy */}
                  <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed pr-6">
                    {t.text}
                  </p>
                </div>

                {/* Brand Blue Outline Quote Icon at Bottom Right */}
                <svg
                  className="w-9 h-9 text-[#C4D8FF] self-end mt-4"
                  viewBox="0 0 36 36"
                  fill="none"
                >
                  <path
                    d="M10.5 27C7.5 27 5.25 24.75 5.25 21.75C5.25 18.45 7.95 13.2 12.75 9L14.85 10.8C11.85 13.8 10.5 16.5 10.2 18.15C10.65 18 11.1 18 11.55 18C13.95 18 15.75 19.8 15.75 22.35C15.75 24.9 13.5 27 10.5 27ZM24.75 27C21.75 27 19.5 24.75 19.5 21.75C19.5 18.45 22.2 13.2 27 9L29.1 10.8C26.1 13.8 24.75 16.5 24.45 18.15C24.9 18 25.35 18 25.8 18C28.2 18 30 19.8 30 22.35C30 24.9 27.75 27 24.75 27Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
