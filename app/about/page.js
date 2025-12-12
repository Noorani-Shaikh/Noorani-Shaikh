"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, Briefcase, Code, Target, Award, 
  Sparkles, Zap, CheckCircle, TrendingUp, 
  Globe, Users, Clock, FileText, Rocket,
  ChevronRight, MessageCircle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BackgroundWrapper from "@/components/backgroundwrapper/page.js";

export default function AboutPage() {
  const stats = [
    { icon: Briefcase, value: "2+", label: "Years", description: "Full-Stack Experience" },
    { icon: Code, value: "40+", label: "Projects", description: "Successfully Delivered" },
    { icon: Users, value: "95%", label: "Satisfaction", description: "Client Retention" },
    { icon: Clock, value: "100%", label: "On-Time", description: "Project Delivery" }
  ];

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern technologies",
      tech: ["Next.js 14", "React", "Node.js", "MongoDB"]
    },
    {
      icon: Target,
      title: "Business Solutions",
      description: "Custom applications that solve real business problems",
      tech: ["Booking Systems", "Dashboards", "Admin Panels"]
    },
    {
      icon: TrendingUp,
      title: "Performance & SEO",
      description: "Fast, scalable, and search-engine optimized websites",
      tech: ["Core Web Vitals", "Lighthouse 90+", "SEO Friendly"]
    }
  ];

  const timeline = [
    { year: "2022", title: "Started Freelancing", description: "Began working with local businesses and startups" },
    { year: "2023", title: "MERN Stack Specialist", description: "Mastered full-stack development with modern tools" },
    { year: "2024", title: "Next.js Expert", description: "Advanced to modern frameworks and best practices" },
    { year: "Present", title: "Full-Time Freelancer", description: "Helping businesses scale with custom solutions" }
  ];

const techStack = [
    { 
        name: "React", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // Keep this one
        color: "border-[#61DAFB]/30 bg-[#61DAFB]/10",
    },
    { 
        name: "Next.js", 
        logo: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000", // Updated[citation:8]
        color: "border-white/30 bg-white/10",
    },
    { 
        name: "Node.js", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg", // Updated[citation:3]
        color: "border-[#339933]/30 bg-[#339933]/10",
    },
    { 
        name: "MongoDB", 
        logo: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
        color: "border-[#47A248]/30 bg-[#47A248]/10",
    },
    { 
        name: "Express", 
        logo: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", // Updated[citation:7]
        color: "border-gray-300/30 bg-gray-800/50",
    },
    { 
        name: "GitHub", 
        logo: "https://img.icons8.com/?size=100&id=4Z2nCrz5iPY2&format=png&color=ffffff",
        color: "border-white/30 bg-gray-800/50",
    },
    { 
        name: "Tailwind", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        color: "border-[#06B6D4]/30 bg-[#06B6D4]/10",
    },
];

  return (
    <BackgroundWrapper>
    <div className="min-h-screen ">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <section className="relative max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        
        {/* Hero Section - Image FIRST on Mobile */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 md:mb-24">
          {/* IMAGE - First on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full order-1"
          >
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative group">
                {/* linear Border Effect */}
                <div className="absolute -inset-4 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Image Container */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-800/50 shadow-2xl">
                  <img
                    src="/me.jpeg"
                    alt="Noorani Shaikh - MERN Stack Developer"
                    className="w-full h-auto object-cover aspect-square"
                  />
                  {/* Overlay linear */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm shadow-lg">
                  <span className="flex items-center gap-1 md:gap-2">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                    <span className="text-xs md:text-sm">Open for Projects</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT - Second on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-full order-2 space-y-6 md:space-y-8"
          >
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 mb-3 md:mb-4 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-indigo-400" />
                <span className="text-xs md:text-sm text-indigo-300">About Me</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Building Digital
                <span className="block bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Experiences That Convert
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-300 leading-relaxed mb-4 md:mb-6">
                I'm <span className="font-semibold text-white">Noorani Shaikh</span>, a passionate 
                <span className="text-indigo-400 font-semibold"> MERN Stack & Next.js Developer </span>
                with <strong>2+ years</strong> of experience creating high-performance web applications
                that drive business growth.
              </p>

              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                As a dedicated <strong className="text-white">Freelance Web Developer</strong>, I partner with
                businesses and startups to transform ideas into powerful digital solutions.
              </p>
            </div>

            {/* Tech Stack - Mobile Only */}
            <div className="block lg:hidden">
              <h3 className="text-sm text-slate-400 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.slice(0, 4).map((tech, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg border ${tech.color}`}
                  >
                    <div className="relative w-5 h-5">
                      <img
                        src={tech.logo}
                        alt={`${tech.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-sm text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <Link
                href="/contact"
                className="group flex-1 flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl text-white font-semibold text-sm md:text-base transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="/resume.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/80 rounded-xl text-white font-semibold text-sm md:text-base transition-all duration-300 group"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* IMPROVED Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative p-4 md:p-5 rounded-xl bg-linear-to-br from-slate-900/60 to-slate-800/30 border border-slate-800/50 group hover:border-indigo-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-3 p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" />
                  </div>
                  
                  {/* Value - Big and Bold */}
                  <div className="mb-1">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                      {stat.value}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-sm md:text-base font-semibold text-white mb-1">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-tight">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section - Desktop Only */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block mb-16 md:mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              My Tech Stack
            </h3>
            <p className="text-slate-400">
              Modern technologies I use to build powerful applications
            </p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-4 md:p-5 rounded-xl border ${tech.color} hover:scale-105 transition-all duration-300 group`}
              >
                <div className="mb-3 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
                  <div className="relative w-10 h-10 md:w-12 md:h-12">
                    <img
                      src={tech.logo}
                      alt={`${tech.name} logo`}
                      className="w-full h-full object-contain"
                      style={tech.name === "Next.js" ? { filter: "invert(1)" } : {}}
                    />
                  </div>
                </div>
                <span className="text-sm text-white font-medium group-hover:text-indigo-300 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What I Do Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              What I <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Specialize In</span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 px-4">
              Delivering comprehensive web solutions that drive growth and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-300 md:hover:translate-y-[-8px]"
              >
                <div className="mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-slate-400 mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {service.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs md:text-sm font-medium rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Journey Timeline for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              My <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-base md:text-lg text-slate-300 px-4">
              From learning to leading — a timeline of growth and expertise
            </p>
          </div>

          {/* Mobile Timeline - Improved Design */}
          <div className="md:hidden">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-indigo-500/30 via-purple-500/30 to-transparent"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-[22px] top-2 w-3 h-3 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 border-4 border-slate-900 z-10"></div>
                  
                  <div className="ml-12">
                    {/* Year Badge */}
                    <div className="mb-2">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                        <span className="text-sm font-semibold text-indigo-300">
                          {item.year}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="p-4 rounded-xl bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50">
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-linear-to-b from-indigo-500/20 via-purple-500/20 to-transparent"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 border-4 border-slate-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="p-6 rounded-2xl bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="px-4 py-1.5 rounded-full bg-linear-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                          <span className="text-indigo-300 font-semibold">{item.year}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-linear-to-br from-slate-900 to-slate-800/50 border border-slate-700/50 p-6 md:p-8 lg:p-12">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-linear-to-bl from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                  My <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Development Philosophy</span>
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                        User-Centric Approach
                      </h4>
                      <p className="text-sm md:text-base text-slate-300">
                        Every project begins with understanding the end-user. I build interfaces that are not just beautiful, but intuitive and accessible.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                        Performance First
                      </h4>
                      <p className="text-sm md:text-base text-slate-300">
                        Speed matters. I optimize for Core Web Vitals and ensure your site loads fast on any device, anywhere in the world.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 md:gap-4">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-indigo-400 mt=0.5 shrink-0" />
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                        Business Results
                      </h4>
                      <p className="text-sm md:text-base text-slate-300">
                        Technology should drive growth. I focus on features that increase conversions, improve efficiency, and generate ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA with WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-linear-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 p-6 md:p-8 lg:p-12">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 text-indigo-400" />
                <span className="text-sm md:text-lg text-indigo-300">Ready to Begin?</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
                Let's Build Your Next
                <span className="block bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Digital Success Story
                </span>
              </h2>
              
              <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-6 md:mb-8 px-4">
                Whether you're launching a startup, scaling your business, or need a custom solution,
                I'm here to bring your vision to life with cutting-edge technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl text-white font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 flex items-center justify-center gap-2 md:gap-3"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                {/* WhatsApp-style Quick Chat Button */}
                <a
                  href="https://wa.me/917030625288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-6 py-3 md:px-8 md:py-4 
                    bg-linear-to-r from-[#25D366] to-[#1DA851]
                    hover:from-[#1EC95B] hover:to-[#1A9E46]
                    rounded-xl text-white font-semibold 
                    text-sm md:text-base lg:text-lg 
                    transition-all duration-300 
                    hover:shadow-xl hover:shadow-[#25D366]/25
                    flex items-center justify-center gap-2 md:gap-3
                    border border-[#1DA851] hover:border-[#25D366]
                  "
                >
                  <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Quick Chat</span>
                </a>
              </div>
              
              <p className="text-xs md:text-sm text-slate-400 mt-4 md:mt-6">
                Typically respond within 2 hours during business days
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      </div>
      </BackgroundWrapper>
  );
}

