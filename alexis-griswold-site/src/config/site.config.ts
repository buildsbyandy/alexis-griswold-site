/**
 * Site configuration file
 * 
 * This file contains all configurable content and settings for the site.
 * When cloning this site for other clients, this is the primary file to modify.
 */

export const siteConfig = {
  // Site metadata
  metadata: {
    title: "Alexis Griswold",
    description: "Professional portfolio and personal website",
    author: "Alexis Griswold",
    // Add more metadata as needed
  },

  // Navigation
  navigation: {
    mainNav: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // Theme configuration
  theme: {
    colors: {
      primary: {
        light: "#4F46E5", // Indigo-600
        dark: "#6366F1",  // Indigo-500
      },
      secondary: {
        light: "#10B981", // Emerald-500
        dark: "#059669",  // Emerald-600
      },
      // Add more color configurations
    },
    // Add more theme configurations
  },

  // Social media links
  social: {
    twitter: "https://twitter.com/username",
    linkedin: "https://linkedin.com/in/username",
    github: "https://github.com/username",
  },

  // Contact information
  contact: {
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
  },
} as const;

// Type for the site configuration
export type SiteConfig = typeof siteConfig; 