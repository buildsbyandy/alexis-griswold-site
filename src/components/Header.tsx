import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/vlogs', label: 'Vlogs' },
  { to: '/recipes', label: 'Recipes & Tutorials' },
  { to: '/store', label: 'Storefront' },
];

const Header = () => {
  const location = useLocation();
  return (
    <header className="w-full bg-[#cbb6a6] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-black">
          Alexis Griswold
        </Link>
        <nav className="flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg font-serif font-medium text-black transition-colors duration-200 hover:text-[#654C37] ${location.pathname === link.to ? 'underline' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 