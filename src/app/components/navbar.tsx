import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  sections: string[];
  activeSection: string;
  onNavClick: (section: string) => void;
}

export function Navbar({ sections, activeSection, onNavClick }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("About");
          }}
        >
          <div
            className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center text-white"
            style={{ fontSize: "0.8125rem", fontWeight: 700 }}
          >
            LG
          </div>
          <span className="text-gray-900 hidden sm:inline" style={{ fontSize: "1rem", fontWeight: 600 }}>
            Luigi Renzo Geralde
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((section) => {
            const isActive = section === activeSection;
            return (
              <button
                key={section}
                onClick={() => onNavClick(section)}
                className={`relative px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "text-[#2563eb] bg-[#2563eb]/5"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
                style={{ fontSize: "0.875rem", fontWeight: isActive ? 600 : 500 }}
              >
                {section}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#2563eb] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-900"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 pb-4 pt-2">
          {sections.map((section) => {
            const isActive = section === activeSection;
            return (
              <button
                key={section}
                onClick={() => {
                  onNavClick(section);
                  setMobileOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "text-[#2563eb] bg-[#2563eb]/5"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                style={{ fontSize: "0.9375rem", fontWeight: isActive ? 600 : 400 }}
              >
                {section}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
