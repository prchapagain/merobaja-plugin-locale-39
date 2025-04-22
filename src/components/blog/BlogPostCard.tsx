
import { BlogPost } from '@/types/blog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
  formatDate: (date: string) => string;
}

export const BlogPostCard = ({ post, formatDate }: BlogPostCardProps) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="text-sm flex items-center gap-2">
          <Calendar className="h-3 w-3" />
          {formatDate(post.date)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center text-sm text-gray-500">
            <User className="h-3 w-3 mr-1" />
            {post.author}
          </div>
          <a 
            href={post.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-nepali-red hover:text-red-700 transition-colors text-sm"
          >
            Read more <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};
