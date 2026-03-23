import { ArrowUpRight, ChevronLeft, ChevronRight, Github, X } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Vales Beach Resort Complex",
    description:
      "A comprehensive booking system for a local beach resort that simplifies manual booking and payment processes, improving efficiency and customer experience in one system.",
    image:
      "src/assets/Vales-beach-landing.jpg",
    gallery: [
      { src: "src/assets/Vales-beach-landing.jpg", title: "Landing Page" },
      { src: "src/assets/Vales-beach-login.jpg", title: "Login Page" },
      { src: "src/assets/Vales-beach1.jpg", title: "Booking Dashboard" },
      { src: "src/assets/Vales-beach2.jpg", title: "Room and Cottage Selection" },
      { src: "src/assets/Vales-beach3.jpg", title: "Payment and Confirmation" },
      { src: "src/assets/Vales-beach4.jpg", title: "Resort Services" },
      { src: "src/assets/Vales-beach5.jpg", title: "Food Menu Ordering" },
    ],
    githubUrl: "https://github.com/assgallardo/ValesBeach.git",
    tags: ["Php", "Laravel", "Tailwind CSS"],
  },
  {
    title: "AdDU Alumni Portal",
    description:
      "A unified platform for Ateneo de Davao University alumni to connect, engage, and access resources.",
    image:
      "src/assets/AdDU-Portal.jpg",
    gallery: [
      { src: "src/assets/AdDU-Portal.jpg", title: "Home Portal" },
      { src: "src/assets/AdDU-Portal1.jpg", title: "Sign In Page" },
      { src: "src/assets/AdDU-Portal2.jpg", title: "Alumni Homepage" },
      { src: "src/assets/AdDU-Portal3.jpg", title: "Engagement Events" },
      { src: "src/assets/AdDU-Portal4.jpg", title: "News and Updates" },
      { src: "src/assets/AdDU-Portal5.jpg", title: "Profile Management" },
      { src: "src/assets/AdDU-Portal6.jpg", title: "Alumni Donations" },
    ],
    githubUrl: "https://github.com/KenOrcejola1/Capstone1Dashboard.git",
    tags: ["ReactJS", "Laravel", "Supabase"],
  },
];

export function ProjectsSection() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeProject = activeProjectIndex !== null ? projects[activeProjectIndex] : null;

  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Soft colored background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf5ff] via-[#eff6ff] to-[#f0fdfa]" />
      <div className="hidden sm:block absolute top-10 right-10 w-72 h-72 rounded-full bg-[#8b5cf6]/[0.07] blur-3xl" />
      <div className="hidden sm:block absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#2563eb]/[0.07] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="uppercase tracking-widest text-[#2563eb] mb-3"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            Selected Work
          </p>
          <h2 className="text-gray-900" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setActiveProjectIndex(index);
                setActiveImageIndex(0);
              }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#2563eb]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    onClick={(e) => e.stopPropagation()}
                    className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm text-white inline-flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-5 sm:p-7">
                <h3
                  className="text-gray-900 mb-2"
                  style={{ fontSize: "1.1875rem", fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-gray-500 mb-5"
                  style={{ fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.7 }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-[#2563eb]/5 text-[#2563eb]"
                      style={{ fontSize: "0.75rem", fontWeight: 600 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[70] p-3 sm:p-4 md:p-8"
          style={{ background: "linear-gradient(145deg, rgba(37,99,235,0.94), rgba(14,116,144,0.94) 55%, rgba(15,23,42,0.96))" }}
          onClick={() => {
            setActiveProjectIndex(null);
            setActiveImageIndex(0);
          }}
        >
          <div className="max-w-6xl mx-auto h-full flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between text-white mb-3 md:mb-4">
              <h3 className="pr-3" style={{ fontSize: "clamp(1rem, 3.8vw, 1.25rem)", fontWeight: 700 }}>{activeProject.title}</h3>
              <button
                onClick={() => {
                  setActiveProjectIndex(null);
                  setActiveImageIndex(0);
                }}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 transition-colors inline-flex items-center justify-center"
                aria-label="Close project gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 min-h-0 rounded-2xl flex items-center gap-2 md:gap-4 py-1 sm:py-0">
              <button
                className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-full bg-white/20 text-white inline-flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={() => setActiveImageIndex((prev) => Math.max(prev - 1, 0))}
                disabled={activeImageIndex === 0}
                aria-label="Previous project image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="w-full h-full rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center p-1 md:p-2">
                <ImageWithFallback
                  src={activeProject.gallery[activeImageIndex].src}
                  alt={`${activeProject.title} screenshot ${activeImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              <button
                className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-full bg-white/20 text-white inline-flex items-center justify-center hover:bg-white/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                onClick={() =>
                  setActiveImageIndex((prev) => Math.min(prev + 1, activeProject.gallery.length - 1))
                }
                disabled={activeImageIndex === activeProject.gallery.length - 1}
                aria-label="Next project image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <p className="text-white text-center mt-3 md:mt-4" style={{ fontSize: "0.95rem", fontWeight: 600 }}>
              {activeProject.gallery[activeImageIndex].title}
            </p>

            <p className="text-white/85 text-center mt-1" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
              {activeImageIndex + 1} / {activeProject.gallery.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}