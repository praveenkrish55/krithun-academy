import { MapPin, Phone, Mail } from "lucide-react";
import { Facebook, Instagram, Linkedin, Youtube } from "@/components/common/social-icons";

export function TopBar() {
  return (
    <div className="w-full bg-[#0A1D3D] text-white/90 py-2.5 border-b border-white/10 text-[11px] hidden md:block font-medium">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left Side: Announcement */}
        <div className="flex items-center gap-2 hover:text-white transition-colors">
          <span className="h-1.5 w-1.5 rounded-full bg-[#D09C34] animate-pulse" />
          <span>Admissions Open for 2026 Batch | Limited Seats Available</span>
        </div>

        {/* Right Side: Contacts and Socials */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Phone size={13} className="text-[#D09C34]" />
            <a href="tel:+919944555639" className="hover:underline font-semibold">
              +91 99445 55639
            </a>
          </div>

          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Mail size={13} className="text-[#D09C34]" />
            <a href="mailto:info@krithunacademy.com" className="hover:underline font-semibold">
              info@krithunacademy.com
            </a>
          </div>

          <div className="h-3 w-px bg-white/20" />

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D09C34] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={13} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D09C34] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={13} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D09C34] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={13} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D09C34] transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
