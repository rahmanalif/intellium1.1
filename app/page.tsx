"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import AboutUs from '@/components/AboutUs';
import ImpactScale from '@/components/ImpactScale';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
import Stack from '@/components/Stack';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import GlobalInspirations from '@/components/GlobalInspirations';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black overflow-x-hidden">
      <Hero />

      <Services variant="home" />

      <WhyChooseUs />

      <GlobalInspirations />

      <Process />

      <AboutUs />

      <ImpactScale />

      <Stack />

      <Testimonial />

      <Contact />

      <Footer />
    </main>
  );
}
