import React from 'react';

export default function WhatsAppFloat() {
  return (
    <aside aria-label="Atendimento rápido no WhatsApp" className="fixed bottom-6 left-6 sm:bottom-8 sm:left-8 z-50 select-none">
      <a
        href="https://wa.me/message/6XUWA2H7KYNAO1"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
        aria-label="Falar com a Node Flux no WhatsApp"
      >
        {/* EFEITO PULSANTE SUAVE */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping -z-10 pointer-events-none" />

        {/* NOTIFICAÇÃO 1 ONLINE */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center ring-2 ring-white shadow-md">
          1
        </span>

        {/* ÍCONE OFICIAL VETORIAL DO WHATSAPP */}
        <svg viewBox="0 0 32 32" className="w-8 h-8 sm:w-9 sm:h-9 fill-white drop-shadow-sm">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.13 7.42L2 30l6.81-2.09A13.92 13.92 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.64c-2.37 0-4.59-.69-6.47-1.88l-.46-.29-4.8 1.47 1.5-4.68-.3-.49A11.59 11.59 0 0 1 4.36 16C4.36 9.58 9.58 4.36 16 4.36S27.64 9.58 27.64 16 22.42 27.64 16 27.64zm6.34-8.68c-.35-.18-2.07-1.02-2.39-1.14-.32-.12-.55-.18-.79.18-.23.35-.9 1.14-1.11 1.37-.2.23-.41.26-.76.09-.35-.18-1.48-.55-2.82-1.74-1.04-.93-1.74-2.08-1.94-2.43-.2-.35-.02-.54.15-.71.16-.16.35-.41.53-.61.18-.2.23-.35.35-.58.12-.23.06-.44-.03-.61-.09-.18-.79-1.9-1.08-2.6-.28-.69-.57-.59-.79-.6-.2-.01-.44-.01-.67-.01-.23 0-.61.09-.93.44-.32.35-1.23 1.2-1.23 2.93s1.26 3.4 1.43 3.63c.18.23 2.47 3.77 5.98 5.29.84.36 1.49.58 2 .74.84.27 1.6.23 2.21.14.67-.1 2.07-.85 2.36-1.66.29-.82.29-1.52.2-1.66-.09-.15-.32-.23-.67-.41z" />
        </svg>

        {/* BALÃO / TOOLTIP À DIREITA DO BOTÃO */}
        <div className="absolute left-full ml-3.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xl shadow-blue-900/10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00B060] animate-pulse flex-shrink-0" />
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold text-slate-900 leading-tight">Falar no WhatsApp</span>
            <span className="text-[10px] text-slate-500 leading-tight">Atendimento humanizado online</span>
          </div>
        </div>
      </a>
    </aside>
  );
}
