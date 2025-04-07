
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, content, avatar }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg delayed-animation">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img 
            src={avatar}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="italic text-muted-foreground">"{content}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
