import { ImageWithFallback } from "./figma/ImageWithFallback";

export function EducationSection() {
  const educationItems = [
    {
      yearRange: "2012 \u2014 2021",
      level: "Elementary - Junior High School",
      school: "Colegio de San Ignacio",
      logo: "src/assets/CDSI.jpg",
      logoAlt: "Colegio de San Ignacio Logo",
    },
    {
      yearRange: "2021 \u2014 2023",
      level: "Senior High School - STEM",
      school: "Colegio de San Ignacio",
      logo: "src/assets/CDSI.jpg",
      logoAlt: "Colegio de San Ignacio Logo",
    },
    {
      yearRange: "2023 \u2014 2027",
      level: "3rd year - BS Information Systems",
      school: "Ateneo de Davao University",
      logo: "src/assets/ADDULogo.jpg",
      logoAlt: "Ateneo de Davao University Logo",
    },
  ];

  return (
    <section id="education" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eff6ff] to-[#f8fafc]" />
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#2563eb]/[0.05] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
          {educationItems.map((item) => (
            <article
              key={`${item.school}-${item.yearRange}`}
              className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-md transition-shadow h-full"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span
                    className="inline-flex px-3 py-1 rounded-full bg-[#2563eb]/5 text-[#2563eb] mb-3"
                    style={{ fontSize: "0.75rem", fontWeight: 600 }}
                  >
                    {item.yearRange}
                  </span>
                  <h3 className="text-gray-900 mb-1.5" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                    {item.level}
                  </h3>
                  <p className="text-gray-500" style={{ fontSize: "0.9375rem", fontWeight: 400 }}>
                    {item.school}
                  </p>
                </div>

                <div className="shrink-0 w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] rounded-xl bg-[#2563eb]/5 border border-[#2563eb]/15 items-center justify-center p-2.5 hidden sm:flex">
                  <ImageWithFallback
                    src={item.logo}
                    alt={item.logoAlt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}