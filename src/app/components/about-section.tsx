import { ArrowRight, Download, Facebook, Github, Instagram } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutSectionProps {
  onViewProjects: () => void;
}

export function AboutSection({ onViewProjects }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-36 overflow-hidden">
      {/* Colorful background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-white to-[#f0fdf4]" />
      {/* Decorative blobs */}
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-[#2563eb]/[0.06] blur-3xl" />
      <div className="absolute -bottom-20 -left-32 w-80 h-80 rounded-full bg-[#8b5cf6]/[0.06] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#06b6d4]/[0.04] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Photo */}
          <div className="shrink-0 relative -mt-8 lg:-mt-16">
            {/* Decorative blob */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#2563eb]/10 to-[#8b5cf6]/10 rounded-3xl -rotate-6" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#06b6d4]/10 to-transparent rounded-3xl rotate-3" />
            <div className="relative w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-[22rem] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <ImageWithFallback
                src="src/assets/Profile1.jpg"
                alt="Luigi Renzo Geralde"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-700" style={{ fontSize: "0.75rem", fontWeight: 500 }}>
                Available for opportunities
              </span>
            </div>

            <h1
              className="text-gray-900 mb-2"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 700, lineHeight: 1.15 }}
            >
              Luigi Renzo Geralde
            </h1>
            <p
              className="text-[#2563eb] mb-6"
              style={{ fontSize: "1.25rem", fontWeight: 600 }}
            >
              3rd year BS-Infomation Systems Student
            </p>
            <p
              className="text-gray-500 mb-10"
              style={{ fontSize: "1.0625rem", fontWeight: 400, lineHeight: 1.8 }}
            >
              Hello, I’m Luigi Renzo Geralde, a third-year Information Systems student at Ateneo de Davao University. 
              I am passionate about technology and enjoy developing systems and applications that solve real-world 
              problems. I specialize in frontend development, focusing on creating responsive and user-friendly interfaces, 
              while also having substantial experience in backend. I enjoy working with modern 
              development tools and continuously improving my technical skills.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                onClick={onViewProjects}
                className="inline-flex items-center gap-2.5 bg-[#2563eb] text-white px-7 py-3 rounded-xl hover:bg-[#1d4ed8] transition-colors shadow-lg shadow-[#2563eb]/20"
                style={{ fontSize: "0.9375rem", fontWeight: 600 }}
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="inline-flex items-center gap-2.5 bg-white text-gray-700 px-7 py-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                style={{ fontSize: "0.9375rem", fontWeight: 600 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
              <a
                href="https://github.com/lmgeralde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#24292f] text-white px-7 py-3 rounded-xl hover:bg-[#1b1f23] transition-colors shadow-lg shadow-black/10"
                style={{ fontSize: "0.9375rem", fontWeight: 600 }}
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-12 justify-center lg:justify-start">
              <a
                href="https://github.com/lmgeralde"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-full bg-[#24292f] text-white inline-flex items-center justify-center shadow-lg shadow-black/10 hover:scale-105 transition-transform"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/luigiiittt?igsh=MXJiYXFrYTF3Zjlwag=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white inline-flex items-center justify-center shadow-lg shadow-pink-500/20 hover:scale-105 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1B31yEScea/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-[#1877f2] text-white inline-flex items-center justify-center shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}