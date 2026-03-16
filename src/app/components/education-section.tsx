import { GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eff6ff] to-[#f8fafc]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2563eb]/[0.05] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-widest text-[#2563eb] mb-3"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            Academic Background
          </p>
          <h2 className="text-gray-900" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Education
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative pl-10">
            {/* Timeline line */}
            <div className="absolute left-[15px] top-0 bottom-0 w-px bg-gradient-to-b from-[#2563eb] to-[#8b5cf6]" />

            {/* Timeline item */}
            <div className="relative pb-2">
              {/* Dot */}
              <div className="absolute -left-[25px] top-1 w-8 h-8 rounded-full bg-gradient-to-br from-[#2563eb] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#2563eb]/25">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-7 ml-2 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-5">
                  <div className="min-w-0">
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                      <span
                        className="px-3 py-1 rounded-full bg-[#2563eb]/5 text-[#2563eb]"
                        style={{ fontSize: "0.75rem", fontWeight: 600 }}
                      >
                        2023 &mdash; 2026 (Current)
                      </span>
                    </div>
                    <h3 className="text-gray-900 mb-1.5" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      3rd year - BS Information Systems
                    </h3>
                    <p className="text-gray-500" style={{ fontSize: "0.9375rem", fontWeight: 400 }}>
                      Ateneo de Davao University
                    </p>
                  </div>

                  <div className="shrink-0 hidden sm:flex w-20 h-20 rounded-xl bg-[#2563eb]/5 border border-[#2563eb]/15 items-center justify-center p-3">
                    <ImageWithFallback
                      src="src/assets/ADDULogo.jpg"
                      alt="Ateneo de Davao University Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}