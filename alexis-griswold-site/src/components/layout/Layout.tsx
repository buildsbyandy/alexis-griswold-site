import type { ReactNode } from 'react';
import { siteConfig } from '../../config/site.config';
import { Navbar } from '../navigation/Navbar';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

/**
 * Base layout component that wraps all pages
 * 
 * Features:
 * - Semantic HTML structure
 * - Responsive design
 * - Accessibility attributes
 * - Dynamic metadata
 * - Skip to main content link for keyboard navigation
 */
export function Layout({ 
  children, 
  title = siteConfig.metadata.title,
  description = siteConfig.metadata.description 
}: LayoutProps) {
  // Update document title and description
  if (typeof document !== 'undefined') {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Skip to main content link - hidden by default, visible on focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-light focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      {/* Header with navigation */}
      <header role="banner" className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Navbar />
      </header>

      {/* Main content */}
      <main 
        id="main-content"
        role="main"
        className="flex-1 container mx-auto px-4 py-8"
      >
        {children}
      </main>

      {/* Footer will go here */}
      <footer 
        role="contentinfo"
        className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} {siteConfig.metadata.title}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 