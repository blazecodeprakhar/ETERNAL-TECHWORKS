import React from 'react';
import { Link } from 'react-router-dom';
import logoIcon from '../assets/logo.png';
import logoText from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 text-xs text-neutral-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-200">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <img src={logoIcon} alt="Logo Icon" className="h-8 w-auto text-primary-600" />
              <img src={logoText} alt="Eternal Techworks" className="h-12 w-auto" />
            </div>
            <p className="text-neutral-500 font-light leading-relaxed max-w-sm">
              A specialized industrial building solutions manufacturer driven by over 5+ years of combined experience and strict conformance to quality standards.
            </p>
          </div>

          {/* Quick Pages Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Useful Links</h4>
            <ul className="space-y-2 font-semibold">
              <li><Link to="/about" className="hover:text-primary-600 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-primary-600 transition-colors">Product Portfolio</Link></li>
              <li><Link to="/technical" className="hover:text-primary-600 transition-colors">Technical Data Sheets</Link></li>
              <li><Link to="/services" className="hover:text-primary-600 transition-colors">Installation &amp; Fabrication</Link></li>
              <li><Link to="/contact" className="hover:text-primary-600 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Social Channels &amp; Pages</h4>
            <p className="text-neutral-500 font-light mb-3">
              Follow our official business pages for recent project updates, site erection clips, and photos:
            </p>
            <div className="flex flex-wrap gap-2">
              <a 
                href="https://www.instagram.com/eternaltechworks?igsh=MWpkaXlmMzZmcHdydA==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-neutral-300 hover:border-primary-500/50 px-3.5 py-2 rounded-xl text-neutral-700 hover:text-primary-600 flex items-center space-x-2 transition-all shadow-xs"
              >
                <span className="font-semibold">Instagram</span>
              </a>
              <a 
                href="https://www.facebook.com/share/199ozXp71s/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-neutral-300 hover:border-primary-500/50 px-3.5 py-2 rounded-xl text-neutral-700 hover:text-primary-600 flex items-center space-x-2 transition-all shadow-xs"
              >
                <span className="font-semibold">Facebook Page</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/eternal-techworks-puf-pir/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-neutral-300 hover:border-primary-500/50 px-3.5 py-2 rounded-xl text-neutral-700 hover:text-primary-600 flex items-center space-x-2 transition-all shadow-xs"
              >
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-light text-center sm:text-left text-neutral-500">
            &copy; {new Date().getFullYear()} Eternal Techworks. All Rights Reserved. Manufactured in Pune, Maharashtra.
          </p>
          <div className="flex space-x-6 text-neutral-500 font-semibold">
            <Link to="/terms" className="hover:text-primary-600 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-primary-600 transition-colors">Privacy Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
