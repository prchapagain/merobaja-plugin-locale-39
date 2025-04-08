
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Download, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Facebook, MessageSquare, Phone } from 'lucide-react';

const PaymentMethods: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handlePaymentSuccess = () => {
    toast({
      title: "Payment Successful",
      description: "Please contact us on WhatsApp for download instructions.",
    });
  };

  const PaymentDialog = ({ children }: { children: React.ReactNode }) => (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>
            Scan the QR code with your payment app
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pricing Plans</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose Your Collection</p>
          <p className="text-muted-foreground">Flexible pricing options for musicians and producers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardHeader className="bg-background">
              <CardTitle className="text-xl font-bold">Starter Plan</CardTitle>
              <CardDescription className="text-2xl font-bold mt-2">₹.1200 or $ 10<span className="text-sm font-normal">/one-time</span></CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Single Essential Instrument</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Basic Articulations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Standard Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Free Updates</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <PaymentDialog>
                <Button className="w-full bg-nepali-red hover:bg-nepali-red/90">Buy Now</Button>
              </PaymentDialog>
            </CardFooter>
          </Card>
          
          {/* Professional Plan */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg relative border-nepali-red animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="absolute top-0 right-0 left-0 bg-nepali-red text-white text-center text-sm py-1">
              Most Popular
            </div>
            <CardHeader className="bg-background pt-8">
              <CardTitle className="text-xl font-bold">Professional</CardTitle>
              <CardDescription className="text-2xl font-bold mt-2">₹.6000 or $ 60<span className="text-sm font-normal">/one-time</span></CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>5 Instruments included</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Full Articulations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Priority Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Free Updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Additional Presets</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <PaymentDialog>
                <Button className="w-full bg-nepali-red hover:bg-nepali-red/90">Buy Now</Button>
              </PaymentDialog>
            </CardFooter>
          </Card>
          
          {/* Premium Plan */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '600ms' }}>
            <CardHeader className="bg-background">
              <CardTitle className="text-xl font-bold">Premium</CardTitle>
              <CardDescription className="text-2xl font-bold mt-2">₹.10000 or $ 100<span className="text-sm font-normal">/one-time</span></CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Complete Collection</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Extended Articulations</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Lifetime Updates</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-nepali-red mr-2" />
                  <span>Custom Presets</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <PaymentDialog>
                <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300">Contact Us</Button>
              </PaymentDialog>
            </CardFooter>
          </Card>
        </div>
        
        {/* Ready to Create? Section */}
        <div className="bg-nepali-red text-white p-8 rounded-lg text-center mt-10 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <h2 className="text-3xl font-bold mb-4">Ready to Create?</h2>
          <p className="mb-8">Download our VST plugins today and bring authentic Nepali sounds to your music.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-nepali-red hover:bg-gray-100">
                  <Download className="mr-2 h-5 w-5" /> Download Now
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
                      <MessageSquare className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Try Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
