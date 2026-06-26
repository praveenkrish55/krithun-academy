"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AdmissionModal } from "@/components/common/admission-modal";

import { CoursesList } from "@/components/sections/courses-list";
import { Process } from "@/components/sections/process";

export default function CoursesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openAdmission = (course = "") => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Top Header Information Bar */}
      <TopBar />

      {/* Main Navigation Header */}
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Course Hero Banner */}
        <section className="bg-[#0A1D3D] text-white py-20 lg:py-0 lg:h-[450px] flex items-center relative overflow-hidden">
          {/* Decorative background radial overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(208,156,52,0.15),transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,29,61,0.5),transparent_50%)] pointer-events-none" />

          {/* Right Column: Classroom Image blended on desktop */}
          <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[45%] xl:w-[50%] z-0">
            <div className="relative w-full h-full">
              {/* Gradient mask to blend left side of image into navy background */}
              <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#0A1D3D] via-[#0A1D3D]/95 to-transparent pointer-events-none z-10" />
              <div className="absolute inset-0 bg-[#0A1D3D]/10 pointer-events-none z-10" />
              <Image
                src="/images/about_krithun_academy.png"
                alt="Krithun Academy Classroom Learning"
                fill
                priority
                className="object-cover object-left opacity-90 filter brightness-95"
              />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Text Context */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="lg:col-span-7 space-y-4 lg:max-w-2xl text-left"
              >
                <motion.h4 
                  variants={itemVariants}
                  className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-1"
                >
                  ACADEMIC DEPARTMENTS
                </motion.h4>
                <motion.h1 
                  variants={itemVariants}
                  className="font-heading text-4xl sm:text-5.5xl font-extrabold text-white leading-tight tracking-tight uppercase"
                >
                  Programs & Certifications
                </motion.h1>
                <motion.div 
                  variants={itemVariants}
                  className="h-1 w-16 bg-[#D09C34] rounded-full" 
                />
                <motion.p 
                  variants={itemVariants}
                  className="text-[#E2E8F0] text-sm sm:text-base leading-relaxed font-normal pt-2"
                >
                  Explore our curriculum path for CA, CMA, and Hands-on Accounting practices, designed to clear professional examinations and secure placements.
                </motion.p>
              </motion.div>

              {/* Right Column: Mobile-only Image (Hidden on desktop) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="block lg:hidden relative flex justify-center mt-8 w-full"
              >
                <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl p-1 bg-gradient-to-tr from-[#0A1D3D] via-[#0A1D3D]/10 to-[#D09C34] shadow-2xl">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                    <Image
                      src="/images/about_krithun_academy.png"
                      alt="Krithun Academy Classroom Learning"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Featured Program Cards Section */}
        <CoursesList onEnquire={(course) => openAdmission(course)} />

        {/* methodology Process section */}
        <Process />

      </main>

      {/* Footer Navigation Bar */}
      <Footer />

      {/* Dynamic Slide-Over Enquiries Drawer */}
      <AdmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={selectedCourse}
      />
    </>
  );
}

