import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techIcons = [
    { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Framer Motion', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg' },
    { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Prisma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg' },
    { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'GitHub', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
];

export default function About({ onIntroComplete }) {
    const [introStep, setIntroStep] = useState(0);

    //TIMELINE — Si ya fue vista, salta directo al Dashboard
    useEffect(() => {
        const alreadySeen = sessionStorage.getItem('boot_done');

        if (alreadySeen) {
            // Visita repetida: sin animación, carga inmediata
            setIntroStep(7);
            if (onIntroComplete) onIntroComplete();
            return;
        }

        // Primera visita: secuencia completa
        const t1 = setTimeout(() => setIntroStep(1), 700);
        const t2 = setTimeout(() => setIntroStep(2), 1500);
        const t3 = setTimeout(() => setIntroStep(3), 2200);
        const t4 = setTimeout(() => setIntroStep(4), 3000);
        const t5 = setTimeout(() => setIntroStep(5), 3700);
        const t6 = setTimeout(() => setIntroStep(6), 4800);
        const t7 = setTimeout(() => {
            setIntroStep(7);
            sessionStorage.setItem('boot_done', 'true');
            if (onIntroComplete) onIntroComplete();
        }, 5600);

        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); clearTimeout(t6); clearTimeout(t7); };
    }, [onIntroComplete]);

    return (
        <section id="sobre-mí" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            <AnimatePresence>
                {introStep < 7 && (
                    <motion.div
                        initial={{ clipPath: 'inset(0 0 0% 0)' }}
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.2, delay: 0 }
                        }}
                        className="fixed inset-0 z-[200] bg-[#030303] flex flex-col justify-end p-6 md:p-12 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[#030303] z-0"></div>
                        <motion.div
                            initial={{ top: "-100%" }}
                            animate={{ top: "100%" }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[#2563EB]/10 to-transparent z-10 pointer-events-none blur-xl"
                        />

                        {/* Consola de logs */}
                        <div className="font-mono text-[10px] md:text-sm text-[#2563EB] flex flex-col gap-2 relative z-20 w-full max-w-3xl">

                            {introStep >= 0 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                                    <span className="opacity-50">[SYS]</span> <span>INITIALIZING KERNEL_CORE_V2.0...</span>
                                </motion.div>
                            )}
                            {introStep >= 1 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                                    <span className="opacity-50">[SYS]</span> <span>MOUNTING /DEV/KEVIN_PROFILE...</span>
                                </motion.div>
                            )}
                            {introStep >= 2 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                                    <span className="text-white bg-white/10 px-1">[OK]</span> <span className="text-white">HARDWARE: VKS 128-CORE LOGIC ENGINE DETECTED</span>
                                </motion.div>
                            )}
                            {introStep >= 3 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                                    <span className="opacity-50">[EXE]</span> <span>RUNNING COMPILE_B2B_STACK.SH -Y</span>
                                </motion.div>
                            )}
                            {introStep >= 4 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
                                    <span className="opacity-50">[OK]</span> <span>ESTABLISHING SECURE CONNECTION...</span>
                                </motion.div>
                            )}
                            {introStep >= 5 && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 mt-4">
                                    <span className="text-green-500 font-bold bg-green-500/10 px-1 animate-pulse">[SYS_ONLINE]</span> <span className="text-green-400">ACCESS GRANTED. WELCOME, ENGINEER_</span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {introStep >= 7 && (
                    <motion.div
                        key="scan-reveal-bar"
                        initial={{ top: '0%' }}
                        animate={{ top: '110%' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed left-0 right-0 h-20 bg-gradient-to-b from-transparent via-[#2563EB]/10 to-transparent z-[300] pointer-events-none blur-xl"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {introStep >= 7 && (
                    <motion.div
                        initial={{ clipPath: 'inset(0 0 100% 0)' }}
                        animate={{ clipPath: 'inset(0 0 0% 0)' }}
                        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                        className="w-full max-w-[1400px] mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5"
                    >
                        <div className="lg:col-span-8 bg-[#080808] border border-white/5 p-8 md:p-14 lg:p-20 relative overflow-hidden group min-h-[400px] lg:min-h-[500px] flex flex-col justify-center">
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4 mb-2">
                                    {/* FOTO DE PERFIL */}
                                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-none border border-white/10 bg-[#0c0c0c] flex items-center justify-center overflow-hidden shrink-0 relative group/photo">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 to-transparent"></div>
                                        <span className="font-archivo text-lg text-white/60 tracking-widest relative z-10">KS</span>
                                        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#2563EB]/40"></div>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="font-mono text-[9px] md:text-[10px] text-white/30 tracking-[0.4em] uppercase">SYSTEM_ONLINE // VKS_CORE</span>
                                        </div>
                                        <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest mt-0.5">Kevin Solarte — Full Stack Dev</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-6xl lg:text-7xl font-archivo leading-[0.85] tracking-tighter uppercase text-white">
                                    INGENIERO <br />
                                    <span className="text-[#2563EB] italic">INFORMÁTICO_</span>
                                </h1>

                                <div className="font-space text-sm md:text-base text-gray-400 max-w-3xl leading-relaxed space-y-4">
                                    <p>
                                        Soy <strong className="text-white font-normal">Ingeniero Informático y Full Stack Developer</strong>, enfocado en construir soluciones web que combinan diseño, lógica de negocio y escalabilidad.
                                    </p>
                                    <p>
                                        Cuento con experiencia tanto en entornos empresariales como en proyectos desarrollados bajo mi marca, <strong className="text-[#2563EB] font-mono uppercase tracking-widest">VEKSO</strong>, creando landing pages, sitios web, ecommerce y software a medida. Negocios que necesitan más que presencia: necesitan <strong>herramientas que impulsen conversión, optimicen procesos y generen resultados reales.</strong>
                                    </p>
                                    <p>
                                        Desarrollo plataformas administrativas, sistemas de gestión y productos digitales completos que conectan perfectamente la UX con la lógica del negocio.
                                    </p>
                                    <p className="border-l-2 border-[#2563EB] pl-4 italic text-gray-500 text-sm">
                                        "Me interesa crear software que no solo funcione bien, sino que también aporte claridad, eficiencia y valor real a los negocios."
                                    </p>
                                </div>
                            </div>

                            <div className="absolute -bottom-8 -right-8 opacity-[0.02] text-[150px] md:text-[200px] font-archivo font-black italic select-none pointer-events-none">
                                VKS
                            </div>
                        </div>

                        {/* COLUMNA DERECHA (STACK & REDES en Cuadros)*/}
                        <div className="lg:col-span-4 flex flex-col gap-6 lg:gap-8">

                            {/*BLOQUE DE TECNOLOGÍA (TECH GRID EN CUADROS)*/}
                            <div className="flex flex-col">
                                <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.4em] block mb-4">
                                    // TECHNOLOGICAL_STACK
                                </span>

                                <div className="grid grid-cols-5 gap-px bg-[#1a1a1a]/40 border border-[#1a1a1a]/40 overflow-hidden">
                                    {techIcons.map((tech) => (
                                        <div key={tech.name} className="bg-[#080808] hover:bg-white/[0.03] p-3 md:p-4 flex items-center justify-center transition-colors duration-500 group/icon aspect-square overflow-hidden">
                                            <img
                                                src={tech.url}
                                                alt={tech.name}
                                                title={tech.name}
                                                className="w-7 h-7 md:w-9 md:h-9 grayscale opacity-50 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 group-hover/icon:scale-110 transition-all duration-300 drop-shadow-none group-hover/icon:drop-shadow-[0_0_10px_rgba(37,99,235,0.4)] object-contain max-w-full max-h-full"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/*BLOQUE DE CONEXIÓN (REDES Y CV EN CUADROS) */}
                            <div className="flex flex-col">
                                <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.4em] block mb-4">
                                    // COMMUNICATIONS_HUB
                                </span>

                                <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]/40 border border-[#1a1a1a]/40 flex-1">

                                    <a href="/Kevin solarte cv Fullstack.pdf" download className="bg-[#080808] hover:bg-[#2563EB]/5 border-b-2 border-transparent hover:border-[#2563EB] p-4 md:p-5 flex flex-col items-start justify-between min-h-[90px] md:min-h-[110px] transition-all group duration-300">
                                        <span className="font-mono text-[8px] md:text-[9px] text-[#2563EB] font-bold uppercase tracking-widest">// DATA_RESOURCE</span>
                                        <span className="font-archivo text-white/80 group-hover:text-white text-sm md:text-base uppercase tracking-widest mt-4">DESCARGAR CV</span>
                                    </a>

                                    <a href="https://vekso.com" target="_blank" rel="noreferrer" className="bg-[#080808] hover:bg-[#2563EB]/5 border-b-2 border-transparent hover:border-[#2563EB] p-4 md:p-5 flex flex-col items-start justify-between min-h-[90px] md:min-h-[110px] transition-all group duration-300">
                                        <span className="font-mono text-[8px] md:text-[9px] text-[#2563EB] font-bold uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-[pulse_2s_infinite]"></span> // ENTERPRISE
                                        </span>
                                        <span className="font-archivo text-white/80 group-hover:text-white text-sm md:text-base uppercase tracking-widest mt-4">VEKSO LABS</span>
                                    </a>

                                    <a href="https://linkedin.com/in/kevsolarte" target="_blank" rel="noreferrer" className="bg-[#080808] hover:bg-[#2563EB]/5 border-b-2 border-transparent hover:border-[#2563EB] p-4 md:p-5 flex flex-col items-start justify-between min-h-[90px] md:min-h-[110px] transition-all group duration-300">
                                        <span className="font-mono text-[8px] md:text-[9px] text-[#2563EB] font-bold uppercase tracking-widest">// NETWORK</span>
                                        <span className="font-archivo text-white/80 group-hover:text-white text-sm md:text-base uppercase tracking-widest mt-4">LINKEDIN</span>
                                    </a>

                                    <a href="https://github.com/kevsolarte" target="_blank" rel="noreferrer" className="bg-[#080808] hover:bg-[#2563EB]/5 border-b-2 border-transparent hover:border-[#2563EB] p-4 md:p-5 flex flex-col items-start justify-between min-h-[90px] md:min-h-[110px] transition-all group duration-300">
                                        <span className="font-mono text-[8px] md:text-[9px] text-[#2563EB] font-bold uppercase tracking-widest">// REPOSITORY</span>
                                        <span className="font-archivo text-white/80 group-hover:text-white text-sm md:text-base uppercase tracking-widest mt-4">GITHUB</span>
                                    </a>

                                </div>
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}
