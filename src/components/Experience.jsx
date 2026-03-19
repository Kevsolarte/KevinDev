import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 'vekso',
        role: 'FOUNDER & FULL STACK DEVELOPER',
        company: 'VEKSO',
        period: 'SEP 2025 – PRESENTE',
        tag: '// ENTERPRISE_CORE',
        bullets: [
            'Arquitectura y desarrollo End-to-End de plataformas para negocios: desde Landing Pages de alta conversión (+40% interacción) hasta E-Commerce y software a medida.',
            'Integración de flujos de pago, sistemas de reservas y catálogos digitales que automatizan operaciones, reduciendo el tiempo de gestión manual de clientes en un 60%.',
            'Diseño de infraestructuras escalables (Next.js, Node.js) orientadas a resolver necesidades reales de crecimiento corporativo, garantizando alta disponibilidad y rendimiento.',
            'Fusión estricta entre diseño UI/UX premium y lógica de negocio para construir activos digitales que fortalecen la presencia de marca y disparan las métricas de conversión.'
        ],
        stack: ['Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'Framer Motion']
    },
    {
        id: 'fulltime',
        role: 'FULL-STACK DEVELOPER',
        company: 'TANDEM SOLUTIONS',
        period: 'NOV 2024 – OCT 2025',
        tag: '// DEVELOPMENT_NODE',
        bullets: [
            'Integración avanzada de Google Maps API para la gestión interactiva de potreros: dibujo de polígonos geoespaciales y cálculo automático de áreas o distancias.',
            'Desarrollo de macro-calculadoras algorítmicas de capacidad de carga aplicando fórmulas de dominio ganadero, mejorando la precisión de proyecciones en un 85%.',
            'Ingeniería de datos: Implementación de carga masiva de registros vía Excel con mapeo dinámico, reduciendo los tiempos de importación y validación en PostgreSQL en un 70%.',
            'Arquitectura de sistema de geolocalización de precisión para mapeo de plantas y puntos estratégicos dentro del perímetro agrícola mediante coordenadas.'
        ],
        stack: ['SAP Fiori', 'SAP CAP', 'Node.js', 'Docker', 'PostgreSQL']
    },
    {
        id: 'intern',
        role: 'BACKEND INTERN',
        company: 'TANDEM SOLUTIONS',
        period: 'SEP 2024 – NOV 2024',
        tag: '// DEVELOPMENT_NODE',
        bullets: [
            'Arquitectura de módulos de gestión para Business Partners y asignación automatizada de consultores, agilizando el control y seguimiento de negocios empresariales.',
            'Implementación estructural de un sistema de ventas (Embudo Comercial) con control de fases dinámicas y reglas de estado, incrementando la visibilidad del pipeline un 50%.',
            'Diseño lógico y estandarización de módulos para servicios logísticos, estableciendo jerarquías claras para tarifas y unidades de medida del sistema.'
        ],
        stack: ['SAP CAP', 'Node.js', 'PostgreSQL', 'SAPUI5']
    }
];

export default function Experience() {
    return (
        <section id="experiencia" className="relative pt-16 pb-24 md:pt-20 md:pb-32 w-full max-w-[1400px] mx-auto z-10">

            <div className="absolute top-10 md:top-0 -left-10 md:-left-20 font-archivo text-[20vw] leading-none opacity-[0.02] select-none pointer-events-none uppercase tracking-tighter z-0">
                HISTORY
            </div>

            {/* Header de Sección */}
            <div className="mb-16 md:mb-24 flex flex-col items-start relative z-10">
                <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.4em] block mb-4">
                    // PROFESSIONAL_HISTORY
                </span>
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-archivo leading-[0.85] tracking-tighter uppercase text-left">
                    TRAYECTORIA <br />
                    <span className="text-[#2563EB] italic">PROFESIONAL_</span>
                </h2>
            </div>

            {/* Sticky Cards Container */}
            <div className="relative flex flex-col gap-6 md:gap-10 mb-0">
                {experiences.map((exp, index) => {
                    const topOffsetMobile = 24 + (index * 130); 
                    const topOffsetDesktop = 24 + (index * 100); 

                    const cardWatermark = index === 0 ? 'LEAD' : index === 1 ? 'DEV' : 'BASE';

                    return (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={`sticky w-full bg-[#080808] border-x border-t border-white/5 flex flex-col overflow-hidden`}
                            style={{
                                top: `clamp(${ topOffsetMobile }px, 15vh, ${ topOffsetDesktop }px)`,
                                zIndex: index + 10,
                            }}
                        >
                            <div className="bg-[#0c0c0c] border-b border-white/5 p-6 flex flex-col items-start justify-center gap-2 md:flex-row md:justify-between md:items-center transition-colors group h-[130px] md:h-[100px] relative z-20">
                                <div>
                                    <span className="font-mono text-[8px] md:text-[9px] text-[#2563EB] font-bold uppercase tracking-widest block mb-2">
                                        {exp.tag}
                                    </span>
                                    <h3 className="font-archivo text-xl md:text-3xl lg:text-4xl uppercase tracking-tighter text-white">
                                        {exp.role}
                                    </h3>
                                </div>
                                <div className="flex flex-col md:text-right">
                                    <span className="font-archivo text-base md:text-xl text-white/80 uppercase tracking-wider">
                                        {exp.company}
                                    </span>
                                    <span className="font-mono text-[9px] md:text-xs text-white/40 uppercase tracking-widest mt-1">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 md:p-10 lg:p-14 flex flex-col lg:flex-row gap-10 lg:gap-20 bg-gradient-to-b from-[#080808] to-[#030303] flex-1 relative">

                                <div className="absolute -bottom-8 -right-4 opacity-[0.015] md:opacity-[0.02] text-[120px] md:text-[200px] font-archivo font-black italic select-none pointer-events-none z-0">
                                    {cardWatermark}
                                </div>

                                <div className="flex-1 space-y-6 relative z-10">
                                    {exp.bullets.map((bullet, i) => (
                                        <div key={i} className="flex gap-4 group/bullet">
                                            <span className="font-mono text-[10px] text-[#2563EB]/50 pt-1.5 select-none">
                                                0{i + 1}
                                            </span>
                                            <p className="font-space text-sm md:text-base text-gray-400 leading-relaxed border-l border-white/5 pl-5 group-hover/bullet:border-[#2563EB]/50 group-hover/bullet:text-gray-300 transition-all duration-300 shadow-sm">
                                                {bullet}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Stack de Tecnologías */}
                                <div className="lg:w-1/3 flex flex-col relative z-10">
                                    <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.3em] block mb-4 border-b border-white/5 pb-2">
                                        STRICT_STACK
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-white/[0.02] border border-white/5 px-3 py-1.5 font-mono text-[9px] md:text-[10px] text-white/60 hover:text-white hover:border-[#2563EB]/50 transition-colors uppercase tracking-widest backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent absolute bottom-0 z-20"></div>
                        </motion.div>
                    );
                })}

            </div>
        </section>
    );
}
