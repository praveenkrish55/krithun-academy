"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AdmissionModal } from "@/components/common/admission-modal";
import { Button } from "@/components/ui/button";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";

interface CourseDetailsClientProps {
  course: {
    title: string;
    description: string;
    duration: string;
    eligibility: string;
    syllabus: string[];
  };
}

export function CourseDetailsClient({ course }: CourseDetailsClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Top Header Information Bar */}
      <TopBar />

      {/* Main Navigation Header */}
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Banner */}
        <section className="bg-[#0A1D3D] text-white py-20 lg:py-24 relative overflow-hidden">
          {/* Decorative background radial overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.15),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,29,61,0.5),transparent_50%)] pointer-events-none" />

          {/* Background Blended Classroom Image */}
          <div className="absolute inset-0 z-0 opacity-15 mix-blend-overlay">
            <Image
              src="/images/about_krithun_academy.png"
              alt="Classroom overlay background"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-1">
              PROGRAM OVERVIEW
            </h4>
            <h1 className="font-heading text-4xl sm:text-5.5xl font-extrabold text-white leading-tight tracking-tight uppercase">
              {course.title}
            </h1>
            <div className="h-1 w-16 bg-[#D09C34] mx-auto rounded-full mt-2" />
            <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto pt-2 leading-relaxed font-normal">
              {course.description}
            </p>
          </div>
        </section>

        {/* Detailed Info section */}
        <section className="py-24 bg-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Syllabus & Details (7 Columns) */}
              <div className="lg:col-span-7 space-y-10 text-left">
                
                {/* Course Metadata Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-[#F8FAFC] border border-slate-100 p-6 rounded-2xl flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center border border-white shadow-sm shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Duration</h4>
                      <p className="text-[#0A1D3D] text-base font-bold mt-0.5">{course.duration}</p>
                    </div>
                  </div>

                  <div className="bg-[#F8FAFC] border border-slate-100 p-6 rounded-2xl flex items-center gap-4">
                    <div className="h-11 w-11 rounded-xl bg-[#0A1D3D]/5 text-[#D09C34] flex items-center justify-center border border-white shadow-sm shrink-0">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Eligibility</h4>
                      <p className="text-[#0A1D3D] text-base font-bold mt-0.5">{course.eligibility}</p>
                    </div>
                  </div>
                </div>

                {/* Syllabus Outlines */}
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl font-extrabold text-[#0A1D3D] uppercase tracking-wide">
                    Syllabus & Core Coverage
                  </h3>
                  <div className="h-0.5 w-12 bg-[#D09C34] rounded-full" />
                  <ul className="space-y-4 pt-2">
                    {course.syllabus.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3 bg-[#F8FAFC] border border-slate-100/50 rounded-xl p-4 text-[#334155] text-sm sm:text-base font-medium">
                        <CheckCircle size={18} className="text-[#D09C34] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Right Column: Enquiry Form Callout (5 Columns) */}
              <div className="lg:col-span-5 bg-[#0A1D3D] text-white p-8 sm:p-10 rounded-3xl border border-[#D09C34]/20 shadow-2xl relative overflow-hidden text-left space-y-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.1),transparent_50%)] pointer-events-none" />
                
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-extrabold text-white uppercase tracking-wider">
                    Ready to Start?
                  </h3>
                  <p className="text-slate-300 text-sm font-normal">
                    Secure your seat in the upcoming batch of {course.title} at our Coimbatore campus. Installment options are available.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#D09C34] shrink-0 animate-pulse" />
                    <span className="text-slate-200 text-xs sm:text-sm font-semibold">Regular & Fast-Track Batches</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#D09C34] shrink-0" />
                    <span className="text-slate-200 text-xs sm:text-sm font-semibold">Placement & Internship Assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#D09C34] shrink-0" />
                    <span className="text-slate-200 text-xs sm:text-sm font-semibold">Expert Chartered Accountant Faculty</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-[#D09C34] hover:bg-white hover:text-[#0A1D3D] hover:scale-[1.02] transition-all duration-300 shimmer-gold text-white font-bold text-xs uppercase tracking-wider h-13 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer font-bold"
                  >
                    <span>Enquire for Batches</span>
                    <ArrowRight size={14} />
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Process Flow */}
        <Process />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      <AdmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={course.title}
      />
    </>
  );
}
