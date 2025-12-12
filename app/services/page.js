"use client";

import { useState, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import BackgroundWrapper from "@/components/backgroundwrapper/page";

// Lazy load heavy icons
const FiGlobe = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiGlobe })));
const FiCalendar = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiCalendar })));
const FiTrendingUp = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiTrendingUp })));
const FiArrowRight = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiArrowRight })));
const FiCheckCircle = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiCheckCircle })));
const FiStar = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiStar })));
const FiZap = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiZap })));
const FiShield = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiShield })));
const FiClock = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiClock })));
const FiMessageSquare = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiMessageSquare })));
const FiLayers = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiLayers })));
const FiCode = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiCode })));
const FiShoppingCart = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiShoppingCart })));
const FiHelpCircle = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiHelpCircle })));
const FiHeadphones = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiHeadphones })));
const FiChevronDown = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiChevronDown })));
const FiMail = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiMail })));
const FiInfo = lazy(() => import("react-icons/fi").then(mod => ({ default: mod.FiInfo })));

// Icon fallback component
const IconFallback = () => <div className="w-5 h-5 bg-gray-700 rounded animate-pulse" />;

// Extract data to separate files or memoize
const services = [
  {
    id: 1,
    title: "Business Websites",
    icon: "FiGlobe",
    description: "High-converting websites for businesses and professionals",
    features: [
      "Modern UI/UX Design",
      "Mobile-First Responsive",
      "SEO Optimized",
      "Fast Performance",
      "Contact & Lead Systems",
      "Analytics Integration"
    ],
    timeline: "5-10 days",
    price: "₹X,XXX",
    popular: true,
    color: "blue"
  },
  {
    id: 2,
    title: "Booking & CRM Systems",
    icon: "FiCalendar",
    description: "Automated appointment systems and client management",
    features: [
      "Real-time Scheduling",
      "Admin Dashboard",
      "Email/SMS Notifications",
      "Payment Integration",
      "Client Database",
      "Calendar Sync"
    ],
    timeline: "10-20 days",
    price: "₹X,XXX",
    popular: true,
    color: "purple"
  },
  {
    id: 3,
    title: "E-commerce Solutions",
    icon: "FiShoppingCart",
    description: "High-performance online stores and shopping platforms",
    features: [
      "Product Management",
      "Secure Checkout",
      "Payment Gateway",
      "Order Tracking",
      "Inventory System",
      "Mobile App Ready"
    ],
    timeline: "15-30 days",
    price: "₹X,XXX",
    popular: false,
    color: "emerald"
  },
  {
    id: 4,
    title: "Dashboards & Analytics",
    icon: "FiTrendingUp",
    description: "Custom dashboards for data visualization and insights",
    features: [
      "Real-time Reports",
      "Interactive Charts",
      "Role-based Access",
      "Data Export",
      "API Integration",
      "Automated Emails"
    ],
    timeline: "10-25 days",
    price: "₹XX,XXX",
    popular: false,
    color: "amber"
  },
  {
    id: 5,
    title: "API & Backend Systems",
    icon: "FiCode",
    description: "Robust backend solutions and API development",
    features: [
      "REST/GraphQL APIs",
      "Database Design",
      "Authentication System",
      "Cloud Deployment",
      "Documentation",
      "Scalable Architecture"
    ],
    timeline: "15-30 days",
    price: "₹XX,XXX",
    popular: false,
    color: "violet"
  },
  {
    id: 6,
    title: "Full SaaS Platforms",
    icon: "FiLayers",
    description: "Complete software-as-a-service solutions",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "User Authentication",
      "Admin Panel",
      "Payment Processing",
      "Analytics Dashboard"
    ],
    timeline: "30-60 days",
    price: "₹XX,XXX",
    popular: true,
    color: "rose"
  },
];

const benefits = [
  {
    icon: "FiZap",
    title: "Fast Delivery",
    description: "Optimized workflow ensures timely project completion"
  },
  {
    icon: "FiShield",
    title: "Secure & Scalable",
    description: "Built with security best practices and scalable architecture"
  },
  {
    icon: "FiHeadphones",
    title: "Ongoing Support",
    description: "Post-launch support and maintenance included"
  },
  {
    icon: "FiCode",
    title: "Clean Code",
    description: "Well-documented, maintainable, and scalable codebase"
  }
];

// Simplified icon mapping
const iconMap = {
  FiGlobe: FiGlobe,
  FiCalendar: FiCalendar,
  FiTrendingUp: FiTrendingUp,
  FiArrowRight: FiArrowRight,
  FiCheckCircle: FiCheckCircle,
  FiStar: FiStar,
  FiZap: FiZap,
  FiShield: FiShield,
  FiClock: FiClock,
  FiMessageSquare: FiMessageSquare,
  FiLayers: FiLayers,
  FiCode: FiCode,
  FiShoppingCart: FiShoppingCart,
  FiHelpCircle: FiHelpCircle,
  FiHeadphones: FiHeadphones,
  FiChevronDown: FiChevronDown,
  FiMail: FiMail,
  FiInfo: FiInfo
};

// Color mapping
const colorConfig = {
  blue: {
    linear: "from-blue-600 to-cyan-500",
    bglinear: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400"
  },
  purple: {
    linear: "from-purple-600 to-pink-500",
    bglinear: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/20",
    iconColor: "text-purple-400"
  },
  emerald: {
    linear: "from-emerald-600 to-teal-500",
    bglinear: "from-emerald-500/10 to-teal-500/10",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400"
  },
  amber: {
    linear: "from-amber-600 to-orange-500",
    bglinear: "from-amber-500/10 to-orange-500/10",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-400"
  },
  violet: {
    linear: "from-violet-600 to-fuchsia-500",
    bglinear: "from-violet-500/10 to-fuchsia-500/10",
    borderColor: "border-violet-500/20",
    iconColor: "text-violet-400"
  },
  rose: {
    linear: "from-rose-600 to-pink-500",
    bglinear: "from-rose-500/10 to-pink-500/10",
    borderColor: "border-rose-500/20",
    iconColor: "text-rose-400"
  }
};

// Lazy loaded components
const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon];
  const colors = colorConfig[service.color];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className={`relative bg-linear-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm rounded-xl border ${colors.borderColor} overflow-hidden transition-all duration-300 h-full`}>
        
        {service.popular && (
          <div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-xs font-semibold text-white shadow-lg shadow-blue-500/20">
            <Suspense fallback={<IconFallback />}>
              <FiStar className="inline w-2.5 h-2.5 mr-1" />
            </Suspense>
            Popular
          </div>
        )}

        <div className="p-6 pt-16">
          <div className="flex items-start gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg bg-linear-to-br ${colors.bglinear} flex items-center justify-center shrink-0`}>
              <Suspense fallback={<IconFallback />}>
                <Icon className={`w-5 h-5 ${colors.iconColor}`} />
              </Suspense>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{service.description}</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Suspense fallback={<IconFallback />}>
                  <FiClock className="w-4 h-4" />
                </Suspense>
                <span>{service.timeline}</span>
              </div>
              <div className="text-lg font-bold text-white">
                {service.price}
              </div>
            </div>
            <div className="flex items-center justify-end gap-1 text-xs text-gray-400">
              <Suspense fallback={<IconFallback />}>
                <FiInfo className="w-3 h-3" />
              </Suspense>
              <span className="italic">Starting price, final quote varies</span>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Suspense fallback={<IconFallback />}>
                  <FiCheckCircle className={`w-4 h-4 mt-0.5 ${colors.iconColor}`} />
                </Suspense>
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-linear-to-r from-blue-600/20 to-cyan-600/20 text-blue-400 hover:text-white hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300 border border-blue-500/20 text-sm"
            >
              <span className="font-medium">Get Quote</span>
              <Suspense fallback={<IconFallback />}>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Suspense>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ benefit }) => {
  const Icon = iconMap[benefit.icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="relative bg-linear-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm rounded-xl border border-white/10 p-6 text-center hover:border-blue-500/30 transition-all duration-300 h-full">
        <div className="inline-flex p-3 rounded-xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 mb-4">
          <Suspense fallback={<IconFallback />}>
            <Icon className="w-6 h-6 text-blue-400" />
          </Suspense>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
        <p className="text-gray-400 text-sm">{benefit.description}</p>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  return (
    <BackgroundWrapper>
      <section className="relative pt-24 pb-12 md:pb-20 overflow-hidden scroll-mt-20">
        
        {/* Simplified Background */}
        <div className="absolute inset-0 " />
        {/* bg-linear-to-b from-gray-900 via-black to-gray-900 */}

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Hero Section - Simplified */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 mb-6">
              <div className="w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Services & Solutions</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Professional{" "}
              </span>
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Web Solutions
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Building high-performance digital products that drive business growth
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <Suspense fallback={<IconFallback />}>
                  <FiMessageSquare className="w-5 h-5" />
                </Suspense>
                Book Free Consultation
              </Link>
              <a
                href="https://wa.me/917030625288"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1da851] text-white font-semibold hover:shadow-xl hover:shadow-[#25D366]/25 transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M20.52 3.49C18.18 1.13 15.19 0 12 0A12 12 0 0 0 0 12c0 2.04.5 3.93 1.36 5.6L0 24l6.51-1.36C8.13 23.5 10 24 12 24c6.63 0 12-5.37 12-12 0-3.19-1.13-6.18-3.48-8.51zM12 21.8c-1.87 0-3.67-.48-5.25-1.36l-.38-.23-3.97 1.04 1.06-3.89-.24-.38C2.6 15.6 2.2 13.85 2.2 12c0-5.4 4.4-9.8 9.8-9.8 2.61 0 5.07 1.02 6.91 2.88 1.84 1.84 2.88 4.3 2.88 6.91 0 5.4-4.4 9.8-9.8 9.8zm5.53-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.23-.63.08-1.17-.58-1.98-1.03-2.8-2.33-.21-.35.21-.33.6-1.1.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.21-.24-.59-.49-.51-.67-.52-.17-.01-.37-.01-.57-.01-.2 0-.52.08-.8.38-.28.3-1.07 1.05-1.07 2.56s1.1 2.96 1.25 3.17c.15.2 2.16 3.3 5.25 4.64.73.32 1.3.51 1.74.66.73.24 1.4.21 1.92.13.59-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.13-.3-.2-.6-.35z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive solutions tailored to meet your specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Me?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Combining technical expertise with business understanding
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </div>
          </div>

          {/* FAQ Section - Simplified */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Get answers to common questions about our services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                "How long does a typical project take?",
                "What's included in your pricing?",
                "Do you provide maintenance after launch?",
                "Can I see examples of your work?"
              ].map((question, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-xl overflow-hidden bg-linear-to-br from-gray-900/50 to-gray-950/50"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <Suspense fallback={<IconFallback />}>
                        <FiHelpCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                      </Suspense>
                      <h3 className="text-lg font-semibold text-white">{question}</h3>
                    </div>
                    <Suspense fallback={<IconFallback />}>
                      <FiChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`} />
                    </Suspense>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="relative bg-linear-to-br from-gray-900 to-gray-950 rounded-xl border border-white/10 p-8">
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
              
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 mb-6">
                <Suspense fallback={<IconFallback />}>
                  <FiStar className="w-5 h-5 text-cyan-400" />
                </Suspense>
                <span className="text-sm font-medium text-gray-300">Ready to get started?</span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h2>
              
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Take the first step towards transforming your digital presence
              </p>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <Suspense fallback={<IconFallback />}>
                  <FiMessageSquare className="w-5 h-5" />
                </Suspense>
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
}