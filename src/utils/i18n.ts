
import { create } from 'zustand';

type Language = 'en' | 'ne';

interface I18nStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useI18nStore = create<I18nStore>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));

export const useTranslation = () => {
  const { language } = useI18nStore();
  
  const t = (key: string): string => {
    const translations = require('./translations').default;
    return translations[language][key] || key;
  };

  return { t, language };
};
