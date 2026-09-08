import { useEffect } from 'react';

const DEFAULT_TITLE = 'Eternal Techworks | PUF & PIR Panels, Rockwool Insulation & Prefab Cabins | Pune';
const DEFAULT_DESCRIPTION = 'Eternal Techworks is a premier distributor & supplier of high-density PUF & PIR sandwich panels, Rockwool acoustic panels, Insuboard XPS, and custom prefabricated cabins in Kharadi, Pune, Maharashtra. Call +91 7030091321.';
const BASE_URL = 'https://eternaltechworks.com';

const SEO = ({ title, description, canonicalPath = '', keywords }) => {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title ? `${title} | Eternal Techworks` : DEFAULT_TITLE;
    document.title = fullTitle;

    // 2. Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }

    // 3. Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }

    // 4. Update Canonical Link
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      const canonicalUrl = canonicalPath ? `${BASE_URL}${canonicalPath}` : BASE_URL;
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // 5. Update Keywords Meta Tag if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // 6. Trigger Google Analytics page_view event
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-0KNLFD6X8J', {
        page_title: fullTitle,
        page_path: canonicalPath || window.location.pathname
      });
    }
  }, [title, description, canonicalPath, keywords]);

  return null;
};

export default SEO;
