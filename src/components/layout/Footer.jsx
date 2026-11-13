import React from 'react';
import { Store, KeyRound, Mail, MessageCircle, QrCode, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#F3F7FF] pt-16 pb-10 relative overflow-hidden mt-8">
      {/* Subtle Large Ice-Blue Circle on the Right */}
      <div className="hidden lg:block absolute -bottom-24 right-10 w-[480px] h-[480px] rounded-full bg-[#DCE8FF]/70 pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#DCE7FE]">
          {/* Col 1: Official Node Flux Automação Logo + Description + 2 Pill Buttons */}
          <div className="lg:col-span-4">
            <a href="#" className="inline-flex items-center gap-3 mb-5">
              <svg width="195" height="45" viewBox="0 0 220 45" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0E43FB" />
                    <stop offset="100%" stopColor="#00B060" />
                  </linearGradient>
                </defs>
                <g transform="translate(0, 1) scale(0.95)">
                  <path
                    d="M 22.5 3 C 11.73 3 3 11.73 3 22.5 C 3 26.5 4.2 30.2 6.2 33.2 L 3 42 L 12.5 39 C 15.5 41 18.9 42 22.5 42 C 33.27 42 42 33.27 42 22.5 C 42 11.73 33.27 3 22.5 3 Z"
                    fill="none"
                    stroke="url(#footerGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M 10 8 L 10 18 L 14 22 L 14 28" fill="none" stroke="url(#footerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="14" cy="28" r="2.5" fill="url(#footerGrad)" />
                  <path d="M 16 3 L 16 12 L 20 16 L 20 26" fill="none" stroke="url(#footerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="26" r="2.5" fill="url(#footerGrad)" />
                  <path d="M 24 3 L 24 16 L 28 20 L 28 32" fill="none" stroke="url(#footerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="28" cy="32" r="2.5" fill="url(#footerGrad)" />
                  <path d="M 32 5 L 32 14 L 36 18 L 36 24" fill="none" stroke="url(#footerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="36" cy="24" r="2.5" fill="url(#footerGrad)" />
                  <path d="M 22.5 42 L 22.5 34 L 16 27.5" fill="none" stroke="url(#footerGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <text x="48" y="21" fontFamily="'Urbanist', 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="20" fill="#0F172A">Node Flux</text>
                <text x="50" y="38" fontFamily="'Urbanist', 'Plus Jakarta Sans', sans-serif" fontWeight="700" fontSize="11" letterSpacing="2" fill="#0E43FB">AUTOMAÇÃO</text>
              </svg>
            </a>

            <p className="text-sm text-[#5B6576] leading-relaxed mb-6 max-w-sm">
              Automação inteligente no WhatsApp com IA 24/7, cardápio e catálogo digital integrado ao iFood (0% taxa) e licenças originais via PIX.
            </p>

            {/* 2 Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://nodefluxlojas.com/conheca/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0F172A] hover:bg-[#0E43FB] text-white text-xs font-bold transition-colors shadow-sm"
              >
                <Store className="w-4 h-4" />
                <span>Node Flux Lojas</span>
              </a>

              <a
                href="https://economiadigital.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:border-[#0E43FB] text-[#0F172A] border border-[#D0DDF7] text-xs font-bold transition-colors shadow-sm"
              >
                <KeyRound className="w-4 h-4 text-[#00A859]" />
                <span>Economia Digital</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navegação (With Split Underline Bar) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-display font-extrabold text-[#0F172A] mb-2">
              Páginas
            </h3>
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-4 h-0.5 bg-[#0E43FB] rounded-full" />
              <span className="w-10 h-0.5 bg-[#C4D8FF] rounded-full" />
            </div>

            <ul className="space-y-3 text-sm text-[#5B6576] font-medium">
              <li>
                <a href="#" className="hover:text-[#0E43FB] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-[#0E43FB] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#sistemas" className="hover:text-[#0E43FB] transition-colors">
                  Sistemas & Lojas
                </a>
              </li>
              <li>
                <a href="#vitrine" className="hover:text-[#0E43FB] transition-colors">
                  Nossos Planos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#0E43FB] transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Ecossistema & Acessos (With Split Underline Bar) */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-display font-extrabold text-[#0F172A] mb-2">
              Plataformas
            </h3>
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-4 h-0.5 bg-[#0E43FB] rounded-full" />
              <span className="w-10 h-0.5 bg-[#C4D8FF] rounded-full" />
            </div>

            <ul className="space-y-3 text-sm text-[#5B6576] font-medium">
              <li>
                <a
                  href="https://app.nodeflux.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0E43FB] transition-colors inline-flex items-center gap-1"
                >
                  Login CRM IA <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://nodefluxlojas.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0E43FB] transition-colors inline-flex items-center gap-1"
                >
                  Login Lojista <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://nodefluxlojas.com/conheca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0E43FB] transition-colors inline-flex items-center gap-1"
                >
                  Catálogo + iFood <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://economiadigital.shop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0E43FB] transition-colors inline-flex items-center gap-1"
                >
                  Licenças no PIX <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/gWiEFEQy8I0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0E43FB] transition-colors"
                >
                  Vídeo Demonstrativo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: White Floating "Ready To Get Started?" Card */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[28px] p-7 shadow-[0_12px_40px_rgba(15,23,42,0.05)]">
              <span className="text-xs font-extrabold text-[#0E43FB] block mb-1">
                Atendimento & Checkout
              </span>
              <h3 className="text-xl font-display font-extrabold text-[#0F172A] mb-2">
                Pronto Para Começar?
              </h3>
              <p className="text-xs text-[#5B6576] leading-relaxed mb-5">
                Ativação imediata via PIX e suporte especializado no WhatsApp para sua empresa.
              </p>

              <div className="space-y-3 text-xs font-bold text-[#0F172A]">
                <a
                  href="mailto:contato@nodeflux.com.br"
                  className="flex items-center gap-2.5 hover:text-[#0E43FB] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#0E43FB]" />
                  <span>contato@nodeflux.com.br</span>
                </a>
                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-[#0E43FB] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#00A859]" />
                  <span>Atendimento Comercial via WhatsApp</span>
                </a>
                <div className="flex items-center gap-2.5 text-[#007D44] pt-1">
                  <QrCode className="w-4 h-4 text-[#00A859]" />
                  <span>Pagamento 100% Seguro via PIX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5B6576] font-medium">
          <p>
            © {new Date().getFullYear()} <strong className="text-[#0F172A]">Node Flux Tecnologia e Automação</strong> • CNPJ: 58.545.280/0001-68. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://nodefluxlojas.com/conheca/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0E43FB] font-bold"
            >
              nodefluxlojas.com
            </a>
            <a
              href="https://economiadigital.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0E43FB] font-bold"
            >
              economiadigital.shop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
