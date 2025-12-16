import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Contabilito",
        category: "Fullstack",
        description: "Sistema de gestión contable diseñado para pequeñas empresas. Incluye facturación, control de inventario y reportes financieros.",
        tech: ["React", "SQLite", "Electron", "Tailwind"],
        github: "https://github.com/DionelValera/contabilito",
        demo: "#",
        image: "/assets/banner/1.jpg" // Placeholder assumption, user can update
    },
    {
        id: 2,
        title: "Onix Hyprdots",
        category: "Linux",
        description: "Colección de configuraciones (dotfiles) para Hyprland en Arch Linux. Un entorno visualmente impactante y altamente productivo.",
        tech: ["Shell Script", "Hyprland", "Waybar", "CSS"],
        github: "https://github.com/DionelValera/Onix-hyprdots",
        demo: "#",
        image: "/assets/banner/2.jpg"
    },
    {
        id: 3,
        title: "Nexus Dashboard",
        category: "Frontend",
        description: "Dashboard analítico para visualización de datos en tiempo real. Utiliza WebSockets para actualizaciones en vivo.",
        tech: ["Next.js", "D3.js", "Socket.io", "TypeScript"],
        github: "#",
        demo: "#",
        image: "/assets/banner/3.jpg"
    },
    {
        id: 4,
        title: "AstroFolio V1",
        category: "Frontend",
        description: "La primera versión de este portafolio, explorando arquitecturas basadas en islas.",
        tech: ["Astro", "Preact", "CSS Modules"],
        github: "#",
        demo: "#",
        image: "/assets/banner/4.jpg"
    }
];

const categories = ["Todos", "Frontend", "Fullstack", "Linux"];

export default function ProjectList() {
    const [filter, setFilter] = useState("Todos");

    const filteredProjects = projects.filter(p => filter === "Todos" || p.category === filter);

    return (
        <div>
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${filter === cat
                                ? 'bg-white text-black scale-105'
                                : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <motion.div layout className="grid md:grid-cols-2 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.article
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-accent/5 group"
                        >
                            <div className="h-64 overflow-hidden relative bg-slate-800">
                                {/* Use a flexible fallback if image fails or path is wrong */}
                                {project.image && <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x600/171717/333333?text=' + project.title }} />}

                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.github} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><FaGithub size={20} /></a>
                                    <a href={project.demo} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><FaCode size={18} /></a>
                                </div>
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-2 py-1 text-xs font-mono text-accent bg-accent/10 rounded">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
