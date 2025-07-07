import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, products } from '../../data/storefrontData';
import TopPicksCarousel from '../../components/TopPicksCarousel';

console.log('CategoryPage mounted');

// Placeholder ProductFilterBar component
const ProductFilterBar: React.FC<{
  search: string;
  setSearch: (s: string) => void;
  sort: string;
  setSort: (s: string) => void;
  tags: string[];
  selectedTag: string;
  setSelectedTag: (t: string) => void;
}> = ({ search, setSearch, sort, setSort, tags, selectedTag, setSelectedTag }) => (
  <form className="flex flex-wrap items-center gap-2 mb-6" role="search" aria-label="Product filter bar">
    <input
      type="search"
      value={search}
      onChange={e => setSearch(e.target.value)}
      placeholder="Search products..."
      className="px-3 py-2 rounded border border-[#B89178] focus:ring-2 focus:ring-black"
      aria-label="Search products"
    />
    <select
      value={sort}
      onChange={e => setSort(e.target.value)}
      className="px-3 py-2 rounded border border-[#B89178] focus:ring-2 focus:ring-black"
      aria-label="Sort products"
    >
      <option value="az">A-Z</option>
      <option value="price">Price: Low to High</option>
    </select>
    {tags.length > 0 && (
      <div className="flex gap-1">
        <button
          type="button"
          className={`px-3 py-1 rounded-full border ${selectedTag === '' ? 'bg-[#B89178] text-white' : 'bg-[#E3D4C2] text-[#654C37]'}`}
          onClick={() => setSelectedTag('')}
        >
          All
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            type="button"
            className={`px-3 py-1 rounded-full border ${selectedTag === tag ? 'bg-[#B89178] text-white' : 'bg-[#E3D4C2] text-[#654C37]'}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    )}
  </form>
);

// Placeholder ProductGrid component
const ProductGrid: React.FC<{ products: typeof products }> = ({ products }) => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
    {products.map(product => (
      <div key={product.id} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-48 mb-4 rounded-md"
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
    ))}
  </div>
);

const CategoryPage: React.FC = () => {
  const { category: categoryId } = useParams<{ category: string }>();
  console.log('categoryId from URL:', categoryId);

  const category = categories.find(cat => cat.id === categoryId);
  console.log('category lookup result:', category);

  const allProducts = products.filter(p => p.category === categoryId);
  console.log('products for this category:', allProducts);
  const featured = allProducts.filter(p => p.featured);
  // Collect all unique tags for this category
  const allTags = Array.from(new Set(allProducts.flatMap(p => p.tags || [])));

  // Filter/sort state
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('az');
  const [selectedTag, setSelectedTag] = useState('');

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = allProducts;
    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        (p.tagline && p.tagline.toLowerCase().includes(search.toLowerCase()))
      );
    }
    if (selectedTag) {
      filtered = filtered.filter(p => p.tags && p.tags.includes(selectedTag));
    }
    if (sort === 'az') {
      filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'price') {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/[^\d.]/g, ''));
        const priceB = parseFloat(b.price.replace(/[^\d.]/g, ''));
        return priceA - priceB;
      });
    }
    return filtered;
  }, [allProducts, search, sort, selectedTag]);

  if (!category) {
    return (
      <main className="w-screen min-h-screen flex flex-col items-center justify-center bg-[#cbb6a6] font-serif px-4">
        <h1 className="mb-4 font-serif text-3xl font-semibold text-center text-black md:text-4xl">
          Category not found. Return to the Storefront.
        </h1>
        <Link to="/storefront" className="underline text-primary-dark hover:text-black">
          Back to Storefront
        </Link>
      </main>
    );
  }

  return (
    <main className="w-screen min-h-screen bg-[#cbb6a6] text-[#383B26] font-serif flex flex-col items-center px-4">
      <nav className="w-full max-w-4xl mx-auto mt-6 mb-2" aria-label="Back navigation">
        <Link to="/storefront" className="inline-flex items-center text-[#654C37] hover:text-black font-medium underline">
          <span aria-hidden="true" className="mr-2">&#8592;</span> Back to Storefront
        </Link>
      </nav>
      <section className="w-full max-w-4xl py-8 mx-auto text-center">
        <h1 className="mb-2 font-serif text-3xl font-semibold text-center text-black md:text-4xl">
          {category.name}
        </h1>
        <p className="text-lg md:text-xl text-[#654C37] font-normal mb-8 text-center">
          {category.description}
        </p>
      </section>
      {/* Top Picks in Category */}
      <TopPicksCarousel products={featured} title={`Top Picks in ${category.name}`} />
      {/* Filter Bar */}
      <ProductFilterBar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        tags={allTags}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />
    </main>
  );
};

export default CategoryPage;