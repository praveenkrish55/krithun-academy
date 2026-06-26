"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import { Facebook, Instagram, Linkedin, Youtube } from "@/components/common/social-icons";
import { Container } from "./Container";
import { Logo } from "../common/logo";
import { NAVIGATION } from "@/constants/navigation";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  const courses = [
    { name: "CA Foundation", href: "/courses" },
    { name: "CA Intermediate", href: "/courses" },
    { name: "CMA Foundation", href: "/courses" },
    { name: "CMA Intermediate", href: "/courses" },
    { name: "Tally Prime", href: "/courses" },
    { name: "GST Filing", href: "/courses" },
  ];

  return (
    <footer className="bg-[#0A1D3D] text-white pt-16 pb-8 border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <div className="bg-white p-3.5 rounded-lg inline-block shadow-md max-w-[190px]">
              <Logo />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              Empowering students with knowledge, skills and confidence to achieve professional excellence.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D09C34] hover:text-[#0A1D3D] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D09C34] hover:text-[#0A1D3D] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D09C34] hover:text-[#0A1D3D] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://youtube.com"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D09C34] hover:text-[#0A1D3D] transition-all"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-[#D09C34] tracking-wider mb-6 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-1 transition-transform inline-flex"
                  >
                    <ArrowRight size={12} className="text-[#D09C34]" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Courses */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-[#D09C34] tracking-wider mb-6 uppercase">
              Courses
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              {courses.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-x-1 transition-transform inline-flex"
                  >
                    <ArrowRight size={12} className="text-[#D09C34]" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-heading font-semibold text-[#D09C34] tracking-wider mb-6 uppercase">
                Contact Us
              </h4>
              <div className="pt-2 space-y-3.5 text-xs sm:text-sm text-slate-300 font-light">
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-[#D09C34] shrink-0 mt-0.5" />
                  <span>2nd floor, Kovai towers, DR Balasubramanium road, Coimbatore.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone size={16} className="text-[#D09C34] shrink-0" />
                  <a href="tel:+919944555639" className="hover:text-white">
                    +91 99445 55639
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail size={16} className="text-[#D09C34] shrink-0" />
                  <a href="mailto:info@krithunacademy.com" className="hover:text-white">
                    info@krithunacademy.com
                  </a>
                </div>
                <div className="text-slate-400 text-xs mt-1">
                  Mon - Sat: 9:00 AM - 8:00 PM
                </div>
              </div>
            </div>

            <div>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Subscribe to get updates on new courses and batches.
              </p>
              {subscribed ? (
                <div className="text-[#D09C34] text-xs font-semibold py-2">
                  ✓ Subscribed!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-white/5 border border-white/10 rounded-md px-3 py-2 text-xs w-full placeholder-slate-400 focus:outline-none focus:border-[#D09C34] transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#D09C34] hover:bg-[#bfa032] text-white px-3 py-2 rounded-md flex items-center justify-center transition-colors text-xs uppercase font-semibold"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} Krithun Academy. All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
