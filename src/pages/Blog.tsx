
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogPostCard } from '@/components/blog/BlogPostCard';
import { useMeroTipsPosts } from '@/hooks/use-mero-tips-posts';

const Blog = () => {
  const { data: posts, isLoading, error } = useMeroTipsPosts();

  // Format the date for blog posts
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <BlogHeader />
        
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-nepali-red"></div>
          </div>
        )}
        
        {error && (
          <div className="text-center py-20">
            <h3 className="text-xl text-red-600 font-semibold">Unable to load blog posts</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Please try again later</p>
          </div>
        )}
        
        {posts && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {posts.map(post => (
              <BlogPostCard key={post.id} post={post} formatDate={formatDate} />
            ))}
          </div>
        )}
        
        {posts && posts.length === 0 && !isLoading && !error && (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold">No blog posts found</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">Check back later for new content</p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
