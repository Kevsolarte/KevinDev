import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const personalProjects = [
    {
        id: 'P01',
        title: 'Developer Analytics Hub',
        category: '// OPEN_SOURCE_TOOL',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
        problem: 'Falta de un dashboard unificado para monitorear despliegues, commits y métricas de CI/CD para repositorios independientes.',
        result: 'Desarrollo complejo en React integrando Github API y Webhooks, logrando visibilidad en tiempo real del ecosistema de desarrollo.',
        stack: ['React', 'Node.js', 'GraphQL', 'Tailwind CSS'],
        link: 'https://github.com/kevindev'
    },
    {
        id: 'P02',
        title: 'Algo-Trading Engine v1',
        category: '// PERSONAL_EXPERIMENT',
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
        problem: 'Necesidad de un motor de ejecución automática para estrategias financieras basado en indicadores de mercado de criptomonedas.',
        result: 'Arquitectura concurrente en Node.js que procesa cientos de eventos por segundo, calculando señales bajo latencias milimétricas.',
        stack: ['Node.js', 'TypeScript', 'WebSockets', 'PostgreSQL'],
        link: 'https://github.com/kevindev'
    }
];

const veksoProjects = [
    {
        id: 'V01',
        title: 'High-End E-Commerce',
        category: '// CONVERSION_ENGINE',
        image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80',
        problem: 'Elevada tasa de rebote (65%) debido a tiempos de carga lentos y un embudo de pagos (checkout) poco intuitivo.',
        result: 'Migración a arquitectura Headless (Next.js). Tiempos de carga sub-segundo (LCP < 1.2s). Aumento del 42% en la tasa de conversión.',
        stack: ['Next.js', 'Stripe', 'Framer Motion', 'Prisma'],
        link: 'https://vekso.com'
    },
    {
        id: 'V02',
        title: 'Booking & Operations',
        category: '// AUTOMATION_SYSTEM',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
        problem: 'Caos en agendas presenciales y porcentaje de inasistencia del 20% por falta de un flujo de recordatorios estructurado.',
        result: 'Portal de autogestión con sincronización multi-agenda y notificaciones automáticas. Reducción de inasistencias a un 4%.',
        stack: ['React', 'Express', 'PostgreSQL', 'AWS'],
        link: 'https://vekso.com'
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


    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"], { clamp: true }); 

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

            <section ref={targetRef} className="relative h-[800vh] md:h-[600vh] bg-[#050505] z-10 w-full">
                
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
                                <path d="M8 3L8 13M8 13L4 9M8 13L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
                            <div key={p.id} className="shrink-0 w-[90vw] md:w-[70vw] h-[75vh] md:h-[70vh] flex flex-col md:flex-row bg-[#080808] border border-white/5 overflow-hidden group relative">
                                
                                <div className="w-full md:w-1/2 relative overflow-hidden h-1/2 md:h-full border-b md:border-b-0 md:border-r border-white/5">
                                    <span className="absolute top-4 left-4 z-20 font-mono text-[9px] bg-[#050505]/80 backdrop-blur-md border border-white/10 px-3 py-1 text-white uppercase tracking-widest">
                                        {p.category}
                                    </span>
                                    <img 
                                        src={p.image} 
                                        alt={p.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                    />
                                    <div className="absolute inset-0 bg-[#000000]/30 pointer-events-none"></div>
                                </div>

                                <div className="w-full md:w-1/2 flex flex-col justify-between p-6 md:p-10 h-1/2 md:h-full bg-gradient-to-b from-[#080808] to-[#040404] relative">
                                    
                                    <div className="absolute -bottom-8 -right-4 opacity-[0.02] text-[150px] md:text-[200px] font-archivo font-black italic select-none pointer-events-none z-0">
                                        {p.id}
                                    </div>

                                    <div className="relative z-10">
                                        <h3 className="font-archivo text-2xl md:text-4xl uppercase tracking-tighter text-white leading-none mb-8">
                                            {p.title}
                                        </h3>

                                        <div className="space-y-4 md:space-y-6 flex-1">
                                            <div className="relative pl-4 border-l border-white/10">
                                                <span className="font-mono text-[8px] text-white/40 uppercase tracking-[0.3em] flex items-center gap-2 mb-1.5">
                                                    BUSINESS_PROBLEM
                                                </span>
                                                <p className="font-space text-xs md:text-sm text-gray-400 leading-relaxed">
                                                    {p.problem}
                                                </p>
                                            </div>

                                            <div className="relative pl-4 border-l border-[#2563EB]/40">
                                                <span className="font-mono text-[8px] text-[#2563EB] uppercase tracking-[0.3em] flex items-center gap-2 mb-1.5">
                                                    OUTCOME_METRICS
                                                </span>
                                                <p className="font-space text-xs md:text-sm text-gray-300 leading-relaxed">
                                                    {p.result}
                                                </p>
                                            </div>
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
