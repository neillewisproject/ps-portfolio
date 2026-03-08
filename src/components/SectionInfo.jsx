import { Play, MoreHorizontal } from 'lucide-react';

export default function SectionInfo({ section, isAnimating }) {
  return (
    <div
      className={`mb-3 sm:mb-5 max-w-2xl transition-all duration-700 pointer-events-auto
        ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
    >
      <p className="text-gray-400 font-semibold tracking-[0.2em] text-[10px] sm:text-xs md:text-sm uppercase mb-1 sm:mb-2 flex items-center gap-2">
        {section.subtitle}
      </p>
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight drop-shadow-lg leading-tight">
        {section.logoText}
      </h1>
      <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-8 backdrop-blur-sm bg-black/10 p-2 rounded-lg inline-block max-w-lg sm:max-w-xl md:max-w-2xl">
        {section.description}
      </p>

      <div className="flex items-center space-x-3 sm:space-x-4">
        <button
          id="primary-action-btn"
          className="group relative flex items-center justify-center space-x-2 bg-white text-black px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-bold text-xs sm:text-sm md:text-lg hover:bg-gray-200 active:scale-95 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          <Play className="fill-black group-hover:scale-110 transition-transform" size={14} />
          <span>{section.primaryAction}</span>
        </button>

        <button className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-black/40 border border-white/20 text-white hover:bg-white/20 active:scale-95 hover:scale-105 transition-all backdrop-blur-md">
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}
