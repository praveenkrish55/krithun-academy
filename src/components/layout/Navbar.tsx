"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { Logo } from "../common/logo";
import { NAVIGATION } from "@/constants/navigation";
import { AdmissionModal } from "../common/admission-modal";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Monitor scroll for shadow/border effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 bg-white/95 shadow-md backdrop-blur"
            : "border-b border-transparent bg-white"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-8 lg:flex">
            {NAVIGATION.map((item, idx) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-2 px-1 text-sm font-bold tracking-wide text-[#1E293B] hover:text-[#0A1D3D] transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {item.label}
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="nav-hover-line"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D09C34]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 } as any}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Action button */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/portal"
              className="text-xs font-bold uppercase tracking-wider text-[#0A1D3D] hover:text-[#D09C34] transition-colors"
            >
              Student Portal
            </Link>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#D09C34] hover:bg-[#0A1D3D] hover:scale-105 shimmer-gold text-white px-6 font-bold tracking-wider shadow-md h-11 transition-all duration-300 rounded uppercase text-[11px] inline-flex items-center gap-2"
            >
              <span>Admissions Open</span>
              <ArrowRight size={14} />
            </Button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center rounded-md p-2 text-[#333F4A] hover:bg-slate-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </Container>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="border-b border-slate-200 bg-white lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-6 shadow-inner">
                {NAVIGATION.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-semibold text-[#333F4A] hover:text-[#0A1D3D] transition-colors py-1.5 border-b border-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Mobile Student Portal */}
                <Link
                  href="/portal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-semibold text-[#D09C34] hover:text-[#0A1D3D] transition-colors py-1.5 border-b border-slate-50 uppercase tracking-wider"
                >
                  Student Portal
                </Link>
                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full bg-[#0A1D3D] hover:bg-[#333F4A] text-white flex items-center justify-center gap-2 h-11 transition-all font-semibold rounded"
                  >
                    <span>Admissions Open</span>
                    <ArrowRight size={16} className="text-[#D09C34]" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Slide-over Admission Form Modal */}
      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}