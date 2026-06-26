"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Award,
  TrendingUp,
  Layers,
  FileSpreadsheet,
  BookOpen,
  ArrowRight,
  Briefcase,
  Clock,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface CoursesListProps {
  onEnquire: (course: string) => void;
}

export function CoursesList({ onEnquire }: CoursesListProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 60, damping: 16 },
    },
  };

  const coursesList = [
    {
      title: "CA Foundation",
      slug: "ca-foundation",
      description: "Build a strong foundation for your CA journey with our comprehensive coaching program.",
      duration: "4 Months",
      eligibility: "12th Standard cleared/appearing",
      icon: Calculator,
      highlights: ["Principles of Accounting", "Business Laws", "Business Mathematics & Stats"],
      category: "Professional Certification",
    },
    {
      title: "CA Intermediate",
      slug: "ca-intermediate",
      description: "Advance your knowledge and achieve more with expert coaching for CA Intermediate.",
      duration: "8 Months",
      eligibility: "CA Foundation Pass / Direct Entry Graduate",
      icon: Award,
      highlights: ["Advanced Financial Accounting", "Corporate Laws", "Taxation (Direct & Indirect)"],
      category: "Professional Certification",
    },
    {
      title: "CMA Foundation",
      slug: "cma-foundation",
      description: "Kickstart your career in Cost Management with our structured preparation course.",
      duration: "4 Months",
      eligibility: "10+2 cleared or equivalent standard",
      icon: TrendingUp,
      highlights: ["Business Communication", "Financial & Cost Accounting", "Business Math & Stats"],
      category: "Professional Certification",
    },
    {
      title: "CMA Intermediate",
      slug: "cma-intermediate",
      description: "Take the next step towards professional Cost Management excellence with intermediate training.",
      duration: "8 Months",
      eligibility: "CMA Foundation Pass / Graduate Degree",
      icon: Layers,
      highlights: ["Financial Accounting & Tax", "Operations & Cost Accounting", "Financial Management"],
      category: "Professional Certification",
    },
    {
      title: "Tally Prime",
      slug: "tally-prime",
      description: "Master Tally Prime for real-world business accounting, invoice generation, and automation.",
      duration: "1 Month",
      eligibility: "Basic accounting rules knowledge",
      icon: FileSpreadsheet,
      highlights: ["Company Creation", "GST Vouchers & Ledger Entry", "Inventory Management & Reports"],
      category: "Practical Skill Training",
    },
    {
      title: "GST Filing",
      slug: "gst-filing",
      description: "Learn GST law and practical return filing processes on live portals.",
      duration: "1 Month",
      eligibility: "Accountants, Graduates, and Owners",
      icon: BookOpen,
      highlights: ["GST Law & ITC Reconciliation", "GSTR-1 & GSTR-3B Filing", "GST Portal Registrations"],
      category: "Practical Skill Training",
    },
    {
      title: "Practical Accounting",
      slug: "practical-accounting",
      description: "Gain real-world accounting experience with hands-on corporate ledger training.",
      duration: "2 Months",
      eligibility: "Undergraduates, Graduates or job seekers",
      icon: Briefcase,
      highlights: ["Real-world Business Bills", "Payroll & TDS Calculations", "Bank Reconciliation & Taxes"],
      category: "Practical Skill Training",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(10,29,61,0.02)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-3">
            OUR CURRICULUM
          </h4>
          <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
            Programs Designed for Your Success
          </h2>
          <div className="h-1 w-16 bg-[#D09C34] mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto pt-3">
            Browse through our certifications and practical training courses detailed below.
          </p>
        </div>

        {/* Stacked Vertical list "one by one" */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          {coursesList.map((course) => {
            return (
              <motion.div
                key={course.title}
                variants={itemVariants}
                className="bg-white border border-slate-100 hover:border-[#D09C34]/30 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 relative group overflow-hidden"
              >
                {/* Gold left accent border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#D09C34] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Icon and Title (Col 4) */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#0A1D3D]/5 rounded-full border border-slate-100 text-[10px] font-bold uppercase tracking-wider text-[#D09C34]">
                      <span>{course.category}</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-2xl bg-[#0A1D3D]/5 text-[#D09C34] group-hover:bg-[#0A1D3D] group-hover:text-white flex items-center justify-center shrink-0 border border-slate-50 transition-all duration-300 shadow-sm">
                        <course.icon size={26} className="group-hover:rotate-3 transition-transform duration-300" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0A1D3D] tracking-tight group-hover:text-[#D09C34] transition-colors duration-200 uppercase leading-none">
                          {course.title}
                        </h3>
                      </div>
                    </div>

                    {/* Quick Info Tags */}
                    <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-semibold text-slate-500">
                      <div className="flex items-center gap-1.5 bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-100/50">
                        <Clock size={14} className="text-[#D09C34]" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-100/50">
                        <GraduationCap size={14} className="text-[#D09C34]" />
                        <span>{course.eligibility}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Description & Highlights (Col 5) */}
                  <div className="lg:col-span-5 space-y-4 text-left">
                    <p className="text-[#334155] text-sm leading-relaxed font-normal">
                      {course.description}
                    </p>
                    
                    {/* Key syllabus highlights badges */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Key Core Topics</p>
                      <div className="flex flex-wrap gap-2">
                        {course.highlights.map((highlight, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-100 rounded-lg px-2.5 py-1">
                            <CheckCircle size={10} className="text-[#D09C34] shrink-0" />
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Actions (Col 3) */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 w-full shrink-0">
                    <Link href={`/courses/${course.slug}`} className="w-full">
                      <Button className="w-full bg-[#0A1D3D] hover:bg-[#D09C34] text-white font-bold text-xs uppercase tracking-wider h-12 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 group shadow-sm">
                        <span>View Details</span>
                        <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                    
                    <Button 
                      onClick={() => onEnquire(course.title)}
                      className="w-full bg-white hover:bg-slate-50 text-[#0A1D3D] border border-slate-200 hover:border-[#0A1D3D] font-bold text-xs uppercase tracking-wider h-12 rounded-xl transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
                    >
                      Enquire Now
                    </Button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
