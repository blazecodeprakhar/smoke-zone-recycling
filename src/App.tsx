import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { FiltrationSystem } from './components/FiltrationSystem';
import { BuddyBinProcess } from './components/BuddyBinProcess';
import { CabinVariants } from './components/CabinVariants';
import { Gallery } from './components/Gallery';
import { ClientsInstallations } from './components/ClientsInstallations';
import { Specifications } from './components/Specifications';
import { ContactCTA, InquiryModal } from './components/ContactCTA';
import { Footer } from './components/Footer';

export function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen bg-smoke-950 text-smoke-100 flex flex-col font-sans">
      <Header onOpenInquiry={() => setInquiryOpen(true)} />
      
      <main className="flex-1">
        <Hero onOpenInquiry={() => setInquiryOpen(true)} />
        <Overview />
        <FiltrationSystem />
        <BuddyBinProcess />
        <CabinVariants onOpenInquiry={() => setInquiryOpen(true)} />
        <Gallery />
        <ClientsInstallations />
        <Specifications />
        <ContactCTA onOpenInquiry={() => setInquiryOpen(true)} />
      </main>

      <Footer />

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
      />
    </div>
  );
}

export default App;
