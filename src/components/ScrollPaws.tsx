'use client';

import { useEffect, useState } from 'react';

interface PawPrint {
  id: string;
  x: number;
  y: number;
  opacity: number;
  rotation: number;
  size: number;
}

const ScrollPaws = () => {
  const [paws, setPaws] = useState<PawPrint[]>([]);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Define safe zones (margins) where paw prints can appear
  const getSafePosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const contentWidth = Math.min(viewportWidth, 768); // Max width of content
    const margin = (viewportWidth - contentWidth) / 2;
    
    // Determine if paw should be on left or right side
    const isLeftSide = Math.random() > 0.5;
    
    // Calculate x position within the margin
    const x = isLeftSide 
      ? Math.random() * (margin - 50) + 20 // Left margin
      : viewportWidth - (Math.random() * (margin - 50) + 20); // Right margin
    
    // Calculate y position, avoiding the top navigation area
    const y = Math.random() * (viewportHeight - 100) + 80; // Avoid top 80px (nav area)
    
    return { x, y };
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY);
      
      // Only create new paw prints if we've scrolled enough
      if (scrollDelta > 50) {
        const { x, y } = getSafePosition();
        const newPaw: PawPrint = {
          id: `${Date.now()}-${Math.random()}`,
          x,
          y,
          opacity: 1,
          rotation: Math.random() * 30 - 15, // Slight rotation for natural look
          size: Math.random() * 10 + 20, // Random size between 20-30px
        };

        setPaws(prev => [...prev, newPaw]);
        setLastScrollY(currentScrollY);

        // Remove the paw print after animation
        setTimeout(() => {
          setPaws(prev => prev.filter(paw => paw.id !== newPaw.id));
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {paws.map(paw => (
        <div
          key={paw.id}
          className="cat-paw absolute transition-all duration-1000"
          style={{
            left: `${paw.x}px`,
            top: `${paw.y}px`,
            opacity: paw.opacity,
            transform: `rotate(${paw.rotation}deg)`,
            width: `${paw.size}px`,
            height: `${paw.size}px`,
            animation: 'paw-fade 2s ease-out forwards',
          }}
        />
      ))}
    </div>
  );
};

export default ScrollPaws; 