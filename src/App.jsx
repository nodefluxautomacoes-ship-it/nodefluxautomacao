import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import Hero from './components/sections/Hero';
import PartnersMarquee from './components/sections/PartnersMarquee';
import FeaturesGrid from './components/sections/FeaturesGrid';
import NichesTabs from './components/sections/NichesTabs';
import AiShowcase from './components/sections/AiShowcase';
import Integrations from './components/sections/Integrations';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import CTASection from './components/sections/CTASection';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import CookieBanner from './components/ui/CookieBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-nf-bg text-nf-text relative selection:bg-nf-blue/30 selection:text-nf-cyan overflow-x-hidden">
      {/* HEADER FIXO COM BLUR */}
      <Header />

      {/* CONTEÚDO PRINCIPAL */}
      <main id="main-content">
        <Hero />
        <PartnersMarquee />
        <FeaturesGrid />
        <NichesTabs />
        <AiShowcase />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>

      {/* RODAPÉ */}
      <Footer />

      {/* ELEMENTOS FLUTUANTES & UTILITÁRIOS */}
      <WhatsAppFloat />
      <ScrollProgress />
      <CookieBanner />
    </div>
  );
}
