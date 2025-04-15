
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/utils/i18n';
import { Star, Music, Download, Box } from 'lucide-react';

const FeaturedProduct: React.FC = () => {
  const { language } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-amber-100 text-amber-600 px-4 py-2 rounded-full mb-4 dark:bg-amber-900/30 dark:text-amber-300">
            <Star className="h-5 w-5" />
            <span className="font-medium">
              {language === 'en' ? 'Featured VST Plugin' : 'विशेष VST प्लगइन'}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {language === 'en' ? 'Nepali Madal Pro' : 'नेपाली मादल प्रो'}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            {language === 'en' 
              ? 'Our flagship Nepali percussion instrument with advanced rhythm patterns and authentic sound samples.'
              : 'उन्नत लय प्याटर्न र प्रामाणिक ध्वनि नमूनाहरू सहितको हाम्रो प्रमुख नेपाली ताल वाद्ययन्त्र।'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md hover-lift">
              <div className="absolute inset-0 bg-gradient-to-r from-nepali-red/20 to-nepali-gold/20 rounded-3xl transform rotate-2"></div>
              <img 
                src="https://placehold.co/600x400/e21627/ffffff?text=Nepali+Madal+Pro" 
                alt="Nepali Madal Pro VST"
                className="relative z-10 rounded-2xl shadow-xl w-full object-cover glass-card"
              />
              <div className="absolute -bottom-4 -right-4 bg-nepali-gold text-white px-4 py-2 rounded-full shadow-lg font-bold z-20">
                $49.99
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl shadow-sm dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <Music className="h-6 w-6 text-nepali-red mb-2" />
                <h3 className="font-semibold text-lg">{language === 'en' ? 'Authentic Samples' : 'प्रामाणिक नमुनाहरू'}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === 'en' ? '100+ high-quality samples' : '१०० भन्दा बढी उच्च गुणस्तरका नमुनाहरू'}
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-xl shadow-sm dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <Box className="h-6 w-6 text-nepali-red mb-2" />
                <h3 className="font-semibold text-lg">{language === 'en' ? 'Pattern Engine' : 'प्याटर्न इन्जिन'}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === 'en' ? '45 traditional rhythm patterns' : '४५ पारम्परिक लय प्याटर्नहरू'}
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-xl shadow-sm dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <Download className="h-6 w-6 text-nepali-red mb-2" />
                <h3 className="font-semibold text-lg">{language === 'en' ? 'Instant Download' : 'तुरुन्त डाउनलोड'}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === 'en' ? 'Get started immediately' : 'तुरुन्तै सुरु गर्नुहोस्'}
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-xl shadow-sm dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <Star className="h-6 w-6 text-nepali-red mb-2" />
                <h3 className="font-semibold text-lg">{language === 'en' ? 'Five-Star Rated' : 'पाँच-तारे मूल्याङ्कन'}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {language === 'en' ? 'Top-rated by musicians' : 'संगीतकारहरूद्वारा उत्कृष्ट मूल्यांकित'}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" className="bg-nepali-red hover:bg-red-700 text-white">
                {language === 'en' ? 'Buy Now' : 'अहिले किन्नुहोस्'}
              </Button>
              <Button size="lg" variant="outline" className="border-nepali-red text-nepali-red hover:bg-red-50 dark:hover:bg-red-950">
                {language === 'en' ? 'Try Demo Version' : 'डेमो संस्करण प्रयास गर्नुहोस्'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
