
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/utils/i18n';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-nepali-red font-bold text-2xl">मेरो बाजा</span>
            </div>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:space-x-8 items-center">
            <a href="#" className="text-gray-900 hover:text-nepali-red px-3 py-2 font-medium">
              {t('nav.home')}
            </a>
            <a href="#plugins" className="text-gray-900 hover:text-nepali-red px-3 py-2 font-medium">
              {t('nav.plugins')}
            </a>
            <a href="#" className="text-gray-900 hover:text-nepali-red px-3 py-2 font-medium">
              {t('nav.about')}
            </a>
            <a href="#" className="text-gray-900 hover:text-nepali-red px-3 py-2 font-medium">
              {t('nav.contact')}
            </a>
            <LanguageSwitcher />
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-nepali-red"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-nepali-red text-base font-medium text-nepali-red bg-red-50"
            >
              {t('nav.home')}
            </a>
            <a
              href="#plugins"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              {t('nav.plugins')}
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              {t('nav.about')}
            </a>
            <a
              href="#"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
            >
              {t('nav.contact')}
            </a>
            <div className="pl-3 pr-4 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
