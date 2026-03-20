import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import cinemovieDesktop from '../assets/Image/CineMovie!Desktop.png'
import cinemovieMobile from '../assets/Image/CineMovie!Movil.png'
import servicioYaDesktop from '../assets/Image/Captura ServicioYa.png'
import servicioYaMobile from '../assets/Image/ServicioYamovil.png'
import flashpointDesktop from '../assets/Image/Flashpointdesktop.png'
import flashpointMobile from '../assets/Image/FlashpointMovil.png'
import cautivaDesktop from '../assets/Image/cautivaDesktop.png'
import cautivaMobile from '../assets/Image/cautivamovil.png'
import sonusposDesktop from '../assets/Image/sonuspos desktop.png'
import sonusposMobile from '../assets/Image/sonuspos movil.png'
import toplevelDesktop from '../assets/Image/topleveldesktop.png'
import toplevelMobile from '../assets/Image/toplevel movil.png'
import shinebyvenusDesktop from '../assets/Image/shinebyvenusdesktop.png'
import shinebyvenusMobile from '../assets/Image/image.png'
import ipiwteessDesktop from '../assets/Image/ipiwteestdesktop.png'
import ipiwteessMobile from '../assets/Image/ipiwteestmovil.png'

const personalProjects = [
    {
        id: 'P01',
        title: 'CineMovie!',
        category: '// COMPREHENSIVE_PLATFORM',
        imageDesktop: cinemovieDesktop,
        imageMobile: cinemovieMobile, 
        overview: 'Plataforma web "Mobile First" interconectada a TMDB API para exploración visual de películas garantizando máxima fluidez y rendimiento.',
        highlights: [
            'Lógica de Infinite Scroll nativo mediante Custom Hooks.',
            'Arquitectura DRY: Centralización robusta de peticiones y filtrado.',
            'UI inmersiva: Sticky Sidebars, glassmorphism optimizado y seguridad de API Keys.'
        ],
        stack: ['React', 'Tailwind CSS', 'TMDB API', 'Custom Hooks'],
        link: '#'
    },
    {
        id: 'P02',
        title: 'ServicioYa',
        category: '// FULL_STACK_BOOKING',
        imageDesktop: servicioYaDesktop,
        imageMobile: servicioYaMobile,
        overview: 'PaaS para publicación y reserva de servicios. MVP Full Stack escalable (Proyecto final URBE) centrado en integridad relacional.',
        highlights: [
            'Frontend dinámico (React/TS) para catálogos y gestión de reservas.',
            'Backend modular (Node/Express) consumiendo endpoints REST ágiles.',
            'Base de datos relacional PostgreSQL orquestada con Prisma ORM.',
        ],
        stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma'],
        link: '#'
    },
    {
        id: 'P03',
        title: 'IpiwTees',
        category: '// IN_DEVELOPMENT (PROTOTYPE)',
        imageDesktop: ipiwteessDesktop,
        imageMobile: ipiwteessMobile,
        overview: 'Prototipo de plataforma E-Commerce orientada a la comercialización de indumentaria (Tees). Su núcleo prioriza una experiencia de compra inmersiva de alta velocidad.',
        highlights: [
            'Arquitectura progresiva construida sobre React 19 y compilada con Vite.',
            'Sistema de diseño ultra-responsivo impulsado por Tailwind CSS v4.',
            'Micro-interacciones y feedback de producto renderizados con Framer Motion.',
        ],
        stack: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
        link: '#'
    }
];

const veksoProjects = [
    {
        id: "V01",
        title: "FLASHPOINT: Authority Growth",
        category: "// Visual Brand / UX",
        imageDesktop: flashpointDesktop,
        imageMobile: flashpointMobile,
        problem: "Dependencia total de plataformas de terceros perjudicando el posicionamiento, la organización y proyección profesional.",
        result: "Plataforma de autoridad bajo diseño premium, logrando +60% en reservas automatizadas mensuales.",
        stack: ["Figma", "UI/UX", "Booking Flow"],
        link: "https://your-link-here.com"
    },
    {
        id: "V02",
        title: "CAUTIVA: Hybrid Sales Ecosystem",
        category: "// Ecommerce / UX",
        imageDesktop: cautivaDesktop,
        imageMobile: cautivaMobile,
        problem: "Fricción comercial procesando embudos de ventas manuales y desorganización interna de inventarios en redes.",
        result: "Ecosistema híbrido automatizado con catálogo dinámico y cierre en WhatsApp. Reducción operativa del 40%.",
        stack: ["UX/UI Design", "E-Commerce", "Strategy"],
        link: "https://your-link-here.com"
    },
    {
        id: "V03",
        title: "SONUSPOS: Operational Intelligence",
        category: "// Software / POS",
        imageDesktop: sonusposDesktop,
        imageMobile: sonusposMobile,
        problem: "Pérdidas operativas constantes por fallas humanas sistemáticas e inventarios cruzados sin sincronización.",
        result: "Sistema a medida para flujos de venta e inventario descentralizado, entregando reportes fluidos con cero faltantes.",
        stack: ["Software Design", "Logic Flow", "Dashboard"],
        link: "https://your-link-here.com"
    },
    {
        id: "V04",
        title: "TOPLEVEL: Booking Flow",
        category: "// Barbershop / Booking",
        imageDesktop: toplevelDesktop,
        imageMobile: toplevelMobile,
        problem: "Fricción operativa severa agendando clientes de forma repetitiva, perdiendo valor de marca en el proceso.",
        result: "Sitio web centralizado para reservas autónomas, optimizando la jornada proyectando anticipación real de clientela.",
        stack: ["Web Design", "UX Flow", "Booking System"],
        link: "https://your-link-here.com"
    },
    {
        id: "V05",
        title: "SHINE BY VENUS: Booking Flow",
        category: "// Beauty / Landing Page",
        imageDesktop: shinebyvenusDesktop,
        imageMobile: shinebyvenusMobile,
        problem: "Caída de conversión por ausencia de confianza digital y extrema fricción en la organización de clientas base.",
        result: "Landing page de estética premium incorporando un embudo de reservas transparente resolviendo las quejas operativas.",
        stack: ["UX Design", "Landing Page", "CRO"],
        link: "https://your-link-here.com"
    }
];

const slides = [
    { type: 'title', text: "PROYECTOS PERSONALES" },
    ...personalProjects.map(p => ({ type: 'project', data: p })),
    { type: 'title', text: "VEKSO : PROYECTOS FREELANCE" },
    ...veksoProjects.map(p => ({ type: 'project', data: p }))
];

export default function Projects() {
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });


    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-90%"], { clamp: true });

    return (
        <div id="proyectos" className="w-full relative">

            <div className="w-full px-4 md:px-12 pt-16 pb-10 flex flex-col items-start bg-[#050505] relative z-20 overflow-hidden">

                <div className="absolute top-1/2 -translate-y-1/2 -right-10 md:right-0 font-archivo text-[25vw] md:text-[20vw] leading-none opacity-[0.02] select-none pointer-events-none uppercase tracking-tighter z-0">
                    WORKS
                </div>

                <div className="max-w-[1400px] mx-auto w-full relative z-10 flex flex-col items-start">
                    <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.4em] block mb-4">
                        // SELECTED_WORKS
                    </span>
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-archivo leading-[0.85] tracking-tighter uppercase text-left text-white">
                        PROYECTOS <br />
                        <span className="text-[#2563EB] italic">DESTACADOS_</span>
                    </h2>
                </div>
            </div>

            <section ref={targetRef} className="relative h-[1400vh] md:h-[1200vh] bg-[#050505] z-10 w-full">

                <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-[#030303]">

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
                        <span className="font-mono text-[8px] md:text-[9px] text-white/20 uppercase tracking-[0.3em]">
                            SCROLL PARA EXPLORAR
                        </span>
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                            className="text-white/20"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M8 3L8 13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </motion.div>
                    </div>

                    <motion.div
                        style={{
                            x,
                            willChange: 'transform',
                        }}
                        className="flex gap-8 md:gap-16 px-[5vw] md:px-[10vw] items-center h-full w-[max-content] translate-z-0"
                    >
                        {slides.map((slide, i) => {

                            if (slide.type === 'title') {
                                return (
                                    <div key={i} className="shrink-0 w-[80vw] md:w-[40vw] h-[50vh] md:h-[60vh] flex flex-col items-center justify-center border border-white/5 bg-[#080808] relative overflow-hidden group">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] group-hover:opacity-[0.03] text-[150px] md:text-[200px] font-archivo font-black italic select-none pointer-events-none whitespace-nowrap transition-opacity duration-700">
                                            VKS_
                                        </div>
                                        <div className="flex flex-col items-center gap-6 relative z-10">
                                            <div className="w-20 h-px bg-[#2563EB]"></div>
                                            <h3 className="font-archivo text-4xl md:text-6xl text-center uppercase tracking-tighter text-white px-8">
                                                {slide.text}
                                            </h3>
                                            <div className="w-20 h-px bg-[#2563EB]"></div>
                                        </div>
                                        <span className="mt-8 font-mono text-[10px] text-white/30 tracking-[0.4em] uppercase relative z-10">
                                            [ SIGUE HACIENDO SCROLL ]
                                        </span>
                                    </div>
                                );
                            }

                            const p = slide.data;
                            return (
                                <div key={p.id} className="shrink-0 w-[90vw] md:w-[70vw] h-[85vh] md:h-[75vh] flex flex-col md:flex-row bg-[#080808] border border-white/5 overflow-hidden group relative">

                                    <div className="w-full md:w-1/2 relative bg-[#080808] flex items-center justify-center p-4 md:p-8 h-[40%] md:h-full border-b md:border-b-0 md:border-r border-white/5 overflow-hidden shrink-0">
                                        <span className="absolute top-4 left-4 z-40 font-mono text-[9px] bg-[#050505]/80 backdrop-blur-md border border-white/10 px-3 py-1 text-white uppercase tracking-widest">
                                            {p.category}
                                        </span>

                                        {/* CONTENEDOR CENTRAL DE MOCKUPS */}
                                        <div className="relative w-[100%] md:w-[85%] flex items-center justify-center z-10 mx-auto mt-2 md:mt-0">
                                            
                                            {/* MOCKUP DESKTOP (Mac OS Style Premium) */}
                                            <div className="relative w-full aspect-[16/10] bg-[#050505] border border-white/10 rounded-[0.5rem] md:rounded-[0.75rem] shadow-[0_20px_60px_rgba(0,0,0,0.6)] group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transition-all duration-700 ease-out z-10 flex flex-col overflow-hidden ring-1 ring-white/5">
                                                {/* Browser Top Bar macOS */}
                                                <div className="h-5 md:h-7 bg-[#141414] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0 w-full relative z-20">
                                                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]"></div>
                                                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]"></div>
                                                    <div className="w-2 h-2 rounded-full bg-[#27c93f]"></div>
                                                </div>
                                                
                                                {/* ÁREA DE CONTENIDO (Desktop Image Centrada Superior) */}
                                                <div className="relative w-full flex-1 bg-[#050505] overflow-hidden flex items-center justify-center">
                                                    <img 
                                                        src={p.imageDesktop} 
                                                        alt={`${p.title} Desktop`} 
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="w-full h-full object-cover object-top"
                                                    />
                                                </div>
                                            </div>

                                            {/* MOCKUP MOVILE (Identico al screenshot iPhone iOS) */}
                                            <div className="absolute -bottom-6 -right-2 md:-bottom-12 md:-right-8 w-[28%] md:w-[26%] aspect-[1/2.15] bg-[#050505] rounded-[1.5rem] md:rounded-[2.2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8),-20px_0_50px_rgba(0,0,0,0.6)] group-hover:-translate-y-6 group-hover:-translate-x-4 transition-transform duration-700 ease-out z-20 overflow-hidden ring-1 ring-[#4a4a4c] border-[3px] md:border-[6px] border-[#151515] group/mobile">
                                                
                                                {/* Brillo lateral sutil (Efecto metálico marco) */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-700 z-40 pointer-events-none"></div>

                                                

                                                {/* ÁREA DE CONTENIDO (Mobile Image al Borde) */}
                                                <div className="relative w-full h-full bg-[#050505]">
                                                    <img 
                                                        src={p.imageMobile}
                                                        alt={`${p.title} Mobile`} 
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="w-full h-full object-cover object-top"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 bg-[#000000]/10 pointer-events-none z-30 mix-blend-overlay"></div>
                                    </div>

                                    <div className="w-full md:w-1/2 flex flex-col justify-between p-5 md:p-8 h-[60%] md:h-full bg-gradient-to-b from-[#080808] to-[#040404] relative">

                                        <div className="absolute -bottom-8 -right-4 opacity-[0.02] text-[150px] md:text-[200px] font-archivo font-black italic select-none pointer-events-none z-0">
                                            {p.id}
                                        </div>

                                        <div className="relative z-10">
                                            <h3 className="font-archivo text-xl md:text-3xl uppercase tracking-tighter text-white leading-none mb-3 md:mb-6">
                                                {p.title}
                                            </h3>

                                            <div className="space-y-3 md:space-y-6 flex-1 pr-2 md:pr-10">
                                                {p.overview ? (
                                                    <>
                                                        <div className="relative pl-3 md:pl-4 border-l border-[#2563EB]/40">
                                                            <span className="font-mono text-[7px] md:text-[8px] text-[#2563EB] uppercase tracking-[0.3em] flex items-center gap-2 mb-1">
                                                                TECHNICAL_OVERVIEW
                                                            </span>
                                                            <p className="font-space text-[10px] md:text-sm text-gray-300 leading-relaxed font-medium">
                                                                {p.overview}
                                                            </p>
                                                        </div>

                                                        <div className="relative pl-3 md:pl-4 border-l border-white/10">
                                                            <span className="font-mono text-[7px] md:text-[8px] text-white/40 uppercase tracking-[0.3em] flex items-center gap-2 mb-1.5">
                                                                SYSTEM_CAPABILITIES
                                                            </span>
                                                            <ul className="font-space text-[9.5px] md:text-xs text-gray-400 space-y-1.5 md:space-y-2.5">
                                                                {p.highlights?.map((highlight, idx) => (
                                                                    <li key={idx} className="flex gap-2 leading-relaxed">
                                                                        <span className="text-[#2563EB] mt-0.5 opacity-60">▹</span>
                                                                        <span>{highlight}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="relative pl-3 md:pl-4 border-l border-white/10">
                                                            <span className="font-mono text-[7px] md:text-[8px] text-white/40 uppercase tracking-[0.3em] flex items-center gap-2 mb-1">
                                                                BUSINESS_PROBLEM
                                                            </span>
                                                            <p className="font-space text-[10px] md:text-sm text-gray-400 leading-relaxed">
                                                                {p.problem}
                                                            </p>
                                                        </div>

                                                        <div className="relative pl-3 md:pl-4 border-l border-[#2563EB]/40">
                                                            <span className="font-mono text-[7px] md:text-[8px] text-[#2563EB] uppercase tracking-[0.3em] flex items-center gap-2 mb-1">
                                                                OUTCOME_METRICS
                                                            </span>
                                                            <p className="font-space text-[10px] md:text-sm text-gray-300 leading-relaxed font-medium">
                                                                {p.result}
                                                            </p>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col gap-4 relative z-10">
                                            <div className="flex flex-wrap gap-1.5">
                                                {p.stack.map((tech) => (
                                                    <span key={tech} className="bg-white/[0.03] border border-white/5 px-2 py-1 font-mono text-[8px] text-white/50 uppercase tracking-widest">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={p.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="font-mono text-[10px] text-[#2563EB] hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2 w-max group/link"
                                            >
                                                [ DEPLOYMENT ]
                                                <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
