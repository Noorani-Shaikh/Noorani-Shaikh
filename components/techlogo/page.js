// components/TechLogo.jsx
import Image from 'next/image';

const techLogos = {
  react: '/tech-logos/React-icon.svg',
  github: '/tech-logos/github-invertocat.svg',
  tailwind: '/tech-logos/tailwindcss-mark.svg',
  mongodb: '/tech-logos/MongoDB_Logo.svg',
  express: '/tech-logos/expressjs-icon.svg',
};

export default function TechLogo({ tech, name, size = 40 }) {
  const logoPath = techLogos[tech];
  
  if (!logoPath) return null;

  return (
    <div className="flex flex-col items-center p-4 rounded-xl border border-slate-800/50 bg-slate-800/20 hover:scale-105 transition-transform duration-300">
      <div className="mb-2">
        <Image
          src={logoPath}
          alt={`${name} logo`}
          width={size}
          height={size}
          className="h-auto"
        />
      </div>
      <span className="text-sm font-medium text-white">
        {name}
      </span>
    </div>
  );
}