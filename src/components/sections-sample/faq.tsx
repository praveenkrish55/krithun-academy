"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is the fee structure for CA and CMA courses?",
      a: "Our fee structure is competitive and offers installments. Please send an enquiry form or contact us directly on WhatsApp to get the detailed fee structure for specific batches.",
    },
    {
      q: "What is the duration of Tally Prime and GST Filing courses?",
      a: "Tally Prime and GST Filing courses are fast-track, practical modules lasting between 1 to 2 months. They cover live filing portals and real-world billing scenarios.",
    },
    {
      q: "Do you offer both online and offline classes?",
      a: "Yes. We offer premium classroom sessions at our Coimbatore academy and live interactive online classes for selected courses, with records available for revision.",
    },
    {
      q: "Are study materials and mock tests included in the course?",
      a: "Absolutely. All programs include comprehensive study material compiled by expert faculty and regular test series (both weekly tests and full-syllabus mock exams).",
    },
    {
      q: "Do you provide practical accounting certification?",
      a: "Yes. Our Practical Accounting, Tally Prime, and GST Filing courses include practical certifications and real project logs that you can present in job interviews.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A1D3D]">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-[#D09C34] mx-auto mt-4 mb-5" />
          <p className="text-slate-500 text-sm sm:text-base">
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
                className="border border-slate-200 rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-4.5 flex justify-between items-center text-left bg-slate-50 hover:bg-slate-100 transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A1D3D] tracking-wide">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-500 transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 py-4 bg-white border-t border-slate-200 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
