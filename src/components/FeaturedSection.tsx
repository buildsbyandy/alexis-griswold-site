import React from 'react';
import { storefrontCategories } from '../data/products';

// Gather all featured products (up to 3)
const featuredProducts = storefrontCategories
  .flatMap(cat => cat.products.map(product => ({ ...product, category: cat.name })))
  .filter(product => product.featured)
  .slice(0, 3);

const FeaturedSection: React.FC = () => {
  if (featuredProducts.length === 0) return null;
  return (
    <section className="w-full max-w-5xl mx-auto py-8 px-4 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black font-serif text-center">Featured Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredProducts.map(product => (
          <div
            key={product.name}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl h-full transition-transform duration-200 hover:scale-105"
            style={{ minHeight: 380 }}
          >
            <div className="w-full h-48 mb-4 overflow-hidden rounded-md flex items-center justify-center">
              <img
                src={product.image}
                alt={product.alt}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                style={{ maxHeight: '12rem' }}
              />
            </div>
            <h3 className="mb-2 font-serif text-lg font-semibold text-center text-black md:text-xl line-clamp-2">
              {product.name}
            </h3>
            <p className="text-base text-[#654C37] mb-1">{product.price}</p>
            {product.tagline && (
              <p className="italic text-sm text-[#654C37] mb-2 text-center">{product.tagline}</p>
            )}
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-[#654C37] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
              tabIndex={0}
              aria-label={`View ${product.name} on Amazon`}
            >
              View on Amazon
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection; 