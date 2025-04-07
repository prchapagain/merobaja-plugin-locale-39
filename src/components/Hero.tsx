
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-r from-nepali-blue/90 to-nepali-red/90 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl md:text-2xl animate-slide-up">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10 flex gap-4">
          <Button 
            size="lg" 
            className="bg-nepali-gold hover:bg-nepali-gold/90 text-black font-semibold animate-slide-up"
            onClick={() => document.getElementById('plugins')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta')}
          </Button>
        </div>
        
        <div className="absolute bottom-8 animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
