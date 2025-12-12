"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Backgroundwrapper from "@/components/backgroundwrapper/page.js";
import { 
  FiExternalLink, 
  FiGithub, 
  FiChevronLeft, 
  FiChevronRight, 
  FiX,
  FiCalendar,
  FiUsers,
  FiTrendingUp,
  FiCode,
  FiGlobe,
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiLayers,
  FiCloud,
  FiDatabase,
  FiServer,
  FiBarChart2,
  FiCpu
} from "react-icons/fi";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
  SiVercel,
  SiStripe,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGraphql,
  SiTwilio,
  SiPrisma
} from "react-icons/si";

const categories = ["All", "Web Apps", "E-commerce", "Dashboards", "APIs", "SaaS"];

const projects = [
  {
    id: 1,
    title: "EdTech Learning Platform",
    category: "Web Apps",
    images: ["/project1.png", "/project1b.png"],
    problem: "Traditional learning platforms had poor engagement and high dropout rates.",
    solution: "Built an interactive platform with gamification, real-time progress tracking, and AI-powered recommendations.",
    result: "Increased student engagement by 300% and reduced dropout rates by 65% in 3 months.",
    demo: "https://demo1.example.com",
    code: "https://github.com/username/project1",
    tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
    duration: "3 months",
    clients: "5,000+",
    impact: "65% drop reduction",
    status: "Live",
    featured: true,
    challenges: ["Scalability", "Real-time updates", "Payment integration"],
    achievements: ["300% engagement increase", "65% lower dropout rate", "99.9% uptime"]
  },
  {
    id: 2,
    title: "Salon Booking System",
    category: "Dashboards",
    images: ["/project1.png", "/project1b.png"],
    problem: "Manual booking systems caused scheduling conflicts and revenue loss.",
    solution: "Automated booking with real-time availability, SMS reminders, and integrated payment processing.",
    result: "Saved 4+ hours daily in admin work and increased bookings by 40%.",
    demo: "https://demo2.example.com",
    code: "https://github.com/username/project2",
    tech: ["React", "Node.js", "MongoDB", "Twilio", "Stripe"],
    duration: "2 months",
    clients: "50+ businesses",
    impact: "40% increase",
    status: "Live",
    featured: true,
    challenges: ["Real-time sync", "Calendar integration", "Payment processing"],
    achievements: ["40% booking increase", "4h daily time saved", "Zero scheduling conflicts"]
  },
  {
    id: 3,
    title: "Modern E-commerce Store",
    category: "E-commerce",
    images: ["/project1.png", "/project1b.png"],
    problem: "Slow performance and poor mobile experience hurting conversions.",
    solution: "Built a high-performance e-commerce solution with PWA capabilities and optimized checkout.",
    result: "Improved load speed by 3x and increased mobile conversions by 55%.",
    demo: "https://demo3.example.com",
    code: "https://github.com/username/project3",
    tech: ["Next.js", "Tailwind", "Stripe", "MongoDB", "Node.js"],
    duration: "4 months",
    clients: "10,000+ users",
    impact: "55% conversion lift",
    status: "Live",
    featured: true,
    challenges: ["Performance optimization", "Mobile UX", "Checkout optimization"],
    achievements: ["3x faster load", "55% mobile conversion increase", "95% Core Web Vitals"]
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    category: "Dashboards",
    images: ["/project1.png", "/project1b.png"],
    problem: "Businesses lacked real-time insights into their operations.",
    solution: "Created a customizable dashboard with data visualization and automated reporting.",
    result: "Reduced reporting time by 80% and improved decision-making speed.",
    demo: "https://demo4.example.com",
    code: "https://github.com/username/project4",
    tech: ["React", "D3.js", "Node.js", "MongoDB", "Redis"],
    duration: "3 months",
    clients: "100+ active",
    impact: "80% time saved",
    status: "Active",
    featured: false,
    challenges: ["Data visualization", "Real-time updates", "Export functionality"],
    achievements: ["80% time reduction", "Real-time analytics", "Automated reporting"]
  },
  {
    id: 5,
    title: "API Gateway System",
    category: "APIs",
    images: ["/project1.png", "/project1b.png"],
    problem: "Microservices communication was complex and difficult to manage.",
    solution: "Built a scalable API gateway with rate limiting, authentication, and monitoring.",
    result: "Improved API response times by 70% and reduced downtime by 95%.",
    demo: "https://demo5.example.com",
    code: "https://github.com/username/project5",
    tech: ["Node.js", "Redis", "MongoDB", "React", "AWS"],
    duration: "2 months",
    clients: "500K requests/day",
    impact: "70% faster",
    status: "Completed",
    featured: false,
    challenges: ["Rate limiting", "Authentication", "Monitoring"],
    achievements: ["70% faster response", "95% less downtime", "500K req/day capacity"]
  },
  {
    id: 6,
    title: "SaaS Platform",
    category: "SaaS",
    images: ["/project1.png", "/project1b.png"],
    problem: "Startups needed an affordable, scalable solution for their operations.",
    solution: "Developed a multi-tenant SaaS platform with role-based access and analytics.",
    result: "Enabled 100+ startups to launch their digital products within weeks.",
    demo: "https://demo6.example.com",
    code: "https://github.com/username/project6",
    tech: ["Next.js", "Node.js", "MongoDB", "React", "Redis"],
    duration: "5 months",
    clients: "100+ startups",
    impact: "Weeks to launch",
    status: "Live",
    featured: true,
    challenges: ["Multi-tenancy", "Scalability", "Security"],
    achievements: ["100+ startups launched", "Multi-tenant architecture", "99.9% uptime"]
  },
];

export default function ProjectsPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [autoSlide, setAutoSlide] = useState(false);
  const containerRef = useRef(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const techIcons = {
    "Next.js": <SiNextdotjs className="w-5 h-5" />,
    "React": <SiReact className="w-5 h-5" />,
    "TypeScript": <SiTypescript className="w-5 h-5" />,
    "Tailwind": <SiTailwindcss className="w-5 h-5" />,
    "MongoDB": <SiMongodb className="w-5 h-5" />,
    "Node.js": <SiNodedotjs className="w-5 h-5" />,
    "Stripe": <SiStripe className="w-5 h-5" />,
    "PostgreSQL": <SiPostgresql className="w-5 h-5" />,
    "Redis": <SiRedis className="w-5 h-5" />,
    "Docker": <SiDocker className="w-5 h-5" />,
    "GraphQL": <SiGraphql className="w-5 h-5" />,
    "AWS": <FiCloud className="w-5 h-5" />,
    "Twilio": <SiTwilio className="w-5 h-5" />,
    "D3.js": <FiBarChart2 className="w-5 h-5" />,
    "Prisma": <SiPrisma className="w-5 h-5" />
  };

  const handleViewDemo = (demoUrl) => {
    if (demoUrl && demoUrl !== "#") {
      window.open(demoUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleViewCode = (codeUrl, e) => {
    e.stopPropagation(); // Prevent triggering the demo click
    if (codeUrl && codeUrl !== "#") {
      window.open(codeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Backgroundwrapper>
      <section className="relative py-20 overflow-hidden" ref={containerRef}>
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          
          {/* Subtle Grid */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-linear(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 mb-6"
            >
              <div className="w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Featured Work</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Projects
              </span>
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> That Deliver</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Building scalable solutions that solve real problems and drive measurable results
            </motion.p>
          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden ${
                  activeCategory === category
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {category}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category
                      ? "bg-white/20"
                      : "bg-white/5 group-hover:bg-white/10"
                  }`}>
                    {projects.filter(p => p.category === category || category === "All").length}
                  </span>
                </span>
                
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Card Container */}
                <div className="group h-full bg-linear-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-xs font-semibold text-white shadow-lg shadow-blue-500/20">
                      <FiCheckCircle className="inline w-3 h-3 mr-1" />
                      Featured
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-cyan-500/10 z-0"></div>
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${project.id}/600/400`;
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Category */}
                    <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                      <span className="text-xs font-medium text-gray-300">{project.category}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                      {project.problem}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                          <span className="text-blue-400">
                            {techIcons[tech]}
                          </span>
                          <span className="text-xs text-gray-300">{tech}</span>
                        </div>
                      ))}
                      {project.tech.length > 4 && (
                        <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                          <span className="text-xs text-gray-400">+{project.tech.length - 4}</span>
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <FiClock className="w-4 h-4" />
                          <span>{project.duration}</span>
                        </div>
                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                          project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        {/* Code Button */}
                        <button
                          onClick={(e) => handleViewCode(project.code, e)}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                          title="View Source Code"
                        >
                          <FiGithub className="w-4 h-4" />
                        </button>
                        
                        {/* View Button - Redirects to Demo */}
                        <button
                          onClick={() => handleViewDemo(project.demo)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                          title="View Live Demo"
                        >
                          <span className="text-sm font-medium">View Demo</span>
                          <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex p-4 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 mb-6">
                <FiLayers className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">No projects found</h3>
              <p className="text-gray-400 max-w-md mx-auto mb-6">
                We couldn't find any projects in the "{activeCategory}" category. Try selecting a different category.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="px-6 py-3 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                View All Projects
              </button>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center py-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 mb-6">
              <FiTrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Want to see more?</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Let's discuss how we can turn your ideas into reality with cutting-edge solutions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              Start a Project
              <FiArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </Backgroundwrapper>
  );
}