import React from 'react';
import { Store, UtensilsCrossed, KeyRound, MessageCircle, Cpu, Workflow, QrCode } from 'lucide-react';

const PartnersMarquee = () => {
  const brands = [
    {
      name: 'Node Flux Lojas',
      href: 'https://nodefluxlojas.com/conheca/',
      icon: Store,
      color: 'text-[#7444FD]',
    },
    {
      name: 'iFood Integração',
      href: 'https://nodefluxlojas.com/conheca/',
      icon: UtensilsCrossed,
      color: 'text-[#EA1D2C]',
    },
    {
      name: 'Economia Digital',
      href: 'https://economiadigital.shop/',
      icon: KeyRound,
      color: 'text-[#16C784]',
    },
    {
      name: 'WhatsApp Oficial',
      href: '#sistemas',
      icon: MessageCircle,
      color: 'text-[#25D366]',
    },
    {
      name: 'OpenAI GPT-4o',
      href: '#solucoes',
      icon: Cpu,
      color: 'text-[#282C32]',
    },
    {
      name: 'n8n Workflows',
      href: 'https://economiadigital.shop/',
      icon: Workflow,
      color: 'text-[#FF6D5A]',
    },
    {
      name: 'Checkout PIX',
      href: '#vitrine',
      icon: QrCode,
      color: 'text-[#00BDAE]',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-lg sm:text-xl font-display font-extrabold text-[#282C32] mb-8">
          Milhares de Empresas Confiam em Nossa Tecnologia.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-14">
          {brands.map((brand, idx) => {
            const Icon = brand.icon;
            const isExt = brand.href.startsWith('http');
            return (
              <a
                key={idx}
                href={brand.href}
                target={isExt ? '_blank' : undefined}
                rel={isExt ? 'noopener noreferrer' : undefined}
                className="group inline-flex items-center gap-2.5 opacity-85 hover:opacity-100 transition-all hover:-translate-y-0.5"
              >
                <Icon className={`w-6 h-6 ${brand.color} transition-transform group-hover:scale-110`} />
                <span className="text-base sm:text-lg font-display font-extrabold text-[#282C32] group-hover:text-[#7444FD] transition-colors">
                  {brand.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
