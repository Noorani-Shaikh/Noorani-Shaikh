"use client";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiArrowRight,
  FiCheckCircle,
  FiStar,
  FiMapPin,
  FiCode,
  FiClock,
  FiMessageCircle,
  FiAward,
  FiZap
} from "react-icons/fi";
import { 
  SiNextdotjs, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from "react-icons/si";

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  const techStack = [
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-white" },
    { icon: <SiReact />, name: "React", color: "text-cyan-400" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-400" },
    { icon: <SiMongodb />, name: "MongoDB", color: "text-emerald-400" },
  ];

  // This runs after component mounts (no blocking)
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-linear(to right, #4f4f4f2e 1px, transparent 1px),
              linear-linear(to bottom, #8080800a 1px, transparent 1px)
            `,
            backgroundSize: '14px 24px',
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-blue-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-purple-900/10 to-transparent"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        
        {/* Mobile Layout - Always visible by default, hidden on desktop */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="flex flex-col items-center space-y-4 pt-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-30"></div>
                <img
                  src="/me.jpeg"
                  alt="Noorani"
                  className="relative w-20 h-20 rounded-full border-3 border-gray-900 object-cover shadow-lg"
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl font-bold text-white">Noorani</h1>
                <p className="text-cyan-400 text-sm mt-1">Full Stack Developer</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <FiMapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-xs text-gray-400">Remote · Worldwide</span>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-300">Available for projects</span>
              </div>
            </div>

            {/* Headline */}
            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold text-white px-2">
                Building Digital Solutions
              </h2>
              
              {/* Typewriter Container */}
              <div className="h-10 flex items-center justify-center px-2">
                <Typewriter
                  options={{
                    strings: ["MERN Stack", "Next.js", "Full-Stack", "Web Apps"],
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    deleteSpeed: 40,
                    wrapperClassName: "text-lg font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  }}
                />
              </div>

              <p className="text-gray-300 text-sm px-2">
                Creating high-performance web applications with modern technologies.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h3 className="text-xs text-gray-400 text-center">TECH STACK</h3>
              <div className="grid grid-cols-2 gap-2">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 border border-white/10"
                  >
                    <span className={`text-lg ${tech.color}`}>{tech.icon}</span>
                    <span className="text-sm text-gray-300">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code Preview */}
            <div className="rounded-lg overflow-hidden border border-white/10 bg-black/30">
              <div className="flex items-center justify-between px-3 py-2 bg-black/50 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">code.js</span>
                </div>
                <SiVercel className="w-3.5 h-3.5 text-gray-400" />
              </div>
              <div className="p-3">
                <pre className="text-xs font-mono text-gray-300 overflow-x-auto">
                  <code>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">dev</span> = <span className="text-yellow-400">{`{`}</span>
                    {'\n  '}<span className="text-cyan-400">stack</span>: [<span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"React"</span>],
                    {'\n  '}<span className="text-cyan-400">build</span>: <span className="text-purple-400">()</span> = <span className="text-green-400">"Web Apps 🚀"</span>
                    {'\n'}<span className="text-yellow-400">{`};`}</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2.5">
              <button className="w-full py-3 bg-linear-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-semibold text-sm">
                Start Project
              </button>
              <button className="w-full py-3 border border-white/20 rounded-lg text-white text-sm bg-white/5">
                View Portfolio
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-3 pt-4">
              {[
                { icon: <FiGithub />, label: "GitHub" },
                { icon: <FiLinkedin />, label: "LinkedIn" },
                { icon: <FiMail />, label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 text-gray-400"
                  href="#"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Hidden by default, shown only on desktop */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column - Content */}
            <div className="lg:col-span-7 space-y-8 lg:space-y-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur animate-pulse"></div>
                  <div className="relative w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-300">
                  Available for premium projects
                </span>
              </motion.div>

              {/* Headline with Enhanced Typewriter */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="block text-white">Transforming Ideas Into</span>
                  <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                </h1>
                
                {/* Enhanced Typewriter with linear Text */}
                <div className="h-16 flex items-center">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-gray-400">
                      <FiZap className="w-5 h-5" />
                      <span className="text-sm font-medium uppercase tracking-wider">Specializing in</span>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold">
                      <Typewriter
                        options={{
                          strings: ["MERN Stack Development", "Next.js 14 Applications", "Full-Stack Architecture", "Scalable Web Solutions"],
                          autoStart: true,
                          loop: true,
                          delay: 80,
                          deleteSpeed: 40,
                          wrapperClassName: "bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                        }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                  I specialize in creating high-performance web applications using modern technologies. 
                  With expertise in <span className="font-semibold text-blue-400">Next.js</span> and{" "}
                  <span className="font-semibold text-cyan-400">MERN Stack</span>, I deliver solutions 
                  that drive business growth and user engagement.
                </p>
              </div>

              {/* Services */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Full-Stack Development",
                  "UI/UX Implementation",
                  "API Integration",
                  "Performance Optimization"
                ].map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all group"
                  >
                    <FiCheckCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">{service}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators with Icons (Moved to left) */}
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex-1">
                  <div className="p-2 rounded-lg bg-linear-to-br from-green-500/10 to-emerald-500/10">
                    <FiClock className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">100%</div>
                    <div className="text-sm text-gray-400">On-Time Delivery</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex-1">
                  <div className="p-2 rounded-lg bg-linear-to-br from-blue-500/10 to-cyan-500/10">
                    <FiMessageCircle className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-400">Support Available</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex-1">
                  <div className="p-2 rounded-lg bg-linear-to-br from-purple-500/10 to-pink-500/10">
                    <FiAward className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">30-Day</div>
                    <div className="text-sm text-gray-400">Satisfaction Guarantee</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button className="group px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-3">
                  <span>Start Project</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-xl border border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Right Column - Profile Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-linear-to-br from-gray-900 to-gray-950 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              >
                {/* Profile Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-20"></div>
                      <img
                        src="/me.jpeg"
                        alt="Noorani - Full Stack Developer"
                        className="relative w-16 h-16 rounded-full border-4 border-gray-900 object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Noorani</h3>
                      <p className="text-cyan-400 font-medium">Full Stack Developer</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400 ml-1">4.9/5 Rating</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  {[
                    { value: "50+", label: "Projects", color: "text-blue-400" },
                    { value: "99%", label: "Satisfaction", color: "text-green-400" },
                    { value: "4.9/5", label: "Rating", color: "text-yellow-400" },
                    { value: "30+", label: "Clients", color: "text-purple-400" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-white/5 border border-white/10 text-center"
                    >
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="p-6 border-t border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all"
                      >
                        <span className={`text-2xl ${tech.color}`}>{tech.icon}</span>
                        <span className="font-medium text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Preview */}
                <div className="p-6 border-t border-white/10 bg-black/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-400 font-mono">developer.js</span>
                    </div>
                    <SiVercel className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <div className="bg-black/50 rounded-lg p-4 border border-white/10">
                    <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                      <code>
                        <span className="text-purple-400">const</span>{' '}
                        <span className="text-blue-400">developer</span>{' '}
                        <span className="text-gray-400">=</span>{' '}
                        <span className="text-yellow-400">{`{`}</span>
                        {'\n  '}
                        <span className="text-cyan-400">stack</span>
                        <span className="text-gray-400">: [</span>
                        {'\n    '}
                        <span className="text-green-400">"Next.js"</span>
                        <span className="text-gray-400">, </span>
                        <span className="text-green-400">"React"</span>
                        <span className="text-gray-400">,</span>
                        {'\n    '}
                        <span className="text-green-400">"Node.js"</span>
                        <span className="text-gray-400">, </span>
                        <span className="text-green-400">"MongoDB"</span>
                        {'\n  '}
                        <span className="text-gray-400">],</span>
                        {'\n  '}
                        <span className="text-cyan-400">specialty</span>
                        <span className="text-gray-400">: </span>
                        <span className="text-green-400">"Full-Stack Web Development"</span>
                        <span className="text-gray-400">,</span>
                        {'\n  '}
                        <span className="text-cyan-400">build</span>
                        <span className="text-gray-400">: () </span>
                        <span className="text-purple-400">=</span>{' '}
                        <span className="text-yellow-400">{`{`}</span>
                        {'\n    '}
                        <span className="text-gray-400">return</span>{' '}
                        <span className="text-green-400">"Premium Web Solutions 🚀"</span>
                        <span className="text-gray-400">;</span>
                        {'\n  '}
                        <span className="text-yellow-400">{`}`}</span>
                        {'\n'}
                        <span className="text-yellow-400">{`};`}</span>
                      </code>
                    </pre>
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6 border-t border-white/10">
                  <div className="flex justify-center gap-4">
                    {[
                      { icon: <FiGithub />, label: "GitHub" },
                      { icon: <FiLinkedin />, label: "LinkedIn" },
                      { icon: <FiMail />, label: "Email" },
                    ].map((social, index) => (
                      <a
                        key={index}
                        className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/30 transition-all"
                        href="#"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}