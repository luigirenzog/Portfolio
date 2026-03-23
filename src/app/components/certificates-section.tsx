import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const certificates = [
  {
    title: "Lean Six Sigma Certified White Belt",
    issuer: "Certification",
    image: "src/assets/White-Belt.jpg",
  },
  {
    title: "Lean Six Sigma Certified Yellow Belt",
    issuer: "Certification",
    image: "src/assets/Yellow-belt.jpg",
  },
  {
    title: "Cisco: Introduction to Networking",
    issuer: "Certification",
    image: "src/assets/IntroToNetworks-Cert.jpg",
  },
  {
    title: "Cisco: Network Security",
    issuer: "Certification",
    image: "src/assets/NetworkSecurity-cert.jpg",
  },
  {
    title: "Techstars Startup Weekend Davao 2025",
    issuer: "Certification",
    image: "src/assets/Techstars-cert.jpg",
  },
];

const CERTIFICATE_SECTION_TITLE_SIZE = "clamp(1.6rem, 3.6vw, 2rem)";
const CERTIFICATE_CARD_TITLE_SIZE = "clamp(1rem, 2.1vw, 1.25rem)";

export function CertificatesSection() {
  const [activeCertificateIndex, setActiveCertificateIndex] = useState<number | null>(null);
  const activeCertificate =
    activeCertificateIndex !== null ? certificates[activeCertificateIndex] : null;

  return (
    <section id="certificates-credibility" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 rounded-full bg-[#2563eb]/10 blur-3xl" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#8b5cf6]/10 blur-3xl" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#06b6d4]/[0.08] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="uppercase tracking-widest text-[#60a5fa] mb-3"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            Verified Expertise
          </p>
          <h2 className="text-white" style={{ fontSize: CERTIFICATE_SECTION_TITLE_SIZE, fontWeight: 700 }}>
            Certificates & Credibility
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, index) => {
            return (
              <button
                key={cert.title}
                type="button"
                onClick={() => setActiveCertificateIndex(index)}
                className="group text-left"
              >
                <div className="rounded-xl overflow-hidden border border-white/20 bg-white/5 hover:border-[#60a5fa]/50 hover:shadow-2xl hover:shadow-[#2563eb]/20 transition-all duration-300">
                  <div className="aspect-[16/11] bg-white/10">
                    <ImageWithFallback
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="mt-2.5 flex items-center gap-2 text-[#60a5fa] group-hover:text-[#93c5fd] transition-colors">
                  <span style={{ fontSize: CERTIFICATE_CARD_TITLE_SIZE, fontWeight: 700 }}>
                    {cert.title}
                  </span>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <p className="text-gray-400 mt-1" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  {cert.issuer}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {activeCertificate && (
        <div
          className="fixed inset-0 z-[80] p-3 sm:p-4 md:p-8"
          style={{ background: "linear-gradient(145deg, #0f172a, #2563eb 55%, #082f49)" }}
          onClick={() => setActiveCertificateIndex(null)}
        >
          <div
            className="max-w-7xl mx-auto h-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 flex items-start justify-between text-white z-10 gap-3">
              <div className="min-w-0 pr-2">
                <h3 className="break-words" style={{ fontSize: "clamp(1rem, 3.8vw, 1.25rem)", fontWeight: 700 }}>{activeCertificate.title}</h3>
                <p className="text-white/80" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  {activeCertificate.issuer}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificateIndex(null)}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition-colors inline-flex items-center justify-center"
                aria-label="Close certificate gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 py-16 sm:py-20 md:py-24">
              <button
                type="button"
                onClick={() =>
                  setActiveCertificateIndex((prev) => {
                    if (prev === null) return 0;
                    return Math.max(prev - 1, 0);
                  })
                }
                disabled={activeCertificateIndex === 0}
                className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-full bg-white/20 text-white inline-flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="w-full h-full flex items-center justify-center">
                <ImageWithFallback
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <button
                type="button"
                onClick={() =>
                  setActiveCertificateIndex((prev) => {
                    if (prev === null) return 0;
                    return Math.min(prev + 1, certificates.length - 1);
                  })
                }
                disabled={activeCertificateIndex === certificates.length - 1}
                className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-full bg-white/20 text-white inline-flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                aria-label="Next certificate"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <p className="absolute bottom-0 left-0 right-0 text-white/85 text-center" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
              {activeCertificateIndex !== null ? activeCertificateIndex + 1 : 0} / {certificates.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}