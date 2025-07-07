import React from 'react';
import { categories, products } from '../data/storefrontData';
import TopPicksCarousel from '../components/TopPicksCarousel';
import { Link } from 'react-router-dom';

const Storefront: React.FC = () => {
  // Get all featured products for the top carousel
  const featuredProducts = products.filter(p => p.featured);

  return (
    <main className="w-screen min-h-screen bg-[#cbb6a6] text-[#383B26] font-serif flex flex-col items-center">
      {/* Top Picks Carousel */}
      <TopPicksCarousel products={featuredProducts} title="Alexis' Current Favorites" />

      {/* Shop by Category */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black font-serif text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <Link
              to={`/storefront/${category.id}`}
              key={category.id}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white flex flex-col items-center justify-end min-h-[220px] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-dark transform transition-transform duration-300 hover:scale-105"
              tabIndex={0}
              aria-label={`View category: ${category.name}`}
            >
              {/* Background image from tileImage (decorative) */}
              <div
                className="absolute inset-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url('${category.tileImage || ''}')` }}
                aria-hidden="true"
              />
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" aria-hidden="true" />
              {/* Category Info */}
              <div className="relative z-10 p-6 w-full flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-serif font-bold text-white group-hover:text-black transition-colors duration-300 drop-shadow-md mb-2">{category.name}</h3>
                <p className="text-sm text-white group-hover:text-black drop-shadow-md">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Storefront; 