import React from 'react';
import { Instagram, Facebook, MessageCircle, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0F1D] border-t border-slate-800 pt-16 pb-12 relative overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* MARCA & DESCRIÇÃO */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <svg width="190" height="42" viewBox="0 0 220 45" xmlns="http://www.w3.org/2000/svg">
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
                <text x="48" y="21" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="20" fill="#FFFFFF">Node Flux</text>
                <text x="50" y="38" fontFamily="'Poppins', sans-serif" fontWeight="600" fontSize="11" letterSpacing="2" fill="#0E43FB">AUTOMAÇÃO</text>
              </svg>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Plataforma completa para automação de processos, atendimento omnichannel no WhatsApp Oficial, CRM de vendas e Inteligência Artificial.
            </p>
          </div>

          {/* LINKS: PLATAFORMA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Plataforma</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#recursos" className="hover:text-[#0E43FB] transition-colors">Recursos</a></li>
              <li><a href="#solucoes" className="hover:text-[#0E43FB] transition-colors">Clínicas</a></li>
              <li><a href="#solucoes" className="hover:text-[#0E43FB] transition-colors">Lojas</a></li>
              <li><a href="#integracoes" className="hover:text-[#0E43FB] transition-colors">Integrações</a></li>
              <li><a href="#planos" className="hover:text-[#0E43FB] transition-colors">Planos e Preços</a></li>
            </ul>
          </div>

          {/* LINKS: EMPRESA */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Empresa</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#hero" className="hover:text-[#0E43FB] transition-colors">Sobre Nós</a></li>
              <li><a href="#faq" className="hover:text-[#0E43FB] transition-colors">FAQ</a></li>
              <li><a href="https://app.nodeflux.app/login" className="hover:text-[#0E43FB] transition-colors">Acesso ao Painel</a></li>
            </ul>
          </div>

          {/* CONTATO OFICIAL */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contato</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="mailto:comercial@nodeflux.app" className="inline-flex items-center gap-2.5 hover:text-[#0E43FB] transition-colors">
                  <Mail className="w-4 h-4 text-[#0E43FB]" />
                  <span>comercial@nodeflux.app</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/6XUWA2H7KYNAO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-medium text-[#00B060] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00B060]" />
                  <span>(21) 99162-4929</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Rio de Janeiro - RJ</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM: COPYRIGHT, CNPJ E REDES */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 Node Flux. Todos os direitos reservados.</p>
            <p className="text-slate-500 mt-0.5">CNPJ: 58.702.061/0001-80</p>
          </div>

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/node.flux/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#0E43FB] hover:border-[#0E43FB] transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61588540406147"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#0E43FB] hover:border-[#0E43FB] transition-all"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/message/6XUWA2H7KYNAO1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-[#00B060] hover:border-[#00B060] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://www.youtube.com/@NodeFluxAutomac%C3%A3o"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-red-400 hover:border-red-400 transition-all"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
