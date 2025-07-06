import type { FC } from 'react';
import VideoBackground from '../components/VideoBackground';
import NavButton from '../components/NavButton';
import { siteConfig } from '../config/site.config';

const Home: FC = () => {
  return (
    <main className="flex flex-col w-screen min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative flex flex-col items-center justify-center flex-1 w-full h-full p-4 md:p-8"
        role="banner"
      >
        {/* Background Video */}
        <VideoBackground 
          src={siteConfig.home.backgroundVideo.src}
          poster={siteConfig.home.backgroundVideo.poster}
        />

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