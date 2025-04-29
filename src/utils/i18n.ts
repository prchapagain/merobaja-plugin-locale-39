
import { create } from 'zustand';

// Define the structure of the translations
type Translations = {
  [key: string]: {
    en: string;
    ne: string;
  };
};

// Define the translations
const translations: Translations = {
  'nav.home': {
    en: 'Home',
    ne: 'गृहपृष्ठ',
  },
  'nav.featured': {
    en: 'Featured',
    ne: 'विशेष',
  },
  'nav.plugins': {
    en: 'Plugins',
    ne: 'प्लगइनहरू',
  },
  'testimonials.title': {
    en: 'What Musicians Say',
    ne: 'संगीतकारहरू के भन्छन्',
  },
  'nav.youtube': {
    en: 'YouTube',
    ne: 'युट्युब',
  },
  'payment.title': {
    en: 'Payment Methods',
    ne: 'भुक्तानी विधिहरू',
  },
  'nav.blog': {
    en: 'Blog',
    ne: 'ब्लग',
  },
  'nav.about': {
    en: 'About',
    ne: 'हाम्रो बारेमा',
  },
  'hero.download': {
    en: 'Download Now',
    ne: 'अहिले डाउनलोड गर्नुहोस्',
  },
  'hero.tryDemo': {
    en: 'Try Demo',
    ne: 'डेमो प्रयास गर्नुहोस्',
  },
  'hero.stats.users': {
    en: 'Happy Users',
    ne: 'खुशी प्रयोगकर्ताहरू',
  },
  'hero.stats.rating': {
    en: 'Average Rating',
    ne: 'औसत रेटिङ',
  },
  'hero.stats.downloads': {
    en: 'Total Downloads',
    ne: 'कूल डाउनलोडहरू',
  },
  'hero.stats.support': {
    en: 'Customer Support',
    ne: 'ग्राहक सहायता',
  },
  'theme.light': {
    en: 'Light Mode',
    ne: 'उज्यालो मोड',
  },
  'theme.dark': {
    en: 'Dark Mode',
    ne: 'अँध्यारो मोड',
  },
  'contact.whatsapp': {
    en: 'WhatsApp',
    ne: 'वाट्सएप',
  },
  'contact.facebook': {
    en: 'Facebook',
    ne: 'फेसबुक',
  },
  'contact.telegram': {
    en: 'Telegram',
    ne: 'टेलिग्राम',
  },
  'contact.youtube': {
    en: 'YouTube',
    ne: 'युट्युब',
  },
  'contact.us': {
    en: 'Contact Us',
    ne: 'हामीलाई सम्पर्क गर्नुहोस्',
  },
  'pricing.title': {
    en: 'Pricing',
    ne: 'मूल्य निर्धारण',
  },
  'pricing.subtitle': {
    en: 'Choose the perfect plan for your production needs',
    ne: 'तपाईंको उत्पादन आवश्यकताहरूको लागि उपयुक्त योजना छनौट गर्नुहोस्',
  },
  'pricing.flexible': {
    en: 'Flexible payment options with local and international methods',
    ne: 'स्थानीय र अन्तर्राष्ट्रिय विधिहरू सहित लचिलो भुक्तानी विकल्पहरू',
  },
  'pricing.starter.title': {
    en: 'Starter',
    ne: 'सुरुवाती',
  },
  'pricing.starter.price': {
    en: 'Rs. 1,200',
    ne: 'रू. १,२००',
  },
  'pricing.starter.period': {
    en: 'one-time',
    ne: 'एकपटक',
  },
  'pricing.popular': {
    en: 'Most Popular',
    ne: 'सबैभन्दा लोकप्रिय',
  },
  'pricing.pro.title': {
    en: 'Professional',
    ne: 'प्रोफेसनल',
  },
  'pricing.pro.price': {
    en: 'Rs. 3,500',
    ne: 'रू. ३,५००',
  },
  'pricing.pro.period': {
    en: 'one-time',
    ne: 'एकपटक',
  },
  'pricing.premium.title': {
    en: 'Premium',
    ne: 'प्रिमियम',
  },
  'pricing.premium.price': {
    en: 'Rs. 7,500',
    ne: 'रू. ७,५००',
  },
  'pricing.premium.period': {
    en: 'one-time',
    ne: 'एकपटक',
  },
  'features.singleInstrument': {
    en: 'Single Instrument (Madal)',
    ne: 'एकल वाद्ययन्त्र (मादल)',
  },
  'features.basicArticulations': {
    en: 'Basic Articulations',
    ne: 'आधारभूत आवाजहरू',
  },
  'features.standardSupport': {
    en: 'Standard Support',
    ne: 'मानक समर्थन',
  },
  'features.freeUpdates': {
    en: 'Free Updates for 1 Year',
    ne: '१ वर्षको लागि नि:शुल्क अपडेटहरू',
  },
  'features.fiveInstruments': {
    en: '5 Instruments Pack',
    ne: '५ वाद्ययन्त्र प्याक',
  },
  'features.fullArticulations': {
    en: 'Full Articulations',
    ne: 'सम्पूर्ण आवाजहरू',
  },
  'features.prioritySupport': {
    en: 'Priority Support',
    ne: 'प्राथमिकता समर्थन',
  },
  'features.additionalPresets': {
    en: '25+ Additional Presets',
    ne: '२५+ थप प्रिसेटहरू',
  },
  'features.completeCollection': {
    en: 'Complete Instrument Collection',
    ne: 'सम्पूर्ण वाद्ययन्त्र संग्रह',
  },
  'features.extendedArticulations': {
    en: 'Extended Articulations',
    ne: 'विस्तारित आवाजहरू',
  },
  'features.24Support': {
    en: '24/7 Support',
    ne: '२४/७ समर्थन',
  },
  'features.lifetimeUpdates': {
    en: 'Lifetime Updates',
    ne: 'जीवनभर अपडेटहरू',
  },
  'features.customPresets': {
    en: 'Custom Presets Creation',
    ne: 'कस्टम प्रिसेट सिर्जना',
  },
  'pricing.readyText': {
    en: 'Ready to Elevate Your Music Production?',
    ne: 'तपाईंको संगीत उत्पादनलाई उचाल्न तयार हुनुहुन्छ?',
  },
  'pricing.readySubtext': {
    en: 'Get started with our authentic Nepali VST collection today',
    ne: 'हाम्रो प्रामाणिक नेपाली VST संग्रहसँग आज सुरु गर्नुहोस्',
  },
  'plugin.buy': {
    en: 'Buy Now',
    ne: 'अहिले किन्नुहोस्',
  },
  'plugin.download': {
    en: 'Download',
    ne: 'डाउनलोड',
  },
  'plugin.free': {
    en: 'Free',
    ne: 'नि:शुल्क',
  },
  'plugins.title': {
    en: 'Our VST Plugin Collection',
    ne: 'हाम्रो VST प्लगइन संग्रह',
  },
  'plugins.all': {
    en: 'All',
    ne: 'सबै',
  },
  'plugins.instruments': {
    en: 'Instruments',
    ne: 'वाद्ययन्त्रहरू',
  },
  'plugins.effects': {
    en: 'Effects',
    ne: 'इफेक्टहरू',
  },
  'plugins.utilities': {
    en: 'Utilities',
    ne: 'उपयोगिताहरू',
  },
  'payment.esewa': {
    en: 'eSewa',
    ne: 'ईसेवा',
  },
  'payment.phonepay': {
    en: 'PhonePay',
    ne: 'फोनपे',
  },
  'payment.khalti': {
    en: 'Khalti',
    ne: 'खल्ती',
  },
  'payment.bank': {
    en: 'Bank Transfer',
    ne: 'बैंक ट्रान्सफर',
  },
  'payment.imepay': {
    en: 'IME Pay',
    ne: 'आईएमई पे',
  },
  'payment.paypal': {
    en: 'PayPal',
    ne: 'पेपाल',
  },
  'payment.choose': {
    en: 'Choose your preferred payment method',
    ne: 'आफ्नो मनपर्ने भुक्तानी विधि चयन गर्नुहोस्',
  },
  'payment.contactAfter': {
    en: 'After payment, contact us to receive your download link',
    ne: 'भुक्तानी पछि, आफ्नो डाउनलोड लिंक प्राप्त गर्न हामीलाई सम्पर्क गर्नुहोस्',
  },
  'payment.scan': {
    en: 'Scan the QR code to pay',
    ne: 'भुक्तानी गर्न QR कोड स्क्यान गर्नुहोस्',
  },
  'footer.blog': {
    en: 'MeroTips Blog',
    ne: 'मेरोटिप्स ब्लग',
  },
  'footer.rights': {
    en: 'All rights reserved.',
    ne: 'सर्वाधिकार सुरक्षित।',
  },
  'footer.terms': {
    en: 'Terms of Service',
    ne: 'सेवाका सर्तहरू',
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    ne: 'गोपनीयता नीति',
  },
  'about.title': {
    en: 'About Us',
    ne: 'हाम्रो बारेमा',
  },
  'about.subtitle': {
    en: 'Passionate about bringing authentic Nepali sounds to the world',
    ne: 'प्रामाणिक नेपाली आवाजहरू संसारभर ल्याउन प्रतिबद्ध',
  },
  'about.mission.title': {
    en: 'Our Mission',
    ne: 'हाम्रो लक्ष्य',
  },
  'about.mission.description': {
    en: 'We are dedicated to preserving and promoting Nepali musical heritage through modern technology. Our VST plugin collection aims to make authentic Nepali instruments accessible to musicians and producers worldwide.',
    ne: 'हामी आधुनिक प्रविधि मार्फत नेपाली संगीतको सम्पदा संरक्षण र प्रवर्द्धन गर्न प्रतिबद्ध छौं। हाम्रो VST प्लगइन संग्रहले विश्वभरका संगीतकार र निर्माताहरूका लागि प्रामाणिक नेपाली वाद्ययन्त्रहरू पहुँचयोग्य बनाउने लक्ष्य राख्दछ।',
  },
  'about.story.title': {
    en: 'Our Story',
    ne: 'हाम्रो कथा',
  },
  'about.story.description': {
    en: 'Founded in 2019 by a group of Nepali musicians and software developers, MeroBaja began with a simple idea: to digitize traditional Nepali instruments for the modern music producer.',
    ne: '२०१९ मा नेपाली संगीतकार र सफ्टवेयर डेभलपरहरूको समूहद्वारा स्थापित, मेरोबाजा एउटा सरल विचारबाट सुरु भयो: आधुनिक संगीत निर्माताको लागि परम्परागत नेपाली वाद्ययन्त्रहरूलाई डिजिटलाइज गर्न।',
  },
  'testimonials.subtitle': {
    en: 'What our customers are saying about our VST plugins',
    ne: 'हाम्रा ग्राहकहरूले हाम्रो VST प्लगइनहरूको बारेमा के भनिरहेका छन्',
  },
  'blog.title': {
    en: 'Blog',
    ne: 'ब्लग',
  },
  'blog.description': {
    en: 'Latest updates, tutorials, and insights about Nepali VST plugins and music production',
    ne: 'नेपाली VST प्लगइनहरू र संगीत उत्पादनको बारेमा नवीनतम अपडेटहरू, ट्युटोरियलहरू, र अन्तर्दृष्टिहरू',
  }
};

// Define the i18n store
interface I18nStore {
  language: 'en' | 'ne';
  setLanguage: (language: 'en' | 'ne') => void;
}

// Create the store
export const useI18nStore = create<I18nStore>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));

// Create a translation hook
export const useTranslation = () => {
  const { language, setLanguage } = useI18nStore();

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key; // Return the key itself if no translation found
  };

  return { t, language, setLanguage };
};

