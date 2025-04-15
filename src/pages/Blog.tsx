
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Clock, Calendar, User, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  url: string;
}

const Blog = () => {
  const { t } = useTranslation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    // This is mock data for demonstration purposes
    const mockBlogPosts: BlogPost[] = [
      {
        id: 1,
        title: "Getting Started with Sarangi Virtual",
        excerpt: "Learn how to create authentic Nepali sounds with the Sarangi Virtual plugin.",
        author: "Rajesh Hamal",
        date: "2025-03-15",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "tutorials",
        url: "https://merotips.com/getting-started-with-sarangi-virtual"
      },
      {
        id: 2,
        title: "The Evolution of Nepali Music Production",
        excerpt: "Exploring how digital tools are transforming traditional Nepali music production.",
        author: "Anu Malik",
        date: "2025-03-10",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "industry",
        url: "https://merotips.com/evolution-of-nepali-music-production"
      },
      {
        id: 3,
        title: "Top 5 Tips for Using Madal Drummer",
        excerpt: "Professional tips to get the most out of the free Madal Drummer plugin.",
        author: "Deepak Bajracharya",
        date: "2025-03-05",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "tutorials",
        url: "https://merotips.com/madal-drummer-tips"
      },
      {
        id: 4,
        title: "Interview with Nepali Music Producer Bipul Chettri",
        excerpt: "Exclusive interview with renowned producer about using Nepali VST plugins.",
        author: "Melina Rai",
        date: "2025-02-28",
        readTime: "10 min",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "interviews",
        url: "https://merotips.com/interview-bipul-chettri"
      },
      {
        id: 5,
        title: "Creating Film Soundtracks with NepalEcho",
        excerpt: "How to use NepalEcho to create cinematic soundscapes for film projects.",
        author: "Bartika Eam Rai",
        date: "2025-02-20",
        readTime: "7 min",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "tutorials",
        url: "https://merotips.com/film-soundtracks-nepalecho"
      },
      {
        id: 6,
        title: "The Future of Nepali Music Technology",
        excerpt: "Predictions and trends for the next generation of Nepali music tech.",
        author: "Abhaya Subba",
        date: "2025-02-15",
        readTime: "9 min",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        category: "industry",
        url: "https://merotips.com/future-nepali-music-technology"
      }
    ];

    // Simulate loading delay
    setTimeout(() => {
      setBlogPosts(mockBlogPosts);
      setIsLoading(false);
    }, 500);
  }, []);

  // Filter blog posts by category
  const filteredBlogPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Get unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  // Format date to readable format
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
          </div>

          {/* Category Filter */}
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
            // Loading state
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <Card key={n} className="h-[400px] animate-pulse">
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Blog posts grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogPosts.map((post) => (
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
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="text-sm flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      {formatDate(post.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
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
          )}

          {/* Show more button */}
          <div className="flex justify-center mt-10">
            <a 
              href="https://merotips.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Button variant="outline" size="lg">
                {t('blog.viewMore') || 'View more on MeroTips.com'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
