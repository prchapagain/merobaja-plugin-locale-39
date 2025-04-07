
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PluginGrid from '@/components/PluginGrid';
import PaymentMethods from '@/components/PaymentMethods';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <div id="plugins" className="scroll-mt-16">
          <PluginGrid />
        </div>
        <Testimonials />
        <PaymentMethods />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
