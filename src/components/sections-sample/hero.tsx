"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBookCounselling: () => void;
}

export function Hero({ onBookCounselling }: HeroProps) {
  const springTransition = {
    type: "spring" as const,
    stiffness: 50,
    damping: 18,
    mass: 1,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: springTransition },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { ...springTransition, delay: 0.15 } },
  };

  return (
    <section id="home" className="relative py-16 lg:py-24 overflow-hidden bg-white scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Context (7 Columns) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="lg:col-span-7 space-y-6 lg:max-w-xl text-left"
          >
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34]">
              <Sparkles size={11} className="text-[#D09C34]" />
              <span>EMPOWER • EXCEL • ELEVATE</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A1D3D] leading-[1.15]">
              Your Journey to <br />
              Professional <span className="font-serif italic font-normal text-[#D09C34]">Excellence</span>
            </h1>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
              Expert coaching for CA Foundation & Inter, CMA Foundation & Inter, Tally Prime, GST Filing & Practical Accounting with experienced faculty, study materials, mock tests, and career guidance.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                onClick={() => {
                  const el = document.getElementById("courses");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-[#D09C34] hover:bg-[#bfa032] text-white px-8 h-12 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded shadow-md hover:translate-y-[-2px] inline-flex items-center gap-2"
              >
                <span>Explore Courses</span>
                <ArrowRight size={14} />
              </Button>
              <Button
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white hover:bg-slate-50 text-[#0A1D3D] border border-slate-200 px-8 h-12 text-xs font-semibold uppercase tracking-wider transition-all duration-300 rounded hover:translate-y-[-2px]"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Hero Image Facade (5 Columns) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideLeft}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <Image
                src="/images/academy_building.png"
                alt="Krithun Academy Building Facade"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                priority
                className="object-cover group-hover:scale-103 transition-transform duration-700"
              />
              {/* Gold Ribbon split overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1D3D]/90 via-[#0A1D3D]/40 to-transparent p-6 text-white flex flex-col justify-end">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D09C34]">
                  EMPOWERING MINDS.
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white mt-0.5">
                  SHAPING FUTURES.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
