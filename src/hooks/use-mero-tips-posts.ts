
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/types/blog';

// Create mock data for blog posts since we can't rely on external API
const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Nepali VST Plugins',
    excerpt: 'Learn how to install and set up our Nepali VST plugins in your favorite DAW. This step-by-step guide covers everything from installation to basic usage.',
    author: 'Anish Sharma',
    date: '2024-04-15',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    category: 'Tutorials',
    url: 'https://merotips.com/getting-started-with-nepali-vst-plugins'
  },
  {
    id: '2',
    title: 'Advanced Madal Techniques for Electronic Music',
    excerpt: 'Discover how to integrate traditional Nepali Madal rhythms into modern electronic music production. Tips and tricks from professional producers.',
    author: 'Rajesh Hamal',
    date: '2024-04-10',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80',
    category: 'Production Tips',
    url: 'https://merotips.com/madal-techniques-electronic-music'
  },
  {
    id: '3',
    title: 'Creating Authentic Nepali Film Scores',
    excerpt: 'How to compose authentic Nepali film scores using our VST instrument collection. Learn from professional film composers working in the Nepali film industry.',
    author: 'Shanti Gurung',
    date: '2024-04-05',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1578022761797-b8636ac1773c?auto=format&fit=crop&w=800&q=80',
    category: 'Film Scoring',
    url: 'https://merotips.com/nepali-film-scores'
  },
];

export const useMeroTipsPosts = () => {
  return useQuery({
    queryKey: ['meroTipsPosts'],
    queryFn: async () => {
      try {
        // Create a proxy URL to avoid CORS issues
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://merotips.com/wp-json/wp/v2/posts?_embed&per_page=10';
        
        // Try to fetch from the proxy
        const response = await fetch(proxyUrl + targetUrl, {
          headers: {
            'Origin': window.location.origin
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch from MeroTips');
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
        // Return mock data as fallback
        return mockBlogPosts;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
