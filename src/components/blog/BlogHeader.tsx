
import { Rss } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';

export const BlogHeader = () => {
  const { t } = useTranslation();

  return (
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
  );
};
