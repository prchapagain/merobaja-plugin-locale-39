
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-r from-nepali-blue/90 to-nepali-red/90 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
          {t('hero.title')}
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl md:text-2xl animate-slide-up">
          {t('hero.subtitle')}
        </p>
        <div className="mt-10">
          <Button 
            size="lg" 
            className="bg-nepali-gold hover:bg-nepali-gold/90 text-black font-semibold animate-slide-up"
            onClick={() => document.getElementById('plugins')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
