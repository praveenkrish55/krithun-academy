"use client";

export function Process() {
  const steps = [
    { title: "Choose Course", desc: "Browse our certifications and practical programs to select your path." },
    { title: "Register", desc: "Enroll easily online or offline to secure your study seat in the new batch." },
    { title: "Attend Classes", desc: "Engage in live concepts, practical accounting portals, and mock exams." },
    { title: "Become Successful", desc: "Ace your examinations and receive placement support into firms." },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0A1D3D]">
            Simple 4-Step Process
          </h2>
          <div className="h-1 w-20 bg-[#D09C34] mx-auto mt-4 mb-5" />
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Your structured path to clearing examinations and launching a career is simple.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
              <div className="font-heading text-5xl font-light text-[#D09C34] mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0A1D3D] mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
