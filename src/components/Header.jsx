import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Award } from 'lucide-react';
import logoIcon from '../assets/logo.png';
import logoText from '../assets/logo-text.png';

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
          <Link to="/" className="flex items-center space-x-2.5 group">
            <img src={logoIcon} alt="Eternal Techworks Icon" className="h-9 w-auto transition-transform group-hover:scale-105 duration-300" />
            <img src={logoText} alt="Eternal Techworks" className="h-14 w-auto" />
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
              className="text-neutral-550 hover:text-primary-600 p-2 rounded-xl focus:outline-none flex flex-col justify-center items-center w-10 h-10 relative z-50 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between items-center relative">
                <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 absolute ${isMenuOpen ? 'rotate-45 top-2.5' : 'top-0'}`} />
                <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-200 absolute top-2.5 ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`} />
                <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 absolute ${isMenuOpen ? '-rotate-45 top-2.5' : 'top-5'}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/96 backdrop-blur-md shadow-lg border-b border-neutral-200/80 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] transform origin-top ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 scale-y-100 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-1.5 sm:px-6 text-center">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionDelay: isMenuOpen ? `${idx * 40}ms` : '0ms'
              }}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                } ${
                  isActive
                    ? 'text-primary-600 bg-primary-50/80 border border-primary-500/10'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 border border-transparent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div 
            style={{ transitionDelay: isMenuOpen ? `${navLinks.length * 40}ms` : '0ms' }}
            className={`pt-4 transition-all duration-300 transform ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <Link 
              to="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-primary-600 hover:bg-primary-500 active:bg-primary-700 text-white block px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-center shadow-md shadow-primary-500/10 active:scale-98 transition-all duration-200"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
