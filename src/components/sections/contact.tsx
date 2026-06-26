"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactCourse, setContactCourse] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactPhone || !contactCourse) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setContactName("");
        setContactEmail("");
        setContactPhone("");
        setContactCourse("");
        setContactMessage("");
        setIsSuccess(false);
      }, 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 bg-[#FFFFFF] scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D09C34] mb-3">
            ENQUIRIES
          </h4>
          <h2 className="font-heading text-3.5xl sm:text-5xl font-extrabold text-[#0A1D3D] leading-tight">
            Get In Touch With Us
          </h2>
          <div className="h-1 w-16 bg-[#D09C34] mx-auto mt-4 rounded-full" />
          <p className="text-[#334155] text-base sm:text-lg leading-relaxed mt-6 font-normal">
            Visit our Coimbatore campus or submit your details below to request a strategic callback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Contact details & Map (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            {/* Contact Card Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#F8FAFC] border border-slate-100 rounded-2xl p-8 shadow-md">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#D09C34] border border-slate-100 shadow-sm shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase tracking-wider">Academy Address</h4>
                    <p className="text-[#334155] text-sm mt-1.5 leading-relaxed font-semibold">
                      2nd floor, Kovai towers, DR Balasubramanium road, Coimbatore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#D09C34] border border-slate-100 shadow-sm shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase tracking-wider">Admission Hotlines</h4>
                    <a href="tel:+919944555639" className="text-[#334155] text-sm mt-1.5 hover:text-[#D09C34] hover:underline font-bold block">
                      +91 99445 55639
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#D09C34] border border-slate-100 shadow-sm shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase tracking-wider">Email Admissions</h4>
                    <a href="mailto:info@krithunacademy.com" className="text-[#334155] text-sm mt-1.5 hover:text-[#D09C34] hover:underline font-bold block">
                      info@krithunacademy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#D09C34] border border-slate-100 shadow-sm shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#0A1D3D] text-base uppercase tracking-wider">Working Hours</h4>
                    <p className="text-[#334155] text-sm mt-1.5 leading-relaxed font-semibold">
                      Mon - Sat: 9:00 AM - 8:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-100 flex-1 min-h-[300px] p-1 bg-gradient-to-tr from-[#0A1D3D] via-[#0A1D3D]/10 to-[#D09C34]">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://maps.google.com/maps?q=Kovai%20towers%2C%20DR%20balasubramanium%20road%2C%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Krithun Academy Coimbatore Campus"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* WhatsApp Chat Button */}
            <div>
              <a
                href="https://wa.me/919944555639"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebd56] text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-103 cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Admission enquiry form (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-100 shadow-xl rounded-2xl p-8 lg:p-10 flex flex-col justify-center">
            <h3 className="font-heading text-2.5xl font-extrabold text-[#0A1D3D] mb-2 uppercase tracking-wide">
              Callback Request
            </h3>
            <p className="text-[#334155] text-sm mb-8 font-normal leading-relaxed">
              Fill in your academic interest and contact details. We will schedule a dedicated guidance session for you.
            </p>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#D09C34]/15 text-[#D09C34] flex items-center justify-center border border-[#D09C34]/30 shadow-md">
                  <Award size={32} className="animate-pulse" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading text-2xl font-bold text-[#0A1D3D]">
                    Enquiry Registered!
                  </h4>
                  <p className="text-[#334155] text-xs leading-relaxed max-w-xs font-semibold">
                    Thank you for contacting us. We will reach out to schedule your professional counselling session shortly.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#334155] mb-2">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full border border-slate-200 focus:border-[#D09C34] focus:ring-1 focus:ring-[#D09C34] rounded-xl px-4 py-3 text-sm placeholder-slate-400 focus:outline-none transition-all bg-white text-[#0A1D3D] font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#334155] mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full border border-slate-200 focus:border-[#D09C34] focus:ring-1 focus:ring-[#D09C34] rounded-xl px-4 py-3 text-sm placeholder-slate-400 focus:outline-none transition-all bg-white text-[#0A1D3D] font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#334155] mb-2">
                    Mobile Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Enter mobile number"
                    className="w-full border border-slate-200 focus:border-[#D09C34] focus:ring-1 focus:ring-[#D09C34] rounded-xl px-4 py-3 text-sm placeholder-slate-400 focus:outline-none transition-all bg-white text-[#0A1D3D] font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="contact-course" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#334155] mb-2">
                    Select Course *
                  </label>
                  <select
                    id="contact-course"
                    required
                    value={contactCourse}
                    onChange={(e) => setContactCourse(e.target.value)}
                    className="w-full border border-slate-200 focus:border-[#D09C34] focus:ring-1 focus:ring-[#D09C34] rounded-xl px-4 py-3 text-sm focus:outline-none transition-all bg-white text-[#0A1D3D] font-medium cursor-pointer"
                  >
                    <option value="" disabled>Select a course</option>
                    <option value="CA Foundation">CA Foundation</option>
                    <option value="CA Intermediate">CA Intermediate</option>
                    <option value="CMA Foundation">CMA Foundation</option>
                    <option value="CMA Intermediate">CMA Intermediate</option>
                    <option value="Tally Prime">Tally Prime</option>
                    <option value="GST Filing">GST Filing</option>
                    <option value="Practical Accounting">Practical Accounting</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#334155] mb-2">
                    Message / Query (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Any specific questions for our guidance team..."
                    className="w-full border border-slate-200 focus:border-[#D09C34] focus:ring-1 focus:ring-[#D09C34] rounded-xl px-4 py-3 text-sm placeholder-slate-400 focus:outline-none transition-all bg-white text-[#0A1D3D] font-medium resize-none"
                  />
                </div>

                <div className="pt-3">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0A1D3D] hover:bg-[#333F4A] hover:scale-102 text-white flex items-center justify-center gap-2 h-12 transition-all duration-300 rounded-xl font-bold uppercase tracking-wider text-xs shadow-md cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Mail size={16} className="text-[#D09C34]" />
                        <span>Request Call Back</span>
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
