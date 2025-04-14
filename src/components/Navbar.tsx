
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '@/utils/i18n';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6 text-nepali-red"
            >
              <path d="M2 22a8 8 0 0 1 14.33-4.96" />
              <path d="M8 16h.01" />
              <path d="M19 9h2a2 2 0 0 0 0-4h-2" />
              <path d="M18 11h1.91a.5.5 0 0 1 .5.63L19 16" />
              <path d="M2 16h.01" />
              <circle cx="18" cy="18" r="3" />
              <path d="M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path d="M4.214 9.368a3 3 0 0 1 4.567-2.95" />
            </svg>
            <span className="font-bold text-xl">NepaliVST</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">
            {t('nav.home')}
          </Link>
          <Link to="/#plugins" className="text-sm font-medium hover:text-primary">
            {t('nav.plugins')}
          </Link>
          <Link to="/#testimonials" className="text-sm font-medium hover:text-primary">
            {t('testimonials.title')}
          </Link>
          <Link to="/#youtube" className="text-sm font-medium hover:text-primary">
            {t('nav.youtube')}
          </Link>
          <Link to="/#payment" className="text-sm font-medium hover:text-primary">
            {t('payment.title')}
          </Link>
          <a href="https://merotips.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary">
            {t('nav.blog')}
          </a>
          <Link to="/about" className="text-sm font-medium hover:text-primary">
            {t('nav.about')}
          </Link>
        </nav>
        
        {/* Language & Theme Toggles */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageSwitcher />
          
          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-background border-t">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-primary"
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/#plugins" 
              className="text-sm font-medium hover:text-primary"
              onClick={closeMenu}
            >
              {t('nav.plugins')}
            </Link>
            <Link 
              to="/#testimonials" 
              className="text-sm font-medium hover:text-primary"
              onClick={closeMenu}
            >
              {t('testimonials.title')}
            </Link>
            <Link 
              to="/#youtube" 
              className="text-sm font-medium hover:text-primary"
              onClick={closeMenu}
            >
              {t('nav.youtube')}
            </Link>
            <Link 
              to="/#payment" 
              className="text-sm font-medium hover:text-primary"
              onClick={closeMenu}
            >
              {t('payment.title')}
            </Link>
            <a 
              href="https://merotips.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium hover:text-primary"
              onClick={closeMenu}
            >
              {t('nav.blog')}
            </a>
            <Link 
              to="/about" 
              className="text-sm font-medium hover:text-primary"
              onClick={closeMenu}
            >
              {t('nav.about')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
