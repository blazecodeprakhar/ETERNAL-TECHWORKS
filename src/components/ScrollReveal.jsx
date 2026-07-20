import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Wraps any layout block to perform a premium fade-in-up transition when it enters the viewport.
 */
export const ScrollReveal = ({ children, className = '', delay = 0, duration = 800 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          // Once it enters, we stop observing to keep it visible
          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px', // Trigger slightly before it fully appears
      }
    );

    const currentTarget = containerRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isIntersecting 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-12 scale-[0.98] pointer-events-none'
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
