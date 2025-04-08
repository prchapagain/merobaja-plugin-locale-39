
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/utils/i18n';
import { Download, ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Telegram, Phone } from 'lucide-react';

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
      title: "Payment Successful",
      description: "Please contact us on WhatsApp for download instructions.",
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg delayed-animation animate-fade-in">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-nepali-blue hover:bg-nepali-blue/90">
                <Download className="mr-2 h-4 w-4" /> {t('plugin.download')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Free Download</DialogTitle>
                <DialogDescription>
                  Contact us on WhatsApp to receive your free download
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 flex flex-col items-center">
                <p className="mb-4 text-center">Thank you for choosing our free plugin! Contact us on WhatsApp to receive your download link.</p>
                <div className="flex gap-4 justify-center">
                  <a href="https://wa.me/9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors">
                    <Phone className="h-6 w-6" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="https://t.me/+9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition-colors">
                    <Telegram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-nepali-red hover:bg-nepali-red/90">
                <ShoppingCart className="mr-2 h-4 w-4" /> {t('plugin.buy')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{t('payment.title')}</DialogTitle>
                <DialogDescription>
                  {t('payment.choose')}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                {/* eSewa Payment Option */}
                <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-4 border rounded-lg hover:bg-[#60BB46]/10 cursor-pointer transition-colors">
                  <div className="w-20 h-20 border-2 border-[#60BB46] p-2 rounded-lg mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="eSewa QR Code" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[#60BB46]">{t('payment.esewa')}</p>
                  <p className="text-xs text-center mt-1">{t('payment.scan')}</p>
                </div>
                
                {/* PhonePay QR */}
                <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-4 border rounded-lg hover:bg-[#5F259F]/10 cursor-pointer transition-colors">
                  <div className="w-20 h-20 border-2 border-[#5F259F] p-2 rounded-lg mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="PhonePay QR Code" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[#5F259F]">{t('payment.phonepay')}</p>
                  <p className="text-xs text-center mt-1">{t('payment.scan')}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <p className="text-sm text-center mb-3">After payment, contact us for download instructions</p>
                <div className="flex gap-4 justify-center">
                  <a href="https://wa.me/9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors">
                    <Phone className="h-5 w-5" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://t.me/+9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition-colors">
                    <Telegram className="h-5 w-5" />
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
