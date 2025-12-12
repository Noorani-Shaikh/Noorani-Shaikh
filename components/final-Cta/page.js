"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calendar, Mail, Phone, ArrowRight, Sparkles, Star } from "lucide-react";
import { useState } from "react";

const FinalCta = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Pattern - Same as Process Section */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-900/5 to-transparent" />
      
      {/* Subtle linear Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      {/* Main Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Header - Consistent with other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full 
            bg-linear-to-r from-blue-900/30 to-purple-900/30 border border-slate-700 mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-300" />
            <span className="text-xs sm:text-sm font-medium text-blue-300">Get Started</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Start Your Project</span>?
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Let&apos;s discuss your idea and create a solution that drives results
          </p>
        </motion.div>

        {/* CTA Card - linear Border Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* linear Border Wrapper */}
          <div className="p-0.5 rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-cyan-500">
            {/* Main Card Content */}
            <div className="bg-linear-to-br from-gray-900 to-gray-950 rounded-2xl p-6 sm:p-8 lg:p-10">
              
              {/* Stats Bar - Similar to Process Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
                {[
                  { label: "Fast Delivery", value: "2-4 Weeks", color: "from-blue-500 to-cyan-400" },
                  { label: "Free Support", value: "30 Days", color: "from-purple-500 to-pink-400" },
                  { label: "Satisfaction", value: "100%", color: "from-emerald-500 to-teal-400" },
                  { label: "On-Time", value: "98%", color: "from-amber-500 to-orange-400" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-3 sm:p-4 rounded-xl 
                    bg-linear-to-br from-slate-900/50 to-slate-950/50 border border-slate-800/50
                    hover:border-slate-700/50 transition-colors duration-300">
                    <div className="text-lg sm:text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/917030625288?text=Hi!%20I%20want%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredButton('whatsapp')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="group/btn flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl 
                    bg-linear-to-r from-green-600 to-emerald-500 text-white font-semibold
                    hover:from-green-700 hover:to-emerald-600 hover:scale-105
                    transition-all duration-300 shadow-lg shadow-green-500/25"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Chat on WhatsApp</span>
                  <ArrowRight className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 
                    ${hoveredButton === 'whatsapp' ? 'translate-x-1' : ''}`} />
                </a>

                {/* Schedule Button */}
                <a
                  href="#contact"
                  onMouseEnter={() => setHoveredButton('schedule')}
                  onMouseLeave={() => setHoveredButton(null)}
                  className="group/btn flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl 
                    bg-white/5 border border-white/10 text-slate-300 font-semibold
                    hover:bg-white/10 hover:text-white hover:scale-105
                    transition-all duration-300"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Schedule Call</span>
                  <ArrowRight className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 
                    ${hoveredButton === 'schedule' ? 'translate-x-1' : ''}`} />
                </a>
              </div>

              {/* Alternative Contact Methods */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-slate-400">
                <span className="text-xs sm:text-sm">Or contact via:</span>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-700 
                      hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 
                      transition-all duration-300 text-xs sm:text-sm"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href="tel:+911234567890"
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-700 
                      hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 
                      transition-all duration-300 text-xs sm:text-sm"
                  >
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>Phone</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-slate-800/50">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-400">Rated 5/5 by clients</span>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="text-xs sm:text-sm text-slate-400">
                      <span className="text-white font-semibold">24-48h</span> response
                    </div>
                    <div className="w-1 h-1 rounded-full bg-slate-600"></div>
                    <div className="text-xs sm:text-sm text-slate-400">
                      <span className="text-white font-semibold">Free</span> consultation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-6 sm:mt-8"
        >
          Let&apos;s build something amazing together
        </motion.p>
      </div>
    </section>
  );
};

export default FinalCta;