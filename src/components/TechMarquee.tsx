import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaLinux, FaGitAlt, FaPython, FaJava } from "react-icons/fa";
import { SiAstro, SiTailwindcss, SiTypescript, SiSqlite, SiArchlinux } from "react-icons/si";

const skills = [
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: SiAstro, color: "#FF5D01", name: "Astro" },
    { icon: SiTailwindcss, color: "#38B2AC", name: "Tailwind" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
    { icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { icon: FaLinux, color: "#FCC624", name: "Linux" },
    { icon: SiArchlinux, color: "#1793D1", name: "Arch" },
    { icon: SiSqlite, color: "#003B57", name: "SQLite" },
    { icon: FaGitAlt, color: "#F05032", name: "Git" },
    { icon: FaPython, color: "#3776AB", name: "Python" },
    { icon: FaJava, color: "#007396", name: "Java" },
];

export default function TechMarquee() {
    return (
        <div className="w-full py-10 bg-black/20 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"></div>

            <Marquee gradient={false} speed={40}>
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center mx-8 md:mx-12 group">
                        <skill.icon className="text-4xl md:text-5xl text-slate-500 group-hover:text-[var(--color)] transition-colors duration-300" style={{ '--color': skill.color } as React.CSSProperties} />
                        <span className="mt-2 text-sm text-slate-600 font-medium group-hover:text-slate-300 transition-colors">{skill.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
