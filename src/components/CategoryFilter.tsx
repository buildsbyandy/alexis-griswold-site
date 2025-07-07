import React from 'react';

interface CategoryFilterProps {
  categories: { id: string; name: string }[];
  selectedCategory: string;
  onSelect: (categoryId: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelect }) => {
  return (
    <nav aria-label="Product categories" className="w-full max-w-5xl mx-auto mb-6 flex flex-wrap gap-2 justify-center">
      <button
        type="button"
        className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black ${selectedCategory === 'all' ? 'bg-[#B89178] text-white border-[#B89178]' : 'bg-[#E3D4C2] text-[#654C37] border-[#B89178] hover:bg-[#B89178] hover:text-white'}`}
        aria-pressed={selectedCategory === 'all'}
        onClick={() => onSelect('all')}
      >
        All
      </button>
      {categories.map(cat => (
        <button
          key={cat.id}
          type="button"
          className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-black ${selectedCategory === cat.id ? 'bg-[#B89178] text-white border-[#B89178]' : 'bg-[#E3D4C2] text-[#654C37] border-[#B89178] hover:bg-[#B89178] hover:text-white'}`}
          aria-pressed={selectedCategory === cat.id}
          onClick={() => onSelect(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  );
};

export default CategoryFilter; 