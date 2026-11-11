import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import PartnersMarquee from './components/sections/PartnersMarquee';
import FeaturesGrid from './components/sections/FeaturesGrid';
import CrmShowcase from './components/sections/CrmShowcase';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import CTASection from './components/sections/CTASection';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import ScrollProgress from './components/layout/ScrollProgress';
import CookieBanner from './components/ui/CookieBanner';

function App() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-white text-[#858585] selection:bg-[#7444FD] selection:text-white overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <Hero />
        <PartnersMarquee />
        <FeaturesGrid />
        <CrmShowcase />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CookieBanner />
    </div>
  );
}

export default App;
