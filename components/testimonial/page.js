"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Users, ThumbsUp, Award, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback, useMemo, memo } from "react";

// Memoized testimonial card component for better performance - FIXED JS SYNTAX
const TestimonialCard = memo(({ testimonial, isActive = false }) => {
  // Guard clause to prevent rendering if testimonial is undefined
  if (!testimonial) return null;
  
  return (
    <div className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={isActive ? { y: -8, scale: 1.02 } : {}}
        className="group relative h-full"
      >
        {/* Glow Effect - Only on active state */}
        {isActive && (
          <div className={`absolute -inset-0.5 rounded-2xl bg-linear-to-r ${testimonial.color} opacity-30 blur transition duration-500`} />
        )}
        
        <div className="relative bg-linear-to-br from-slate-900/90 to-slate-950/90 
          backdrop-blur-xl rounded-2xl border border-slate-800/50 p-4 sm:p-5 lg:p-6 h-full
          hover:border-slate-700/50 transition-colors duration-300">
          
          {/* Quote Icon */}
          <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-8 h-8 sm:w-10 sm:h-10 
            rounded-lg sm:rounded-xl bg-linear-to-br from-slate-900 to-slate-950 
            border border-slate-800/50 flex items-center justify-center">
            <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
          </div>

          {/* Rating */}
          <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5 lg:mb-6 italic line-clamp-4 sm:line-clamp-none">
            "{testimonial.text}"
          </p>

          {/* Divider */}
          <div className="h-px bg-linear-to-r from-transparent via-slate-700 to-transparent mb-4 sm:mb-5" />

          {/* Client Info */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Avatar */}
            <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl 
              bg-linear-to-br ${testimonial.color} flex items-center justify-center 
              text-white font-bold text-sm sm:text-base lg:text-lg`}>
              {testimonial.avatar}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-white font-semibold text-sm sm:text-base truncate">{testimonial.name}</h4>
              <p className="text-slate-400 text-xs sm:text-sm truncate">{testimonial.role}</p>
            </div>
          </div>

          {/* Project & Date */}
          <div className="flex items-center justify-between mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-slate-800/50">
            <span className="text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-slate-800/50 text-slate-300">
              {testimonial.project}
            </span>
            <span className="text-xs text-slate-500">{testimonial.date}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

const testimonials = [
  {
    name: "Rahul Patil",
    role: "Founder - Coaching Business",
    text: "Noorani built a website that increased our admissions by 3x in just 2 months. The lead capture system is phenomenal!",
    rating: 5,
    project: "Coaching Website",
    date: "March 2024",
    avatar: "RP",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Sneha Salon & Spa",
    role: "Salon Owner",
    text: "The booking system saved us 15+ hours weekly and reduced no-shows by 70%. Excellent support and fast delivery!",
    rating: 5,
    project: "Booking System",
    date: "February 2024",
    avatar: "SS",
    color: "from-purple-500 to-pink-400"
  },
  {
    name: "Dr. Ajay Clinic",
    role: "Healthcare Professional",
    text: "Very professional and fast delivery. The online appointment system works flawlessly and our patients love it.",
    rating: 5,
    project: "Clinic Management",
    date: "January 2024",
    avatar: "DA",
    color: "from-emerald-500 to-teal-400"
  },
  {
    name: "TechStart Solutions",
    role: "CEO - SaaS Company",
    text: "The dashboard Noorani built transformed our data analytics. It's intuitive, fast, and exactly what we needed.",
    rating: 5,
    project: "Analytics Dashboard",
    date: "December 2023",
    avatar: "TS",
    color: "from-amber-500 to-orange-400"
  },
  {
    name: "EduLearn Academy",
    role: "Director - Education",
    text: "Our student portal has seen 300% engagement increase. The user experience is exceptional!",
    rating: 5,
    project: "Student Portal",
    date: "November 2023",
    avatar: "EL",
    color: "from-violet-500 to-indigo-400"
  },
  {
    name: "RetailChain Store",
    role: "Operations Manager",
    text: "Inventory management system delivered ahead of schedule. It's robust, scalable, and user-friendly.",
    rating: 5,
    project: "Inventory System",
    date: "October 2023",
    avatar: "RC",
    color: "from-rose-500 to-red-400"
  },
];

const stats = [
  { label: "Client Satisfaction", value: "100%", icon: <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Projects Delivered", value: "50+", icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "Repeat Clients", value: "85%", icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
  { label: "On-Time Delivery", value: "98%", icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" /> },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Optimized auto-play with useCallback
  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const totalSlides = testimonials.length;
      const nextIndex = prevIndex + slidesPerView;
      
      // If we're at the end, loop back to start
      if (nextIndex >= totalSlides) {
        // Return to the first group
        return 0;
      }
      
      // Otherwise, ensure we don't go out of bounds
      return Math.min(nextIndex, totalSlides - slidesPerView);
    });
  }, [slidesPerView]);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - slidesPerView;
      
      // If we're at the beginning, go to the last group
      if (prevIndexCalc < 0) {
        // Go to the last complete group
        const totalSlides = testimonials.length;
        const lastGroupStart = Math.max(0, totalSlides - slidesPerView);
        // If slidesPerView is 1, we want the last item
        return slidesPerView === 1 ? totalSlides - 1 : lastGroupStart;
      }
      
      return prevIndexCalc;
    });
  }, [slidesPerView]);

  // Handle responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(3); // Desktop: 3 slides
      } else if (width >= 768) {
        setSlidesPerView(2); // Tablet: 2 slides
      } else {
        setSlidesPerView(1); // Mobile: 1 slide
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Reset current index when slidesPerView changes to avoid out of bounds
  useEffect(() => {
    setCurrentIndex(0);
  }, [slidesPerView]);

  // Optimized auto-play interval
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextTestimonial]);

  const goToTestimonial = useCallback((groupIndex) => {
    // Calculate the starting index for the group
    const startIndex = groupIndex * slidesPerView;
    
    // Ensure the index is within bounds
    const maxIndex = Math.max(0, testimonials.length - slidesPerView);
    const safeIndex = Math.min(startIndex, maxIndex);
    
    setCurrentIndex(safeIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  }, [slidesPerView]);

  // Memoize visible testimonials - FIXED VERSION
  const visibleTestimonials = useMemo(() => {
    const result = [];
    for (let i = 0; i < slidesPerView; i++) {
      const index = (currentIndex + i) % testimonials.length;
      // Get the testimonial, or fallback to first one if undefined
      result.push(testimonials[index] || testimonials[0]);
    }
    return result;
  }, [currentIndex, slidesPerView]);

  // Memoize dots count for indicators
  const dotsCount = useMemo(() => {
    if (slidesPerView >= testimonials.length) return 1;
    return Math.ceil(testimonials.length / slidesPerView);
  }, [slidesPerView]);

  // Calculate current group index
  const currentGroupIndex = useMemo(() => {
    return Math.floor(currentIndex / slidesPerView);
  }, [currentIndex, slidesPerView]);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 overflow-hidden">
      {/* Background Elements - Simplified */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-10 md:mb-16 relative"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full 
          bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-slate-700 mb-3 sm:mb-4">
          <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
          <span className="text-xs sm:text-sm font-medium text-blue-300">Client Testimonials</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          Trusted by <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Clients</span> Worldwide
        </h2>
        
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-6 sm:mb-8">
          Real feedback from businesses that transformed their digital presence
        </p>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-2 sm:p-3 rounded-xl bg-linear-to-br from-slate-900/50 to-slate-950/50 border border-slate-800/50"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 mx-auto rounded-lg bg-linear-to-br from-blue-900/40 to-purple-900/40 
                flex items-center justify-center mb-1 sm:mb-2">
                <div className="text-blue-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Combined Testimonials Slider for All Screen Sizes */}
      <div className="relative">
        {/* Slider Container */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={`${currentIndex}-${index}`} 
                  testimonial={testimonial}
                  isActive={true}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons - Desktop & Mobile */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
          <button
            onClick={prevTestimonial}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-slate-900/80 to-slate-950/80 
              border border-slate-700 flex items-center justify-center text-slate-400
              hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          {/* Indicators */}
          <div className="flex gap-1.5 sm:gap-2">
            {Array.from({ length: dotsCount }).map((_, i) => {
              const isActive = currentGroupIndex === i;
              return (
                <button
                  key={i}
                  onClick={() => goToTestimonial(i)}
                  className={`transition-all duration-300 focus:outline-none ${
                    isActive 
                      ? 'bg-linear-to-r from-blue-500 to-cyan-400 w-6 sm:w-8' 
                      : 'bg-slate-700 hover:bg-slate-600 w-2 h-2'
                  } h-2 rounded-full`}
                  aria-label={`Go to testimonial group ${i + 1}`}
                />
              );
            })}
          </div>

          <button
            onClick={nextTestimonial}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-slate-900/80 to-slate-950/80 
              border border-slate-700 flex items-center justify-center text-slate-400
              hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Auto-play Toggle */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1"
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-red-500'}`} />
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </button>
        </div>
      </div>

      {/* Extra testimonials indicator for desktop */}
      <div className="hidden lg:block text-center mt-8">
        <p className="text-sm text-slate-500">
          Showing {Math.min(visibleTestimonials.length, testimonials.length)} of {testimonials.length} testimonials
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
    </section>
  );
}