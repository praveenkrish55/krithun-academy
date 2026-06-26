"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAProps {
  onApplyNow: () => void;
}

export function CTA({ onApplyNow }: CTAProps) {
  return (
    <section className="bg-[#0A1D3D] text-white py-20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-[#D09C34]/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-40 w-40 bg-[#D09C34]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl relative z-10 space-y-6">
        <h2 className="font-heading text-xs font-bold uppercase tracking-[0.3em] text-[#D09C34]">
          Admissions Open
        </h2>
        <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-light tracking-wide text-white leading-relaxed uppercase">
          Join Krithun Academy Today and Take the First Step Towards a <span className="font-serif italic font-normal text-[#D09C34]">Brighter Future.</span>
        </h3>
        
        <div className="pt-6">
          <Button
            onClick={onApplyNow}
            className="bg-[#D09C34] hover:bg-[#bfa032] hover:shadow-lg text-white font-bold text-xs uppercase tracking-wider px-10 h-12 rounded transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>Enroll Now</span>
            <ArrowRight size={14} />
          </Button>
        </div>
      </div>
    </section>
  );
}
