"use client";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiVercel, SiTypescript } from "react-icons/si";

const techList = [
  { 
    name: "React", 
    icon: <FaReact className="text-[#61DBFB]" size={20} />,
    color: "#61DBFB",
    linear: "from-cyan-400 to-blue-500"
  },
  { 
    name: "Next.js", 
    icon: <SiNextdotjs size={20} />,
    color: "#000000",
    linear: "from-gray-900 to-black"
  },
  { 
    name: "Node.js", 
    icon: <FaNodeJs className="text-[#3C873A]" size={20} />,
    color: "#3C873A",
    linear: "from-green-500 to-emerald-600"
  },
  { 
    name: "Express", 
    icon: <SiExpress size={20} />,
    color: "#000000",
    linear: "from-gray-800 to-gray-900"
  },
  { 
    name: "MongoDB", 
    icon: <SiMongodb className="text-[#4DB33D]" size={20} />,
    color: "#4DB33D",
    linear: "from-green-400 to-emerald-500"
  },
  { 
    name: "Tailwind CSS", 
    icon: <SiTailwindcss className="text-[#38BDF8]" size={20} />,
    color: "#38BDF8",
    linear: "from-cyan-400 to-blue-500"
  },
  { 
    name: "GitHub", 
    icon: <FaGithub size={20} />,
    color: "#181717",
    linear: "from-gray-800 to-gray-900"
  },
  { 
    name: "Vercel", 
    icon: <SiVercel size={20} />,
    color: "#000000",
    linear: "from-gray-900 to-black"
  },
];

const Strip = () => {
  const marqueeRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Create duplicated array for seamless infinite scroll
  const doubledTechList = [...techList, ...techList, ...techList];

  // Pause animation on hover
  useEffect(() => {
    if (marqueeRef.current) {
      marqueeRef.current.style.animationPlayState = isHovering ? 'paused' : 'running';
    }
  }, [isHovering]);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-linear-to-b from-gray-950 via-black to-gray-950">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
            bg-linear-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 
            backdrop-blur-sm border border-white/10 mb-6">
            <div className="w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300">TECHNOLOGY STACK</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-linear-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Cutting-Edge
            </span>{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Building modern web applications with the latest tools and frameworks for optimal performance
          </p>
        </div>

        {/* Desktop Marquee */}
        <div 
          className="hidden lg:block relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Track line */}
          <div className="absolute left-0 right-0 top-1/2 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2"></div>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <div 
              ref={marqueeRef}
              className="flex gap-4"
              style={{
                animation: 'marquee-infinite 40s linear infinite',
                animationPlayState: isHovering ? 'paused' : 'running'
              }}
            >
              {doubledTechList.map((tech, index) => (
                <div
                  key={index}
                  className="group relative shrink-0"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-0.5 rounded-2xl bg-linear-to-r ${tech.linear} opacity-0 
                    group-hover:opacity-50 blur transition-all duration-500`}></div>
                  
                  {/* Tech card */}
                  <div className="relative flex items-center gap-3 px-6 py-4 rounded-2xl 
                    bg-linear-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl
                    border border-white/10 shadow-xl group-hover:border-white/20 
                    transition-all duration-300">
                    
                    {/* Icon container with linear */}
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${tech.linear} p-0.5`}>
                      <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                        {tech.icon}
                      </div>
                    </div>
                    
                    {/* Tech name */}
                    <div>
                      <div className="text-white font-semibold text-lg">{tech.name}</div>
                      <div className="text-xs text-gray-400 mt-1">Modern Stack</div>
                    </div>
                    
                    {/* Hover indicator */}
                    <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* linear fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-gray-950 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-gray-950 to-transparent z-10"></div>
        </div>

        {/* Mobile & Tablet Grid */}
        <div className="lg:hidden">
          {/* Grid for tablets (2 columns) */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techList.map((tech, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 rounded-2xl bg-linear-to-r ${tech.linear} opacity-0 
                    group-hover:opacity-50 blur transition-all duration-500`}></div>
                  
                  <div className="relative flex flex-col items-center gap-3 p-6 rounded-2xl 
                    bg-linear-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl
                    border border-white/10 shadow-xl group-hover:border-white/20 
                    transition-all duration-300">
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${tech.linear} p-0.5`}>
                      <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                        {React.cloneElement(tech.icon, { size: 28 })}
                      </div>
                    </div>
                    
                    {/* Name */}
                    <div className="text-center">
                      <div className="text-white font-semibold text-lg">{tech.name}</div>
                      <div className="text-sm text-gray-400 mt-1">Technology</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Grid for mobile (1 column) */}
          <div className="sm:hidden">
            <div className="grid grid-cols-1 gap-3">
              {techList.slice(0, 6).map((tech, index) => (
                <div
                  key={index}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 rounded-2xl bg-linear-to-r ${tech.linear} opacity-0 
                    group-hover:opacity-30 blur transition-all duration-500`}></div>
                  
                  <div className="relative flex items-center gap-4 p-4 rounded-2xl 
                    bg-linear-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl
                    border border-white/10 shadow-xl group-hover:border-white/20 
                    transition-all duration-300">
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${tech.linear} p-0.5`}>
                      <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                        {tech.icon}
                      </div>
                    </div>
                    
                    {/* Name */}
                    <div>
                      <div className="text-white font-semibold">{tech.name}</div>
                      <div className="text-xs text-gray-400 mt-1">Development Tool</div>
                    </div>
                    
                    {/* Right arrow indicator */}
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-cyan-400"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Full-Stack", value: "Development", color: "from-blue-500/20 to-cyan-500/20" },
            { label: "Modern", value: "Frameworks", color: "from-purple-500/20 to-pink-500/20" },
            { label: "Cloud", value: "Deployment", color: "from-emerald-500/20 to-teal-500/20" },
            { label: "Real-time", value: "Applications", color: "from-amber-500/20 to-orange-500/20" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`relative p-4 rounded-2xl bg-linear-to-br ${stat.color} backdrop-blur-sm 
                border border-white/10 hover:border-white/20 transition-all duration-300`}
            >
              <div className="relative flex flex-col items-center text-center">
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Continuously learning and adopting new technologies to deliver cutting-edge solutions
          </p>
        </div>

        {/* Partition/Separator - Added here */}
        <div className="relative mt-12 lg:mt-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-blue-500/30 to-transparent"></div>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-cyan-400"></div>
              <div className="w-2 h-2 rounded-full bg-linear-to-r from-purple-400 to-pink-400"></div>
              <div className="w-2 h-2 rounded-full bg-linear-to-r from-emerald-400 to-teal-400"></div>
            </div>
            <div className="h-px flex-1 bg-linear-to-r from-transparent via-purple-500/30 to-transparent"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Strip;