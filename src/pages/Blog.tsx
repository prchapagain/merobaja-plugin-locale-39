
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { useMeroTipsPosts } from '@/hooks/use-mero-tips-posts';
import { Button } from '@/components/ui/button';
import { RefreshCw, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';

const Blog = () => {
  const { toast } = useToast();
  const { data: posts, isLoading, error, refetch } = useMeroTipsPosts();
  const [isRefetching, setIsRefetching] = useState(false);

  // Format the date for blog posts
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleRefetch = async () => {
    setIsRefetching(true);
    try {
      await refetch();
      toast({
        title: "Blog posts refreshed",
        description: "Latest posts from MeroTips.com have been loaded.",
      });
    } catch (err) {
      toast({
        title: "Failed to refresh posts",
        description: "Could not connect to MeroTips.com. Using cached data.",
        variant: "destructive",
      });
    } finally {
      setIsRefetching(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <BlogHeader />
        
        <div className="flex justify-between items-center mb-6">
          <a 
            href="https://merotips.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-nepali-red hover:text-red-700 transition-colors flex items-center gap-2"
          >
            <ExternalLink className="h-4 w-4" />
            Visit MeroTips.com directly
          </a>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleRefetch}
            disabled={isLoading || isRefetching}
            className="flex items-center gap-2"
          >
            <RefreshCw className={`h-4 w-4 ${isRefetching ? 'animate-spin' : ''}`} />
            Refresh Posts
          </Button>
        </div>
        
        {(isLoading || isRefetching) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/4 mb-4" />
                  <Skeleton className="h-20 w-full mb-4" />
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-1/3" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {error && !isLoading && !isRefetching && (
          <div className="text-center py-20">
            <h3 className="text-xl text-red-600 font-semibold">Unable to load blog posts</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Could not connect to MeroTips.com. Using cached content.
            </p>
            <Button 
              variant="default" 
              className="mt-4 bg-nepali-red hover:bg-red-700"
              onClick={handleRefetch}
              disabled={isRefetching}
            >
              Try Again
            </Button>
          </div>
        )}
        
        {posts && posts.length > 0 && !isRefetching && !isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {posts.map(post => (
              <BlogPostCard key={post.id} post={post} formatDate={formatDate} />
            ))}
          </div>
        )}
        
        {posts && posts.length === 0 && !isLoading && !isRefetching && !error && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold">No blog posts found</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Check MeroTips.com for new content</p>
            <Button 
              variant="default" 
              className="mt-4"
              onClick={() => window.open('https://merotips.com', '_blank')}
            >
              Visit MeroTips.com
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
