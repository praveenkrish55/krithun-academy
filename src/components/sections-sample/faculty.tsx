"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FacultyProps {
  onMeetFaculty: () => void;
}

export function Faculty({ onMeetFaculty }: FacultyProps) {
  const faculties = [
    {
      name: "CA. Praveen Kumar",
      qualification: "B.Com, FCA, DISA (ICAI)",
      experience: "10+ Years Experience",
      initials: "PK",
    },
    {
      name: "CA. Swathi Lakshmi",
      qualification: "B.Com, FCA",
      experience: "8+ Years Experience",
      initials: "SL",
    },
    {
      name: "CMA. Arvind Raj",
      qualification: "CMA, B.Com",
      experience: "7+ Years Experience",
      initials: "AR",
    },
    {
      name: "CA. Nandhini S",
      qualification: "B.Com, ACA",
      experience: "6+ Years Experience",
      initials: "NS",
    },
  ];

  return (
    <section id="faculty" className="py-24 bg-white scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-2">
            OUR FACULTY
          </h4>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0A1D3D] leading-tight">
            Learn from the Best
          </h2>
          <div className="h-0.5 w-12 bg-[#D09C34] mx-auto mt-4" />
        </div>

        {/* Grid of Faculty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculties.map((fac) => (
            <div
              key={fac.name}
              className="bg-slate-50 border border-slate-100 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#D09C34]/20 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Clean Avatar Circle */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A1D3D] text-[#D09C34] text-xl font-heading font-semibold mx-auto group-hover:bg-[#D09C34] group-hover:text-white transition-all duration-300">
                  {fac.initials}
                </div>

                <div className="text-center space-y-1">
                  <h3 className="font-heading text-base font-bold text-[#0A1D3D] uppercase tracking-wide">
                    {fac.name}
                  </h3>
                  <p className="text-slate-400 text-[10px] font-bold tracking-wider uppercase">
                    {fac.qualification}
                  </p>
                </div>

                <div className="border-t border-slate-200/60 pt-4 text-center">
                  <span className="text-xs text-slate-500 font-light">{fac.experience}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Central White/Gold button */}
        <div className="mt-12 text-center">
          <Button
            onClick={onMeetFaculty}
            className="bg-white hover:bg-slate-50 text-[#0A1D3D] border border-slate-200 hover:border-[#D09C34]/30 px-8 h-12 text-xs font-semibold uppercase tracking-wider rounded transition-all inline-flex items-center gap-2 hover:translate-y-[-2px] duration-300"
          >
            <span>View All Faculty</span>
            <ArrowRight size={14} className="text-[#D09C34]" />
          </Button>
        </div>

      </div>
    </section>
  );
}
