
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Button } from '@/components/ui/button';
import { Download, Play, Users, Star, Download as DownloadIcon, Headphones } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-nepali-red text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-nepali-red/95 to-nepali-red/90 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left mb-8">
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full mb-2">#1 Nepali VST Collection</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Authentic Nepali<br />Sound Library
          </h1>
          <p className="mt-6 max-w-2xl text-lg">
            Discover premium VST plugins featuring authentic Nepali instruments, including Madal, Harmonium, Santoor, Sarangi, Bamboo Flute, and more.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-nepali-red font-semibold flex gap-2 items-center"
            >
              <Download className="h-5 w-5" /> Download Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 flex gap-2 items-center"
            >
              <Play className="h-5 w-5" /> Listen Demos
            </Button>
          </div>
          
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 w-full">
            <div className="flex flex-col items-center">
              <Users className="h-6 w-6 mb-2 opacity-80" />
              <span className="text-2xl sm:text-3xl font-bold">5K+</span>
              <span className="text-sm opacity-80">Users</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Star className="h-6 w-6 mb-2 opacity-80" />
              <span className="text-2xl sm:text-3xl font-bold">4.9/5</span>
              <span className="text-sm opacity-80">User Rating</span>
            </div>
            
            <div className="flex flex-col items-center">
              <DownloadIcon className="h-6 w-6 mb-2 opacity-80" />
              <span className="text-2xl sm:text-3xl font-bold">10K+</span>
              <span className="text-sm opacity-80">Downloads</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Headphones className="h-6 w-6 mb-2 opacity-80" />
              <span className="text-2xl sm:text-3xl font-bold">24/7</span>
              <span className="text-sm opacity-80">Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
