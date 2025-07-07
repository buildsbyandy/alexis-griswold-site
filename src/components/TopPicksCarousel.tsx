import React from 'react';
import ProductCard from './ProductCard';
import type { Product } from '../data/storefrontData';

interface TopPicksCarouselProps {
  products: Product[];
  title?: string;
}

const TopPicksCarousel: React.FC<TopPicksCarouselProps> = ({ products, title = "Top Picks" }) => {
  if (!products.length) return null;
  return (
    <section className="w-full max-w-6xl mx-auto mb-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black font-serif text-center">{title}</h2>
      <div
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
        role="region"
        aria-label={title}
        tabIndex={0}
      >
        {products.map(product => (
          <div key={product.id} className="snap-center flex-shrink-0">
            <ProductCard
              name={product.name}
              image={product.image}
              price={product.price}
              tagline={product.tagline}
              categoryName={product.category}
              link={product.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPicksCarousel; 