import { Tilt } from 'react-tilt';
import { FaCode, FaServer, FaTerminal, FaPalette } from 'react-icons/fa';
import { motion } from 'framer-motion';

const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 25,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.05,   // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,   // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const services = [
    {
        title: "Frontend Development",
        icon: FaCode,
        desc: "Construcción de interfaces modernas, reactivas y accesibles usando React, Astro y TypeScript.",
        color: "text-blue-400"
    },
    {
        title: "Backend & APIs",
        icon: FaServer,
        desc: "Diseño de arquitecturas robustas y APIs RESTful eficientes y escalables.",
        color: "text-green-400"
    },
    {
        title: "Linux Customization",
        icon: FaTerminal,
        desc: "Scripting en Bash y configuración avanzada de entornos de escritorio (Hyprland, Wayland).",
        color: "text-purple-400"
    },
    {
        title: "UI/UX Design",
        icon: FaPalette,
        desc: "Creación de experiencias visuales atractivas centradas en la usabilidad.",
        color: "text-pink-400"
    }
];

export default function ServiceCards() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
                <Tilt options={defaultOptions} key={index} className="h-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 border border-white/5 p-6 rounded-2xl h-full flex flex-col items-start hover:bg-white/10 transition-colors cursor-default"
                    >
                        <div className={`p-3 rounded-lg bg-black/30 mb-4 ${service.color}`}>
                            <service.icon size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                    </motion.div>
                </Tilt>
            ))}
        </div>
    )
}
