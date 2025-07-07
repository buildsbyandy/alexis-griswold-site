// Storefront data for Alexis Griswold - CMS-ready, modular, and human-editable

export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  tagline?: string;
  featured?: boolean;
  category: string; // category id
  tags?: string[];
  testimonials?: string[];
  link: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  tileImage: string;
}

export const categories: Category[] = [
  {
    id: 'food',
    name: 'Food',
    description: 'Nourishing staples for your kitchen',
    tileImage: '/tiles/foodTile.jpg',
  },
  {
    id: 'healing',
    name: 'Healing',
    description: 'Mindful tools and natural remedies',
    tileImage: '/tiles/healingTile.jpg',
  },
  {
    id: 'home',
    name: 'Home',
    description: 'Items to create a mindful space',
    tileImage: '/tiles/homeTile.jpg',
  },
  {
    id: 'personal-care',
    name: 'Personal Care',
    description: 'Daily essentials for skin and body',
    tileImage: '/tiles/personalTile.jpg',
  },
];

export const products: Product[] = [
  // Food
  {
    id: 'food-1',
    name: 'Yellowbird Organic Sriracha Hot Sauce',
    image: '/products/food_1.jpeg',
    price: '$13.99',
    tagline: 'My favorite go-to sauce for tacos!',
    featured: true,
    category: 'food',
    tags: ['spicy', 'organic'],
    testimonials: ['Adds the perfect kick to my breakfast burritos!'],
    link: 'https://www.amazon.com/dp/B09JB56QSX',
  },
  {
    id: 'food-2',
    name: 'Organic Quinoa',
    image: '/products/food_2.jpg',
    price: '$8.99',
    category: 'food',
    tags: ['grain', 'healthy'],
    link: '#',
  },
  // Healing
  {
    id: 'healing-1',
    name: 'Castor Oil',
    image: '/products/healing_1.jpg',
    price: '$9.99',
    tagline: 'A staple in my natural healing toolkit.',
    featured: true,
    category: 'healing',
    tags: ['oil', 'remedy'],
    testimonials: ['Helped my skin so much!'],
    link: 'https://www.amazon.com/dp/B0734849YK',
  },
  {
    id: 'healing-2',
    name: 'Herbal Tea Blend',
    image: '/products/healing_2.jpg',
    price: '$12.50',
    category: 'healing',
    tags: ['tea', 'herbal'],
    link: '#',
  },
  // Home
  {
    id: 'home-1',
    name: 'Emergency Stain Rescue Spray',
    image: '/products/home_1.jpg',
    price: '$13.99',
    tagline: 'Works wonders on tough stains!',
    featured: true,
    category: 'home',
    tags: ['cleaning'],
    link: 'https://www.amazon.com/dp/B01LX1RIEV',
  },
  {
    id: 'home-2',
    name: 'Aromatherapy Diffuser',
    image: '/products/home_2.jpg',
    price: '$24.99',
    category: 'home',
    tags: ['aromatherapy', 'wellness'],
    link: '#',
  },
  // Personal Care
  {
    id: 'personal-1',
    name: 'By Rosie Jane Eau De Parfum (Missy)',
    image: '/products/personal_1.jpg',
    price: '$80.00',
    tagline: 'My signature scent for everyday wear.',
    featured: true,
    category: 'personal-care',
    tags: ['favorites', 'fragrance'],
    testimonials: ['I get compliments every time I wear this!'],
    link: 'https://www.amazon.com/dp/B0CXQ7148C',
  },
  {
    id: 'personal-2',
    name: 'Natural Deodorant',
    image: '/products/personal_2.jpg',
    price: '$12.00',
    category: 'personal-care',
    tags: ['dailyuse', 'natural'],
    link: '#',
  },
]; 