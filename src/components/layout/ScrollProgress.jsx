import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circle calculations (perimeter 2 * pi * r ≈ 307.8 for r = 49)
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 shadow-lg ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-75 pointer-events-none'
      } bg-[#0a0f1e]/90 backdrop-blur-md border border-white/10 hover:border-nf-cyan/50 hover:scale-110 group`}
      title="Voltar ao topo"
    >
      <svg className="absolute w-full h-full -rotate-90 p-0.5" viewBox="0 0 102 102">
        <circle
          cx="51"
          cy="51"
          r={radius}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="51"
          cy="51"
          r={radius}
          stroke="url(#progressGrad)"
          strokeWidth="4"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-150"
        />
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      <ArrowUp className="w-5 h-5 text-nf-cyan group-hover:text-white transition-colors duration-200" />
    </div>
  );
}
