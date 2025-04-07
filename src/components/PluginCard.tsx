
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/utils/i18n';
import { Download, ShoppingCart } from 'lucide-react';

export interface Plugin {
  id: number;
  name: string;
  description: {
    en: string;
    ne: string;
  };
  image: string;
  category: string;
  price: number | 'free';
}

interface PluginCardProps {
  plugin: Plugin;
}

const PluginCard: React.FC<PluginCardProps> = ({ plugin }) => {
  const { t, language } = useTranslation();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg delayed-animation">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={plugin.image} 
          alt={plugin.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{plugin.name}</CardTitle>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {plugin.category}
          </span>
          <span className="font-bold text-nepali-red">
            {plugin.price === 'free' ? t('plugin.free') : `Rs. ${plugin.price}`}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm line-clamp-2">
          {language === 'en' ? plugin.description.en : plugin.description.ne}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        {plugin.price === 'free' ? (
          <Button className="w-full bg-nepali-blue hover:bg-nepali-blue/90">
            <Download className="mr-2 h-4 w-4" /> {t('plugin.download')}
          </Button>
        ) : (
          <Button className="w-full bg-nepali-red hover:bg-nepali-red/90">
            <ShoppingCart className="mr-2 h-4 w-4" /> {t('plugin.buy')}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default PluginCard;
