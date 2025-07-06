import React from 'react';
import { Link } from 'react-router-dom';
import { storefrontCategories } from '../data/products';

const Storefront: React.FC = () => (
  <div className="w-screen min-h-screen bg-[#cbb6a6] text-[#383B26] font-serif flex flex-col items-center">
    {/* Hero Section */}
    <section className="w-full max-w-5xl mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black font-serif">Shop My Favorites</h1>
      <p className="text-lg md:text-xl text-[#654C37] font-normal mb-10">Curated items I use daily—from mindful healing to home staples.</p>
    </section>
    {/* Category Grid */}
    <section className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 pb-16">
      {storefrontCategories.map(category => (
        <Link
          to={`/store/${category.id}`}
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
            <h2 className="text-2xl font-serif font-bold text-white group-hover:text-black transition-colors duration-300 drop-shadow-md">{category.name}</h2>
            <p className="text-sm text-white group-hover:text-black mt-2 drop-shadow-md">{category.description}</p>
          </div>
        </Link>
      ))}
    </section>
  </div>
);

export default Storefront; 