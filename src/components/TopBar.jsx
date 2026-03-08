import { useState, useEffect } from 'react';
import { User, Search, Settings, BatteryFull, Wifi } from 'lucide-react';

export default function TopBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 right-0 left-0 p-3 sm:p-4 md:p-8 flex justify-between sm:justify-end items-center space-x-3 md:space-x-6 text-white/90 z-50">
      <div className="flex items-center space-x-2 md:space-x-4 bg-black/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center border-2 border-white/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          <User size={14} className="text-white sm:hidden" />
          <User size={16} className="text-white hidden sm:block" />
        </div>
        <span className="font-medium text-xs md:text-sm tracking-wide">NeilLewis_Dev</span>
      </div>

      <div className="flex items-center space-x-3 md:space-x-5 px-2 md:px-4 py-2">
        <Search size={18} className="hidden sm:block hover:text-white hover:scale-110 transition-all cursor-pointer" />
        <Settings size={18} className="hidden sm:block hover:text-white hover:scale-110 transition-all cursor-pointer" />
        <div className="hidden sm:block w-px h-5 bg-white/20" />
        <Wifi size={18} className="hidden sm:block" />
        <BatteryFull size={18} className="sm:w-5 sm:h-5" />
        <div className="w-px h-5 bg-white/20" />
        <span className="font-semibold tracking-wider text-xs sm:text-sm md:text-lg">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}
