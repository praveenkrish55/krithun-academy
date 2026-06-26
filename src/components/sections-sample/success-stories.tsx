"use client";

import { Star } from "lucide-react";

export function SuccessStories() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "CA Intermediate Student",
      rating: 5,
      text: "Krithun Academy is the best place for CA coaching. The faculty and study materials are excellent.",
    },
    {
      name: "Priya Nair",
      course: "CMA Foundation Student",
      rating: 5,
      text: "The practical approach and individual attention helped me clear my CMA Foundation.",
    },
    {
      name: "Karthik R",
      course: "Tally Student",
      rating: 5,
      text: "I learned Tally Prime and GST practical filing here. Great experience!",
    },
  ];

  return (
    <section id="success-stories" className="py-24 bg-slate-50 scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-2">
            WHAT OUR STUDENTS SAY
          </h4>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0A1D3D] leading-tight">
            Trusted by Thousands of Students
          </h2>
          <div className="h-0.5 w-12 bg-[#D09C34] mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.name}
              className="bg-white border border-slate-100 rounded-xl p-8 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                {/* Star Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-[#D09C34] text-[#D09C34]" />
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed italic font-light">
                  "{test.text}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6 text-left">
                <h4 className="font-bold text-[#0A1D3D] text-sm uppercase tracking-wide">
                  — {test.name}
                </h4>
                <p className="text-slate-400 text-[10px] font-semibold uppercase mt-0.5">
                  {test.course}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Page indicator mockup dot slider */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <span className="h-2 w-2 rounded-full bg-[#D09C34] pointer-events-none" />
          <span className="h-2 w-2 rounded-full bg-slate-200 pointer-events-none" />
          <span className="h-2 w-2 rounded-full bg-slate-200 pointer-events-none" />
          <span className="h-2 w-2 rounded-full bg-slate-200 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
