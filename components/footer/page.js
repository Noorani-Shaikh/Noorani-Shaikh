"use client";

import { useState } from "react";
import Link from "next/link";

// Inline SVG icons to avoid external dependencies
const Github = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Linkedin = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Twitter = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.396 0-.79-.023-1.183-.067a13.995 13.995 0 007.557 2.213c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const Mail = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const MapPin = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const Phone = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const ChevronUp = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
  </svg>
);

const Code = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
  </svg>
);

const Smartphone = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
  </svg>
);

const Globe = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
  </svg>
);

const Calendar = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    { name: "Web Development", icon: <Code />, href: "/services#web" },
    { name: "Mobile Apps", icon: <Smartphone />, href: "/services#mobile" },
    { name: "Business Sites", icon: <Globe />, href: "/services#business" },
    { name: "Booking Systems", icon: <Calendar />, href: "/services#booking" },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "GitHub", icon: <Github />, href: "https://github.com", color: "hover:bg-gray-800" },
    { name: "LinkedIn", icon: <Linkedin />, href: "https://linkedin.com", color: "hover:bg-blue-800" },
    { name: "Twitter", icon: <Twitter />, href: "https://twitter.com", color: "hover:bg-sky-800" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 border-t border-white/5">
      {/* Floating Back to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
        aria-label="Back to top"
      >
        <ChevronUp />
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        {/* Top Section - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Newsletter - Desktop: 1st column, Mobile: full width */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <Link href="/" className="inline-block">
                  <h2 className="text-2xl font-bold text-white">
                    Noor<span className="text-blue-400">.</span>dev
                  </h2>
                  <p className="text-sm text-blue-400 font-medium mt-1">MERN & Next.js Developer</p>
                </Link>
                
                <p className="text-gray-400 text-sm mt-4 max-w-md">
                  Building fast, scalable web applications with modern technologies.
                </p>
              </div>

              {/* Newsletter */}
              <div>
                <p className="text-white text-sm font-medium mb-3">Get project updates</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                  <button className="px-5 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-4">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white ${item.color} transition-all hover:scale-105`}
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Grid - Mobile: side by side, Desktop: 3 columns */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Navigation - Mobile: 1st column */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Navigation
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services - Mobile: 2nd column */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Services
                </h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.name}>
                      <Link
                        href={service.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-300 flex items-center gap-3 group"
                      >
                        <div className="text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                          {service.icon}
                        </div>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact - Mobile: full width below, Desktop: 3rd column */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400 text-sm">Pune, India</span>
                  </div>
                  <a
                    href="mailto:hello@noor.dev"
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">hello@noor.dev</span>
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                  >
                    <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">+91 9876543210</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-gray-800 to-transparent mb-10"></div>

        {/* Bottom Bar - Enhanced for Desktop & Mobile */}
        <div className="text-center space-y-4">
          {/* Copyright centered on both mobile and desktop */}
          <div>
            <p className="text-gray-500 text-sm mb-2">
              © {currentYear} Noorani Shaikh. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Built with Next.js • Tailwind CSS • Deployed on Vercel
            </p>
          </div>
          
          {/* Legal Links - Centered */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-300">
              Privacy Policy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-300">
              Terms of Service
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/sitemap" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-300">
              Sitemap
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/contact" className="text-gray-500 hover:text-gray-300 text-xs transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Tech Stack Badges - Only show on desktop */}
          <div className="hidden md:flex justify-center gap-3 pt-4">
            <span className="px-3 py-1 bg-gray-900/50 rounded-full text-xs text-gray-400 border border-gray-800">
              React 18
            </span>
            <span className="px-3 py-1 bg-gray-900/50 rounded-full text-xs text-gray-400 border border-gray-800">
              Next.js 14
            </span>
            <span className="px-3 py-1 bg-gray-900/50 rounded-full text-xs text-gray-400 border border-gray-800">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-gray-900/50 rounded-full text-xs text-gray-400 border border-gray-800">
              MongoDB
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-linear-to-r from-blue-600 via-purple-600 to-cyan-600"></div>
    </footer>
  );
};

export default Footer;