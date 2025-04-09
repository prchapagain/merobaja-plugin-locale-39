
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Youtube } from 'lucide-react';

const YoutubeSection: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="youtube" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full mb-4 dark:bg-red-900/30 dark:text-red-300">
            <Youtube className="h-5 w-5" />
            <span className="font-medium">{language === 'en' ? 'Video Tutorials' : 'भिडियो ट्युटोरियलहरू'}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{language === 'en' ? 'Watch Our Tutorials' : 'हाम्रो ट्युटोरियलहरू हेर्नुहोस्'}</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            {language === 'en' 
              ? 'Learn how to use our VST plugins with step-by-step video tutorials from our experts.'
              : 'हाम्रा विशेषज्ञहरूबाट चरण-चरण भिडियो ट्युटोरियलहरूको साथ हाम्रो VST प्लगइनहरू प्रयोग गर्न सिक्नुहोस्।'}
          </p>
        </div>
        
        <div className="aspect-w-16 aspect-h-9 shadow-2xl rounded-2xl overflow-hidden">
          <iframe 
            className="w-full h-[500px] rounded-xl border border-gray-200 dark:border-gray-700"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">{language === 'en' ? 'Getting Started' : 'सुरु गर्दै'}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'en' 
                ? 'Learn the basics of installing and setting up our VST plugins.' 
                : 'हाम्रो VST प्लगइनहरू स्थापना र सेटअप गर्ने आधारभूत कुराहरू सिक्नुहोस्।'}
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">{language === 'en' ? 'Advanced Techniques' : 'उन्नत प्रविधिहरू'}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'en' 
                ? 'Master advanced techniques to get the most out of our instruments.' 
                : 'हाम्रा वाद्ययन्त्रहरूबाट अधिकतम प्राप्त गर्न उन्नत प्रविधिहरू सिक्नुहोस्।'}
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-xl shadow-sm dark:bg-gray-800 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-3">{language === 'en' ? 'Music Production' : 'संगीत उत्पादन'}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {language === 'en' 
                ? 'Create beautiful compositions using our authentic Nepali instruments.' 
                : 'हाम्रा प्रामाणिक नेपाली वाद्ययन्त्रहरू प्रयोग गरेर सुन्दर रचनाहरू सिर्जना गर्नुहोस्।'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;
