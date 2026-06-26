"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      image: "/images/faculty/ca_praveen_kumar.png",
    },
    {
      name: "CA. Swathi Lakshmi",
      qualification: "B.Com, FCA",
      experience: "8+ Years Experience",
      image: "/images/faculty/ca_swathi_lakshmi.png",
    },
    {
      name: "CMA. Arvind Raj",
      qualification: "CMA, B.Com",
      experience: "7+ Years Experience",
      image: "/images/faculty/cma_arvind_raj.png",
    },
    {
      name: "CA. Nandhini S",
      qualification: "B.Com, ACA",
      experience: "6+ Years Experience",
      image: "/images/faculty/ca_nandhini_s.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 18 },
    },
  };

  return (
    <section id="faculty" className="py-28 bg-[#FFFFFF] scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-20">
          <div className="text-left">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-3">
              OUR FACULTY
            </h4>
            <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
              Learn from the Best
            </h2>
            <div className="h-1 w-16 bg-[#D09C34] mt-4 rounded-full" />
          </div>
          <button
            onClick={onMeetFaculty}
            className="text-[#D09C34] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:text-[#0A1D3D] transition-colors duration-300 group cursor-pointer"
          >
            <span>View All Faculty</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Grid of Faculty Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {faculties.map((fac) => (
            <motion.div
              key={fac.name}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-[#D09C34]/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-5">
                {/* Portrait Box */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-100 p-1 bg-gradient-to-tr from-[#0A1D3D]/5 to-[#D09C34]/10 group-hover:from-[#0A1D3D] group-hover:to-[#D09C34] transition-all duration-300">
                  <div className="relative w-full h-full rounded-lg overflow-hidden bg-slate-200">
                    <Image
                      src={fac.image}
                      alt={fac.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="font-heading text-xl font-bold text-[#0A1D3D] group-hover:text-[#D09C34] transition-colors duration-200 uppercase tracking-wide">
                    {fac.name}
                  </h3>
                  <p className="text-[#D09C34] text-[10px] font-bold tracking-wider uppercase">
                    {fac.qualification}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 text-center">
                  <span className="text-xs text-[#334155] font-bold tracking-wide">{fac.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
