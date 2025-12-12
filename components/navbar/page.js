"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Simple icons
const MenuIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Sparkle = () => (
  <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const routes = [
    { path: "/", name: "Home", color: "from-blue-500 to-cyan-500" },
    { path: "/projects", name: "Projects", color: "from-purple-500 to-pink-500" },
    { path: "/services", name: "Services", color: "from-emerald-500 to-teal-500" },
    { path: "/contact", name: "Contact", color: "from-amber-500 to-orange-500" },
    { path: "/about", name: "About", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-3'
      }`}>
        {/* Solid background layer - THIS IS THE KEY FIX */}
        <div className={`absolute inset-0 transition-all duration-300 ${
          scrolled ? 'bg-gray-900/95' : 'bg-gray-900/90'
        }`} />
        
        {/* Blur layer */}
        <div className={`absolute inset-0 backdrop-blur-3xl transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-90'
        }`} />
        
        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`rounded-xl transition-all duration-300 overflow-hidden ${
            scrolled 
              ? 'bg-linear-to-r from-blue-500/10 via-purple-500/5 to-cyan-500/10 border border-white/20 shadow-2xl' 
              : 'bg-linear-to-r from-blue-500/5 via-purple-500/3 to-cyan-500/5 border border-white/10 shadow-lg'
          }`}>
            {/* Top border glow */}
            <div className="h-px w-full bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
            
            <div className="flex items-center justify-between px-5 py-3">
              {/* Logo */}
              <Link 
                href="/" 
                className="group/logo relative"
                onMouseEnter={() => setActiveHover('logo')}
                onMouseLeave={() => setActiveHover(null)}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`relative w-9 h-9 rounded-lg bg-linear-to-br from-blue-600 to-cyan-600 p-0.5 transition-all duration-200 group-hover/logo:scale-105 ${
                    activeHover === 'logo' ? 'scale-105' : ''
                  }`}>
                    <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center">
                      <span className="text-base font-bold bg-linear-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                        NS
                      </span>
                    </div>
                    <div className="absolute -top-1 -right-1">
                      <Sparkle />
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-sm font-medium text-white group-hover/logo:text-cyan-300 transition-colors">
                      Noorani
                    </div>
                    <div className="text-xs text-gray-300 group-hover/logo:text-cyan-400 transition-colors">
                      Full-Stack Dev
                    </div>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                <div className={`flex items-center gap-0.5 rounded-full px-1 py-0.5 transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gray-900/80 backdrop-blur-2xl border border-white/10' 
                    : 'bg-gray-900/70 backdrop-blur-xl border border-white/5'
                }`}>
                  {routes.map((route, index) => {
                    const isActive = pathname === route.path;
                    return (
                      <Link
                        key={route.path}
                        href={route.path}
                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                          isActive 
                            ? 'text-white' 
                            : 'text-gray-300 hover:text-white'
                        }`}
                        onMouseEnter={() => setActiveHover(index)}
                        onMouseLeave={() => setActiveHover(null)}
                      >
                        {/* Active/Hover Background */}
                        {(isActive || activeHover === index) && (
                          <div className={`absolute inset-0 bg-linear-to-r ${route.color} rounded-full ${
                            isActive ? 'opacity-30' : 'opacity-15'
                          }`} />
                        )}
                        
                        <span className="relative z-10">{route.name}</span>
                        
                        {/* Active Indicator */}
                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button */}
              <div className="hidden md:block">
                <Link
                  href="/contact"
                  className="px-5 py-2 bg-linear-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 active:scale-95 shadow-lg"
                  onMouseEnter={() => setActiveHover('cta')}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-lg border transition-colors duration-200 ${
                  scrolled 
                    ? 'bg-white/10 border-white/20 text-white hover:bg-white/15' 
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isOpen 
              ? 'opacity-100 visible' 
              : 'opacity-0 invisible pointer-events-none'
          }`}
          style={{ top: scrolled ? '68px' : '76px' }}
        >
          {/* Solid black backdrop */}
          <div className="absolute inset-0 bg-black/90" />
          
          {/* Blur layer */}
          <div className="absolute inset-0 backdrop-blur-3xl" />
          
          {/* Menu Panel */}
          <div className={`absolute right-0 top-0 w-64 h-[calc(100vh-68px)] bg-gray-900 border-l border-white/20 transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Panel blur */}
            <div className="absolute inset-0 backdrop-blur-2xl" />
            
            <div className="relative p-4">
              {/* Menu Items */}
              <div className="space-y-1">
                {routes.map((route, index) => {
                  const isActive = pathname === route.path;
                  return (
                    <Link
                      key={route.path}
                      href={route.path}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'text-white bg-linear-to-r from-blue-600/40 to-cyan-600/40'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.name}
                      {isActive && (
                        <span className="float-right w-2 h-2 rounded-full bg-linear-to-r from-blue-400 to-cyan-400 animate-pulse" />
                      )}
                    </Link>
                  );
                })}
              </div>
              
              {/* Mobile CTA */}
              <div className="mt-4 pt-4 border-t border-white/15">
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 text-center bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-colors active:scale-[0.98] shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer with minimal height */}
      <div className={`transition-all duration-300 ${scrolled ? 'h-20' : 'h-24'}`} />
    </>
  );
}