"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the fee structure for CA and CMA courses?",
      a: "Our fee structure is competitive and offers convenient installments. Please submit an enquiry form or contact us directly on WhatsApp to receive the detailed fee schedule for specific upcoming batches.",
    },
    {
      q: "What is the duration of Tally Prime and GST Filing courses?",
      a: "Tally Prime and GST Filing courses are fast-track, practical modules lasting between 1 to 2 months. They cover live filing portals and real-world business billing scenarios.",
    },
    {
      q: "Do you offer both online and offline classes?",
      a: "Yes. We offer premium classroom sessions at our Chennai academy and live interactive online classes for selected courses, with lecture recordings available for revision.",
    },
    {
      q: "Are study materials and mock tests included in the course?",
      a: "Absolutely. All programs include comprehensive study materials compiled by expert faculty and regular test series (both weekly chapter tests and full-syllabus mock exams).",
    },
    {
      q: "Do you provide practical accounting certification?",
      a: "Yes. Our Practical Accounting, Tally Prime, and GST Filing courses include practical completion certificates and real transaction logs that you can present in job interviews.",
    },
  ];

  return (
    <section id="faq" className="py-28 bg-[#FFFFFF] scroll-mt-10 border-b border-slate-100">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-3">
            SUPPORT
          </h4>
          <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-16 bg-[#D09C34] mx-auto mt-4 rounded-full" />
          <p className="text-[#334155] text-sm sm:text-base leading-relaxed mt-6 font-normal">
            Have questions about batches or enrollments? Check our answers.
          </p>
        </div>

        {/* Accordion Component */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="border border-slate-100 rounded-2xl overflow-hidden shadow-md transition-all duration-300 bg-white hover:border-[#D09C34]/20"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left bg-slate-50/50 hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1D3D] tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#D09C34] transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] } as any}
                    >
                      <div className="px-6 py-5 bg-white border-t border-slate-50 text-[#334155] text-xs sm:text-sm leading-relaxed font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
