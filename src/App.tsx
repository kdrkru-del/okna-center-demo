import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { WhatToKnow } from './components/WhatToKnow';
import { ServicesSection } from './components/ServicesSection';
import { AboutCompany } from './components/AboutCompany';
import { Calculator } from './components/Calculator';
import { DiagnosticMethodology } from './components/DiagnosticMethodology';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import type { LeadFormData, ParameterConfig } from './types';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [formInitialData, setFormInitialData] = useState<Partial<LeadFormData>>({});

  const handleSelectService = (serviceTitle: string) => {
    setFormInitialData({
      structureType: serviceTitle,
      message: `Интересует услуга: ${serviceTitle}`
    });
    const el = document.getElementById('contacts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleApplyConfig = (config: ParameterConfig) => {
    setFormInitialData({
      structureType: config.structureType,
      footage: config.footage,
      color: config.color,
      message: `Параметры из конфигуратора: ${config.structureType}, ${config.footage}, цвет ${config.color}. Формат: ${config.serviceLevel}`
    });
    const el = document.getElementById('contacts');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={() => setBookingModalOpen(true)} />
        <ProblemSolution />
        <WhatToKnow />
        <ServicesSection onSelectService={handleSelectService} />
        <AboutCompany />
        <Calculator onApplyConfig={handleApplyConfig} />
        <DiagnosticMethodology />
        <GallerySection />
        <ReviewsSection />
        <ContactSection initialData={formInitialData} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
};

export default App;
