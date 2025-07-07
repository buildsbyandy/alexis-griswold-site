import React from 'react';

interface ProductCardProps {
  name: string;
  image: string;
  price: string;
  tagline?: string;
  categoryName?: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, image, price, tagline, categoryName, link }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl h-full min-w-[220px] max-w-xs mx-auto">
      <div className="w-full h-40 mb-3 overflow-hidden rounded-md flex items-center justify-center bg-[#E3D4C2]">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          style={{ maxHeight: '10rem' }}
          onError={e => { e.currentTarget.src = '/public/img1.JPEG'; }}
        />
      </div>
      {categoryName && (
        <span className="mb-1 px-2 py-1 bg-[#B89178] text-white text-xs rounded-full self-start">Category: {categoryName}</span>
      )}
      <h3 className="mb-1 font-serif text-lg font-semibold text-center text-black line-clamp-2">{name}</h3>
      <p className="text-base text-[#654C37] mb-1">{price}</p>
      {tagline && <p className="italic text-sm text-[#654C37] mb-2 text-center">{tagline}</p>}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-[#654C37] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black"
        tabIndex={0}
        aria-label={`View ${name} on Amazon`}
      >
        View on Amazon
      </a>
    </div>
  );
};

export default ProductCard; 