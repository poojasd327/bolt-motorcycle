'use client';

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MotorcycleShowcase from '@/components/MotorcycleShowcase';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import EmiCalculator from '@/components/EmiCalculator';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import TestRideModal from '@/components/TestRideModal';
import FloatingActions from '@/components/FloatingActions';

export default function Home() {
  const [testRideModalOpen, setTestRideModalOpen] = useState(false);
  const [selectedModelForModal, setSelectedModelForModal] = useState('');
  const [modalTab, setModalTab] = useState<'test-ride' | 'quote' | 'service'>('test-ride');

  const handleOpenTestRide = (modelName?: string) => {
    if (modelName) setSelectedModelForModal(modelName);
    setModalTab('test-ride');
    setTestRideModalOpen(true);
  };

  const handleOpenQuote = (modelName?: string) => {
    if (modelName) setSelectedModelForModal(modelName);
    setModalTab('quote');
    setTestRideModalOpen(true);
  };

  const handleOpenService = () => {
    setModalTab('service');
    setTestRideModalOpen(true);
  };

  return (
    <Box component="main" sx={{ minHeight: '100vh', backgroundColor: '#0A0B0E', color: '#F0F2F5' }}>
      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenTestRide={handleOpenTestRide} />

      {/* Hero Section */}
      <HeroSection onOpenTestRide={handleOpenTestRide} />

      {/* Motorcycle Showcase Fleet */}
      <MotorcycleShowcase onOpenTestRide={handleOpenTestRide} onOpenQuote={handleOpenQuote} />

      {/* About Bolt Motorcycles */}
      <AboutSection />

      {/* Services & Workshop */}
      <ServicesSection onOpenServiceAppointment={handleOpenService} onOpenTestRide={handleOpenTestRide} />

      {/* Interactive EMI Calculator */}
      <EmiCalculator onApplyFinance={(model) => handleOpenQuote(model)} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact & Dealership Info */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Test Ride & Quote Modal */}
      <TestRideModal
        open={testRideModalOpen}
        onClose={() => setTestRideModalOpen(false)}
        initialModel={selectedModelForModal}
        initialTab={modalTab}
      />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenTestRide={() => handleOpenTestRide()} />
    </Box>
  );
}
