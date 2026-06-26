"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Users, CheckCircle, Trophy, GraduationCap, Star } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 50;
      const stepValue = Math.ceil(end / totalSteps);
      const stepTime = 30; // 30ms per step

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  const metrics = [
    { target: 1500, suffix: "+", label: "Happy Students", icon: Users },
    { target: 95, suffix: "%", label: "Success Rate", icon: CheckCircle },
    { target: 50, suffix: "+", label: "All India Ranks", icon: Trophy },
    { target: 100, suffix: "+", label: "University Toppers", icon: GraduationCap },
  ];

  const springTransition = {
    type: "spring" as const,
    stiffness: 70,
    damping: 18,
  };

  const slideRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: springTransition },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { ...springTransition, delay: 0.15 } },
  };

  return (
    <section id="about" className="py-28 bg-[#FFFFFF] scroll-mt-10 border-b border-slate-100">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Stats grid (6 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="lg:col-span-6 space-y-8 text-left"
          >
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34]">
                OUR IMPACT
              </h4>
              <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
                Numbers that <br /> Reflect Excellence
              </h2>
              <div className="h-1 w-16 bg-[#D09C34] mt-4 rounded-full" />
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {metrics.map((metric) => (
                <div 
                  key={metric.label} 
                  className="bg-[#F8FAFC] border border-slate-100 hover:border-[#D09C34]/40 rounded-2xl p-6 shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col items-start gap-4 text-left group"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] group-hover:bg-[#0A1D3D] group-hover:text-white transition-all duration-300 shadow-sm border border-white">
                    <metric.icon size={18} />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-[#0A1D3D] font-heading leading-tight tracking-tight">
                      <Counter value={metric.target} suffix={metric.suffix} />
                    </div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-1.5 leading-none">
                      {metric.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Portrait and floating overlay card (6 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            {/* Image Outer Frame with decorative offset card */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-tr from-[#0A1D3D] to-[#D09C34] shadow-2xl">
              {/* Decorative background outline */}
              <div className="absolute top-4 -right-4 bottom-4 left-4 bg-gradient-to-tr from-[#0A1D3D]/5 to-[#D09C34]/5 border border-slate-100 rounded-3xl -z-10" />

              {/* Overlapping Navy Card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 } as any}
                className="absolute -bottom-8 -left-8 bg-[#0A1D3D] text-white shadow-2xl rounded-2xl p-6 flex flex-col z-20 border border-[#D09C34]/30 max-w-[270px] text-left hover:border-[#D09C34] transition-colors duration-300"
              >
                {/* 5 stars */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-[#D09C34] text-[#D09C34]" />
                  ))}
                </div>
                <h4 className="font-heading font-extrabold text-white text-base uppercase tracking-wider leading-tight">
                  Your Hard Work <br />
                  + Our Guidance <br />
                  <span className="text-[#D09C34] font-serif italic normal-case block mt-1.5 text-lg font-normal">= Your Success</span>
                </h4>
              </motion.div>

              {/* Image box */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 group">
                <Image
                  src="/images/successful_indian_student.png"
                  alt="Krithun Academy Successful Indian Student"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-750 opacity-95 group-hover:opacity-100"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
