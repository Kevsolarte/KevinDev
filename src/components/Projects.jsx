import React from 'react';
import cinemovieImg from '../assets/Image/Captura CineMovie!.png';
import servicioyaImg from '../assets/Image/Captura ServicioYa.png';

const projects = [
    {
        id: 'cinemovie',
        title: 'CineMovie!',
        type: 'Frontend',
        description:
            'Aplicación web para explorar películas y series usando la API de TMDB. Incluye buscador, vistas detalladas y contenido dinámico basado en datos en tiempo real.',
        tech: ['React', 'Tailwind CSS', 'TMDB API'],
        image: cinemovieImg,
        demo: 'https://tu-demo-cinemovie.com',
        github: 'https://github.com/Kevsolarte/CineMovie',
    },
    {
        id: 'servicioya',
        title: 'ServicioYA',
        type: 'Full-stack',
        description:
            'Plataforma tipo marketplace donde usuarios pueden encontrar servicios de estética, salud, hogar y más. Desarrollada como proyecto full-stack con foco en experiencia de usuario y arquitectura limpia.',
        tech: ['React', 'TypeScript', 'Express.js', 'Prisma', 'PostgreSQL'],
        image: servicioyaImg,
        demo: 'https://tu-demo-servicioya.com',
        github: 'https://github.com/Kevsolarte/ServicioYa',
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="py-10 md:py-16"
            data-aos="fade-up"
        >
            <div className="flex flex-col items-center mb-10">
               
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                    Proyectos<span className="text-purple-400">.</span>
                </h2>
                <p className="mt-2 text-xs md:text-sm text-gray-400 text-center max-w-xl">
                    Algunos de los proyectos personales con los que he reforzado mis
                    conocimientos en desarrollo frontend y full-stack.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <article
                        key={project.id}
                        className="rounded-3xl bg-[#07081a]/95 border border-purple-500/40 shadow-[0_0_40px_rgba(88,28,135,0.45)] overflow-hidden flex flex-col"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                    >
                        <div className="relative h-40 md:h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                            <div className="absolute left-4 bottom-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 text-[11px] font-semibold text-purple-100 border border-purple-300/40 backdrop-blur-sm">
                                    {project.type}
                                </span>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col px-5 py-5 md:px-6 md:py-6">
                            <h3 className="text-lg md:text-xl font-semibold text-white">
                                {project.title}
                            </h3>
                            <p className="mt-2 text-xs md:text-sm text-gray-300">
                                {project.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-[#100b2a] border border-purple-500/40 text-purple-200"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 flex gap-3">
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center text-xs md:text-sm px-3 py-2 rounded-full bg-purple-500 hover:bg-purple-600 text-white font-semibold transition"
                                    >
                                        Ver demo
                                    </a>
                                )}

                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 text-center text-xs md:text-sm px-3 py-2 rounded-full border border-purple-400 hover:bg-white/5 text-purple-200 font-semibold transition"
                                    >
                                        Código
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Projects;
