import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Award } from 'lucide-react';
import logoIcon from '../assets/logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/technical', label: 'Technical Hub' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-neutral-200/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Link */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={logoIcon} alt="Eternal Techworks Logo" className="w-12 h-12 text-primary-600 transition-transform group-hover:scale-105 duration-350" />
            <div>
              <span className="text-xl font-extrabold tracking-tight text-neutral-900 block">
                ETERNAL <span className="text-primary-600">TECHWORKS</span>
              </span>
              <span className="text-[10px] text-neutral-500 tracking-widest uppercase block -mt-1 font-semibold">
                Insulate. Build. Deliver.
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 py-2 px-1 relative ${
                    isActive
                      ? 'text-primary-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-600'
                      : 'text-neutral-600 hover:text-primary-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Call Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-primary-600 hover:bg-primary-500 text-white px-5 py-2.5 rounded-xl text-xs uppercase font-bold tracking-wider transition-all duration-300 shadow-md shadow-primary-500/10 hover:shadow-primary-500/20 hover:-translate-y-0.5"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-500 hover:text-neutral-900 p-2 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isMenuOpen && (
        <div className="md:hidden glass border-b border-neutral-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 w-full bg-primary-600 hover:bg-primary-500 text-white block px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-center"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
