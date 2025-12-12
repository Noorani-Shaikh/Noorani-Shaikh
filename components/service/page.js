"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Minimal inline SVG icons - only what's used
const Icons = {
  Globe: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  Calendar: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Layers: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  Check: () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  Star: () => (
    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ),
  Info: () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

const services = [
  {
    id: 1,
    title: "Business Websites",
    icon: <Icons.Globe />,
    description: "High-performance websites for businesses",
    features: ["Next.js/React", "Mobile-First", "SEO Optimized", "Fast Loading"],
    timeframe: "2-4 weeks",
    price: "₹X,XXX",
    popular: true,
    linear: "from-blue-600 to-cyan-500",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    id: 2,
    title: "Booking Systems",
    icon: <Icons.Calendar />,
    description: "Automated appointment & lead management",
    features: ["Real-time Scheduling", "Admin Dashboard", "Payment Integration", "Calendar Sync"],
    timeframe: "3-6 weeks",
    price: "₹X,XXX",
    popular: true,
    linear: "from-purple-600 to-pink-500",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-400"
  },
  {
    id: 3,
    title: "Dashboards",
    icon: <Icons.TrendingUp />,
    description: "Custom data visualization & analytics",
    features: ["Real-time Data", "Interactive Charts", "Role-based Access", "API Integration"],
    timeframe: "4-8 weeks",
    price: "₹X,XXX",
    popular: false,
    linear: "from-emerald-600 to-teal-500",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400"
  },
  {
    id: 4,
    title: "SaaS Development",
    icon: <Icons.Layers />,
    description: "Full-stack SaaS applications",
    features: ["Multi-tenancy", "Subscription Management", "User Authentication", "Cloud Deployment"],
    timeframe: "8-16 weeks",
    price: "₹X,XXX",
    popular: false,
    linear: "from-orange-600 to-amber-500",
    borderColor: "border-orange-500/20",
    iconColor: "text-orange-400"
  },
];

export default function Service() {
  const router = useRouter();

  const handleGetQuote = (e, serviceId) => {
    e.stopPropagation(); // Prevent card click if needed
    // Directly navigate to contact page without scrolling
    router.push('/contact');
  };

  const getColorClass = (iconColor) => {
    // Extract color from iconColor string (e.g., "text-blue-400" -> "blue-400")
    const colorMatch = iconColor.match(/text-(.+)/);
    return colorMatch ? `bg-${colorMatch[1].split('-')[0]}-500/10` : 'bg-blue-500/10';
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden" id="services">
      {/* Minimal Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl md:blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl md:blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Minimal spacing */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3">
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs font-medium text-gray-300">Services</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-gray-300">
              Professional
            </span>
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-400 ml-2">
              Services
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-4">
            Tailored solutions for your digital transformation
          </p>
          
          {/* Price Note - Mobile optimized */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Icons.Info />
            <span className="text-xs text-yellow-300">Starting prices shown</span>
          </div>
        </div>

        {/* Services Grid - Mobile first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge - FIXED: Positioned on top of card container, not inside */}
              {service.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30 px-3 py-1.5 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-[11px] font-semibold text-white flex items-center gap-1.5 border border-blue-400/30 shadow-lg">
                  <Icons.Star />
                  <span>Popular</span>
                </div>
              )}

              {/* Card - Removed overflow-hidden to prevent cropping */}
              <div className={`relative bg-gray-900/50 backdrop-blur-sm rounded-xl border ${service.borderColor} transition-all duration-200 h-full hover:border-opacity-40 hover:scale-[1.02] active:scale-[0.98]`}>
                {/* Card Content */}
                <div className="p-4">
                  {/* Header - Fixed alignment */}
                  <div className="flex items-center justify-between mb-3">
                    {/* Left side logo/icon */}
                    <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${service.linear}/10 flex items-center justify-center shrink-0`}>
                      <div className={service.iconColor}>
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="text-right">
                      <div className="text-[10px] text-gray-400">From</div>
                      <div className="text-base font-bold text-white">{service.price}</div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-white mb-1.5 line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Timeframe */}
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <Icons.Clock />
                    <span>{service.timeframe}</span>
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 mb-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div className={`w-4 h-4 rounded ${getColorClass(service.iconColor)} flex items-center justify-center shrink-0`}>
                          <Icons.Check className={`w-2 h-2 ${service.iconColor}`} />
                        </div>
                        <span className="text-xs text-gray-300 truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={(e) => handleGetQuote(e, service.id)}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-linear-to-r from-blue-600/10 to-cyan-600/10 text-blue-400 hover:text-white hover:bg-blue-600/20 transition-all duration-200 border border-blue-500/20 text-xs font-medium hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Get Quote</span>
                    <Icons.ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Separator - Mobile friendly */}
        <div className="relative mt-8 pt-8">
          <div className="h-px w-full bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/40"></div>
          </div>
        </div>
      </div>

      {/* Add minimal CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .group {
          animation: fadeIn 0.3s ease-out both;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      `}</style>
    </section>
  );
}