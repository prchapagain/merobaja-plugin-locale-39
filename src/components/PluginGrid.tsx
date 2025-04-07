
import React, { useState } from 'react';
import PluginCard, { Plugin } from './PluginCard';
import { useTranslation } from '@/utils/i18n';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample plugin data
const plugins: Plugin[] = [
  {
    id: 1,
    name: 'Sarangi Virtual',
    description: {
      en: 'Traditional Nepali sarangi instrument with modern controls and effects.',
      ne: 'आधुनिक नियन्त्रण र प्रभावहरू सहित परम्परागत नेपाली सारंगी वाद्ययन्त्र।'
    },
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Instruments',
    price: 2500,
  },
  {
    id: 2,
    name: 'NepalEcho',
    description: {
      en: 'Reverb plugin inspired by the acoustics of Himalayan valleys.',
      ne: 'हिमालयन उपत्यकाहरूको ध्वनि विज्ञानबाट प्रेरित रिभर्ब प्लगइन।'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Effects',
    price: 1200,
  },
  {
    id: 3,
    name: 'Madal Drummer',
    description: {
      en: 'Virtual madal instrument with authentic samples and rhythm patterns.',
      ne: 'प्रामाणिक नमूनाहरू र लय ढाँचाहरू सहितको भर्चुअल मादल वाद्ययन्त्र।'
    },
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Instruments',
    price: 'free',
  },
  {
    id: 4,
    name: 'NepalMeter',
    description: {
      en: 'Advanced metering plugin with traditional Nepali rhythm visualization.',
      ne: 'परम्परागत नेपाली लय दृश्यावलोकन सहित उन्नत मिटरिङ प्लगइन।'
    },
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Utilities',
    price: 800,
  },
  {
    id: 5,
    name: 'DamphuFX',
    description: {
      en: 'Percussion effect processor inspired by traditional Damphu drum sounds.',
      ne: 'परम्परागत दाम्फु ड्रम आवाजहरूबाट प्रेरित पर्कसन इफेक्ट प्रोसेसर।'
    },
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Effects',
    price: 1500,
  },
  {
    id: 6,
    name: 'BasuriTone',
    description: {
      en: 'Virtual flute instrument with authentic Nepali Basuri samples.',
      ne: 'प्रामाणिक नेपाली बासुरी नमूनाहरू सहित भर्चुअल फ्लुट वाद्ययन्त्र।'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    category: 'Instruments',
    price: 1800,
  },
];

const PluginGrid: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPlugins = activeCategory === 'all' 
    ? plugins
    : plugins.filter(plugin => plugin.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="plugins" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('plugins.title')}</h2>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full sm:w-auto sm:inline-flex grid-cols-2 sm:grid-cols-4 gap-2">
            <TabsTrigger 
              value="all" 
              onClick={() => setActiveCategory('all')}
              className="data-[state=active]:bg-nepali-red data-[state=active]:text-white"
            >
              {t('plugins.all')}
            </TabsTrigger>
            <TabsTrigger 
              value="instruments" 
              onClick={() => setActiveCategory('instruments')}
              className="data-[state=active]:bg-nepali-red data-[state=active]:text-white"
            >
              {t('plugins.instruments')}
            </TabsTrigger>
            <TabsTrigger 
              value="effects" 
              onClick={() => setActiveCategory('effects')}
              className="data-[state=active]:bg-nepali-red data-[state=active]:text-white"
            >
              {t('plugins.effects')}
            </TabsTrigger>
            <TabsTrigger 
              value="utilities" 
              onClick={() => setActiveCategory('utilities')}
              className="data-[state=active]:bg-nepali-red data-[state=active]:text-white"
            >
              {t('plugins.utilities')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlugins.map(plugin => (
                <PluginCard key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="instruments" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlugins.map(plugin => (
                <PluginCard key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="effects" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlugins.map(plugin => (
                <PluginCard key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="utilities" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlugins.map(plugin => (
                <PluginCard key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PluginGrid;
