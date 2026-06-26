"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles } from "lucide-react";

export function About() {
  const springTransition = {
    type: "spring" as const,
    stiffness: 50,
    damping: 18,
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: springTransition },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ...springTransition, delay: 0.1 } },
  };

  return (
    <section id="about" className="py-24 bg-slate-50 scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Commitment Banner (Highlights Center of Pamphlet Page 1) */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 mb-16 shadow-[0_8px_30px_rgb(0,0,0,0.015)] flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D09C34]/10 text-[#D09C34] shrink-0">
            <Sparkles size={24} />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-xl md:text-2xl font-light text-[#0A1D3D] uppercase tracking-wider">
              YOUR SUCCESS. <span className="font-serif italic font-normal text-[#D09C34]">OUR COMMITMENT.</span>
            </h3>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light max-w-3xl">
              We are committed to providing quality education, mentorship and the right guidance to help you achieve your goals and build a brighter future.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: About Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideRight}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-white">
              <Image
                src="/images/about_krithun_academy.png"
                alt="Krithun Academy Seminar Discussion"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Column: Mission and Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#0A1D3D] leading-tight uppercase tracking-wider">
                Empowering the Next Generation of <span className="font-serif italic font-normal text-[#D09C34]">Commerce Leaders</span>
              </h2>
              <div className="h-0.5 w-16 bg-[#D09C34] mt-4 mb-6" />
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-light">
                Unlike traditional coaching classrooms, Krithun Academy is styled as a premium EdTech learning partner. We prioritize deep comprehension, student mental readiness, and real-world tools that elevate you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Mission */}
              <div className="bg-white border border-slate-100 rounded-xl p-6 space-y-3.5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A1D3D]/5 text-[#D09C34]">
                  <Target size={20} />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0A1D3D] tracking-wide uppercase">
                  Our Mission
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  To deliver top-tier commerce and accounting mentorship that inspires candidates to clear professional certifications confidently and step into global opportunities.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border border-slate-100 rounded-xl p-6 space-y-3.5 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0A1D3D]/5 text-[#D09C34]">
                  <Eye size={20} />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#0A1D3D] tracking-wide uppercase">
                  Our Vision
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  To build an elite educational institute known for nurturing the next generation of strategic leaders in taxation, corporate laws, costing, and commerce.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
