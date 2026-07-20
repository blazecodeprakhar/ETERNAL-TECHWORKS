import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoIcon from '../assets/logo.png';
import logoText from '../assets/logo-text.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/technical', label: 'Technical Hub' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
      <header className="sticky top-0 border-b border-neutral-200/80 z-40 glass">
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
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      <div 
        onClick={() => setIsMenuOpen(false)}
        className={`md:hidden fixed inset-0 bg-neutral-950/40 z-50 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 backdrop-blur-xs pointer-events-auto' : 'opacity-0 backdrop-blur-none pointer-events-none'
        }`}
      />

      {/* Mobile Right-Side Nav Drawer */}
      <div 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-72 max-w-[80vw] bg-white shadow-2xl z-[60] flex flex-col p-6 border-l border-neutral-200/80 transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isMenuOpen ? 'translate-x-0 duration-500' : 'translate-x-full duration-300'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-100">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2">
            <img src={logoIcon} alt="Eternal Techworks Icon" className="h-7 w-auto" />
            <img src={logoText} alt="Eternal Techworks" className="h-10 w-auto" />
          </Link>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="text-neutral-450 hover:text-neutral-900 p-1.5 rounded-lg focus:outline-none transition-transform hover:rotate-90 duration-300"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex-1 py-8 space-y-1.5 flex flex-col justify-start">
          {navLinks.map((link, idx) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              style={{
                transitionDelay: isMenuOpen ? `${100 + idx * 40}ms` : '0ms'
              }}
              className={({ isActive }) =>
                `block px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 transform ${
                  isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                } ${
                  isActive
                    ? 'text-primary-600 bg-primary-50/70 border border-primary-500/10'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 border border-transparent'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Drawer Footer CTA */}
        <div 
          style={{ transitionDelay: isMenuOpen ? `${100 + navLinks.length * 40}ms` : '0ms' }}
          className={`pt-6 border-t border-neutral-100 transition-all duration-300 transform ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
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
    </>
  );
};

export default Header;
