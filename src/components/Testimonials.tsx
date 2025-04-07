
import React from 'react';
import TestimonialCard from './TestimonialCard';
import { useTranslation } from '@/utils/i18n';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Anish Sharma',
    role: 'Music Producer',
    content: 'The Sarangi Virtual plugin captures the essence of the traditional instrument perfectly. The tone and playability are exceptional!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 2,
    name: 'Shanti Gurung',
    role: 'Sound Designer',
    content: 'NepalEcho has transformed my productions. The authentic Himalayan reverb gives my tracks a unique spatial quality that was previously impossible to achieve.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
  },
  {
    id: 3,
    name: 'Rajesh Hamal',
    role: 'Film Composer',
    content: 'Madal Drummer is an essential tool in my composition toolkit. The authentic rhythm patterns have added a genuine Nepali feel to my film scores.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
  },
];

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="testimonials" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t('testimonials.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{t('testimonials.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
