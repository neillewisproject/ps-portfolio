import { useState, useEffect, useCallback, useRef } from 'react';
import { SECTIONS } from './data/resume';
import TopBar from './components/TopBar';
import Background from './components/Background';
import SectionInfo from './components/SectionInfo';
import MenuRibbon from './components/MenuRibbon';
import ContentPanel from './components/ContentPanel';

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => Math.min(prev + 1, SECTIONS.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        document.getElementById('primary-action-btn')?.click();
      }
    },
    [],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Touch / swipe navigation (mobile)
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - (touchStartY.current || 0));
    if (Math.abs(dx) > 50 && Math.abs(dx) > dy) {
      setActiveIndex((prev) =>
        dx < 0 ? Math.min(prev + 1, SECTIONS.length - 1) : Math.max(prev - 1, 0),
      );
    }
    touchStartX.current = null;
  }, []);

  // Background crossfade animation
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeSection = SECTIONS[activeIndex];

  return (
    <div
      className="relative w-full h-[100dvh] bg-black overflow-hidden font-sans selection:bg-blue-500/30"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Background activeIndex={activeIndex} />
      <TopBar />

      {/* Main content — pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col pb-3 sm:pb-4 md:pb-6 px-3 sm:px-6 md:px-16 z-20 pointer-events-none">
        <SectionInfo section={activeSection} isAnimating={isAnimating} />
        <MenuRibbon sections={SECTIONS} activeIndex={activeIndex} onSelect={setActiveIndex} />
        <ContentPanel sectionId={activeSection.id} />
      </div>

      {/* Global utility CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}