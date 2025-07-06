import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { storefrontCategories } from '../../data/products';
// import Header from '../../components/Header';

const Category: React.FC = () => {
  const { category: categoryId } = useParams<{ category: string }>();
  const location = useLocation();
  
  // Debug logging
  useEffect(() => {
    console.log('Category component mounted with categoryId:', categoryId);
    console.log('Current URL:', location.pathname);
    console.log('Available categories:', storefrontCategories.map(cat => cat.id));
  }, [categoryId, location.pathname]);

  const category = storefrontCategories.find(cat => cat.id === categoryId);

  // Debug logging for category lookup
  useEffect(() => {
    if (category) {
      console.log('Category found:', category);
      console.log('Category products:', category.products);
    } else {
      console.log('Category not found for ID:', categoryId);
    }
  }, [category, categoryId]);

  if (!category) {
    return (
      <>
        {/* <Header /> */}
        <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#cbb6a6] font-serif px-4">
          <h1 className="mb-4 font-serif text-3xl font-semibold text-center text-black md:text-4xl">
            Category not found. Return to the Storefront.
          </h1>
          <p className="mb-4 text-lg text-[#654C37]">
            Requested category: "{categoryId}"
          </p>
          <p className="mb-4 text-sm text-[#654C37]">
            Current URL: {location.pathname}
          </p>
          <p className="mb-4 text-sm text-[#654C37]">
            Available categories: {storefrontCategories.map(cat => cat.id).join(', ')}
          </p>
          <Link to="/store" className="underline text-primary-dark hover:text-black">
            Back to Storefront
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <Header /> */}
      <div className="w-screen min-h-screen bg-[#cbb6a6] text-[#383B26] font-serif flex flex-col items-center px-4">
        <section className="w-full max-w-4xl px-4 py-12 mx-auto text-center">
          <h1 className="mb-2 font-serif text-3xl font-semibold text-center text-black md:text-4xl">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-[#654C37] font-normal mb-8 text-center">
            {category.description}
          </p>
        </section>
        <section className="grid w-full max-w-4xl grid-cols-1 gap-8 px-4 pb-16 mx-auto sm:grid-cols-2 md:grid-cols-3">
          {!category.products || category.products.length === 0 ? (
            <div className="py-12 text-center col-span-full">
              <h2 className="mb-4 font-serif text-2xl font-semibold text-black">
                No products available
              </h2>
              <p className="text-lg text-[#654C37]">
                Check back soon for new products in this category.
              </p>
            </div>
          ) : (
            category.products.map(product => (
              <div key={product.name} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="object-cover w-full h-48 mb-4 rounded-md"
                  onError={(e) => {
                    console.error('Failed to load image:', product.image);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h2 className="mb-2 font-serif text-lg font-semibold text-center text-black md:text-xl">
                  {product.name}
                </h2>
                <p className="text-base text-[#654C37] mb-2">{product.price}</p>
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
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default Category;