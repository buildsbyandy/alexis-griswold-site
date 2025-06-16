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
    <main className="flex flex-col w-screen min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative flex flex-col items-center justify-center flex-1 w-full h-full p-4 md:p-8"
        role="banner"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <img
            src="/test_1.JPG"
            alt="Background"
            className="object-cover w-full h-full"
            aria-hidden="true"
          />
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
      <footer className="py-4 text-center bg-[#8F907E] text-white w-full">
        <p className="text-sm">© Alexis Griswold</p>
      </footer>
    </main>
  );
};

export default Home; 