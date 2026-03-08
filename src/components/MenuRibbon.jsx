import { useRef, useEffect } from 'react';

export default function MenuRibbon({ sections, activeIndex, onSelect }) {
  const ribbonRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const container = ribbonRef.current;
    const item = itemRefs.current[activeIndex];
    if (container && item) {
      const center = item.offsetLeft + item.offsetWidth / 2 - container.offsetWidth / 2;
      container.scrollTo({ left: center, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div className="relative h-20 sm:h-24 md:h-28 pointer-events-auto mt-1 sm:mt-2">
      <div
        ref={ribbonRef}
        className="flex items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide h-full"
        style={{ paddingLeft: '50vw', paddingRight: '50vw' }}
      >
        {sections.map((section, idx) => {
          const Icon = section.icon;
          const isActive = idx === activeIndex;

          return (
            <div
              key={section.id}
              ref={(el) => (itemRefs.current[idx] = el)}
              onClick={() => onSelect(idx)}
              className={`
                group relative flex-shrink-0 cursor-pointer transition-all duration-300 ease-out
                ${isActive
                  ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 scale-100'
                  : 'w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 scale-90 opacity-60 hover:opacity-100'}
              `}
            >
              {isActive && (
                <div className="absolute -inset-2 bg-white rounded-3xl blur-md opacity-20 animate-pulse" />
              )}

              <div
                className={`
                  w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-md border-2
                  transition-all duration-300 relative z-10 overflow-hidden
                  ${isActive
                    ? 'bg-black/60 border-white text-white shadow-xl'
                    : 'bg-black/40 border-transparent text-gray-300 hover:border-white/30'}
                `}
              >
                <Icon
                  size={isActive ? 28 : 20}
                  className={`sm:w-auto sm:h-auto ${isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : ''}`}
                />

                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                )}
              </div>

              <div
                className={`
                  absolute -top-6 sm:-top-7 md:-top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] sm:text-xs md:text-sm font-medium tracking-widest
                  transition-all duration-300
                  ${isActive ? 'opacity-100 text-white' : 'opacity-0 text-gray-400 group-hover:opacity-100'}
                `}
              >
                {section.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
