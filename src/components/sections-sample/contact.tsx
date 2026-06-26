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
    <section id="contact" className="py-24 bg-white scroll-mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A1D3D] uppercase tracking-wider">
            Get In Touch With Us
          </h2>
          <div className="h-0.5 w-16 bg-[#D09C34] mx-auto mt-4 mb-5" />
          <p className="text-slate-500 text-sm sm:text-base font-light">
            Visit our Chennai campus or drop your contact information below to request a callback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Contact details & Map (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            {/* Contact Card Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 border border-slate-100 rounded-xl p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#D09C34] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-heading font-bold text-[#0A1D3D] text-sm">Academy Address</h4>
                    <p className="text-slate-600 text-xs mt-1 leading-relaxed">
                      2nd floor, Kovai towers, DR balasubramanium road, Coimbatore.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-[#D09C34] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-heading font-bold text-[#0A1D3D] text-sm">Admission Hotlines</h4>
                    <a href="tel:+919944555639" className="text-slate-600 text-xs mt-1 hover:underline block">
                      +91 99445 55639
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-[#D09C34] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-heading font-bold text-[#0A1D3D] text-sm">Email Admissions</h4>
                    <a href="mailto:info@krithunacademy.com" className="text-slate-600 text-xs mt-1 hover:underline block">
                      info@krithunacademy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-[#D09C34] shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-heading font-bold text-[#0A1D3D] text-sm">Working Hours</h4>
                    <p className="text-slate-600 text-xs mt-1">
                      Mon - Sat: 9:00 AM - 8:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Mock / Iframe */}
            <div className="h-72 w-full rounded-xl overflow-hidden shadow-sm border border-slate-200 relative bg-slate-100 flex-1 min-h-[280px]">
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

            {/* WhatsApp Chat Button */}
            <div>
              <a
                href="https://wa.me/919944555639"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-md font-semibold text-sm transition-colors shadow-sm animate-bounce"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Admission enquiry form (5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 shadow-lg rounded-2xl p-6 lg:p-8">
            <h3 className="font-heading text-2xl font-bold text-[#0A1D3D] mb-2">
              Quick Callback Request
            </h3>
            <p className="text-slate-500 text-xs mb-6">
              Fill in your academic interest and contact details. We will secure a guidance session for you.
            </p>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <Award size={48} className="text-[#D09C34] mb-3 animate-pulse" />
                <h4 className="font-heading text-xl font-bold text-[#0A1D3D]">
                  Enquiry Registered!
                </h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed max-w-xs">
                  Thank you for contacting us. We will reach out to schedule your professional counselling session shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full border border-slate-200 rounded-md px-3.5 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:border-[#D09C34] transition-colors bg-white text-[#333F4A]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border border-slate-200 rounded-md px-3.5 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:border-[#D09C34] transition-colors bg-white text-[#333F4A]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Enter mobile number"
                    className="w-full border border-slate-200 rounded-md px-3.5 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:border-[#D09C34] transition-colors bg-white text-[#333F4A]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-course" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Select Course *
                  </label>
                  <select
                    id="contact-course"
                    required
                    value={contactCourse}
                    onChange={(e) => setContactCourse(e.target.value)}
                    className="w-full border border-slate-200 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#D09C34] transition-colors bg-white text-[#333F4A]"
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
                  <label htmlFor="contact-message" className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Message / Query (Optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Any specific questions for our guidance team..."
                    className="w-full border border-slate-200 rounded-md px-3.5 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:border-[#D09C34] transition-colors bg-white text-[#333F4A] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0A1D3D] hover:bg-[#333F4A] text-white flex items-center justify-center gap-2 h-11 transition-all rounded font-semibold"
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
