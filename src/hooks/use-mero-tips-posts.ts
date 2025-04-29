
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/types/blog';

// Create minimal fallback data in case API is unavailable
const fallbackPost: BlogPost = {
  id: '0',
  title: 'Visit MeroTips.com for Latest Blog Posts',
  excerpt: 'Due to cross-origin restrictions, we cannot display the blog posts directly. Please visit MeroTips.com to read all articles.',
  author: 'MeroTips',
  date: new Date().toISOString(),
  readTime: '1 min',
  image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
  category: 'Blog',
  url: 'https://merotips.com'
};

export const useMeroTipsPosts = () => {
  return useQuery({
    queryKey: ['meroTipsPosts'],
    queryFn: async () => {
      try {
        // Try different CORS proxy options
        const proxyOptions = [
          'https://corsproxy.io/?',
          'https://api.allorigins.win/raw?url=',
          'https://api.codetabs.com/v1/proxy/?quest='
        ];
        
        const targetUrl = 'https://merotips.com/wp-json/wp/v2/posts?_embed&per_page=10';
        
        // Try each proxy in sequence until one works
        let response = null;
        let error = null;
        
        for (const proxy of proxyOptions) {
          try {
            response = await fetch(proxy + encodeURIComponent(targetUrl), {
              headers: {
                'Origin': window.location.origin
              }
            });
            
            if (response.ok) {
              break;
            }
          } catch (err) {
            error = err;
            console.log(`Proxy ${proxy} failed:`, err);
            // Continue to the next proxy
          }
        }
        
        if (!response || !response.ok) {
          console.log('All proxies failed, directing user to MeroTips.com');
          // Return a single fallback post that directs to MeroTips.com
          return [fallbackPost];
        }
        
        const wpPosts = await response.json();
        
        // Transform WordPress posts to our BlogPost format
        const posts: BlogPost[] = wpPosts.map((post: any) => ({
          id: post.id.toString(),
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
          author: post._embedded?.author?.[0]?.name || 'MeroTips Author',
          date: post.date,
          readTime: `${Math.ceil(post.content.rendered.length / 2000)} min`,
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
          category: post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog',
          url: post.link
        }));
        
        return posts;
      } catch (error) {
        console.error('Error fetching from MeroTips:', error);
        // Return minimal fallback data
        return [fallbackPost];
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 1, // Only retry once
  });
};
