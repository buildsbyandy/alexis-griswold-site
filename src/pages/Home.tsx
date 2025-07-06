import type { FC } from 'react';
import NavButton from '../components/NavButton';

const Home: FC = () => {
  return (
    <main className="flex flex-col w-screen min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative flex flex-col items-center justify-center flex-1 w-full h-full p-4 md:p-8"
        role="banner"
      >
        {/* Responsive Background: Video (desktop) + Image (fallback/mobile) */}
        <div className="absolute inset-0 z-0 w-full h-full">
          {/* Image fallback - always visible, behind video on desktop */}
          <img
            src="/test_1.jpg"
            alt=""
            className="object-cover w-full h-full"
            aria-hidden="true"
          />
          
          {/* Video background - only visible on desktop (md+) with 80% opacity */}
          <video
            src="/alexisHome.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 object-cover w-full h-full opacity-80 md:block hidden"
            aria-label="Video behind the scenes of Alexis Griswold at a photoshoot."
            aria-hidden="true"
            tabIndex={-1}
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <h1 className="mb-4 font-serif text-4xl text-white md:text-6xl">
            Elevate your mind, body and spirit
          </h1>
          <p className="mb-12 text-xl text-white md:text-2xl">
            with Alexis Griswold
          </p>

          {/* Navigation Buttons */}
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
            <NavButton
              text="Vlogs"
              href="/vlogs"
            />
            <NavButton
              text="Recipes & Tutorials"
              href="/recipes"
            />
            <NavButton
              text="Store Front"
              href="/store"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center bg-[#8F907E] text-white w-full">
        <p className="text-sm">© Alexis Griswold</p>
      </footer>
    </main>
  );
};

export default Home; 