"use client";

import { useState } from "react";

// Premium SVG icons - SIMPLIFIED with single paths
const Icons = {
  Search: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  PenTool: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  Code: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  CheckCircle: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Rocket: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Target: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
    </svg>
  ),
  MessageSquare: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  Zap: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Users: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 4.5V21m0 0h-6m6 0h6" />
    </svg>
  ),
  Brain: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  Diamond: () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 3a1 1 0 00-.707.293l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 000-1.414l-3-3A1 1 0 0010 3z" clipRule="evenodd" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  ClockFast: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  BarChart: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Award: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

const steps = [
  { 
    title: "Discovery", 
    desc: "Deep dive into your business goals, target audience, and technical requirements to craft a winning strategy.",
    icon: <Icons.Search />,
    phase: "Strategic Planning",
    duration: "2-3 Days",
    color: "from-blue-600 to-cyan-500",
    subSteps: ["Requirement Analysis", "Market Research", "Competitor Analysis", "Strategy Session"],
    linear: "linear-linear(135deg, #2563eb 0%, #06b6d4 100%)"
  },
  { 
    title: "UI/UX Design", 
    desc: "Crafting intuitive wireframes, stunning visual designs, and interactive prototypes for seamless user experiences.",
    icon: <Icons.PenTool />,
    phase: "Creative Design",
    duration: "3-5 Days",
    color: "from-purple-600 to-pink-500",
    subSteps: ["Wireframing", "UI Design", "Prototyping", "User Testing"],
    linear: "linear-linear(135deg, #7c3aed 0%, #ec4899 100%)"
  },
  { 
    title: "Development", 
    desc: "Agile development with cutting-edge technologies, real-time collaboration, and milestone-based delivery.",
    icon: <Icons.Code />,
    phase: "Technical Build",
    duration: "2-4 Weeks",
    color: "from-emerald-600 to-teal-500",
    subSteps: ["Frontend Development", "Backend API", "Database Design", "Third-party Integration"],
    linear: "linear-linear(135deg, #059669 0%, #0d9488 100%)"
  },
  { 
    title: "Testing & QA", 
    desc: "Comprehensive quality assurance, performance optimization, security testing, and user acceptance testing.",
    icon: <Icons.CheckCircle />,
    phase: "Quality Assurance",
    duration: "1-2 Weeks",
    color: "from-amber-600 to-orange-500",
    subSteps: ["QA Testing", "Performance Audit", "Security Scan", "Cross-browser Testing"],
    linear: "linear-linear(135deg, #d97706 0%, #f97316 100%)"
  },
  { 
    title: "Launch & Support", 
    desc: "Seamless deployment, monitoring, maintenance, and ongoing support to ensure your project's success.",
    icon: <Icons.Rocket />,
    phase: "Go Live",
    duration: "1 Week",
    color: "from-violet-600 to-indigo-500",
    subSteps: ["Production Deployment", "Performance Monitoring", "Post-Launch Support", "Maintenance"],
    linear: "linear-linear(135deg, #7c3aed 0%, #4f46e5 100%)"
  },
];

// Premium benefits to replace CTA
const premiumBenefits = [
  {
    title: "Enterprise-Grade Security",
    description: "Bank-level encryption, regular security audits, and compliance with industry standards",
    icon: <Icons.Shield />,
    color: "from-emerald-500 to-teal-500",
    features: ["SOC2 Compliance", "GDPR Ready", "DDoS Protection", "Data Encryption"]
  },
  {
    title: "Lightning Fast Delivery",
    description: "Optimized workflows ensure 40% faster delivery without compromising quality",
    icon: <Icons.ClockFast />,
    color: "from-blue-500 to-cyan-500",
    features: ["Agile Methodology", "Parallel Development", "Automated Testing", "CI/CD Pipeline"]
  },
  {
    title: "Performance Optimized",
    description: "Websites that load in under 1.5s with 95+ Google PageSpeed scores",
    icon: <Icons.BarChart />,
    color: "from-purple-500 to-pink-500",
    features: ["Lighthouse 95+", "CDN Integration", "Image Optimization", "Code Splitting"]
  },
  {
    title: "Future-Proof Code",
    description: "Scalable architecture that grows with your business needs",
    icon: <Icons.TrendingUp />,
    color: "from-amber-500 to-orange-500",
    features: ["Modular Architecture", "API-First Design", "Cloud Native", "Easy Maintenance"]
  }
];

const processStats = [
  { label: "Projects Delivered", value: "50+", icon: <Icons.Target />, bg: "from-blue-500/20 to-cyan-500/20" },
  { label: "Client Satisfaction", value: "100%", icon: <Icons.MessageSquare />, bg: "from-emerald-500/20 to-teal-500/20" },
  { label: "On-Time Delivery", value: "98%", icon: <Icons.Zap />, bg: "from-amber-500/20 to-orange-500/20" },
  { label: "Repeat Clients", value: "70%", icon: <Icons.Users />, bg: "from-violet-500/20 to-purple-500/20" },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(null);
  const [activeDetail, setActiveDetail] = useState(null);

  return (
    <section className="relative py-8 md:py-20 lg:py-28 overflow-hidden bg-linear-to-b from-gray-950 via-black to-gray-950" id="process">
      {/* Animated Background - Simplified for mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-48 h-48 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-4 w-48 h-48 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-optimized Header */}
        <div className="text-center mb-10 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 mb-4">
            <div className="w-1.5 h-1.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-300">WORKFLOW EXCELLENCE</span>
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-gray-200 to-gray-400">
                The Proven
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-4xl bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-cyan-400 to-purple-400">
                Development Process
              </span>
            </h2>
            
            <p className="text-sm sm:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
              A meticulously crafted workflow that ensures <span className="text-cyan-300 font-medium">premium quality</span>, 
              complete <span className="text-blue-300 font-medium">transparency</span>, and 
              timely <span className="text-emerald-300 font-medium">delivery</span> of your digital vision
            </p>
          </div>

          {/* Mobile-optimized Stats - Stack on small screens */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto mb-8">
            {processStats.map((stat, idx) => (
              <div
                key={idx}
                className={`relative p-3 rounded-xl bg-linear-to-br ${stat.bg} backdrop-blur-sm border border-white/10`}
              >
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-white/10 to-white/5 
                    flex items-center justify-center mb-2">
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-lg font-bold text-white mb-0.5">{stat.value}</div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile-optimized Timeline - Fixed overlapping */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Continuous vertical line */}
            <div className="absolute left-4 top-6 bottom-6 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
            
            {/* Timeline Steps with proper spacing */}
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative pl-12"
                  onClick={() => setActiveDetail(activeDetail === i ? null : i)}
                >
                  {/* Step indicator on the line */}
                  <div className="absolute left-4 top-0 -translate-x-1/2">
                    <div className={`relative w-8 h-8 rounded-full bg-linear-to-br ${step.color} p-0.5 shadow-lg
                      ${activeDetail === i ? 'scale-110' : 'scale-100'} transition-transform duration-300`}>
                      <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                        <div className="text-white text-xs">
                          {i + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Card with proper margins */}
                  <div className={`bg-linear-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm 
                    rounded-xl border border-white/10 p-5 shadow-lg mb-6
                    ${activeDetail === i ? 'border-cyan-500/30' : ''}`}>
                    
                    {/* Card Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${step.color} p-0.5 shrink-0`}>
                        <div className="w-full h-full rounded-lg bg-gray-900/90 flex items-center justify-center">
                          <div className="text-white">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full bg-linear-to-r from-blue-500/20 to-cyan-500/20 
                            text-xs font-semibold text-blue-300 whitespace-nowrap">
                            STEP {i + 1}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs font-semibold text-gray-300">
                            {step.phase}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white truncate">{step.title}</h3>
                        <div className="text-xs text-cyan-300 font-medium flex items-center gap-1 mt-1">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                          {step.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {step.desc}
                    </p>

                    {/* Expandable Details */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out
                      ${activeDetail === i ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="pt-4 border-t border-white/10">
                        <h4 className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">Key Deliverables</h4>
                        <div className="space-y-2">
                          {step.subSteps.map((subStep, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                              <div className="w-6 h-6 rounded bg-linear-to-br from-blue-500/20 to-cyan-500/20 
                                flex items-center justify-center shrink-0">
                                <span className="text-xs font-bold text-blue-300">{idx + 1}</span>
                              </div>
                              <span className="text-sm text-gray-300">{subStep}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button 
                      className="w-full mt-4 py-2 rounded-lg bg-linear-to-r from-blue-500/10 to-cyan-500/10 
                        text-blue-300 text-sm font-medium flex items-center justify-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDetail(activeDetail === i ? null : i);
                      }}
                    >
                      <span>{activeDetail === i ? 'Show Less' : 'View Details'}</span>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${activeDetail === i ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative mb-24">
            {/* Main Timeline Line */}
            <div className="absolute left-20 right-20 top-1/2 h-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent -translate-y-1/2"></div>
            <div className="absolute left-20 right-20 top-1/2 h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500 -translate-y-1/2 shadow-lg shadow-blue-500/20"></div>
            
            {/* Floating Steps */}
            <div className="relative flex justify-between">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center group"
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Animated Step Indicator */}
                  <div className="relative z-20 mb-8">
                    <div className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} 
                      p-0.5 shadow-2xl shadow-current/20 group-hover:shadow-current/40 transition-all duration-500
                      ${activeStep === i ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}`}>
                      <div className="w-full h-full rounded-2xl bg-gray-950/90 backdrop-blur-sm 
                        flex items-center justify-center group-hover:bg-gray-950/80 transition-all duration-300">
                        <div className={`text-white transform group-hover:scale-110 transition-transform duration-300
                          ${activeStep === i ? 'scale-110' : 'scale-100'}`}>
                          {step.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-linear-to-br from-gray-900 to-black 
                      border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-lg">
                      {i + 1}
                    </div>
                  </div>

                  {/* Step Label */}
                  <div className={`relative px-5 py-3 rounded-xl bg-linear-to-b from-gray-900/80 to-gray-950/80 
                    backdrop-blur-sm border border-white/10 shadow-xl text-center max-w-[200px] transition-all duration-300
                    ${activeStep === i ? 'translate-y-0 opacity-100 scale-105 border-cyan-500/30' : 'translate-y-2 opacity-90 scale-100'}`}>
                    <h3 className="text-lg font-bold text-white mb-1 tracking-tight">{step.title}</h3>
                    <div className="text-xs text-gray-400 font-medium">{step.phase}</div>
                  </div>

                  {/* Premium Hover Card */}
                  <div className={`
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-10 w-96 z-30
                    transition-all duration-500 ease-out
                    ${activeStep === i ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-4 invisible'}
                  `}>
                    <div className="relative">
                      {/* Card Glow */}
                      <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 
                        rounded-2xl blur-xl"></div>
                      
                      {/* Main Card */}
                      <div className="relative bg-linear-to-br from-gray-900/95 to-gray-950/95 backdrop-blur-xl 
                        rounded-2xl border border-white/10 p-8 shadow-2xl">
                        
                        {/* Card Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${step.color} p-0.5 shrink-0`}>
                            <div className="w-full h-full rounded-xl bg-gray-900/90 flex items-center justify-center">
                              <div className="text-white">
                                {step.icon}
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className="px-3 py-1 rounded-full bg-linear-to-r from-blue-500/20 to-cyan-500/20 
                                text-xs font-semibold text-blue-300">
                                STEP {i + 1}
                              </span>
                              <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-semibold text-gray-300">
                                {step.phase}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
                              Timeline: {step.duration}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-8 border-l-2 border-blue-500/30 pl-4">
                          {step.desc}
                        </p>

                        {/* Key Phases */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">KEY DELIVERABLES</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {step.subSteps.map((subStep, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 
                                hover:bg-white/10 transition-all duration-300 group/sub">
                                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-500/20 to-cyan-500/20 
                                  flex items-center justify-center group-hover/sub:scale-110 transition-transform duration-300">
                                  <span className="text-xs font-bold text-blue-300">{idx + 1}</span>
                                </div>
                                <span className="text-sm text-gray-300 group-hover/sub:text-white transition-colors">
                                  {subStep}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Card Arrow */}
                        <div className="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 rotate-45 
                          w-4 h-4 bg-linear-to-br from-gray-900 to-gray-950 border-r border-b border-white/10"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Benefits Section - Replaced CTA */}
        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 mb-4">
              <div className="text-amber-400">
                <Icons.Award />
              </div>
              <span className="text-xs font-medium text-gray-300">WHY OUR PROCESS STANDS OUT</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-400 via-cyan-400 to-blue-400">
                Premium Advantages
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond just development—we deliver excellence with measurable results and enterprise-grade standards
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumBenefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm 
                  rounded-2xl border border-white/10 p-6 hover:border-cyan-500/30 transition-all duration-500 
                  hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 
                  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${benefit.color} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-gray-900/90 flex items-center justify-center">
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className="text-lg font-bold text-white mb-3">{benefit.title}</h4>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {benefit.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-cyan-400 to-blue-400"></div>
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-2 h-2 rounded-full bg-linear-to-r from-cyan-400 to-blue-400"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-2xl bg-linear-to-r from-gray-900/80 to-gray-950/80 
              backdrop-blur-sm border border-white/10">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <span className="text-lg font-bold text-white">✓</span>
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">Industry-Leading Standards:</span> Every project follows enterprise security protocols and performance benchmarks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Partition/Separator */}
        <div className="relative mt-16 lg:mt-24">
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
}