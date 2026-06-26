"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAProps {
  onApplyNow: () => void;
}

export function CTA({ onApplyNow }: CTAProps) {
  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" as const, stiffness: 60, damping: 15 }}
          className="bg-[#0A1D3D] rounded-3xl overflow-hidden border border-[#D09C34]/20 shadow-2xl relative"
        >
          {/* Background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.12),transparent_50%)] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Copy & Action (7 cols) */}
            <div className="lg:col-span-7 p-10 sm:p-14 text-left space-y-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D09C34]/10 text-[#D09C34] border border-[#D09C34]/20">
                <GraduationCap size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="font-heading text-2.5xl sm:text-4xl font-extrabold text-white leading-tight uppercase">
                  Admissions Open for 2026 Batch
                </h3>
                <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl">
                  Take the first step towards a brighter professional future. Join Krithun Academy and master CA, CMA, or practical accounting.
                </p>
              </div>
              <div className="pt-2">
                <Button
                  onClick={onApplyNow}
                  className="bg-[#D09C34] hover:bg-white hover:text-[#0A1D3D] hover:scale-105 shimmer-gold text-white font-bold text-xs uppercase tracking-wider px-8 h-12 rounded-xl shadow-md inline-flex items-center gap-2 transition-all duration-300 cursor-pointer font-bold"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </Button>
              </div>
            </div>

            {/* Right Column: Overlapping Happy Students image (5 cols) */}
            <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[340px] w-full self-stretch overflow-hidden">
              <Image
                src="/images/about_krithun_academy.png"
                alt="Krithun Academy students discussion"
                fill
                sizes="35vw"
                className="object-cover object-center scale-105 origin-bottom translate-y-2 hover:scale-110 transition-transform duration-750"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
