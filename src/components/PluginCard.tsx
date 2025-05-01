
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/utils/i18n';
import { Download, ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Facebook, MessageSquare, Phone } from 'lucide-react';

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
  const { toast } = useToast();

  const handlePaymentSuccess = () => {
    toast({
      title: language === 'en' ? "Payment Successful" : "भुक्तानी सफल भयो",
      description: language === 'en' ? 
        "Payment or download को लागि WhatsApp अथवा यी माध्यम बाट हामीलाई सम्पर्क गर्नुहोस्" : 
        "भुक्तानी वा डाउनलोड को लागि WhatsApp अथवा यी माध्यम बाट हामीलाई सम्पर्क गर्नुहोस्",
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg delayed-animation animate-fade-in dark:border-gray-700">
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
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {plugin.category}
          </span>
          <span className="font-bold text-nepali-red dark:text-red-400">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-nepali-blue hover:bg-nepali-blue/90 dark:bg-blue-700 dark:hover:bg-blue-800">
                <Download className="mr-2 h-4 w-4" /> {t('plugin.download')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
              <DialogHeader>
                <DialogTitle>{language === 'en' ? "Free Download" : "नि:शुल्क डाउनलोड"}</DialogTitle>
                <DialogDescription>
                  {language === 'en' ? 
                    "Payment or download को लागि WhatsApp अथवा यी माध्यम बाट हामीलाई सम्पर्क गर्नुहोस्" : 
                    "भुक्तानी वा डाउनलोड को लागि WhatsApp अथवा यी माध्यम बाट हामीलाई सम्पर्क गर्नुहोस्"}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 flex flex-col items-center">
                <div className="flex gap-4 justify-center">
                  <a href="https://wa.me/9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors">
                    <Phone className="h-6 w-6" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://t.me/+9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition-colors">
                    <MessageSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-nepali-red hover:bg-nepali-red/90 dark:bg-red-700 dark:hover:bg-red-800">
                <ShoppingCart className="mr-2 h-4 w-4" /> {t('plugin.buy')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
              <DialogHeader>
                <DialogTitle>{t('payment.title')}</DialogTitle>
                <DialogDescription>
                  {language === 'en' ? 
                    "Payment or download को लागि WhatsApp अथवा यी माध्यम बाट हामीलाई सम्पर्क गर्नुहोस्" : 
                    "भुक्तानी वा डाउनलोड को लागि WhatsApp अथवा यी माध्यम बाट हामीलाई सम्पर्क गर्नुहोस्"}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 flex flex-col items-center">
                <div className="flex gap-4 justify-center">
                  <a href="https://wa.me/9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors">
                    <Phone className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://t.me/+9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition-colors">
                    <MessageSquare className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </CardFooter>
    </Card>
  );
};

export default PluginCard;
