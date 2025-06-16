import { useState } from 'react';
import { siteConfig } from '../../config/site.config';

/**
 * Navigation component with responsive design and accessibility features
 * 
 * Features:
 * - Mobile-first responsive design
 * - Keyboard navigation support
 * - ARIA attributes for accessibility
 * - Animated mobile menu
 * - Configurable navigation items
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className="container mx-auto px-4 py-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <a 
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
          aria-label="Home"
        >
          {siteConfig.metadata.title}
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-light"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger icon */}
          <svg
            className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {/* Close icon */}
          <svg
            className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {siteConfig.navigation.mainNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop menu */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          {siteConfig.navigation.mainNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
} 