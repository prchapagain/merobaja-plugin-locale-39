
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Download, ArrowRight } from 'lucide-react';

const PaymentMethods: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Pricing Plans</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choose Your Collection</p>
          <p className="text-muted-foreground">Flexible pricing options for musicians and producers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
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
              <Button className="w-full bg-nepali-red hover:bg-nepali-red/90">Buy Now</Button>
            </CardFooter>
          </Card>
          
          {/* Professional Plan */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg relative border-nepali-red">
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
              <Button className="w-full bg-nepali-red hover:bg-nepali-red/90">Buy Now</Button>
            </CardFooter>
          </Card>
          
          {/* Premium Plan */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
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
              <Button className="w-full bg-gray-200 text-gray-800 hover:bg-gray-300">Contact Us</Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Ready to Create? Section */}
        <div className="bg-nepali-red text-white p-8 rounded-lg text-center mt-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Create?</h2>
          <p className="mb-8">Download our VST plugins today and bring authentic Nepali sounds to your music.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-nepali-red hover:bg-gray-100">
              <Download className="mr-2 h-5 w-5" /> Download Now
            </Button>
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
