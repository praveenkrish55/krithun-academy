"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourse?: string;
}

export function AdmissionModal({ isOpen, onClose, defaultCourse = "" }: AdmissionModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(defaultCourse);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync course selection if default course changes
  if (defaultCourse && course !== defaultCourse && !isSubmitting && !isSuccess) {
    setCourse(defaultCourse);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !course) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after success delay
      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setCourse("");
        setMessage("");
        setIsSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-[#0A1D3D]/40 backdrop-blur-sm"
          />

          {/* Drawer Wrapper */}
          <div className="fixed inset-y-0 right-0 z-50 flex max-w-full pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring" as const, damping: 25, stiffness: 200 }}
              className="w-screen max-w-md"
            >
              <div className="flex h-full flex-col bg-white shadow-2xl border-l border-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5 bg-[#0A1D3D] text-white">
                  <div>
                    <h2 className="font-heading text-2xl font-bold tracking-wide">
                      Admissions Open
                    </h2>
                    <p className="mt-1 text-xs text-white/70">
                      Submit details to secure your seat
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="rounded-full p-1.5 text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Form Body */}
                <div className="flex-1 overflow-y-auto px-6 py-6">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex h-full flex-col items-center justify-center text-center px-4"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" as const, stiffness: 300, delay: 0.1 }}
                      >
                        <CheckCircle2 size={64} className="text-[#D09C34] mb-4" />
                      </motion.div>
                      <h3 className="font-heading text-2xl font-bold text-[#0A1D3D]">
                        Enquiry Submitted!
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 max-w-xs">
                        Thank you, <span className="font-semibold text-slate-700">{name}</span>. Our admission team will contact you within the next 24 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="modal-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="modal-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-[#333F4A] placeholder-slate-400 focus:border-[#D09C34] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-email" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="modal-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-[#333F4A] placeholder-slate-400 focus:border-[#D09C34] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          id="modal-phone"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 99445 55639"
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-[#333F4A] placeholder-slate-400 focus:border-[#D09C34] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-course" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                          Course of Interest *
                        </label>
                        <select
                          id="modal-course"
                          required
                          value={course}
                          onChange={(e) => setCourse(e.target.value)}
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-[#333F4A] focus:border-[#D09C34] focus:outline-none bg-white transition-colors"
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
                        <label htmlFor="modal-message" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                          Additional Message (Optional)
                        </label>
                        <textarea
                          id="modal-message"
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us about your educational background or enquiries..."
                          className="w-full rounded-md border border-slate-200 px-4 py-2.5 text-sm text-[#333F4A] placeholder-slate-400 focus:border-[#D09C34] focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#D09C34] hover:bg-[#bfa032] text-white flex items-center justify-center gap-2 h-11 transition-all rounded font-semibold"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <Send size={16} />
                              <span>Submit Enquiry</span>
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
