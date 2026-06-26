"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, CheckCircle, GraduationCap, Calendar } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = 50;
      const stepValue = Math.ceil(end / totalSteps);
      const stepTime = 30; // 30ms per step (1.5 seconds total)

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function Statistics() {
  const stats = [
    {
      target: 1500,
      suffix: "+",
      label: "Students Trained",
      icon: Users,
    },
    {
      target: 95,
      suffix: "%",
      label: "Success Rate",
      icon: CheckCircle,
    },
    {
      target: 10,
      suffix: "+",
      label: "Expert Faculty",
      icon: GraduationCap,
    },
    {
      target: 6,
      suffix: "+",
      label: "Years of Excellence",
      icon: Calendar,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 80, damping: 18 },
    },
  };

  return (
    <section className="bg-[#0A1D3D] text-white py-14 relative overflow-hidden border-t-2 border-[#D09C34]/20 shadow-xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(208,156,52,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-[#D09C34]/30"
            >
              {/* Circular Gold Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D09C34]/15 text-[#D09C34] shrink-0 border border-[#D09C34]/25 shadow-md hover:rotate-6 transition-transform duration-300">
                <stat.icon size={24} />
              </div>
              <div className="space-y-1">
                <div className="text-3.5xl font-extrabold tracking-tight text-white font-heading">
                  <Counter value={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-slate-200 text-xs font-bold tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
