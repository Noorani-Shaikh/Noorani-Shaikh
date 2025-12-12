"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  User, Mail, MessageSquare, Phone, MessageCircle, 
  MapPin, Instagram, Linkedin, Github, Calendar, 
  Copy, Check, Globe, Clock, Send, Sparkles,
  ExternalLink, AlertCircle
} from "lucide-react";
import QRCode from "react-qr-code";
import BackgroundWrapper from "@/components/backgroundwrapper/page.js";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [honeypot, setHoneypot] = useState(""); // Anti-spam field
    const [status, setStatus] = useState("");
    const [modal, setModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);
    const [activeTab, setActiveTab] = useState("message");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Honeypot check (if bot fills this invisible field)
        if (honeypot) {
            // Pretend success to bot
            setForm({ name: "", email: "", message: "" });
            setHoneypot("");
            setModal(true);
            return;
        }

        // Validation
        if (!form.name.trim()) {
            setErrorMessage("Please enter your name");
            setErrorModal(true);
            return;
        }
        
        if (!form.email.trim()) {
            setErrorMessage("Please enter your email address");
            setErrorModal(true);
            return;
        }
        
        if (!form.message.trim()) {
            setErrorMessage("Please enter your message");
            setErrorModal(true);
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setErrorMessage("Please enter a valid email address");
            setErrorModal(true);
            return;
        }

        setStatus("Sending...");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(form),
            });

            const data = await res.text();
            
            if (res.ok) {
                setStatus("");
                setForm({ name: "", email: "", message: "" });
                setHoneypot("");
                setModal(true);
            } else {
                setErrorMessage(data || "Something went wrong. Please try again.");
                setErrorModal(true);
                setStatus("");
            }
        } catch (error) {
            console.error("Error:", error);
            setErrorMessage("Network error. Please check your internet connection.");
            setErrorModal(true);
            setStatus("");
        }
    };

    const getResponseTime = () => {
        const hour = new Date().getHours();
        if (hour >= 9 && hour <= 21) return "Typically responds within 30-60 minutes";
        return "Usually replies within 6-8 hours";
    };

    const generateWhatsAppLink = () => {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const message = encodeURIComponent(
            `Hi, I just visited your portfolio website and I'm interested in discussing a project.\n\nMy Timezone: ${timezone}\nLooking forward to your response.`
        );
        const phone = "917030625288";
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        return isMobile
            ? `https://wa.me/${phone}?text=${message}`
            : `https://web.whatsapp.com/send?phone=${phone}&text=${message}`;
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    // UPDATE THESE WITH YOUR ACTUAL SOCIAL LINKS
    const socialLinks = [
        { icon: Instagram, href: "https://instagram.com/yourusername", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
        { icon: Github, href: "https://github.com/yourusername", label: "GitHub" }
    ];

    return (
        <BackgroundWrapper>
        <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16 relative"
            >
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm text-indigo-300">Let&apos;s Connect</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    Get in <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                    Have a project in mind? Let&apos;s discuss how we can bring your ideas to life.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 relative">
                {/* Left Panel - Contact Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-1 space-y-6"
                >
                    {/* Contact Card */}
                    <div className="bg-linear-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-indigo-400" />
                            Contact Information
                        </h3>
                        
                        {/* Contact Items */}
                        <div className="space-y-4">
                            {/* Phone */}
                            <div className="group">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-indigo-500/10">
                                            <Phone className="w-4 h-4 text-indigo-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400">Phone</p>
                                            <p className="text-white font-medium">+91 7030625288</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard("+91 7030625288", 'phone')}
                                        className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                    >
                                        {copiedPhone ? (
                                            <Check className="w-4 h-4 text-green-400" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-slate-400" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="group">
                                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-purple-500/10">
                                            <Mail className="w-4 h-4 text-purple-400" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400">Email</p>
                                            <p className="text-white font-medium">devwithnoor@gmail.com</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => copyToClipboard("contact@noorani.dev", 'email')}
                                        className="p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
                                    >
                                        {copiedEmail ? (
                                            <Check className="w-4 h-4 text-green-400" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-slate-400" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="p-3 rounded-xl bg-slate-800/50">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-blue-500/10">
                                        <MapPin className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-400">Location</p>
                                        <p className="text-white font-medium">Pune, Maharashtra</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Timezone Info */}
                        <div className="mt-6 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50">
                            <div className="flex items-center gap-2 mb-2">
                                <Globe className="w-4 h-4 text-slate-400" />
                                <p className="text-sm text-slate-300">Your Timezone</p>
                            </div>
                            <p className="text-white font-medium">
                                {Intl.DateTimeFormat().resolvedOptions().timeZone}
                            </p>
                        </div>
                    </div>

                    {/* Social & Quick Actions */}
                    <div className="space-y-4">
                        {/* Social Links */}
                        <div className="bg-linear-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
                            <h4 className="text-white font-medium mb-4">Connect with me</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex flex-col items-center p-3 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 group"
                                    >
                                        <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                                        <span className="text-xs text-slate-400 mt-1">{social.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-3">
                            <button
                                onClick={() => window.open(generateWhatsAppLink(), "_blank")}
                                className="w-full flex items-center justify-center gap-3 p-4 rounded-xl bg-linear-to-r from-[#25D366] to-[#1DA851] hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
                            >
                                <MessageCircle className="w-5 h-5" />
                                <span className="text-white font-medium">Chat on WhatsApp</span>
                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Right Panel - Contact Form */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2"
                >
                    {/* Form Container */}
                    <div className="bg-linear-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 md:p-8">
                        {/* Form Tabs */}
                        <div className="flex gap-2 mb-8">
                            <button
                                type="button"
                                onClick={() => setActiveTab("message")}
                                className={`flex-1 py-3 rounded-lg font-medium transition-all ${activeTab === "message" 
                                    ? "bg-indigo-600 text-white" 
                                    : "bg-slate-800/50 text-slate-400 hover:text-white"}`}
                            >
                                Send Message
                            </button>
                            <button
                                type="button"
                                onClick={() => setActiveTab("quick")}
                                className={`flex-1 py-3 rounded-lg font-medium transition-all ${activeTab === "quick" 
                                    ? "bg-indigo-600 text-white" 
                                    : "bg-slate-800/50 text-slate-400 hover:text-white"}`}
                            >
                                Quick Connect
                            </button>
                        </div>

                        {/* Message Form */}
                        <AnimatePresence mode="wait">
                            {activeTab === "message" && (
                                <motion.form
                                    key="message"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Honeypot field (hidden from users) */}
                                    <input
                                        type="text"
                                        name="website"
                                        className="hidden"
                                        style={{ display: 'none' }}
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        tabIndex="-1"
                                        autoComplete="off"
                                    />

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Name Field */}
                                        <div className="space-y-2">
                                            <label className="text-sm text-slate-400 flex items-center gap-2">
                                                <User className="w-4 h-4" />
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                required
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                                disabled={status === "Sending..."}
                                            />
                                        </div>

                                        {/* Email Field */}
                                        <div className="space-y-2">
                                            <label className="text-sm text-slate-400 flex items-center gap-2">
                                                <Mail className="w-4 h-4" />
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                                disabled={status === "Sending..."}
                                            />
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div className="space-y-2">
                                        <label className="text-sm text-slate-400 flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4" />
                                            Your Message *
                                        </label>
                                        <textarea
                                            placeholder="Hello, I'm interested in working with you on..."
                                            required
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                                            disabled={status === "Sending..."}
                                        />
                                    </div>

                                    {/* Response Time Info */}
                                    <div className="flex items-center gap-2 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                                        <Clock className="w-4 h-4 text-indigo-400" />
                                        <p className="text-sm text-indigo-300">{getResponseTime()}</p>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={status === "Sending..." || !form.name || !form.email || !form.message}
                                        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
                                    >
                                        {status === "Sending..." ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}

                            {/* Quick Connect Tab */}
                            {activeTab === "quick" && (
                                <motion.div
                                    key="quick"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="space-y-6"
                                >
                                    <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                                        <h4 className="text-white font-medium mb-3">Scan to Connect</h4>
                                        <p className="text-sm text-slate-400 mb-4">
                                            Scan this QR code to save my contact or visit the website directly
                                        </p>
                                        <div className="flex justify-center p-4 bg-white rounded-lg">
                                            <QRCode
                                                value="https://nooranishaikh.com/contact" // UPDATE WITH YOUR DOMAIN
                                                size={140}
                                                bgColor="#ffffff"
                                                fgColor="#1e293b"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                                        <h4 className="text-white font-medium mb-3">Quick Links</h4>
                                        <div className="space-y-3">
                                            <button
                                                type="button"
                                                onClick={() => window.open("mailto:contact@noorani.dev", "_blank")}
                                                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Mail className="w-5 h-5 text-slate-400" />
                                                    <span className="text-white">Email Directly</span>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                            </button>

                                            <button
                                                type="button"
                                                onClick={() => window.open("tel:+917030625288", "_blank")}
                                                className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300 group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Phone className="w-5 h-5 text-slate-400" />
                                                    <span className="text-white">Call Now</span>
                                                </div>
                                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* Map Section */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-12"
            >
                <div className="rounded-2xl overflow-hidden border border-slate-700/50 h-[300px] relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.564061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1648897898508!5m2!1sen!2sin"
                        className="w-full h-full"
                        loading="lazy"
                        style={{ filter: "grayscale(70%) opacity(0.9)" }}
                        title="Pune Location"
                    ></iframe>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                </div>
            </motion.div>

            {/* Success Modal */}
            <AnimatePresence>
                {modal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4"
                        onClick={() => setModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-linear-to-br from-slate-900 to-slate-800 border border-emerald-700/50 p-8 rounded-2xl text-center max-w-md w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Message Sent! ✨</h3>
                            <p className="text-slate-300 mb-6">
                                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                            </p>
                            <p className="text-sm text-emerald-400 mb-6">
                                📧 Check your email for a copy of this message.
                            </p>
                            <button
                                onClick={() => setModal(false)}
                                className="px-8 py-3 rounded-xl font-medium text-white bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error Modal */}
            <AnimatePresence>
                {errorModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4"
                        onClick={() => setErrorModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-linear-to-br from-slate-900 to-slate-800 border border-red-700/50 p-8 rounded-2xl text-center max-w-md w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <AlertCircle className="w-8 h-8 text-red-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Oops! Something went wrong</h3>
                            <p className="text-slate-300 mb-6">{errorMessage}</p>
                            <button
                                onClick={() => setErrorModal(false)}
                                className="px-8 py-3 rounded-xl font-medium text-white bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all"
                            >
                                Try Again
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            </section>
            </BackgroundWrapper>
    );
}