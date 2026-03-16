import {
  ReactIcon,
  TypeScriptIcon,
  TailwindIcon,
  FigmaIcon,
  NodejsIcon,
  PhpIcon,
  MySQLIcon,
  LaravelIcon,
  FlutterIcon,
  DjangoIcon,
  NetlifyIcon,
  JavaIcon,
} from "./tech-icons";
import type { ComponentType } from "react";

interface Skill {
  name: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: ReactIcon, color: "#61DAFB" },
      { name: "TypeScript", icon: TypeScriptIcon, color: "#3178C6" },
      { name: "Tailwind CSS", icon: TailwindIcon, color: "#06B6D4" },
      { name: "Figma", icon: FigmaIcon, color: "#F24E1E" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: NodejsIcon, color: "#5FA04E" },
      { name: "PHP", icon: PhpIcon, color: "#777BB4" },
      { name: "MySQL", icon: MySQLIcon, color: "#00758F" },
      { name: "Laravel", icon: LaravelIcon, color: "#FF2D20" },
    ],
  },
  {
    title: "Other Dev tools",
    skills: [
      { name: "Flutter", icon: FlutterIcon, color: "#47C5FB" },
      { name: "Django", icon: DjangoIcon, color: "#44B78B" },
      { name: "Netlify", icon: NetlifyIcon, color: "#00C7B7" },
      { name: "Java", icon: JavaIcon, color: "#EA2D2E" },
    ],
  },
];

function SkillItem({ skill }: { skill: Skill }) {
  const { name, icon: Icon, color } = skill;
  return (
    <div className="flex items-center gap-3.5 group cursor-default">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `${color}18` }}
      >
        <span style={{ color, display: "flex" }}>
          <Icon className="w-[18px] h-[18px]" />
        </span>
      </div>
      <span
        className="text-gray-300 group-hover:text-white transition-colors"
        style={{ fontSize: "0.9375rem", fontWeight: 500 }}
      >
        {name}
      </span>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a]" />
      {/* Accent glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#2563eb]/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#8b5cf6]/15 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="uppercase tracking-widest text-[#60a5fa] mb-3"
            style={{ fontSize: "0.75rem", fontWeight: 600 }}
          >
            What I Work With
          </p>
          <h2 className="text-white" style={{ fontSize: "2rem", fontWeight: 700 }}>
            Skills & Technologies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const borderColors = [
              "border-[#2563eb]/30",
              "border-[#8b5cf6]/30",
              "border-[#06b6d4]/30",
            ];
            const glowColors = [
              "from-[#2563eb]/10",
              "from-[#8b5cf6]/10",
              "from-[#06b6d4]/10",
            ];
            return (
              <div
                key={category.title}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl border ${borderColors[idx]} p-8 relative overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${glowColors[idx]} to-transparent opacity-50`}
                />
                <div className="relative">
                  <h3
                    className="text-white mb-6 pb-4 border-b border-white/10"
                    style={{ fontSize: "1rem", fontWeight: 600 }}
                  >
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
