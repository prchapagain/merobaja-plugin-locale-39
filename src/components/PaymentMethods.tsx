
import React from 'react';
import { useTranslation } from '@/utils/i18n';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Placeholder QR code images - these would be replaced with actual QR codes
const esewaQr = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
const phonepayQr = 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';

const PaymentMethods: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t('payment.title')}</h2>
          <p className="mt-4 text-lg text-gray-600">{t('payment.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* eSewa Payment */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-[#60BB46] text-white">
              <CardTitle className="text-xl font-bold">{t('payment.esewa')}</CardTitle>
              <CardDescription className="text-white/90">{t('payment.scan')}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 border-2 border-[#60BB46] p-2 rounded-lg">
                  <img 
                    src={esewaQr} 
                    alt="eSewa QR Code" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-medium">eSewa ID: 9876543210</p>
                  <p className="text-sm text-gray-600">Scan with eSewa app</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* PhonePay QR */}
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardHeader className="bg-[#5F259F] text-white">
              <CardTitle className="text-xl font-bold">{t('payment.phonepay')}</CardTitle>
              <CardDescription className="text-white/90">{t('payment.scan')}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 border-2 border-[#5F259F] p-2 rounded-lg">
                  <img 
                    src={phonepayQr} 
                    alt="PhonePay QR Code" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="font-medium">PhonePay ID: 9876543210</p>
                  <p className="text-sm text-gray-600">Scan with any UPI app</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
