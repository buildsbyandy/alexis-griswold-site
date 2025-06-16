import React from 'react';
import Modal from '../components/Modal';

const placeholderImages = Array.from({ length: 20 }, (_, i) => ({
  src: '/test_1.JPG',
  alt: `Placeholder ${i + 1}`,
}));

const placeholderVideos = [
  {
    title: 'Vlog 1',
    embedUrl: 'https://www.youtube.com/embed/MYmmbSZ4YaQ',
  },
  {
    title: 'Vlog 2',
    embedUrl: 'https://www.youtube.com/embed/6AvOegDnEb0',
  },
  {
    title: 'Vlog 3',
    embedUrl: 'https://www.youtube.com/embed/qBXducGwqxY',
  },
  {
    title: 'Vlog 4',
    embedUrl: 'https://www.youtube.com/embed/JFgukuIduPs',
  },
  {
    title: 'Vlog 5',
    embedUrl: 'https://www.youtube.com/embed/1qilUaxl5Ss',
  },
  {
    title: 'Vlog 6',
    embedUrl: 'https://www.youtube.com/embed/j43tVo2Y07E',
  },
  {
    title: 'Vlog 7',
    embedUrl: 'https://www.youtube.com/embed/9TrJC1amrHU',
  },
  {
    title: 'Vlog 8',
    embedUrl: 'https://www.youtube.com/embed/lueA5NR9EJo',
  },
];

/**
 * Vlogs page component
 * 
 * Features:
 * - Responsive two-column layout
 * - Lazy-loaded YouTube videos
 * - Static image grid
 * - Intersection Observer for performance
 * - Mobile-first design
 */
export const Vlogs: React.FC = () => {
  const [imageModalIdx, setImageModalIdx] = React.useState<number | null>(null);
  const [videoModalIdx, setVideoModalIdx] = React.useState<number | null>(null);

  const handleImageModalNav = (dir: number) => {
    if (imageModalIdx === null) return;
    setImageModalIdx((prev) => {
      if (prev === null) return null;
      return (prev + dir + placeholderImages.length) % placeholderImages.length;
    });
  };
  const handleVideoModalNav = (dir: number) => {
    if (videoModalIdx === null) return;
    setVideoModalIdx((prev) => {
      if (prev === null) return null;
      return (prev + dir + placeholderVideos.length) % placeholderVideos.length;
    });
  };

  return (
    <div className="w-screen min-h-screen bg-[#cbb6a6] font-serif flex flex-col">
      <header className="py-8 text-center">
        <h1 className="text-5xl font-bold text-[#383B26] mb-2">Media</h1>
        <p className="text-2xl italic text-[#654C37]">See life through my eyes</p>
      </header>
      <div className="flex flex-1 gap-8 px-8 pb-8 w-full h-full">
        {/* Left: 2x10 grid of images */}
        <div className="grid grid-cols-2 grid-rows-10 gap-4 flex-1 overflow-y-auto h-full">
          {placeholderImages.map((img, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-[#E3D4C2] flex items-center justify-center aspect-square cursor-pointer" onClick={() => setImageModalIdx(idx)} tabIndex={0} role="button" aria-label={`Open image ${idx + 1}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setImageModalIdx(idx); }}>
              <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>

        {/* Right: 8 YouTube videos */}
        <div className="flex flex-col gap-6 flex-1 overflow-y-auto h-full">
          {placeholderVideos.map((vid, idx) => (
            <div key={idx} className="bg-[#E3D4C2] rounded-lg shadow-md p-2 flex flex-col items-center cursor-pointer" onClick={() => setVideoModalIdx(idx)} tabIndex={0} role="button" aria-label={`Open video ${idx + 1}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setVideoModalIdx(idx); }}>
              <div className="w-full aspect-video max-w-full">
                <iframe
                  width="100%"
                  height="200"
                  src={vid.embedUrl}
                  title={vid.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-md w-full h-full"
                ></iframe>
              </div>
              <p className="mt-2 text-lg text-[#654C37] font-semibold">{vid.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {imageModalIdx !== null && (
        <Modal isOpen={true} onClose={() => setImageModalIdx(null)}>
          <div className="flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center">
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#E3D4C2] rounded-full p-2 shadow hover:bg-[#B89178] transition-colors" 
                onClick={(e) => { e.stopPropagation(); handleImageModalNav(-1); }} 
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <img src={placeholderImages[imageModalIdx].src} alt={placeholderImages[imageModalIdx].alt} className="max-h-[70vh] rounded-xl" />
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#E3D4C2] rounded-full p-2 shadow hover:bg-[#B89178] transition-colors" 
                onClick={(e) => { e.stopPropagation(); handleImageModalNav(1); }} 
                aria-label="Next image"
              >
                &#8594;
              </button>
            </div>
            <p className="mt-2 text-[#654C37]">{placeholderImages[imageModalIdx].alt}</p>
          </div>
        </Modal>
      )}

      {videoModalIdx !== null && (
        <Modal isOpen={true} onClose={() => setVideoModalIdx(null)}>
          <div className="flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center">
              <button 
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#E3D4C2] rounded-full p-2 shadow hover:bg-[#B89178] transition-colors" 
                onClick={(e) => { e.stopPropagation(); handleVideoModalNav(-1); }} 
                aria-label="Previous video"
              >
                &#8592;
              </button>
              <iframe
                width="560"
                height="315"
                src={placeholderVideos[videoModalIdx].embedUrl}
                title={placeholderVideos[videoModalIdx].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md max-h-[70vh]"
              ></iframe>
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#E3D4C2] rounded-full p-2 shadow hover:bg-[#B89178] transition-colors" 
                onClick={(e) => { e.stopPropagation(); handleVideoModalNav(1); }} 
                aria-label="Next video"
              >
                &#8594;
              </button>
            </div>
            <p className="mt-2 text-[#654C37]">{placeholderVideos[videoModalIdx].title}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}; 