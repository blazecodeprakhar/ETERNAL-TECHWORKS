import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Home, Layers, Wrench, PhoneCall, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="animate-fade-in bg-neutral-50 min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <SEO 
        title="404 - Page Not Found"
        description="The requested page could not be found on Eternal Techworks. Explore our PUF panels, PIR sandwich boards, or contact our sales office in Pune."
        canonicalPath="/404"
      />

      <div className="max-w-xl w-full text-center space-y-8">
        {/* Error Badge */}
        <div className="inline-flex items-center space-x-2 bg-primary-50 border border-primary-200 text-primary-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
          <AlertCircle className="w-4 h-4" />
          <span>Error 404 • Page Not Found</span>
        </div>

        {/* Headline & Description */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Looking for Insulation Solutions?
          </h1>
          <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
            The page link you followed may have moved or doesn't exist. Select a section below to get back on track.
          </p>
        </div>

        {/* Quick Route Shortcuts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-2">
          <Link 
            to="/" 
            className="p-4 bg-white border border-neutral-200 rounded-2xl hover:border-primary-500/40 hover:shadow-md transition-all group"
          >
            <Home className="w-5 h-5 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
            <h2 className="text-xs font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">Homepage</h2>
            <p className="text-[11px] text-neutral-500">Return to root overview</p>
          </Link>

          <Link 
            to="/products" 
            className="p-4 bg-white border border-neutral-200 rounded-2xl hover:border-primary-500/40 hover:shadow-md transition-all group"
          >
            <Layers className="w-5 h-5 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
            <h2 className="text-xs font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">Products Catalog</h2>
            <p className="text-[11px] text-neutral-500">PUF, PIR & Rockwool panels</p>
          </Link>

          <Link 
            to="/contact" 
            className="p-4 bg-white border border-neutral-200 rounded-2xl hover:border-primary-500/40 hover:shadow-md transition-all group"
          >
            <PhoneCall className="w-5 h-5 text-primary-600 mb-2 group-hover:scale-110 transition-transform" />
            <h2 className="text-xs font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">Contact Sales</h2>
            <p className="text-[11px] text-neutral-500">Speak with Sagar More</p>
          </Link>
        </div>

        {/* Return Button */}
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-neutral-950 hover:bg-primary-600 text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
