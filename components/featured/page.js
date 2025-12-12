"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, ChevronRight, Sparkles, Layers, Zap, Shield } from "lucide-react";

const projects = [
  {
    title: "Coaching Class Platform",
    desc: "Full-stack Next.js platform with lead generation, student portal, and admin dashboard.",
    img: "/Project1.png",
    liveLink: "#",
    githubLink: "#",
    tech: ["Next.js 14", "Tailwind CSS", "MongoDB", "Stripe"],
    badge: "Featured",
    category: "Web Application",
    features: ["Real-time chat", "Video lessons", "Progress tracking"]
  },
  {
    title: "Salon Booking System",
    desc: "Complete appointment management system with automated reminders and analytics.",
    img: "/Project1.png",
    liveLink: "#",
    githubLink: "#",
    tech: ["React", "Node.js", "PostgreSQL", "Twilio"],
    badge: "Popular",
    category: "SaaS Platform",
    features: ["Multi-staff scheduling", "Payment integration", "Client management"]
  },
  {
    title: "Analytics Dashboard Pro",
    desc: "Enterprise dashboard with real-time data visualization and custom reporting.",
    img: "/Project1.png",
    liveLink: "#",
    githubLink: "#",
    tech: ["Next.js", "D3.js", "Firebase", "Chart.js"],
    badge: "Enterprise",
    category: "Dashboard",
    features: ["Role-based access", "Export to PDF", "API integration"]
  },
];

export default function Featured() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-900/5 to-transparent" />
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-slate-700 mb-4">
          <Sparkles className="w-4 h-4 text-blue-300" />
          <span className="text-sm font-medium text-blue-300">Featured Work</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Showcase <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
          Real-world solutions built with modern technologies and best practices
        </p>
        
        {/* Stats Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12">
          {[
            { label: "Projects Delivered", value: "50+", icon: <Layers className="w-5 h-5" /> },
            { label: "Client Satisfaction", value: "100%", icon: <Sparkles className="w-5 h-5" /> },
            { label: "Performance Score", value: "A+", icon: <Zap className="w-5 h-5" /> },
            { label: "Security Rating", value: "5.0", icon: <Shield className="w-5 h-5" /> },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="w-12 h-12 mx-auto rounded-xl bg-linear-to-br from-blue-900/40 to-purple-900/40 
                flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <div className="text-blue-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            onMouseEnter={() => setActiveProject(i)}
            onMouseLeave={() => setActiveProject(null)}
            className="relative group"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              glareBorderRadius="20px"
              glarePosition="all"
              scale={1.05}
              transitionSpeed={1000}
              className="w-full h-full"
            >
              {/* Card Container */}
              <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-slate-900/90 to-slate-950/90 
                border border-slate-800/50 backdrop-blur-xl">
                
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                    ${project.badge === 'Featured' ? 'bg-linear-to-r from-blue-600 to-cyan-500' :
                      project.badge === 'Popular' ? 'bg-linear-to-r from-purple-600 to-pink-500' :
                      'bg-linear-to-r from-emerald-600 to-teal-500'} text-white`}>
                    {project.badge}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium 
                    bg-slate-800/80 text-slate-300">
                    {project.category}
                  </span>
                </div>

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent z-10" />
                  <img
                    src={project.img}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    alt={project.title}
                  />
                  
                  {/* Overlay with buttons */}
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/30 via-transparent to-transparent 
                    opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-end p-6">
                    <div className="flex gap-3 w-full">
                      <a
                        href={project.liveLink}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl 
                        bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold 
                        hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <Eye className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        className="px-4 py-3 rounded-xl border border-slate-700 text-slate-300 
                        hover:border-slate-600 hover:text-white hover:bg-slate-800/30 
                        transition-all duration-300 flex items-center justify-center"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent 
                      group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-cyan-300 
                      group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-slate-500 mb-2">TECH STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-slate-800/50 rounded-lg text-xs text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-xs font-medium text-slate-500 mb-2">FEATURES</div>
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 
                    rounded-xl border border-slate-700 text-slate-300 font-medium 
                    hover:border-blue-500 hover:text-white hover:bg-blue-500/10 
                    transition-all duration-300 group/btn">
                    View Case Study
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-cyan-400 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="inline-flex flex-col sm:flex-row gap-6 items-center justify-center p-8 
          rounded-2xl bg-linear-to-br from-slate-900/50 to-slate-950/50 
          border border-slate-800/50 backdrop-blur-xl max-w-3xl mx-auto">
          
          <div className="text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Want to See More Projects?
            </h3>
            <p className="text-slate-400">
              Explore my complete portfolio with detailed case studies and client testimonials
            </p>
          </div>
          
          <div className="flex gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 
                text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 
                hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Full Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-slate-700 text-slate-300 
                hover:border-slate-600 hover:text-white hover:bg-slate-800/30 
                transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}