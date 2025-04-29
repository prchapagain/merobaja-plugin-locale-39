
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
  {
    id: '4',
    title: 'Mixing and Mastering with Nepali Instruments',
    excerpt: 'Professional mixing and mastering tips for traditional Nepali instruments. Learn how to balance these unique sounds in your mix.',
    author: 'Bikram Prajapati',
    date: '2024-03-28',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80',
    category: 'Mixing',
    url: 'https://merotips.com/mixing-nepali-instruments'
  },
  {
    id: '5',
    title: 'Best DAWs for Nepali Music Production',
    excerpt: 'Compare different Digital Audio Workstations for producing Nepali music. Find out which DAW works best with our VST plugins.',
    author: 'Anish Sharma',
    date: '2024-03-20',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    category: 'Gear',
    url: 'https://merotips.com/best-daws-nepali-music'
  },
  {
    id: '6',
    title: 'Sampling Techniques for Nepali Instruments',
    excerpt: 'Learn advanced sampling techniques specifically tailored for Nepali traditional instruments. Create your own unique sample library.',
    author: 'Rajesh Hamal',
    date: '2024-03-15',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=800&q=80',
    category: 'Sampling',
    url: 'https://merotips.com/sampling-nepali-instruments'
  },
];

export const useMeroTipsPosts = () => {
  return useQuery({
    queryKey: ['meroTipsPosts'],
    queryFn: async () => {
      // Instead of fetching from an external API, return our mock data
      // This ensures we always have blog posts to display
      return mockBlogPosts;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
