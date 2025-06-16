import type { FC } from 'react';
import { FaVideo, FaBook, FaShoppingBasket } from 'react-icons/fa';

interface NavButtonProps {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const NavButton: FC<NavButtonProps> = ({ icon, text, href }) => (
  <a
    href={href}
    className="group flex flex-col items-center justify-center p-6 bg-[#E3D4C2] hover:bg-[#DADFDB] transition-colors duration-300 rounded-lg shadow-lg"
    role="button"
    aria-label={`Navigate to ${text}`}
  >
    <div className="text-4xl text-[#654C37] group-hover:text-[#383B26] mb-2">
      {icon}
    </div>
    <span className="text-lg font-medium text-[#654C37] group-hover:text-[#383B26]">
      {text}
    </span>
  </a>
);

const Home: FC = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative flex-1 flex flex-col items-center justify-center p-4 md:p-8"
        role="banner"
      >
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/placeholder-bg.jpg"
            aria-hidden="true"
          >
            <source src="/placeholder-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
            Elevate your mind, body and spirit
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12">
            with Alexis Griswold
          </p>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <NavButton
              icon={<FaVideo />}
              text="Vlogs"
              href="/vlogs"
            />
            <NavButton
              icon={<FaBook />}
              text="Recipes & Tutorials"
              href="/recipes"
            />
            <NavButton
              icon={<FaShoppingBasket />}
              text="Store Front"
              href="/store"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center bg-[#8F907E] text-white">
        <p className="text-sm">© Alexis Griswold</p>
      </footer>
    </main>
  );
};

export default Home; 