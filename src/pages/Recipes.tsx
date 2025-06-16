import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Modal from '../components/Modal';

const inspiringMessage = `Living with passion, energy, and confidence starts from within. The recipes and rituals I share here are the foundation of how I fuel my body, mind, and spirit everyday. Every smoothie, every meal, and every moment of self-care is designed to support a vibrant, fast-paced life where you feel light, alive, and ready for anything. This is more than food and tutorials, this is a lifestyle rooted in vitality.`;

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Shakes'];

const placeholderRecipes = [
  {
    id: 1,
    title: 'Green Goddess Smoothie',
    category: 'Shakes',
    description: 'A vibrant blend of greens, fruit, and protein for a morning boost.',
    image: '/test_1.jpg',
    keyTag: 'Vegan',
  },
  {
    id: 2,
    title: 'Protein Power Bowl',
    category: 'Lunch',
    description: 'A hearty bowl packed with lean protein, grains, and veggies.',
    image: '/test_1.jpg',
    keyTag: 'High Protein',
  },
  {
    id: 3,
    title: 'Sunrise Oats',
    category: 'Breakfast',
    description: 'Creamy overnight oats with fresh fruit and seeds.',
    image: '/test_1.jpg',
    keyTag: 'Gluten Free',
  },
  {
    id: 4,
    title: 'Zesty Lemon Chicken',
    category: 'Dinner',
    description: 'Juicy chicken with a tangy lemon marinade, perfect for dinner.',
    image: '/test_1.jpg',
    keyTag: 'Low Carb',
  },
];

const placeholderCarousel = [
  { id: 1, type: 'video', title: 'How to Make a Green Smoothie', thumbnail: '/test_1.jpg', embedUrl: 'https://www.youtube.com/embed/5qap5aO4i9A' },
  { id: 2, type: 'video', title: 'Meal Prep for the Week', thumbnail: '/test_1.jpg', embedUrl: 'https://www.youtube.com/embed/5qap5aO4i9A' },
  { id: 3, type: 'video', title: 'Quick Protein Shakes', thumbnail: '/test_1.jpg', embedUrl: 'https://www.youtube.com/embed/5qap5aO4i9A' },
];

const Recipes: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalRecipe, setModalRecipe] = useState<typeof placeholderRecipes[0] | null>(null);
  const [modalCarousel, setModalCarousel] = useState<typeof placeholderCarousel[0] | null>(null);

  const filteredRecipes = placeholderRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase()) || recipe.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-screen min-h-screen bg-[#cbb6a6] text-[#383B26] font-serif flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-16 px-4 gap-12 md:gap-24 items-center min-h-screen">
        {/* Inspiring Message */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-wide text-center md:text-left">RECIPES & TUTORIALS</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-xl text-center md:text-left whitespace-pre-line">
            {inspiringMessage}
          </p>
        </div>
        {/* Carousel (desktop right, mobile below) */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center mb-6 md:mb-0">
          <div className="w-full overflow-x-auto flex gap-6 pb-2">
            {placeholderCarousel.map(item => (
              <div
                key={item.id}
                className="min-w-[180px] max-w-[240px] aspect-[9/16] bg-[#E3D4C2] rounded-lg shadow-md flex flex-col items-center cursor-pointer relative"
                onClick={() => setModalCarousel(item)}
                tabIndex={0}
                role="button"
                aria-label={`Open video: ${item.title}`}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModalCarousel(item); }}
              >
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover rounded-lg absolute inset-0" style={{ zIndex: 1, opacity: 0.7 }} />
                <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                  <span className="bg-black/60 text-white rounded-full px-3 py-1 text-xs mb-2 mt-4">YouTube Reel</span>
                  <p className="font-semibold text-[#654C37] bg-white/80 rounded px-2 py-1 text-center text-sm mt-auto mb-4">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
          <span className="sr-only">Recipe video carousel</span>
        </div>
      </section>

      {/* Recipe Discovery Section */}
      <section className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4 pb-12">
        {/* Search Bar */}
        <div className="w-full flex items-center bg-[#E3D4C2] rounded-lg shadow px-4 py-2 mb-2 sticky top-0 z-10">
          <FaSearch className="text-[#654C37] mr-2" />
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-transparent outline-none text-lg text-[#383B26] placeholder-[#8F907E]"
            aria-label="Search recipes"
          />
        </div>
        {/* Categories Grid */}
        <div className="flex flex-wrap gap-4 mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 ${selectedCategory === cat ? 'bg-[#B89178] text-white border-[#B89178]' : 'bg-[#E3D4C2] text-[#654C37] border-[#B89178] hover:bg-[#B89178] hover:text-white'}`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>
        {/* Recipe Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredRecipes.length === 0 ? (
            <div className="col-span-full text-center text-[#8F907E]">No recipes found.</div>
          ) : (
            filteredRecipes.map(recipe => (
              <div
                key={recipe.id}
                className="bg-[#E3D4C2] rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setModalRecipe(recipe)}
                tabIndex={0}
                role="button"
                aria-label={`Open recipe: ${recipe.title}`}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModalRecipe(recipe); }}
              >
                <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-[#654C37]">{recipe.title}</h3>
                  <p className="text-sm text-[#383B26] mb-2 flex-1">{recipe.description}</p>
                  <span className="inline-block bg-[#B89178] text-white text-xs px-2 py-1 rounded-full self-start mb-1">{recipe.category}</span>
                  <span className="inline-block bg-[#8F907E] text-white text-xs px-2 py-1 rounded-full self-start">{recipe.keyTag}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Carousel Modal */}
      <Modal isOpen={!!modalCarousel} onClose={() => setModalCarousel(null)}>
        {modalCarousel && (
          <div className="flex flex-col items-center w-full h-full">
            <h3 className="text-2xl font-bold mb-4 text-[#654C37]">{modalCarousel.title}</h3>
            <div className="w-full max-w-xs aspect-[9/16] flex items-center justify-center">
              {/* Hardcoded embedded video for now */}
              <iframe
                width="270"
                height="480"
                src={modalCarousel.embedUrl}
                title={modalCarousel.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </Modal>

      {/* Recipe Modal */}
      <Modal isOpen={!!modalRecipe} onClose={() => setModalRecipe(null)}>
        {modalRecipe && (
          <div className="flex flex-col items-center">
            <img src={modalRecipe.image} alt={modalRecipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-[#654C37]">{modalRecipe.title}</h3>
            <p className="text-base text-[#383B26] mb-2 text-center">{modalRecipe.description}</p>
            <span className="inline-block bg-[#B89178] text-white text-xs px-2 py-1 rounded-full mb-1">{modalRecipe.category}</span>
            <span className="inline-block bg-[#8F907E] text-white text-xs px-2 py-1 rounded-full">{modalRecipe.keyTag}</span>
          </div>
        )}
      </Modal>

      {/* Footer */}
      <footer className="py-4 text-center bg-[#8F907E] text-white w-full mt-auto">
        <nav className="mb-2">
          <a href="/vlogs" className="mx-2 underline">Vlogs</a>
          <a href="/recipes" className="mx-2 underline">Recipes & Tutorials</a>
          <a href="/store" className="mx-2 underline">Storefront</a>
        </nav>
        <p className="text-sm">© Alexis Griswold</p>
      </footer>
    </div>
  );
};

export default Recipes; 