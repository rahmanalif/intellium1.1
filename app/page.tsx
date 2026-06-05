"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TechStack from '@/components/TechStack';
import WhyChooseUs from '@/components/WhyChooseUs';
import GlobalInspirations from '@/components/GlobalInspirations';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black overflow-x-hidden">
      <Hero />

      <TechStack />

      <Services />

      <WhyChooseUs />

      <GlobalInspirations />
    </main>
  );
}
