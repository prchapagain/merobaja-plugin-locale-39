
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Button } from '@/components/ui/button';
import { Download, Play, Users, Star, Download as DownloadIcon, Headphones } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Telegram, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handlePaymentSuccess = () => {
    toast({
      title: "Payment Successful",
      description: "Please contact us on WhatsApp for download instructions.",
    });
  };

  return (
    <div className="relative bg-nepali-red text-white animate-fade-in">
      <div className="absolute inset-0 bg-gradient-to-r from-nepali-red/95 to-nepali-red/90 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start text-left mb-8">
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full mb-2 animate-fade-in">#1 Nepali VST Collection</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
            Authentic Nepali<br />Sound Library
          </h1>
          <p className="mt-6 max-w-2xl text-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
            Discover premium VST plugins featuring authentic Nepali instruments, including Madal, Harmonium, Santoor, Sarangi, Bamboo Flute, and more.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-white hover:bg-white/90 text-nepali-red font-semibold flex gap-2 items-center"
                >
                  <Download className="h-5 w-5" /> Download Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Payment Methods</DialogTitle>
                  <DialogDescription>
                    Select a payment method to complete your download
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  {/* eSewa Payment Option */}
                  <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-4 border rounded-lg hover:bg-[#60BB46]/10 cursor-pointer transition-colors">
                    <div className="w-32 h-32 border-2 border-[#60BB46] p-2 rounded-lg mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                        alt="eSewa QR Code" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-bold text-[#60BB46]">eSewa</p>
                    <p className="text-xs text-center mt-1">Scan to pay with eSewa</p>
                  </div>
                  
                  {/* PhonePay QR */}
                  <div onClick={handlePaymentSuccess} className="flex flex-col items-center p-4 border rounded-lg hover:bg-[#5F259F]/10 cursor-pointer transition-colors">
                    <div className="w-32 h-32 border-2 border-[#5F259F] p-2 rounded-lg mb-2">
                      <img 
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                        alt="PhonePay QR Code" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-bold text-[#5F259F]">PhonePay</p>
                    <p className="text-xs text-center mt-1">Scan to pay with PhonePay</p>
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
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 flex gap-2 items-center"
            >
              <Play className="h-5 w-5" /> Listen Demos
            </Button>
          </div>
          
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 w-full animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="flex flex-col items-center">
              <Users className="h-6 w-6 mb-2 opacity-80" />
              <span className="text-2xl sm:text-3xl font-bold">5K+</span>
              <span className="text-sm opacity-80">Users</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Star className="h-6 w-6 mb-2 opacity-80" />
              <span className="text-2xl sm:text-3xl font-bold">4.9/5</span>
              <span className="text-sm opacity-80">User Rating</span>
            </div>
            
            <div className="flex flex-col items-center">
              <DownloadIcon className="h-6 w-6 mb-2 opacity-80" />
              <span className="text-2xl sm:text-3xl font-bold">10K+</span>
              <span className="text-sm opacity-80">Downloads</span>
            </div>
            
            <div className="flex flex-col items-center">
              <Headphones className="h-6 w-6 mb-2 opacity-80" />
              <span className="text-2xl sm:text-3xl font-bold">24/7</span>
              <span className="text-sm opacity-80">Support</span>
            </div>
          </div>
          
          <div className="mt-8 flex gap-4 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            <a href="https://wa.me/9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://t.me/+9779846920259" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Telegram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
