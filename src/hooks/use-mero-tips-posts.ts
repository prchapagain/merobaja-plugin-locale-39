
import { useQuery } from '@tanstack/react-query';
import { BlogPost } from '@/types/blog';

const fetchMeroTipsPosts = async (): Promise<BlogPost[]> => {
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
};

export const useMeroTipsPosts = () => {
  return useQuery({
    queryKey: ['meroTipsPosts'],
    queryFn: fetchMeroTipsPosts,
    staleTime: 1000 * 60 * 5,
  });
};
