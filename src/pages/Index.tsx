
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
      <Hero />
      <div id="plugins">
        <PluginGrid />
      </div>
      <Testimonials />
      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;
