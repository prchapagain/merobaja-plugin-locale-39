
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Button } from '@/components/ui/button';
import { Download, Play, Users, Star, Download as DownloadIcon, Headphones, Youtube } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const Hero: React.FC = () => {
  const { t, language } = useTranslation();
  const { toast } = useToast();

  const handlePaymentSuccess = () => {
    toast({
      title: language === 'en' ? "Thank you for choosing our VST plugin!" : "हाम्रो VST प्लगइन छनौट गर्नुभएकोमा धन्यवाद!",
      description: language === 'en' ? 
        "Contact us to receive your download link. Notice: Please send payment slip to our WhatsApp number." : 
        "डाउनलोड लिंक प्राप्त गर्न हामीलाई सम्पर्क गर्नुहोस्। सूचना: कृपया भुक्तानी स्लिप हाम्रो व्हाट्सएप नम्बरमा पठाउनुहोस्।",
      variant: "default",
    });
  };

  return (
    <div className="relative bg-nepali-red text-white animate-fade-in dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-nepali-red/95 to-nepali-red/90 bg-cover bg-center dark:from-gray-900/95 dark:to-gray-800/90" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full mb-2 animate-fade-in dark:bg-white/10">#1 Nepali VST Collection</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
            {language === 'en' ? 'Authentic Nepali' : 'प्रामाणिक नेपाली'}<br />{language === 'en' ? 'Sound Library' : 'ध्वनि संग्रह'}
          </h1>
          <p className="mt-6 max-w-2xl text-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
            {language === 'en' 
              ? 'Discover premium VST plugins featuring authentic Nepali instruments, including Madal, Harmonium, Santoor, Sarangi, Bamboo Flute, and more.'
              : 'मदल, हार्मोनियम, संतूर, सारंगी, बाँसुरी, र अन्य प्रामाणिक नेपाली वाद्ययन्त्रहरू समावेश गरिएको प्रिमियम VST प्लगइनहरू पत्ता लगाउनुहोस्।'}
          </p>
          
          <div className="mt-8 flex justify-center gap-8 w-full animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <a href="https://wa.me/9779817417650" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex flex-col items-center hover:scale-105">
              <Phone className="h-7 w-7 mb-2" />
              <span className="text-sm">{t('contact.whatsapp')}</span>
            </a>
            <a href="https://facebook.com/pkentertainmentnepal" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex flex-col items-center hover:scale-105">
              <Facebook className="h-7 w-7 mb-2" />
              <span className="text-sm">{t('contact.facebook')}</span>
            </a>
            <a href="https://www.instagram.com/prchapagain_" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex flex-col items-center hover:scale-105">
              <Instagram className="h-7 w-7 mb-2" />
              <span className="text-sm">{t('contact.instagram')}</span>
            </a>
            <a href="https://www.youtube.com/channel/UC2WaEDHGQIiaR8Sh93Y5-Bg" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors flex flex-col items-center hover:scale-105">
              <Youtube className="h-7 w-7 mb-2" />
              <span className="text-sm">{t('contact.youtube')}</span>
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-white/90 text-nepali-red font-semibold flex gap-2 items-center dark:bg-gray-200 dark:text-gray-800"
                >
                  <Download className="h-5 w-5" /> {t('hero.download')}
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-md dark:bg-gray-800 dark:border-gray-700">
                <AlertDialogHeader>
                  <AlertDialogTitle>{t('payment.title')}</AlertDialogTitle>
                  <AlertDialogDescription>
                    {t('payment.choose')}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-4 border rounded-lg hover:bg-[#60BB46]/10 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-[#60BB46]/5">
                    <div className="w-32 h-32 border-2 border-[#60BB46] p-2 rounded-lg mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                        alt="eSewa QR Code" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-bold text-[#60BB46]">{t('payment.esewa')}</p>
                    <p className="text-xs text-center mt-1">{t('payment.scan')}</p>
                  </div>
                  
                  <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-4 border rounded-lg hover:bg-[#5F259F]/10 cursor-pointer transition-colors dark:border-gray-700 dark:hover:bg-[#5F259F]/5">
                    <div className="w-32 h-32 border-2 border-[#5F259F] p-2 rounded-lg mb-2">
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
                  <p className="text-sm text-center mb-3">{t('payment.contactAfter')}</p>
                  <div className="flex gap-4 justify-center">
                    <a href="https://wa.me/9779817417650" target="_blank" rel="noopener noreferrer" className="p-2 bg-green-600 rounded-full text-white hover:bg-green-700 transition-colors">
                      <Phone className="h-5 w-5" />
                    </a>
                    <a href="https://facebook.com/pkentertainmentnepal" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="mailto:8008698@gmail.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </AlertDialogContent>
            </AlertDialog>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 flex gap-2 items-center dark:border-gray-400"
            >
              <Play className="h-5 w-5" /> {t('hero.tryDemo')}
            </Button>
          </div>
          
          <div className="mt-12 w-full py-8 px-6 bg-white/15 rounded-2xl backdrop-blur-sm border border-white/20 shadow-lg dark:bg-gray-800/50 dark:border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 text-center">{language === 'en' ? 'User Reviews & Stats' : 'प्रयोगकर्ता समीक्षा र तथ्याङ्कहरू'}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 w-full animate-fade-in" style={{ animationDelay: '800ms' }}>
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-105">
                <Users className="h-8 w-8 mb-3 opacity-80" />
                <span className="text-2xl sm:text-3xl font-bold">5K+</span>
                <span className="text-sm opacity-90 mt-1">{t('hero.stats.users')}</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-105">
                <Star className="h-8 w-8 mb-3 text-nepali-gold" />
                <span className="text-2xl sm:text-3xl font-bold">4.9/5</span>
                <span className="text-sm opacity-90 mt-1">{t('hero.stats.rating')}</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-105">
                <DownloadIcon className="h-8 w-8 mb-3 opacity-80" />
                <span className="text-2xl sm:text-3xl font-bold">10K+</span>
                <span className="text-sm opacity-90 mt-1">{t('hero.stats.downloads')}</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all hover:scale-105">
                <Headphones className="h-8 w-8 mb-3 opacity-80" />
                <span className="text-2xl sm:text-3xl font-bold">24/7</span>
                <span className="text-sm opacity-90 mt-1">{t('hero.stats.support')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
