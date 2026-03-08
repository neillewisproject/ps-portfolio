import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Gamepad2, 
  User, 
  Briefcase, 
  Code2, 
  Mail, 
  Settings, 
  Search, 
  BatteryFull, 
  Wifi, 
  Trophy, 
  Play, 
  MoreHorizontal,
  ChevronRight,
  ChevronLeft,
  Star,
  ExternalLink,
  Github
} from 'lucide-react';

// --- DATA ---

const SECTIONS = [
  {
    id: 'home',
    title: 'Explore',
    subtitle: 'Full Stack Engineer',
    icon: Gamepad2,
    bgImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop',
    logoText: 'NEIL LEWIS',
    description: 'Versatile Full Stack Engineer specializing in Angular, .NET, Python, and Azure. Building scalable, secure, and high-performance systems — from pixel-perfect UI/UX to cloud infrastructure and ML-driven cost optimization.',
    primaryAction: 'View Resume',
  },
  {
    id: 'projects',
    title: 'Library',
    subtitle: 'Projects & Work',
    icon: Briefcase,
    bgImage: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2070&auto=format&fit=crop',
    logoText: 'PROJECT ARCHIVE',
    description: 'Enterprise projects built at Schneider Electric — Azure infrastructure tooling, cloud dashboards, inventory management, ML optimization models, and fully-automated CI/CD pipelines.',
    primaryAction: 'Browse Projects',
  },
  {
    id: 'skills',
    title: 'Trophies',
    subtitle: 'Skills & Certifications',
    icon: Trophy,
    bgImage: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=2070&auto=format&fit=crop',
    logoText: 'SKILL TREE',
    description: 'Full-stack arsenal: Angular, TypeScript, .NET Core, Node.js, Python, Azure, Docker, Terraform, and Figma. Microsoft Certified Azure Developer Associate.',
    primaryAction: 'View All Skills',
  },
  {
    id: 'experience',
    title: 'Activity',
    subtitle: 'Career History',
    icon: Code2,
    bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    logoText: 'CAREER LOG',
    description: 'Engineer at Schneider Electric (2022–2025). Pursuing M.Tech Software Engineering at MIT Manipal (8.6 CGPA). Microsoft Certified Azure Developer Associate (2024).',
    primaryAction: 'View Timeline',
  },
  {
    id: 'contact',
    title: 'Friends',
    subtitle: 'Network & Contact',
    icon: Mail,
    bgImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    logoText: 'MULTIPLAYER',
    description: 'Looking for a co-op partner? Connect on GitHub, LinkedIn, or drop a direct message to start a new professional collaboration.',
    primaryAction: 'Send Message',
  }
];

const PROJECTS = [
  { id: 1, title: 'Blueprints App', type: 'Full Stack', completion: '100%', tech: 'Angular · .NET · MongoDB · Azure', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Azure Dashboards', type: 'Frontend', completion: '100%', tech: 'Angular · Highcharts · Grafana', image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Inventory Builder', type: 'Frontend', completion: '100%', tech: 'Angular · Python · Azure', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'CI/CD Automation', type: 'DevOps', completion: '100%', tech: 'Python · GitHub Actions · Terraform · Jira', image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Org Provisioning API', type: 'Backend', completion: '100%', tech: '.NET · Azure · RBAC', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'ML VM Optimizer', type: 'ML / Python', completion: '100%', tech: 'Python · Azure Monitor · ML', image: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=800&auto=format&fit=crop' },
];

const SKILLS = [
  { id: 1, title: 'Frontend', grade: 'Platinum', desc: 'Angular · TypeScript · D3.js · Tailwind · Bootstrap · HTML/CSS', icon: Code2, color: 'text-blue-300' },
  { id: 2, title: 'Backend', grade: 'Gold', desc: '.NET Core · C# · Node.js · Express.js · Python · LINQ', icon: Settings, color: 'text-yellow-400' },
  { id: 3, title: 'Databases', grade: 'Gold', desc: 'MongoDB · MySQL · Azure Cosmos DB', icon: Star, color: 'text-yellow-400' },
  { id: 4, title: 'DevOps & Cloud', grade: 'Platinum', desc: 'Azure · Docker · Terraform · GitHub Actions · Azure DevOps · Linux', icon: Wifi, color: 'text-blue-300' },
  { id: 5, title: 'UI/UX Design', grade: 'Silver', desc: 'Figma · Adobe Creative Suite · Canva', icon: Gamepad2, color: 'text-gray-300' },
  { id: 6, title: 'Azure Certified', grade: 'Platinum', desc: 'Azure Developer Associate · ID: 995510485 · Passed 2024', icon: Trophy, color: 'text-blue-300' },
];

const ACHIEVEMENTS = [
  { id: 1, label: 'Best Graduate Engineer Trainee', year: '2022', color: 'text-yellow-400' },
  { id: 2, label: 'Accelerator Award', year: '2024', color: 'text-yellow-400' },
  { id: 3, label: 'Azure Developer Associate', year: '2024', color: 'text-blue-300' },
  { id: 4, label: 'R&D Day – 1st Place', year: '2023', color: 'text-green-400' },
  { id: 5, label: 'AI/ML Research Paper – ETAP Recognition', year: '2024', color: 'text-purple-400' },
];

const EXPERIENCE = [
  {
    id: 1,
    role: 'Engineer',
    company: 'Schneider Electric',
    period: '2022 – 2025',
    highlights: [
      'Blueprints App — Azure infra design & deployment tool',
      'Azure Dashboards — real-time cloud monitoring',
      'Org API — reduced provisioning 97% (2 days → 45 min)',
      'CI/CD — automated 25+ Azure resources via Terraform',
      'ML VM Optimizer — cost savings via Python & Azure Monitor',
    ],
  },
  {
    id: 2,
    role: 'M.Tech Software Engineering',
    company: 'MIT Manipal, Karnataka',
    period: '2023 – 2025',
    highlights: ['8.6 CGPA (as of 2nd Semester)', 'Pursuing'],
  },
  {
    id: 3,
    role: 'B.Tech Electronics & Communication',
    company: 'CMR Institute of Technology, Karnataka',
    period: '2018 – 2022',
    highlights: ['7.45 CGPA'],
  },
];

// --- COMPONENTS ---

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute top-0 right-0 left-0 p-4 md:p-8 flex justify-end items-center space-x-3 md:space-x-6 text-white/90 z-50">
      <div className="flex items-center space-x-2 md:space-x-4 bg-black/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10">
        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center border-2 border-white/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
          <User size={16} className="text-white" />
        </div>
        <span className="font-medium text-xs md:text-sm tracking-wide">NeilLewis_Dev</span>
      </div>
      
      <div className="flex items-center space-x-3 md:space-x-5 px-2 md:px-4 py-2">
        <Search size={18} className="hidden sm:block hover:text-white hover:scale-110 transition-all cursor-pointer" />
        <Settings size={18} className="hidden sm:block hover:text-white hover:scale-110 transition-all cursor-pointer" />
        <div className="hidden sm:block w-px h-5 bg-white/20"></div>
        <Wifi size={18} className="hidden sm:block" />
        <BatteryFull size={20} />
        <div className="w-px h-5 bg-white/20"></div>
        <span className="font-semibold tracking-wider text-sm md:text-lg">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ribbonRef = useRef(null);
  const itemRefs = useRef([]);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowRight') {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev < SECTIONS.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowLeft') {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      // Simulate click on primary action
      const btn = document.getElementById('primary-action-btn');
      if (btn) btn.click();
    }
  }, [activeIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Touch/swipe navigation for mobile
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = Math.abs(e.changedTouches[0].clientY - (touchStartY.current || 0));
    if (Math.abs(dx) > 50 && Math.abs(dx) > dy) {
      if (dx < 0) {
        setPrevIndex(activeIndex);
        setActiveIndex(prev => Math.min(prev + 1, SECTIONS.length - 1));
      } else {
        setPrevIndex(activeIndex);
        setActiveIndex(prev => Math.max(prev - 1, 0));
      }
    }
    touchStartX.current = null;
  }, [activeIndex]);

  // Center active ribbon item on any screen size
  useEffect(() => {
    const container = ribbonRef.current;
    const item = itemRefs.current[activeIndex];
    if (container && item) {
      const center = item.offsetLeft + item.offsetWidth / 2 - container.offsetWidth / 2;
      container.scrollTo({ left: center, behavior: 'smooth' });
    }
  }, [activeIndex]);

  // Handle background transition effect
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const activeSection = SECTIONS[activeIndex];

  return (
    <div
      className="relative w-full h-screen bg-black overflow-hidden font-sans selection:bg-blue-500/30"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Dynamic Backgrounds (Crossfade) */}
      {SECTIONS.map((section, idx) => (
        <div
          key={section.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${section.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}

      {/* Heavy gradient overlays for readability and console feel */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent h-2/3 top-auto z-10"></div>

      <TopBar />

      {/* Main Content Area */}
      <div className="absolute bottom-0 left-0 w-full flex flex-col pb-4 sm:pb-6 px-4 sm:px-8 md:px-16 z-20 pointer-events-none">
        
        {/* Active Section Info (Title & Description) */}
        <div className={`mb-3 sm:mb-5 max-w-2xl transition-all duration-700 pointer-events-auto
          ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
        >
          <p className="text-gray-400 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase mb-1 sm:mb-2 flex items-center gap-2">
            {activeSection.subtitle}
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight shadow-black drop-shadow-lg flex items-center gap-4">
            {activeSection.logoText}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-8 backdrop-blur-sm bg-black/10 p-2 rounded-lg inline-block">
            {activeSection.description}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button 
              id="primary-action-btn"
              className="group relative flex items-center justify-center space-x-2 bg-white text-black px-5 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-lg hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <Play className="fill-black group-hover:scale-110 transition-transform" size={18} />
              <span>{activeSection.primaryAction}</span>
            </button>
            
            <button className="flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/40 border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all backdrop-blur-md">
              <MoreHorizontal size={22} />
            </button>
          </div>
        </div>

        {/* Console Menu Ribbon (The "Cross-Media Bar") */}
        <div className="relative h-24 sm:h-28 pointer-events-auto mt-1 sm:mt-2">
          <div
            ref={ribbonRef}
            className="flex items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-hide h-full"
            style={{ paddingLeft: '50vw', paddingRight: '50vw' }}
          >
            {SECTIONS.map((section, idx) => {
              const Icon = section.icon;
              const isActive = idx === activeIndex;
              
              return (
                <div 
                  key={section.id}
                  ref={el => itemRefs.current[idx] = el}
                  onClick={() => setActiveIndex(idx)}
                  className={`
                    group relative flex-shrink-0 cursor-pointer transition-all duration-300 ease-out
                    ${isActive ? 'w-20 h-20 sm:w-24 sm:h-24 scale-100' : 'w-16 h-16 sm:w-20 sm:h-20 scale-90 opacity-60 hover:opacity-100'}
                  `}
                >
                  {/* Active Highlight Glow */}
                  {isActive && (
                    <div className="absolute -inset-2 bg-white rounded-3xl blur-md opacity-20 animate-pulse"></div>
                  )}
                  
                  {/* Icon Card */}
                  <div className={`
                    w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-md border-2 
                    transition-all duration-300 relative z-10 overflow-hidden
                    ${isActive ? 'bg-black/60 border-white text-white shadow-xl' : 'bg-black/40 border-transparent text-gray-300 hover:border-white/30'}
                  `}>
                    <Icon size={isActive ? 32 : 24} className={isActive ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' : ''} />
                    
                    {/* Inner active gradient */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                    )}
                  </div>

                  {/* Title Label (Only shows when active or hovered) */}
                  <div className={`
                    absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm font-medium tracking-widest
                    transition-all duration-300 
                    ${isActive ? 'opacity-100 text-white' : 'opacity-0 text-gray-400 group-hover:opacity-100'}
                  `}>
                    {section.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Context-Aware Content Area (Shows stuff based on active section) */}
        <div className="h-32 sm:h-40 mt-2 sm:mt-3 border-t border-white/10 pt-3 sm:pt-4 pointer-events-auto w-full relative">
           
           {/* Section: Projects (Library) */}
           {activeSection.id === 'projects' && (
             <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 scrollbar-hide animate-fade-in">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="relative w-44 h-28 sm:w-64 sm:h-36 rounded-xl overflow-hidden group cursor-pointer flex-shrink-0 border border-white/10 hover:border-white/50 transition-all">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-3 left-4">
                      <p className="text-xs font-mono text-blue-400 mb-1">{proj.type}</p>
                      <h3 className="text-white font-bold">{proj.title}</h3>
                      <p className="text-gray-300 text-xs mt-0.5 hidden sm:block">{proj.tech}</p>
                    </div>
                    <div className="absolute top-3 right-4 bg-black/60 backdrop-blur px-2 py-1 rounded text-xs font-bold text-white">
                      {proj.completion}
                    </div>
                  </div>
                ))}
             </div>
           )}

           {/* Section: Skills (Trophies) */}
           {activeSection.id === 'skills' && (
             <div className="flex space-x-3 sm:space-x-6 overflow-x-auto pb-4 scrollbar-hide animate-fade-in items-center h-full">
                {SKILLS.map((skill) => (
                  <div key={skill.id} className="flex items-center space-x-3 sm:space-x-4 bg-gray-900/50 backdrop-blur px-4 py-3 sm:px-6 sm:py-4 rounded-xl border border-white/5 min-w-[220px] sm:min-w-[300px] hover:bg-gray-800/80 transition-colors cursor-default">
                    <div className={`w-14 h-14 rounded-full bg-black/50 border-2 ${skill.grade === 'Platinum' ? 'border-blue-300' : skill.grade === 'Gold' ? 'border-yellow-400' : 'border-gray-300'} flex items-center justify-center`}>
                       <skill.icon size={24} className={skill.color} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold flex items-center gap-2">
                        {skill.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{skill.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
           )}

           {/* Section: Contact */}
           {activeSection.id === 'contact' && (
             <div className="flex space-x-3 sm:space-x-6 h-full items-start animate-fade-in">
                <button onClick={() => window.open('https://github.com/neillewisproject', '_blank', 'noopener,noreferrer')} className="flex flex-col items-center justify-center w-24 h-24 sm:w-36 sm:h-36 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 rounded-2xl transition-all group backdrop-blur-sm">
                  <Github size={24} className="text-blue-400 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm">GitHub</span>
                </button>
                <button className="flex flex-col items-center justify-center w-24 h-24 sm:w-36 sm:h-36 bg-blue-500/20 hover:bg-blue-500/40 border border-blue-400/30 rounded-2xl transition-all group backdrop-blur-sm">
                  <ExternalLink size={24} className="text-blue-300 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm">LinkedIn</span>
                </button>
                <button onClick={() => window.location.href = 'mailto:lewisneil2000@gmail.com'} className="flex flex-col items-center justify-center w-24 h-24 sm:w-36 sm:h-36 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400/30 rounded-2xl transition-all group backdrop-blur-sm">
                  <Mail size={24} className="text-purple-300 mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-white font-medium text-sm">Email</span>
                </button>
             </div>
           )}

           {/* Section: Experience */}
           {activeSection.id === 'experience' && (
             <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 scrollbar-hide animate-fade-in items-start h-full">
               {EXPERIENCE.map((exp) => (
                 <div key={exp.id} className="flex-shrink-0 min-w-[260px] sm:min-w-[320px] bg-gray-900/60 backdrop-blur border border-white/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 hover:border-white/30 transition-colors">
                   <p className="text-xs font-mono text-blue-400 mb-1">{exp.period}</p>
                   <h3 className="text-white font-bold text-sm">{exp.role}</h3>
                   <p className="text-gray-400 text-xs mb-2">{exp.company}</p>
                   <ul className="space-y-1">
                     {exp.highlights.map((h, i) => (
                       <li key={i} className="text-gray-300 text-xs flex items-start gap-1.5">
                         <span className="text-blue-400 mt-0.5">›</span>{h}
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
           )}

           {/* Section: Home — Achievements */}
           {activeSection.id === 'home' && (
             <div className="flex space-x-2 sm:space-x-3 overflow-x-auto pb-4 scrollbar-hide animate-fade-in items-center h-full">
               {ACHIEVEMENTS.map((a) => (
                 <div key={a.id} className="flex-shrink-0 flex items-center gap-2 bg-gray-900/60 backdrop-blur border border-white/10 rounded-full px-3 py-2 sm:px-4 sm:py-2.5 hover:border-white/30 transition-colors">
                   <Trophy size={13} className={a.color} />
                   <span className="text-white text-xs font-medium whitespace-nowrap">{a.label}</span>
                   <span className="text-gray-500 text-xs">{a.year}</span>
                 </div>
               ))}
             </div>
           )}

        </div>

      </div>

      {/* CSS for custom animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}