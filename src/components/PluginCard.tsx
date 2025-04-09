
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/utils/i18n';
import { Download, ShoppingCart } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Facebook, MessageSquare, Phone, CreditCard, BanknoteIcon } from 'lucide-react';

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
        "Please contact us on WhatsApp for download instructions." : 
        "डाउनलोड निर्देशनहरूको लागि कृपया हामीलाई व्हाट्सएपमा सम्पर्क गर्नुहोस्।",
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
                    "Contact us on WhatsApp to receive your free download" : 
                    "नि:शुल्क डाउनलोड प्राप्त गर्न हामीलाई व्हाट्सएपमा सम्पर्क गर्नुहोस्"}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 flex flex-col items-center">
                <p className="mb-4 text-center">
                  {language === 'en' ? 
                    "Thank you for choosing our free plugin! Contact us to receive your download link." : 
                    "हाम्रो नि:शुल्क प्लगइन चयन गर्नुभएकोमा धन्यवाद! डाउनलोड लिंक प्राप्त गर्न हामीलाई सम्पर्क गर्नुहोस्।"}
                </p>
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
                  {t('payment.choose')}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                {/* eSewa Payment Option */}
                <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-3 border rounded-lg hover:bg-[#60BB46]/10 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-[#60BB46]/5">
                  <div className="w-16 h-16 border-2 border-[#60BB46] p-2 rounded-lg mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="eSewa QR Code" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[#60BB46] text-xs">{t('payment.esewa')}</p>
                </div>
                
                {/* PhonePay QR */}
                <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-3 border rounded-lg hover:bg-[#5F259F]/10 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-[#5F259F]/5">
                  <div className="w-16 h-16 border-2 border-[#5F259F] p-2 rounded-lg mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="PhonePay QR Code" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[#5F259F] text-xs">{t('payment.phonepay')}</p>
                </div>
                
                {/* Khalti */}
                <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-3 border rounded-lg hover:bg-[#5C2D91]/10 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-[#5C2D91]/5">
                  <div className="w-16 h-16 border-2 border-[#5C2D91] p-2 rounded-lg mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Khalti QR Code" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[#5C2D91] text-xs">{t('payment.khalti')}</p>
                </div>

                {/* Bank Transfer */}
                <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-3 border rounded-lg hover:bg-blue-100/50 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-blue-900/20">
                  <div className="w-16 h-16 border-2 border-blue-500 p-2 rounded-lg mb-2 flex items-center justify-center">
                    <CreditCard className="h-8 w-8 text-blue-500" />
                  </div>
                  <p className="font-bold text-blue-500 text-xs">{t('payment.bank')}</p>
                </div>

                {/* IME Pay */}
                <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-3 border rounded-lg hover:bg-[#E11B22]/10 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-[#E11B22]/5">
                  <div className="w-16 h-16 border-2 border-[#E11B22] p-2 rounded-lg mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="IME Pay QR Code" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-[#E11B22] text-xs">{t('payment.imepay')}</p>
                </div>

                {/* PayPal */}
                <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-3 border rounded-lg hover:bg-[#003087]/10 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-[#003087]/5">
                  <div className="w-16 h-16 border-2 border-[#003087] p-2 rounded-lg mb-2 flex items-center justify-center">
                    <BanknoteIcon className="h-8 w-8 text-[#003087]" />
                  </div>
                  <p className="font-bold text-[#003087] text-xs">{t('payment.paypal')}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center">
                <p className="text-sm text-center mb-3">
                  {language === 'en' ? 
                    "After payment, contact us for download instructions" : 
                    "भुक्तानी पछि, डाउनलोड निर्देशनहरूको लागि हामीलाई सम्पर्क गर्नुहोस्"}
                </p>
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
