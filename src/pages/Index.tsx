
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PluginGrid from '@/components/PluginGrid';
import PaymentMethods from '@/components/PaymentMethods';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';
import YoutubeSection from '@/components/YoutubeSection';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();
  
  // Handle hash navigation and scroll
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="plugins" className="scroll-mt-20">
          <PluginGrid />
        </div>
        <div id="testimonials" className="scroll-mt-20">
          <Testimonials />
        </div>
        <YoutubeSection />
        <div id="payment" className="scroll-mt-20">
          <PaymentMethods />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
