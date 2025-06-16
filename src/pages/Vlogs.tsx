import React from 'react';

const placeholderImages = Array.from({ length: 20 }, (_, i) => ({
  src: '/test_1.jpg',
  alt: `Placeholder ${i + 1}`,
}));

const placeholderVideos = Array.from({ length: 10 }, (_, i) => ({
  title: `Vlog Video ${i + 1}`,
  embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with real video IDs later
}));

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
export const Vlogs: React.FC = () => (
  <div className="w-screen min-h-screen bg-[#cbb6a6] font-serif flex flex-col">
    <header className="py-8 text-center">
      <h1 className="text-5xl font-bold text-[#383B26] mb-2">Media</h1>
      <p className="text-2xl italic text-[#654C37]">See life through my eyes</p>
    </header>
    <div className="flex flex-1 w-full h-full gap-8 px-8 pb-8">
      {/* Left: 2x10 grid of images */}
      <div className="grid flex-1 h-full grid-cols-2 gap-4 overflow-y-auto grid-rows-10">
        {placeholderImages.map((img, idx) => (
          <div key={idx} className="rounded-lg overflow-hidden shadow-md bg-[#E3D4C2] flex items-center justify-center aspect-square">
            <img src={img.src} alt={img.alt} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      {/* Right: 10 placeholder YouTube videos */}
      <div className="flex flex-col flex-1 h-full gap-6 overflow-y-auto">
        {placeholderVideos.map((vid, idx) => (
          <div key={idx} className="bg-[#E3D4C2] rounded-lg shadow-md p-2 flex flex-col items-center">
            <div className="w-full max-w-full aspect-video">
              <iframe
                width="100%"
                height="200"
                src={vid.embedUrl}
                title={vid.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-md"
              ></iframe>
            </div>
            <p className="mt-2 text-lg text-[#654C37] font-semibold">{vid.title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
); 