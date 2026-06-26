"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBookCounselling: () => void;
}

export function Hero({ onBookCounselling }: HeroProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <section id="home" className="relative py-20 lg:py-0 lg:h-[650px] flex items-center overflow-hidden bg-white scroll-mt-10 dot-grid">
      {/* Background radial gradient overlay to fade out the grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />

      {/* Right Column: Full-width absolute image on desktop (mockup-aligned merge style) */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[45%] xl:w-[48%] z-0">
        <div className="relative w-full h-full">
          {/* Gradient mask to blend left side of image into white background */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
          
          <Image
            src="/images/hero_commerce_students.png"
            alt="Krithun Academy Commerce Students studying together"
            fill
            priority
            className="object-cover object-left"
          />
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Text Context (7 Columns) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-7 space-y-8 lg:max-w-2xl text-left"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#D09C34]"
            >
              <span>LEARN TODAY • LEAD TOMORROW</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6.5xl font-extrabold tracking-tight text-[#0A1D3D] leading-[1.12]"
            >
              Build Your <br />
              <span className="font-serif italic font-normal text-[#D09C34]">Professional Future</span> <br />
              with Confidence
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-[#334155] text-base sm:text-lg leading-relaxed font-normal"
            >
              Expert coaching for CA, CMA, Tally Prime, GST Filing & Practical Accounting with experienced faculty, comprehensive study materials, mock tests and career guidance.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link href="/courses">
                <Button
                  className="bg-[#D09C34] hover:bg-[#0A1D3D] text-white px-8 h-13 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded shadow-lg hover:shadow-xl hover:translate-y-[-2px] inline-flex items-center justify-center gap-2 group cursor-pointer font-bold"
                >
                  <span>Explore Courses</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300 text-white" />
                </Button>
              </Link>
              <Button
                onClick={onBookCounselling}
                className="bg-white hover:bg-slate-50 text-[#0A1D3D] border-2 border-slate-200 hover:border-[#0A1D3D] px-8 h-13 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded shadow-sm hover:shadow-md hover:translate-y-[-2px] cursor-pointer font-bold"
              >
                Book Free Counselling
              </Button>
            </motion.div>

            {/* Overlapping Avatar Heads Stack (Mockup Details) */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-3 overflow-hidden">
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="/images/faculty/ca_swathi_lakshmi.png"
                  alt="Student Avatar"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="/images/faculty/ca_praveen_kumar.png"
                  alt="Student Avatar"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                  src="/images/faculty/ca_nandhini_s.png"
                  alt="Student Avatar"
                  width={40}
                  height={40}
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#0A1D3D] leading-none">1500+ Students</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">trusted by parents and aspiring professionals</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Mobile-only Image (Hidden on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="block lg:hidden relative flex justify-center mt-8 w-full"
          >
            {/* Boxed image frame for mobile/tablet */}
            <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl p-1 bg-gradient-to-tr from-[#0A1D3D] via-[#0A1D3D]/10 to-[#D09C34] shadow-2xl">
              {/* Image Container for mobile */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/hero_commerce_students.png"
                  alt="Krithun Academy Commerce Students"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
