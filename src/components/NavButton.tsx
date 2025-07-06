import type { FC } from 'react';

interface NavButtonProps {
  text: string;
  href: string;
}

/**
 * NavButton component for navigation links
 * Renders outlined buttons with hover effects using Playfair Display font
 */
const NavButton: FC<NavButtonProps> = ({ text, href }) => {
  return (
    <a
      href={href}
      className="group flex items-center justify-center px-6 py-2 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#654C37] transition-colors duration-200 rounded-lg shadow-lg"
      role="button"
      aria-label={`Navigate to ${text}`}
    >
      <span className="text-xl font-serif group-hover:text-[#654C37]">
        {text}
      </span>
    </a>
  );
};

export default NavButton; 