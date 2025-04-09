
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Download, ArrowRight, CreditCard, BanknoteIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Facebook, MessageSquare, Phone, Youtube } from 'lucide-react';

const PaymentMethods: React.FC = () => {
  const { t, language } = useTranslation();
  const { toast } = useToast();

  const handlePaymentSuccess = () => {
    toast({
      title: language === 'en' ? "Thank you for choosing our VST plugin!" : "हाम्रो VST प्लगइन छनौट गर्नुभएकोमा धन्यवाद!",
      description: language === 'en' ? 
        "Contact us to receive your download link. Notice: Please send payment slip to our WhatsApp number." : 
        "डाउनलोड लिंक प्राप्त गर्न हामीलाई सम्पर्क गर्नुहोस्। सूचना: कृपया भुक्तानी स्लिप हाम्रो व्हाट्सएप नम्बरमा पठाउनुहोस्।",
      variant: "default", // Changed from "success" to "default"
    });
  };

  const PaymentDialog = ({ children }: { children: React.ReactNode }) => (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle>{language === 'en' ? "Complete Your Purchase" : "आफ्नो खरिद पूरा गर्नुहोस्"}</DialogTitle>
          <DialogDescription>
            {language === 'en' ? 
              "Choose your preferred payment method" : 
              "आफ्नो मनपर्ने भुक्तानी विधि चयन गर्नुहोस्"}
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
          <p className="text-sm text-center mb-3">{t('payment.contactAfter')}</p>
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
  );

  return (
    <section id="pricing" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('pricing.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('pricing.subtitle')}</p>
          <p className="text-muted-foreground">{t('pricing.flexible')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in dark:border-gray-700" style={{ animationDelay: '200ms' }}>
            <CardHeader className="bg-background">
              <CardTitle className="text-xl font-bold">{t('pricing.starter.title')}</CardTitle>
              <CardDescription className="text-2xl font-bold mt-2">{t('pricing.starter.price')}<span className="text-sm font-normal">/{t('pricing.starter.period')}</span></CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.singleInstrument')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.basicArticulations')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.standardSupport')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.freeUpdates')}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <PaymentDialog>
                <Button className="w-full bg-nepali-red hover:bg-nepali-red/90 dark:bg-red-700 dark:hover:bg-red-800">{t('plugin.buy')}</Button>
              </PaymentDialog>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg relative border-nepali-red animate-fade-in dark:border-red-700" style={{ animationDelay: '400ms' }}>
            <div className="absolute top-0 right-0 left-0 bg-nepali-red text-white text-center text-sm py-1 dark:bg-red-700">
              {t('pricing.popular')}
            </div>
            <CardHeader className="bg-background pt-8">
              <CardTitle className="text-xl font-bold">{t('pricing.pro.title')}</CardTitle>
              <CardDescription className="text-2xl font-bold mt-2">{t('pricing.pro.price')}<span className="text-sm font-normal">/{t('pricing.pro.period')}</span></CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.fiveInstruments')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.fullArticulations')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.prioritySupport')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.freeUpdates')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.additionalPresets')}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <PaymentDialog>
                <Button className="w-full bg-nepali-red hover:bg-nepali-red/90 dark:bg-red-700 dark:hover:bg-red-800">{t('plugin.buy')}</Button>
              </PaymentDialog>
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in dark:border-gray-700" style={{ animationDelay: '600ms' }}>
            <CardHeader className="bg-background">
              <CardTitle className="text-xl font-bold">{t('pricing.premium.title')}</CardTitle>
              <CardDescription className="text-2xl font-bold mt-2">{t('pricing.premium.price')}<span className="text-sm font-normal">/{t('pricing.premium.period')}</span></CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.completeCollection')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.extendedArticulations')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.24Support')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.lifetimeUpdates')}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2 dark:text-red-400" />
                  <span>{t('features.customPresets')}</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <PaymentDialog>
                <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">{t('contact.us')}</Button>
              </PaymentDialog>
            </CardFooter>
          </Card>
        </div>
        
        <div className="bg-nepali-red text-white p-8 rounded-lg text-center mt-10 animate-fade-in dark:bg-gray-800" style={{ animationDelay: '800ms' }}>
          <h2 className="text-3xl font-bold mb-4">{t('pricing.readyText')}</h2>
          <p className="mb-8">{t('pricing.readySubtext')}</p>
          
          <div className="flex justify-center gap-6 w-full mb-8">
            <a href="https://wa.me/9779846920259" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex flex-col items-center">
              <Phone className="h-6 w-6 mb-1" />
              <span className="text-xs">{t('contact.whatsapp')}</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex flex-col items-center">
              <Facebook className="h-6 w-6 mb-1" />
              <span className="text-xs">{t('contact.facebook')}</span>
            </a>
            <a href="https://t.me/+9779846920259" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex flex-col items-center">
              <MessageSquare className="h-6 w-6 mb-1" />
              <span className="text-xs">{t('contact.telegram')}</span>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-nepali-red hover:bg-gray-100 dark:bg-gray-200 dark:hover:bg-gray-300">
                  <Download className="mr-2 h-5 w-5" /> {t('hero.download')}
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

                  <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-3 border rounded-lg hover:bg-blue-100/50 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-blue-900/20">
                    <div className="w-16 h-16 border-2 border-blue-500 p-2 rounded-lg mb-2 flex items-center justify-center">
                      <CreditCard className="h-8 w-8 text-blue-500" />
                    </div>
                    <p className="font-bold text-blue-500 text-xs">{t('payment.bank')}</p>
                  </div>

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

                  <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-3 border rounded-lg hover:bg-[#003087]/10 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-[#003087]/5">
                    <div className="w-16 h-16 border-2 border-[#003087] p-2 rounded-lg mb-2 flex items-center justify-center">
                      <BanknoteIcon className="h-8 w-8 text-[#003087]" />
                    </div>
                    <p className="font-bold text-[#003087] text-xs">{t('payment.paypal')}</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <p className="text-sm text-center mb-3">{t('payment.contactAfter')}</p>
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
            <Button variant="outline" className="border-white text-white hover:bg-white/10 dark:border-gray-500">
              {t('hero.tryDemo')} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
