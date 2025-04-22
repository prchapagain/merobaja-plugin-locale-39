
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

const fetchMeroTipsPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.merotips.com/search'));
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    if (!data.contents) throw new Error('No content retrieved');

    const parser = new DOMParser();
    const doc = parser.parseFromString(data.contents, 'text/html');
    const articles = doc.querySelectorAll('article.post');
    
    if (!articles.length) throw new Error('No articles found');

    return Array.from(articles).map((article, index) => {
      const title = article.querySelector('.entry-title a')?.textContent || '';
      const link = article.querySelector('.entry-title a')?.getAttribute('href') || '';
      const excerpt = article.querySelector('.entry-excerpt')?.textContent?.trim() || '';
      const author = article.querySelector('.entry-author-name')?.textContent || '';
      const date = article.querySelector('.entry-date')?.getAttribute('datetime') || new Date().toISOString();
      const thumbnail = article.querySelector('img')?.getAttribute('src') || '';
      
      return {
        id: index.toString(),
        title,
        excerpt: excerpt.substring(0, 150) + '...',
        author,
        date,
        readTime: '5 min',
        image: thumbnail,
        category: 'Blog',
        url: link
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};

const Blog = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const { data: blogPosts = [], isLoading, isError } = useQuery({
    queryKey: ['meroTipsPosts'],
    queryFn: fetchMeroTipsPosts,
    staleTime: 1000 * 60 * 5,
  });

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
              {t('blog.title') || 'MeroTips Blog'}
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
                Visit MeroTips.com
              </a>
            </div>
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
          ) : isError ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Unable to load blog posts from MeroTips.com. Please try again later.
              </p>
            </div>
          ) : blogPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="flex flex-col h-full transition-all duration-300 hover:shadow-lg">
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
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No blog posts found. Please check back later.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
