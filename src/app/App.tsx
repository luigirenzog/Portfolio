import { useState } from "react";
import { Navbar } from "./components/navbar";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { EducationSection } from "./components/education-section";
import { CertificatesSection } from "./components/certificates-section";

const sections = ["About", "Skills", "Projects", "Education", "Certificates & Credibility"] as const;
type Section = (typeof sections)[number];

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("About");

  const handleNavClick = (section: Section) => {
    setActiveSection(section);
    const id = section.toLowerCase().replace(/\s+&\s+/g, "-");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="min-h-screen bg-white text-[#1f2937]"
      style={{ fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
    >
      <Navbar
        sections={sections as unknown as string[]}
        activeSection={activeSection}
        onNavClick={(s) => handleNavClick(s as Section)}
      />

      <main>
        <AboutSection onViewProjects={() => handleNavClick("Projects")} />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
      </main>

      <footer className="relative border-t border-white/10 py-10 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <div
          className="max-w-6xl mx-auto px-6 text-center text-gray-500"
          style={{ fontSize: "0.8125rem" }}
        >
          &copy; 2026 Luigi Renzo Geralde. Built with passion and clean code.
        </div>
      </footer>
    </div>
  );
}