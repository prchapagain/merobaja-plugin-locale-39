
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/utils/i18n';
import { Youtube, Newspaper } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">मेरो बाजा</h3>
            <p className="text-gray-300">
              High quality VST plugins for music production with Nepali instruments and effects.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/#plugins" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.plugins')}
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  {t('testimonials.title')}
                </Link>
              </li>
              <li>
                <Link to="/#youtube" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.youtube')}
                </Link>
              </li>
              <li>
                <Link to="/#payment" className="text-gray-300 hover:text-white transition-colors">
                  {t('payment.title')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Blog</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://merotips.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Newspaper className="h-4 w-4 mr-2" />
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <a href="https://merotips.com/category/music-production" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Music Production
                </a>
              </li>
              <li>
                <a href="https://merotips.com/category/vst-plugins" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  VST Plugins
                </a>
              </li>
              <li>
                <a href="https://merotips.com/category/nepali-music" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  Nepali Music
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Kathmandu, Nepal</p>
              <p>Email: info@merobaja.com</p>
              <p>Phone: +977 9812345678</p>
            </address>
            <div className="mt-4 flex space-x-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://merotips.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <Newspaper className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {currentYear} मेरो बाजा. {t('footer.rights')}
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
