import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Heart, MessageCircle, Sparkles, Star, Users, Play } from 'lucide-react';

export default function Hero() {
  const [attendees, setAttendees] = useState(0);
  const [responseTime, setResponseTime] = useState(0);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const duration = 1800; // 1.8 segundos de animação suave
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out exponencial para desaceleração realista e suave
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setAttendees(Math.floor(ease * 15000));
      setResponseTime(Math.min(5, Math.max(1, Math.floor(ease * 5.2))));
      setRating(Number((ease * 4.9).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setAttendees(15000);
        setResponseTime(5);
        setRating(4.9);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const checkItems = [
    'Respostas em até 5 segundos',
    'Atendimento 24h acolhedor',
    'Sem filas e sem espera',
    'Toda equipe em um só WhatsApp',
    'Conversas gentis e humanas',
    'Zero clientes no vácuo',
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#F4F7FD]">
      {/* BACKGROUND GLOW ORBS ESTILO TECHXEN */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-blue-50/70 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* GRID DE FUNDO SUAVE */}
      <div className="absolute inset-0 bg-mesh-grid opacity-80 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUNA ESQUERDA: TEXTOS E CTAs */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            
            {/* BADGE HUMANIZADO */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF4FF] border border-[#D5E3FC] shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B060] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B060]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#0E43FB] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#0E43FB]" />
                O atendimento rápido e carinhoso que seu cliente merece
              </span>
            </div>

            {/* HEADLINE PRINCIPAL */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.15rem] font-extrabold tracking-tight leading-[1.18] text-[#0F172A]">
              Nunca mais perca uma venda por{' '}
              <span className="text-[#0E43FB]">
                demora no WhatsApp.
              </span>
            </h1>

            {/* SUBTÍTULO */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Seu cliente valoriza atenção imediata. A <strong>Node Flux</strong> acolhe cada pessoa com empatia e rapidez em menos de 5 segundos, tira dúvidas, agenda e fecha pedidos 24h por dia — enquanto você ganha tempo para viver e cuidar da sua empresa.
            </p>

            {/* LISTA DE BENEFÍCIOS HUMANIZADOS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 pt-1">
              {checkItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#00B060] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* BOTÕES DE AÇÃO TECHXEN */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="https://wa.me/message/6XUWA2H7KYNAO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0E43FB] hover:bg-[#0830C8] text-white font-semibold text-base shadow-xl shadow-[#0E43FB]/25 hover:shadow-[#0E43FB]/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Experimentar no WhatsApp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=O9gtZqyDk5M"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-[#0E43FB] text-slate-700 hover:text-[#0E43FB] font-semibold text-base shadow-sm transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Ver Como Funciona</span>
              </a>
            </div>

            {/* MÉTRICAS HUMANIZADAS COM EFEITO DE CONTAGEM CRESCENTE */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight whitespace-nowrap">
                  +{attendees.toLocaleString('pt-BR')}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Pessoas Atendidas</div>
              </div>

              <div className="text-center lg:text-left border-x border-slate-200 px-2 sm:px-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0E43FB] tracking-tight whitespace-nowrap flex items-baseline justify-center lg:justify-start gap-1">
                  <span>&lt; {responseTime}</span>
                  <span className="text-sm sm:text-base font-bold text-[#0E43FB]">seg</span>
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Tempo de Resposta</div>
              </div>

              <div className="text-center lg:text-left pl-1 sm:pl-3">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00B060] tracking-tight flex items-center justify-center lg:justify-start gap-1 whitespace-nowrap">
                  <span>{rating.toFixed(1)}</span>
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1">Satisfação Média</div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: SIMULAÇÃO REAL DE ATENDIMENTO HUMANIZADO */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* JANELA DO WHATSAPP ACOLHEDOR */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-2xl shadow-blue-900/10 group max-w-lg">
              
              {/* CABEÇALHO DO CHAT */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0E43FB] to-[#00B060] flex items-center justify-center text-white font-bold text-sm shadow-md">
                      NF
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#00B060] border-2 border-slate-900"></span>
                  </div>
                  <div>
                    <div className="text-sm font-bold flex items-center gap-1.5">
                      <span>Node Flux • Atendimento</span>
                      <span className="w-2 h-2 rounded-full bg-[#00B060] animate-pulse"></span>
                    </div>
                    <div className="text-[11px] text-emerald-400 font-medium">
                      Online agora • Responde no 1º segundo
                    </div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-[10px] font-medium text-slate-300 border border-white/10">
                  WhatsApp Oficial
                </span>
              </div>

              {/* CONVERSA REAL COM O CONSUMIDOR */}
              <div className="p-5 bg-[#F8FAFC] space-y-3.5 text-xs sm:text-sm font-sans min-h-[320px] flex flex-col justify-center">
                
                {/* MENSAGEM DO CLIENTE */}
                <div className="self-end max-w-[85%] bg-[#0E43FB] text-white p-3.5 rounded-2xl rounded-tr-none shadow-md shadow-[#0E43FB]/20 space-y-1">
                  <p>Oi, boa tarde! Vocês ainda têm o produto disponível ou horário para hoje? 😊</p>
                  <span className="block text-[10px] text-blue-200 text-right">14:32</span>
                </div>

                {/* RESPOSTA GENTIL DA IA EM SEGUNDOS */}
                <div className="self-start max-w-[88%] bg-white border border-slate-200 text-slate-700 p-3.5 rounded-2xl rounded-tl-none shadow-sm space-y-1.5">
                  <p>
                    Olá, Juliana! Que alegria falar com você! 🥰 Temos sim!
                  </p>
                  <p className="text-slate-600">
                    Separei com todo carinho as opções disponíveis para você dar uma olhadinha:
                  </p>
                  <div className="p-2 rounded-lg bg-[#EEF4FF] border border-[#D5E3FC] text-[#0E43FB] font-semibold text-xs flex items-center justify-between">
                    <span>🛍️ Ver Catálogo no WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                  <span className="block text-[10px] text-slate-400 text-right">14:32 • Resposta instantânea</span>
                </div>

                {/* CLIENTE ENCANTADA */}
                <div className="self-end max-w-[85%] bg-[#0E43FB] text-white p-3.5 rounded-2xl rounded-tr-none shadow-md shadow-[#0E43FB]/20 space-y-1">
                  <p>Nossa, que atendimento rápido e simpático! Adorei a opção 2, vou querer sim! 😍</p>
                  <span className="block text-[10px] text-blue-200 text-right">14:33</span>
                </div>

                {/* FECHAMENTO SEM ATRITO */}
                <div className="self-start max-w-[85%] bg-emerald-50 border border-emerald-200 text-emerald-900 p-3 rounded-xl flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#00B060] flex-shrink-0" />
                  <span>Pedido reservado com sucesso! Sem filas e sem espera. ✨</span>
                </div>

              </div>
            </div>

            {/* FLOATING CARD 1: DEPOIMENTO REAL DE CONSUMIDOR */}
            <div className="absolute -top-6 -right-2 sm:-right-4 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-blue-900/10 max-w-[220px] animate-float">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <p className="text-[11px] text-slate-700 italic leading-snug">
                "Responderam em 5 segundos e me trataram super bem!"
              </p>
              <div className="text-[10px] text-slate-500 font-bold mt-1.5">
                Juliana Mendes • Consumidora
              </div>
            </div>

            {/* FLOATING CARD 2: PILHA DE AVATARES DE CLIENTES FELIZES */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-xl shadow-blue-900/10 flex items-center gap-3 animate-float-slow">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-blue-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center">J</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-emerald-500 to-teal-600 text-white font-bold text-xs flex items-center justify-center">C</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-pink-500 to-rose-600 text-white font-bold text-xs flex items-center justify-center">M</span>
                <span className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#0E43FB] text-white font-bold text-[10px] flex items-center justify-center">+15k</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-500">Pessoas Atendidas</span>
                <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1">
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  Experiência 5 estrelas
                </span>
              </div>
            </div>

            {/* FLOATING CARD 3: ZERO VÁCUO */}
            <div className="hidden sm:flex absolute bottom-8 -right-4 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 shadow-xl shadow-blue-900/10 items-center gap-2.5 animate-float">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#00B060]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-500">Zero Espera</span>
                <span className="text-xs font-bold text-[#00B060]">Nenhum cliente no vácuo</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
