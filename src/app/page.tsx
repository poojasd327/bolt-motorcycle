'use client';

import React from 'react';
import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import MotorcycleShowcase from '@/components/MotorcycleShowcase';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import EmiCalculator from '@/components/EmiCalculator';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#0F172A' }}>
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Standalone Animated Stats Section */}
      <StatsSection />

      {/* Motorcycle Showcase Fleet */}
      <MotorcycleShowcase />

      {/* About Bolt Motorcycles */}
      <AboutSection />

      {/* Services & Workshop */}
      <ServicesSection />

      {/* Interactive EMI Calculator */}
      <EmiCalculator />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Contact & Dealership Info */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </Box>
  );
}
