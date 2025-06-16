/**
 * Site configuration file
 * 
 * This file contains all configurable content and settings for the site.
 * When cloning this site for other clients, this is the primary file to modify.
 *
 * Cursor AI and any component-generating tools should treat this file as the
 * single source of truth for:
 * - Site metadata and author attribution
 * - Navigation structure and labels
 * - Theme color definitions
 * - Shared social and contact information
 *
 * Avoid redefining these values in components directly. Import from site.config.ts instead.
 */

export const siteConfig = {
  // Site metadata
  metadata: {
    title: "Alexis Griswold",
    description: "Professional portfolio and personal website",
    author: "Alexis Griswold",
    youtubeChannelId: "alexisgriswold", // YouTube channel handle
    youtubeChannelUrl: "https://www.youtube.com/@alexisgriswold",
  },

  // Navigation
  navigation: {
    mainNav: [
      { label: "Home", href: "/" },
      { label: "Vlogs", href: "/vlogs" },
      { label: "Recipes & Tutorials", href: "/recipes" },
      { label: "Storefront", href: "/store" },
    ],
  },

  // Theme configuration
  theme: {
    colors: {
      primary: {
        light: "#DADFDB",
        DEFAULT: "#E3D4C2",
        dark: "#8F907E",
      },
      secondary: {
        DEFAULT: "#B89178",
      },
      text: {
        dark: "#654C37",
      },
      accent: {
        dark: "#383B26",
      },
    },
    fonts: {
      heading: "Playfair Display, serif",
      body: "Inter, sans-serif",
    },
  },

  // Vlogs page configuration
  vlogs: {
    gridLayout: {
      desktop: {
        columns: 2,
        rows: 10,
      },
      mobile: {
        columns: 1,
        rows: 10,
      },
    },
    // Using the home_background_img as a placeholder
    staticImages: [
      {
        id: 1,
        title: "Welcome to My Vlogs",
        description: "Join me on my journey",
        thumbnailUrl: "/home_background_img",
        fullSizeUrl: "/home_background_img",
        alt: "Welcome to Alexis Griswold's vlogs",
      },
    ],
  },

  // Social media links
  social: {
    twitter: "https://twitter.com/username",
    linkedin: "https://linkedin.com/in/username",
    github: "https://github.com/username",
    youtube: "https://www.youtube.com/@alexisgriswold",
  },

  // Contact information
  contact: {
    email: "contact@example.com",
    phone: "+1 (555) 123-4567",
  },
} as const;

// Type for the site configuration
export type SiteConfig = typeof siteConfig; 