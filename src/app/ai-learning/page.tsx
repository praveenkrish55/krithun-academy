"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquareCode,
  CalendarRange,
  FileQuestion,
  ClipboardPen,
  LineChart,
  Compass,
  SquareStack,
  Mic,
  ArrowRight,
  BrainCircuit,
  Sparkles,
  Bot,
  Cpu,
  Mail,
  User,
  CheckCircle2,
} from "lucide-react";

import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function AILearningPage() {
  // Waitlist form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !course) return;

    setIsSubmitting(true);
    // Simulate API registration delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const aiFeatures = [
    {
      title: "AI Doubt Assistant",
      description: "24/7 instant chat resolving complex CA/CMA concepts with step-by-step guidance and reference linking.",
      icon: MessageSquareCode,
      badge: "Real-time AI",
    },
    {
      title: "AI Study Planner",
      description: "Adaptive study schedules that automatically adjust to your progress, weaknesses, and target exam dates.",
      icon: CalendarRange,
      badge: "Smart Schedule",
    },
    {
      title: "AI Mock Test Generator",
      description: "Generates custom practice papers based on historic ICAI/ICMAI exam papers, targeting your specific gaps.",
      icon: FileQuestion,
      badge: "Exam Ready",
    },
    {
      title: "AI Notes Generator",
      description: "Converts complex accounting standards and law acts into structured, simplified summaries and bullet points.",
      icon: ClipboardPen,
      badge: "Active Review",
    },
    {
      title: "AI Performance Analytics",
      description: "Tracks your speed, accuracy, and syllabus coverage, plotting comprehensive predictive success indexes.",
      icon: LineChart,
      badge: "Insights Dashboard",
    },
    {
      title: "AI Career Advisor",
      description: "AI-driven guidance to navigate fields in corporate auditing, investment banking, taxation, and law.",
      icon: Compass,
      badge: "Career Pathing",
    },
    {
      title: "AI Flash Cards",
      description: "Active recall flashcards for legal sections, tax rate slabs, and accounting formulas powered by spaced repetition.",
      icon: SquareStack,
      badge: "Memory Assist",
    },
    {
      title: "Voice Tutor",
      description: "Voice-interactive mock interviews and standard revision reads to practice oral presentations and audits.",
      icon: Mic,
      badge: "Speech Model",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 16 },
    },
  };

  return (
    <>
      {/* Layout Header */}
      <TopBar />
      <Navbar />

      <main className="min-h-screen bg-[#FFFFFF] relative overflow-hidden font-sans">
        
        {/* ========================================================== */}
        {/* 1. AI Hero Section */}
        {/* ========================================================== */}
        <section className="bg-[#0A1D3D] text-white py-24 lg:py-32 relative overflow-hidden">
          {/* Hexagonal/Tech mesh radial glow overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.18),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,29,61,0.6),transparent_50%)] pointer-events-none" />
          
          {/* Subtle moving particle nodes overlay via SVG */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none select-none z-0">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              
              {/* Coming Soon Glowing Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#D09C34]/20 via-[#D09C34]/10 to-transparent rounded-full border border-[#D09C34]/30 text-xs font-bold uppercase tracking-[0.2em] text-[#D09C34] shadow-sm animate-pulse"
              >
                <BrainCircuit size={12} className="text-[#D09C34]" />
                <span>AI Learning Platform • Coming Soon</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl sm:text-5.5xl lg:text-6.5xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                Intelligent Learning <br />
                <span className="font-serif italic font-normal text-[#D09C34]">For Future Leaders</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="h-1 w-20 bg-[#D09C34] mx-auto rounded-full mt-4"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal"
              >
                We are building the next generation of EdTech tools for commerce students. Prepare for CA, CMA, and accounting certifications with a personalized, AI-driven study ecosystem.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6"
              >
                <a href="#waitlist">
                  <Button className="bg-[#D09C34] hover:bg-[#0A1D3D] text-white px-8 h-13 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded shadow-lg hover:shadow-xl hover:translate-y-[-2px] inline-flex items-center gap-2 group cursor-pointer font-bold">
                    <span>Join the Early Access Waitlist</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* 2. Feature Grid section */}
        {/* ========================================================== */}
        <section className="py-28 bg-[#F8FAFC] relative border-y border-slate-100 scroll-mt-10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Section Title */}
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-3">
                INTELLIGENT SUITE
              </h4>
              <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
                AI Tools Designed For Commerce Prep
              </h2>
              <div className="h-1 w-16 bg-[#D09C34] mx-auto mt-4 rounded-full" />
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mt-4 font-normal">
                An intelligent classroom setup directly tuned to ICAI/ICMAI syllabuses and practical business accounting.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
            >
              {aiFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-slate-100 rounded-2xl p-6 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full text-left"
                >
                  {/* Glowing top line overlay on hover */}
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-[#D09C34] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                  <div className="space-y-4">
                    {/* Top Icon Badge Bar */}
                    <div className="flex justify-between items-start">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] group-hover:bg-[#0A1D3D] group-hover:text-white transition-all duration-300 shadow-sm border border-slate-50">
                        <feature.icon size={20} className="group-hover:rotate-3 transition-transform duration-300" />
                      </div>
                      
                      {/* Coming Soon tag */}
                      <span className="text-[9px] font-bold tracking-wider text-[#D09C34] bg-[#D09C34]/10 py-1 px-2.5 rounded-full uppercase">
                        {feature.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#0A1D3D] tracking-wide group-hover:text-[#D09C34] transition-colors duration-200 uppercase">
                        {feature.title}
                      </h3>
                      <p className="text-[#334155] text-xs leading-relaxed mt-2.5 font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom "Coming Soon" indicator */}
                  <div className="text-slate-400 font-bold text-[9px] tracking-wider uppercase flex items-center gap-1.5 mt-6 self-start pt-2 border-t border-slate-50 w-full">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D09C34] animate-pulse shrink-0" />
                    <span>Development Phase</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        {/* ========================================================== */}
        {/* 3. The Future of Commerce Education Vision Section */}
        {/* ========================================================== */}
        <section className="py-28 bg-white relative overflow-hidden border-b border-slate-100">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
              
              {/* Left Column: Tech Illustration (5 Columns) */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring" as const, stiffness: 60, damping: 16 }}
                className="lg:col-span-5 relative"
              >
                {/* Gold decoration frame */}
                <div className="absolute top-4 left-4 right-[-16px] bottom-[-16px] bg-gradient-to-tr from-[#D09C34]/15 to-[#D09C34]/5 rounded-3xl -z-10 border border-[#D09C34]/20" />
                
                {/* Code-style mock card layout */}
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] xl:aspect-[3/4] shadow-2xl border border-slate-100 bg-[#0A1D3D] p-6 sm:p-8 flex flex-col justify-between text-left">
                  {/* Background overlay mesh */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(208,156,52,0.1),transparent_50%)] pointer-events-none" />
                  
                  {/* Header mock prompt */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-500/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="p-3 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-[#D09C34] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        CA
                      </div>
                      <div className="space-y-1">
                        <p className="text-white text-xs font-bold">CA Doubt Assistant v1.2</p>
                        <p className="text-slate-400 text-[10px]">Processing accounting query...</p>
                      </div>
                    </div>
                  </div>

                  {/* Neural Net Nodes Graphics (SVG) */}
                  <div className="h-32 w-full relative flex items-center justify-center my-6">
                    <svg className="absolute inset-0 w-full h-full text-slate-700" xmlns="http://www.w3.org/2000/svg">
                      <line x1="20%" y1="50%" x2="50%" y2="20%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="currentColor" strokeWidth="1" />
                      <line x1="20%" y1="50%" x2="50%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                      
                      <line x1="50%" y1="20%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="1" />
                      <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="50%" y1="80%" x2="80%" y2="50%" stroke="currentColor" strokeWidth="1" />
                      
                      <circle cx="20%" cy="50%" r="5" fill="#D09C34" className="animate-ping" />
                      <circle cx="20%" cy="50%" r="5" fill="#D09C34" />
                      
                      <circle cx="50%" cy="20%" r="5" fill="white" />
                      <circle cx="50%" cy="50%" r="5" fill="#D09C34" />
                      <circle cx="50%" cy="80%" r="5" fill="white" />
                      
                      <circle cx="80%" cy="50%" r="5" fill="#D09C34" />
                    </svg>
                    
                    {/* Floating status bubbles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-[#D09C34] text-white text-[10px] font-bold uppercase rounded-lg shadow-md flex items-center gap-1 border border-white/20">
                      <Cpu size={12} className="animate-spin" />
                      <span>Model Tuned</span>
                    </div>
                  </div>

                  {/* Highlights listing */}
                  <div className="space-y-3">
                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-slate-300 text-[11px] leading-relaxed">
                      <span className="text-[#D09C34] font-bold">Query: </span>"Explain Section 40(a)(ia) of Income Tax Act regarding TDS default..."
                    </div>
                    <div className="flex gap-2">
                      <span className="py-1 px-2 bg-[#D09C34]/15 text-[#D09C34] border border-[#D09C34]/20 rounded text-[9px] font-bold uppercase">ICAI Compliant</span>
                      <span className="py-1 px-2 bg-white/10 text-slate-300 border border-white/5 rounded text-[9px] font-bold uppercase">100% Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Narrative Vision (7 Columns) */}
              <div className="lg:col-span-7 space-y-8 text-left">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34]">
                    AI REVOLUTION
                  </h4>
                  <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
                    The Future of Commerce Education
                  </h2>
                  <div className="h-1 w-16 bg-[#D09C34] rounded-full" />
                  <p className="text-[#334155] text-sm sm:text-base leading-relaxed font-normal pt-2">
                    Traditional rote learning is no longer sufficient for challenging professional exams like CA (Chartered Accountancy) and CMA (Cost Management Accountancy). Our upcoming AI engine integrates customized learning patterns directly with verified materials to clear doubts on command.
                  </p>
                </div>

                <div className="space-y-6 pt-2">
                  {/* Bullet 1 */}
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0 border border-slate-50">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="text-[#0A1D3D] text-sm font-bold uppercase tracking-wide">Concept Diagnostics</h4>
                      <p className="text-[#334155] text-xs leading-relaxed mt-1 font-normal">
                        Identify key micro-topics you struggle with during tests, allowing targeted revisions rather than repeating entire chapters.
                      </p>
                    </div>
                  </div>

                  {/* Bullet 2 */}
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center shrink-0 border border-slate-50">
                      <Bot size={16} />
                    </div>
                    <div>
                      <h4 className="text-[#0A1D3D] text-sm font-bold uppercase tracking-wide">Interactive Exam Simulations</h4>
                      <p className="text-[#334155] text-xs leading-relaxed mt-1 font-normal">
                        Practice answering past question outlines and receive immediate scoring feedback on layout structure and legal standard mentions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* 4. Interactive Waitlist Sign-up CTA Section */}
        {/* ========================================================== */}
        <section id="waitlist" className="py-28 bg-[#0A1D3D] text-white relative overflow-hidden">
          {/* Radial mask background glows */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(208,156,52,0.12),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(10,29,61,0.5),transparent_60%)] pointer-events-none" />

          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            
            <div className="max-w-3xl mx-auto space-y-8">
              
              <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34]">
                  EARLY ACCESS WAITLIST
                </h4>
                <h2 className="font-heading text-3.5xl sm:text-5.5xl font-extrabold text-white leading-tight uppercase tracking-tight">
                  Be among the first students to experience AI-powered learning.
                </h2>
                <div className="h-1 w-16 bg-[#D09C34] mx-auto rounded-full mt-2" />
                <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto pt-2 leading-relaxed">
                  Join the waitlist today. We are releasing early beta access keys to selected batch students in Coimbatore. Secure your preference below.
                </p>
              </div>

              {/* Multi-state signup form card */}
              <div className="bg-white/5 border border-white/10 p-6 sm:p-10 rounded-3xl max-w-lg mx-auto shadow-2xl relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.05),transparent_40%)] pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {!isSuccess ? (
                    <motion.form
                      key="waitlist-form"
                      onSubmit={handleWaitlistSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-5 text-left"
                    >
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Full Name</label>
                        <div className="relative">
                          <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 focus:border-[#D09C34] rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Email Address</label>
                        <div className="relative">
                          <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                          <input
                            type="email"
                            required
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 focus:border-[#D09C34] rounded-xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Course Select */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block">Target Study Track</label>
                        <select
                          required
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full bg-[#0A1D3D] border border-white/10 focus:border-[#D09C34] rounded-xl py-3 px-4 text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled className="text-slate-400">Select your course</option>
                          <option value="CA Foundation/Inter">CA Preparation (Foundation/Inter)</option>
                          <option value="CMA Foundation/Inter">CMA Preparation (Foundation/Inter)</option>
                          <option value="Practical Corporate Accounting">Practical Corporate Accounting Suite</option>
                          <option value="Other Certification Track">Other Certification</option>
                        </select>
                      </div>

                      {/* Submit button */}
                      <div className="pt-3">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#D09C34] hover:bg-white hover:text-[#0A1D3D] text-white font-bold text-xs uppercase tracking-wider h-13 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg hover:shadow-xl"
                        >
                          {isSubmitting ? (
                            <span>Requesting Access...</span>
                          ) : (
                            <>
                              <span>Submit Waitlist Request</span>
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                            </>
                          )}
                        </Button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="py-10 text-center space-y-4"
                    >
                      <div className="h-16 w-16 bg-[#D09C34]/20 border border-[#D09C34]/40 rounded-full flex items-center justify-center mx-auto text-[#D09C34]">
                        <CheckCircle2 size={32} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">You are on the list!</h3>
                        <p className="text-slate-300 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                          Welcome, <strong className="text-white">{name}</strong>! Your early access request for the <strong className="text-white">{course}</strong> AI track has been registered. We will notify you at <strong className="text-white">{email}</strong>.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Layout Footer */}
      <Footer />
    </>
  );
}
