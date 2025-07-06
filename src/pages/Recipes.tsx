import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

const shortsVideos = [
  {
    id: 'cCBFC74nBo4',
    title: 'Short 1',
    embedUrl: 'https://www.youtube.com/embed/cCBFC74nBo4',
    thumb: 'https://img.youtube.com/vi/cCBFC74nBo4/hqdefault.jpg',
  },
  {
    id: 'nrJr-T049Ak',
    title: 'Short 2',
    embedUrl: 'https://www.youtube.com/embed/nrJr-T049Ak',
    thumb: 'https://img.youtube.com/vi/nrJr-T049Ak/hqdefault.jpg',
  },
  {
    id: 'tCC0hCcN-4E',
    title: 'Short 3',
    embedUrl: 'https://www.youtube.com/embed/tCC0hCcN-4E',
    thumb: 'https://img.youtube.com/vi/tCC0hCcN-4E/hqdefault.jpg',
  },
  {
    id: 'NYq4qGThwgM',
    title: 'Short 4',
    embedUrl: 'https://www.youtube.com/embed/NYq4qGThwgM',
    thumb: 'https://img.youtube.com/vi/NYq4qGThwgM/hqdefault.jpg',
  },
  {
    id: 'b4fDGZ5M9r8',
    title: 'Short 5',
    embedUrl: 'https://www.youtube.com/embed/b4fDGZ5M9r8',
    thumb: 'https://img.youtube.com/vi/b4fDGZ5M9r8/hqdefault.jpg',
  },
];

// Get indices for left, center, right (only 3 visible)
const getThreeVisibleIndices = (activeIndex: number, length: number) => [
  (activeIndex + length - 1) % length, // left
  activeIndex,                        // center
  (activeIndex + 1) % length          // right
];

const Recipes: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalRecipe, setModalRecipe] = useState<typeof placeholderRecipes[0] | null>(null);
  const [modalCarousel, setModalCarousel] = useState<typeof shortsVideos[0] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredRecipes = placeholderRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase()) || recipe.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + shortsVideos.length) % shortsVideos.length);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % shortsVideos.length);

  const visibleIndices = getThreeVisibleIndices(activeIndex, shortsVideos.length);

  // Carousel scroll ref
  const carouselRef = React.useRef<HTMLDivElement>(null);

  // Scroll to the active card
  React.useEffect(() => {
    if (carouselRef.current) {
      const card = carouselRef.current.querySelectorAll('[data-carousel-card]')[activeIndex];
      if (card && 'scrollIntoView' in card) {
        (card as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeIndex]);

  return (
    <div className="w-screen min-h-screen bg-[#cbb6a6] text-[#383B26] font-serif flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-16 px-4 gap-12 md:gap-24 items-center min-h-screen">
        {/* Inspiring Message */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-wide text-center md:text-left text-black">RECIPES & TUTORIALS</h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-xl text-center md:text-left whitespace-pre-line">
            {inspiringMessage}
          </p>
        </div>
        {/* Carousel (desktop right, mobile below) */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center mb-6 md:mb-0">
          <div
            className="flex flex-row justify-center items-center gap-0 w-full max-w-3xl px-2"
            role="region"
            aria-label="Recipe video carousel"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'ArrowLeft') handlePrev();
              if (e.key === 'ArrowRight') handleNext();
            }}
          >
            {visibleIndices.map((idx, pos) => {
              const item = shortsVideos[idx];
              const isActive = pos === 1;
              const isSide = pos !== 1;
              return (
                <div
                  key={item.id}
                  className={`snap-center flex-shrink-0 transition-all duration-500 cursor-pointer flex flex-col items-center justify-center
                    ${isActive ? 'z-10 scale-110 opacity-100' : 'z-5 scale-95 opacity-60'}
                  `}
                  style={{ width: '200px', maxWidth: '80vw', marginLeft: isSide ? '-40px' : '0', marginRight: isSide ? '-40px' : '0' }}
                  onClick={() => { setActiveIndex(idx); setModalCarousel(item); }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open video: ${item.title}`}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { setActiveIndex(idx); setModalCarousel(item); } }}
                >
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="aspect-[9/16] w-full h-auto rounded-xl shadow-lg object-cover"
                  />
                  {isActive && (
                    <span className="bg-black/60 text-white rounded-full px-3 py-1 text-xs mt-2">YouTube Reel</span>
                  )}
                </div>
              );
            })}
          </div>
          {/* Arrows below carousel */}
          <div className="flex justify-between w-full max-w-3xl mt-6 px-8">
            <button
              className="bg-[#E3D4C2] rounded-full p-2 shadow hover:bg-[#B89178] transition-colors"
              onClick={handlePrev}
              aria-label="Previous video"
            >
              <FaChevronLeft size={28} />
            </button>
            <button
              className="bg-[#E3D4C2] rounded-full p-2 shadow hover:bg-[#B89178] transition-colors"
              onClick={handleNext}
              aria-label="Next video"
            >
              <FaChevronRight size={28} />
            </button>
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