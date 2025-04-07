
import React from 'react';
import { useI18nStore } from '@/utils/i18n';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18nStore();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ne' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 border-nepali-gold hover:bg-nepali-gold/10"
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'नेपाली' : 'English'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
