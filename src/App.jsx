import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Technical from './pages/Technical';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';

// Helper 1: Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Helper 2: Legacy hash link auto-redirect (e.g. /#/products -> /products)
function LegacyHashRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Handle old hash routes (e.g. domain.com/#/products)
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      const targetPath = window.location.hash.replace('#/', '/');
      window.history.replaceState(null, '', targetPath);
      navigate(targetPath, { replace: true });
    }
    
    // 2. Handle SPA 404 fallback query params (e.g. domain.com/?/products)
    const search = window.location.search;
    if (search && search.startsWith('?/')) {
      const targetPath = '/' + search.slice(2).replace(/&/g, '?');
      window.history.replaceState(null, '', targetPath);
      navigate(targetPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LegacyHashRedirect />
      <div className="min-h-screen bg-neutral-50 text-neutral-850 flex flex-col selection:bg-primary-500 selection:text-white">
        
        {/* Navigation Header */}
        <Header />

        {/* Page Content Routes */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/technical" element={<Technical />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Catch-all Wildcard Route for 404 Pages */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
