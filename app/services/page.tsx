import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import CollaborationModels from '@/components/CollaborationModels';
import TopServices from '@/components/TopServices';
import EnterpriseFocused from '@/components/EnterpriseFocused';

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-black overflow-x-hidden">
      <div className="pt-20"> {/* Adjust padding for navbar height */}
        <Services variant="home" />
        <Services variant="dedicated" />
        <CollaborationModels />
        <TopServices />
        <EnterpriseFocused />
      </div>
      <Footer />
    </main>
  );
}
