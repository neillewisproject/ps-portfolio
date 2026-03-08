import { Trophy, Github, ExternalLink, Mail } from 'lucide-react';
import { PROJECTS, SKILLS, ACHIEVEMENTS, EXPERIENCE } from '../data/resume';

function ProjectsPanel() {
  return (
    <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 scrollbar-hide animate-fade-in">
      {PROJECTS.map((proj) => (
        <div
          key={proj.id}
          className="relative w-36 h-24 sm:w-52 sm:h-32 md:w-64 md:h-36 rounded-xl overflow-hidden group cursor-pointer flex-shrink-0 border border-white/10 hover:border-white/50 active:scale-[0.98] transition-all"
        >
          <img
            src={proj.image}
            alt={proj.title}
            loading="lazy"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute bottom-2 left-3 sm:bottom-3 sm:left-4">
            <p className="text-[10px] sm:text-xs font-mono text-blue-400 mb-0.5 sm:mb-1">{proj.type}</p>
            <h3 className="text-white font-bold text-xs sm:text-sm md:text-base">{proj.title}</h3>
            <p className="text-gray-300 text-[10px] sm:text-xs mt-0.5 line-clamp-1">{proj.tech}</p>
          </div>
          <div className="absolute top-2 right-2 sm:top-3 sm:right-4 bg-black/60 backdrop-blur px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-[10px] sm:text-xs font-bold text-white">
            {proj.completion}
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillsPanel() {
  return (
    <div className="flex space-x-2 sm:space-x-4 md:space-x-6 overflow-x-auto pb-4 scrollbar-hide animate-fade-in items-center h-full">
      {SKILLS.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.id}
            className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 bg-gray-900/50 backdrop-blur px-3 py-2.5 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-xl border border-white/5 min-w-[180px] sm:min-w-[240px] md:min-w-[300px] hover:bg-gray-800/80 transition-colors cursor-default"
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 rounded-full bg-black/50 border-2 ${
                skill.grade === 'Platinum'
                  ? 'border-blue-300'
                  : skill.grade === 'Gold'
                  ? 'border-yellow-400'
                  : 'border-gray-300'
              } flex items-center justify-center`}
            >
              <Icon size={18} className={`sm:w-5 sm:h-5 md:w-6 md:h-6 ${skill.color}`} />
            </div>
            <div className="min-w-0">
              <h4 className="text-white font-bold text-xs sm:text-sm md:text-base truncate">{skill.title}</h4>
              <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm line-clamp-2">{skill.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContactPanel() {
  const links = [
    {
      label: 'GitHub',
      icon: Github,
      bgClass: 'bg-blue-600/20 hover:bg-blue-600/40 border-blue-500/30',
      iconClass: 'text-blue-400',
      onClick: () => window.open('https://github.com/neillewisproject', '_blank', 'noopener,noreferrer'),
    },
    {
      label: 'LinkedIn',
      icon: ExternalLink,
      bgClass: 'bg-blue-500/20 hover:bg-blue-500/40 border-blue-400/30',
      iconClass: 'text-blue-300',
      onClick: () => {},
    },
    {
      label: 'Email',
      icon: Mail,
      bgClass: 'bg-purple-500/20 hover:bg-purple-500/40 border-purple-400/30',
      iconClass: 'text-purple-300',
      onClick: () => { window.location.href = 'mailto:lewisneil2000@gmail.com'; },
    },
  ];

  return (
    <div className="flex space-x-2 sm:space-x-4 md:space-x-6 h-full items-start animate-fade-in">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <button
            key={link.label}
            onClick={link.onClick}
            className={`flex flex-col items-center justify-center w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 ${link.bgClass} border rounded-2xl transition-all group backdrop-blur-sm active:scale-95`}
          >
            <Icon size={20} className={`sm:w-6 sm:h-6 ${link.iconClass} mb-1.5 sm:mb-2 md:mb-3 group-hover:scale-110 transition-transform`} />
            <span className="text-white font-medium text-xs sm:text-sm">{link.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function ExperiencePanel() {
  return (
    <div className="flex space-x-3 sm:space-x-4 overflow-x-auto pb-4 scrollbar-hide animate-fade-in items-start h-full">
      {EXPERIENCE.map((exp) => (
        <div
          key={exp.id}
          className="flex-shrink-0 min-w-[220px] sm:min-w-[280px] md:min-w-[320px] bg-gray-900/60 backdrop-blur border border-white/10 rounded-xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 hover:border-white/30 transition-colors"
        >
          <p className="text-[10px] sm:text-xs font-mono text-blue-400 mb-0.5 sm:mb-1">{exp.period}</p>
          <h3 className="text-white font-bold text-xs sm:text-sm">{exp.role}</h3>
          <p className="text-gray-400 text-[10px] sm:text-xs mb-1.5 sm:mb-2">{exp.company}</p>
          <ul className="space-y-0.5 sm:space-y-1">
            {exp.highlights.map((h, i) => (
              <li key={i} className="text-gray-300 text-[10px] sm:text-xs flex items-start gap-1 sm:gap-1.5">
                <span className="text-blue-400 mt-0.5 flex-shrink-0">›</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function AchievementsPanel() {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 overflow-x-auto pb-4 scrollbar-hide animate-fade-in items-center h-full">
      {ACHIEVEMENTS.map((a) => (
        <div
          key={a.id}
          className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 bg-gray-900/60 backdrop-blur border border-white/10 rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 hover:border-white/30 transition-colors"
        >
          <Trophy size={11} className={`sm:w-3 sm:h-3 ${a.color}`} />
          <span className="text-white text-[10px] sm:text-xs font-medium whitespace-nowrap">{a.label}</span>
          <span className="text-gray-500 text-[10px] sm:text-xs">{a.year}</span>
        </div>
      ))}
    </div>
  );
}

export default function ContentPanel({ sectionId }) {
  return (
    <div className="h-28 sm:h-32 md:h-40 mt-2 sm:mt-3 border-t border-white/10 pt-2 sm:pt-3 md:pt-4 pointer-events-auto w-full relative">
      {sectionId === 'projects' && <ProjectsPanel />}
      {sectionId === 'skills' && <SkillsPanel />}
      {sectionId === 'contact' && <ContactPanel />}
      {sectionId === 'experience' && <ExperiencePanel />}
      {sectionId === 'home' && <AchievementsPanel />}
    </div>
  );
}
