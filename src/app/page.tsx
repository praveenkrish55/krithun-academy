"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdmissionModal } from "@/components/common/admission-modal";

import { Hero } from "@/components/sections/hero";
import { Statistics } from "@/components/sections/statistics";
import { Courses } from "@/components/sections/courses";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { About } from "@/components/sections/about";
import { Faculty } from "@/components/sections/faculty";
import { SuccessStories } from "@/components/sections/success-stories";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openAdmission = (course = "") => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Top Header Information Bar */}
      <TopBar />

      {/* Main Navigation Header */}
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Banner Section */}
        <Hero onBookCounselling={() => openAdmission()} />

        {/* Statistical Records Section */}
        <Statistics />

        {/* Featured Program Cards Section */}
        <Courses onLearnMore={(course) => openAdmission(course)} />

        {/* Why Study With Us Grid */}
        <WhyChooseUs />

        {/* About Academy Split Section */}
        <About />

        {/* Expert Instructor Cards Section */}
        <Faculty onMeetFaculty={() => openAdmission()} />

        {/* Alumni Reviews Section */}
        <SuccessStories />

        {/* 4-Step Operational Flow Section */}
        <Process />

        {/* Frequently Answered Accordions Section */}
        <FAQ />

        {/* Call To Action Banner Section */}
        <CTA onApplyNow={() => openAdmission()} />

        {/* Contact Campus Map & Enquiry Form Section */}
        <Contact />
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