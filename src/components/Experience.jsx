import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import tandemlogo from '../assets/Image/tandem_business_solutions_and_services_ca_logo.jpeg'

const experiences = [
    {
        id: 'intern',
        role: 'Desarrollador Backend (Pasantías)',
        company: 'Tandem Solutions',
        subtitle: 'Pasantías en desarrollo backend y SAP',
        period: 'Septiembre 2024 – Noviembre 2024',
        location: 'Remoto / [Tu ciudad]',
        logo: tandemlogo,      
        bullets: [
            'Apoyo en el desarrollo de módulos internos utilizando SAP Fiori, SAP CAP y SAPUI5.',
            'Participación en la implementación de lógica de negocio en handlers de Node.js.',
            'Colaboración con el equipo para el mantenimiento y mejora de funcionalidades existentes.',
        ],
        stack: 'SAP Fiori · SAP CAP · SAPUI5 · Node.js · PostgreSQL',
    },
    {
        id: 'fulltime',
        role: 'Full-Stack Developer',
        company: 'Tandem Solutions',
        subtitle: 'Desarrollo de soluciones empresariales',
        period: 'Noviembre 2024 – Actualidad',
        location: 'Remoto / [Tu ciudad]',
        logo: tandemlogo,     
        bullets: [
            'Responsable del desarrollo de módulos de negocio de principio a fin (frontend y backend).',
            'Implementación de lógica de negocio con custom handlers en Node.js y persistencia en PostgreSQL.',
            'Participación en el diseño y optimización de procesos internos y flujos de datos.',
        ],
        stack: 'SAP Fiori · SAP CAP · SAPUI5 · Node.js · Docker · PostgreSQL',
    },
];

function Experience() {
    const [selectedId, setSelectedId] = useState(experiences[0].id);
    const selectedExp = experiences.find((exp) => exp.id === selectedId);

    return (
        <section
            id="experience"
            className="py-10 md:py-16"
            data-aos="fade-up"
        >
            <div className="flex flex-col items-center mb-10">
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-300">
                    Mi viaje profesional
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                    Experiencia laboral<span className="text-purple-400">.</span>
                </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-[0.9fr,1.4fr] items-start">
                <div className="space-y-4" data-aos="fade-right">
                    {experiences.map((exp) => {
                        const isActive = exp.id === selectedId;
                        return (
                            <button
                                key={exp.id}
                                type="button"
                                onClick={() => setSelectedId(exp.id)}
                                className={`w-full text-left rounded-3xl px-5 py-4 md:px-6 md:py-5 transition border ${ isActive
                                        ? 'bg-purple-700/40 border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.55)]'
                                        : 'bg-[#07081a]/90 border-purple-500/25 hover:border-purple-400/60 hover:bg-[#0a0b22]'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#0b0b1d] flex items-center justify-center overflow-hidden">
                                        {exp.logo ? (
                                            <img
                                                src={exp.logo}
                                                alt={exp.company}
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <span className="text-sm md:text-base font-bold text-white">
                                                {exp.company[0]}
                                            </span>
                                        )}
                                    </div>
                                
                                    <div className="flex flex-col">
                                        <span className="text-sm md:text-base font-semibold text-white">
                                            {exp.role}
                                        </span>
                                        <span className="text-xs text-gray-300">{exp.company}</span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedExp.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="rounded-3xl bg-[#07081a]/95 border border-purple-500/40 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_40px_rgba(88,28,135,0.45)]"
                        data-aos="fade-left"
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-white">
                            {selectedExp.role}
                        </h3>
                        <p className="mt-1 text-sm md:text-base text-gray-300">
                            {selectedExp.company}
                        </p>
                        <p className="mt-1 text-xs md:text-sm text-gray-400">
                            {selectedExp.period} · {selectedExp.location}
                        </p>

                        {selectedExp.subtitle && (
                            <p className="mt-4 text-sm md:text-base text-gray-200">
                                {selectedExp.subtitle}
                            </p>
                        )}

                        <ul className="mt-4 space-y-2 text-sm md:text-base text-gray-200 list-disc list-inside">
                            {selectedExp.bullets.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        {selectedExp.stack && (
                            <p className="mt-5 text-xs md:text-sm text-purple-300">
                                Stack: <span className="font-semibold">{selectedExp.stack}</span>
                            </p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

export default Experience;
