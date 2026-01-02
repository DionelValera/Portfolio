import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-start pt-32 pb-20 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide mb-6">
                    Disponible para trabajar
                </span>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display text-white mb-6 leading-tight">
                    Frontend <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
                        Developer.
                    </span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
                    Técnico Superior en Informática. Especialista en crear experiencias digitales
                    <span className="text-white font-medium"> fluidas</span>,
                    <span className="text-white font-medium"> eficientes</span> y
                    <span className="text-white font-medium"> estéticas</span>.
                    Apasionado por Linux y el código bien estructurado.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <a
                        href="/projects"
                        className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden flex items-center gap-2 transition-all hover:scale-105"
                    >
                        <span className="relative z-10">Ver Proyectos</span>
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
                        <div className="absolute inset-0 bg-slate-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </a>

                    <a
                        href="/contact"
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
                    >
                        <span>Contáctame</span>
                        <FaDownload />
                    </a>
                </div>
            </motion.div>

            {/* Hero Image / Avatar */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[600px] pointer-events-none z-[-1]"
            >
                <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full mix-blend-screen"></div>
                {/* Using the provided asset 'noche.png' which seems suitable for a dark theme hero */}
                <img src="/assets/avatar/izquierda/noche.png" alt="Hero Avatar" className="relative z-10 w-full h-full object-contain opacity-80" />
            </motion.div>

            {/* Decorative abstract elements */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block pointer-events-none">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="199.5" stroke="white" strokeOpacity="0.1" />
                    <circle cx="200" cy="200" r="149.5" stroke="white" strokeOpacity="0.1" />
                    <circle cx="200" cy="200" r="99.5" stroke="white" strokeOpacity="0.1" />
                </svg>
            </div>
        </section>
    );
}
