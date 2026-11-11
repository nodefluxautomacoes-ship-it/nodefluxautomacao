import React from 'react';
import { Award, Store, ExternalLink, CheckCircle2, Flame } from 'lucide-react';

export default function PartnerEconomiaDigital() {
  return (
    <section id="parceiros" className="py-8 md:py-10 bg-[#F4F7FD] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* CARD DISCRETO 1: NODE FLUX LOJAS + IFOOD */}
          <a
            href="https://nodefluxlojas.com/conheca/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white border border-slate-200 hover:border-[#00B060] p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-[#00B060] flex items-center justify-center shrink-0">
                <Store className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-[#00B060] border border-emerald-200">
                    Plataforma Própria
                  </span>
                  <span className="text-[10px] font-bold text-[#EA1D2C] flex items-center gap-0.5">
                    <Flame className="w-3 h-3 fill-current" /> iFood + 0% Taxa
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#00B060] transition-colors truncate">
                  Node Flux Lojas — Cardápio & Catálogo Digital
                </h3>
                <p className="text-xs text-slate-500 truncate">
                  Pedidos no WhatsApp, QR Code na Mesa, iFood e 30 dias grátis.
                </p>
              </div>
            </div>
            <div className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[#00B060] bg-emerald-50 group-hover:bg-[#00B060] group-hover:text-white px-3 py-2 rounded-xl transition-colors">
              <span className="hidden sm:inline">Conhecer</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* CARD DISCRETO 2: LOJA PARCEIRA ECONOMIA DIGITAL */}
          <a
            href="https://economiadigital.shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-white border border-slate-200 hover:border-[#0E43FB] p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <img
                src="/assets/economia-digital-logo.jpg"
                alt="Loja Economia Digital"
                className="w-12 h-12 rounded-xl object-cover border border-slate-200 shrink-0"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EEF4FF] text-[#0E43FB] border border-[#D5E3FC]">
                    Parceira Oficial
                  </span>
                  <span className="text-[10px] font-semibold text-slate-500">
                    economiadigital.shop
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#0E43FB] transition-colors truncate">
                  Loja Economia Digital — Licenças & IA no PIX
                </h3>
                <p className="text-xs text-slate-500 truncate">
                  Windows, Office, ferramentas de IA e softwares originais com envio imediato.
                </p>
              </div>
            </div>
            <div className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[#0E43FB] bg-[#EEF4FF] group-hover:bg-[#0E43FB] group-hover:text-white px-3 py-2 rounded-xl transition-colors">
              <span className="hidden sm:inline">Visitar Loja</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
