import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Clock, Calendar, User, ArrowRight, Rss } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import { useQuery } from '@tanstack/react-query';
import { Skeleton } from '@/components/ui/skeleton';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  url: string;
}

const fallbackBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Nepali VST Plugins for FL Studio',
    excerpt: 'Learn how to set up and use Nepali VST plugins in FL Studio for authentic Nepali sound in your productions.',
    author: 'Arun Sharma',
    date: new Date().toISOString(),
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04',
    category: 'Tutorials',
    url: 'https://merotips.com/nepali-vst-plugins-fl-studio'
  },
  {
    id: '2',
    title: 'Exploring Traditional Nepali Instruments in Modern Music Production',
    excerpt: 'Discover how to incorporate traditional Nepali instruments like madal and sarangi into your modern music productions.',
    author: 'Priya Tamang',
    date: new Date().toISOString(),
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
    category: 'Production',
    url: 'https://merotips.com/nepali-instruments-modern-music'
  },
  {
    id: '3',
    title: 'Top 5 Nepali VST Plugins for Authentic Sound',
    excerpt: 'Check out our selection of the best Nepali virtual instruments to add authentic sounds to your music projects.',
    author: 'Kamal Rai',
    date: new Date().toISOString(),
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745',
    category: 'Plugins',
    url: 'https://merotips.com/top-nepali-vst-plugins'
  },
  {
    id: '4',
    title: 'Creating Atmospheric Pads with Nepali Sound Samples',
    excerpt: 'Learn techniques to create unique atmospheric pads using samples from traditional Nepali instruments.',
    author: 'Suman Gurung',
    date: new Date().toISOString(),
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1525362081669-2b476bb628c3',
    category: 'Tutorials',
    url: 'https://merotips.com/nepali-atmospheric-pads'
  },
  {
    id: '5',
    title: 'Interview with Nepali Music Producer Ankit Shrestha',
    excerpt: 'We sat down with renowned Nepali music producer Ankit Shrestha to discuss his workflow and favorite VST plugins.',
    author: 'Nisha Adhikari',
    date: new Date().toISOString(),
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1588479839125-8ffc32e6c69f',
    category: 'Interviews',
    url: 'https://merotips.com/interview-ankit-shrestha'
  },
  {
    id: '6',
    title: 'Mixing Techniques for Nepali Folk Music',
    excerpt: 'Professional mixing techniques specifically tailored for Nepali folk music and traditional instruments.',
    author: 'Ramesh KC',
    date: new Date().toISOString(),
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad',
    category: 'Mixing',
    url: 'https://merotips.com/mixing-nepali-folk-music'
  }
];

const fetchMeroTipsPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://merotips.com/feed/');
    const data = await response.json();
    
    if (data.status !== 'ok') {
      console.error('Error fetching blog posts:', data.message);
      return fallbackBlogPosts;
    }
    
    return data.items.map((item: any) => ({
      id: item.guid,
      title: item.title,
      excerpt: item.description.substring(0, 150) + '...',
      author: item.author,
      date: new Date(item.pubDate).toISOString(),
      readTime: '5 min',
      image: item.thumbnail || 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      category: item.categories[0] || 'General',
      url: item.link
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return fallbackBlogPosts;
  }
};

const Blog = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['meroTipsPosts'],
    queryFn: fetchMeroTipsPosts,
    staleTime: 1000 * 60 * 5,
  });

  const filteredBlogPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category.toLowerCase())))];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t('blog.title') || 'Blog'}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('blog.description') || 'Latest updates, tutorials, and insights about Nepali VST plugins and music production.'}
            </p>
            <div className="mt-4">
              <a 
                href="https://merotips.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-nepali-red hover:text-red-700 transition-colors"
              >
                <Rss className="h-4 w-4 mr-2" />
                Follow our blog on MeroTips.com
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize"
              >
                {category}
              </Button>
            ))}
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <Card key={n} className="h-[400px]">
                  <div className="h-48">
                    <Skeleton className="h-full w-full rounded-t-lg" />
                  </div>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogPosts.length > 0 ? (
                filteredBlogPosts.map((post) => (
                  <Card key={post.id} className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center mb-2">
                        <span className="bg-nepali-red/10 text-nepali-red text-xs px-2 py-1 rounded-full capitalize">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
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
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-xl text-gray-500 dark:text-gray-400">No blog posts found in this category.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
