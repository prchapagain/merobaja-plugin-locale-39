
import { create } from 'zustand';
import translations from './translations';

type Language = 'en' | 'ne';

interface I18nStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useI18nStore = create<I18nStore>((set) => ({
  language: localStorage.getItem('language') as Language || 'en',
  setLanguage: (language) => {
    localStorage.setItem('language', language);
    set({ language });
  },
}));

export const useTranslation = () => {
  const { language } = useI18nStore();
  
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return { t, language };
};
