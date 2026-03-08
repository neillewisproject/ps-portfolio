import { SECTIONS } from '../data/resume';

export default function Background({ activeIndex }) {
  return (
    <>
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

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent h-2/3 top-auto z-10" />
    </>
  );
}
