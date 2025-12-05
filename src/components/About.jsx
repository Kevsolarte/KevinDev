import React from 'react';
import profile from '../assets/Image/Imagen de WhatsApp 2025-12-01 a las 17.46.36_1a030947.jpg';


function About() {
    return (
        <section
            id="about"
            className="py-10 md:py-16"
            data-aos="fade-up"
        >
            <div className="flex flex-col items-center mb-10">
                <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-300 ">
                    Sobre mí
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                    Overview<span className="text-purple-400">.</span>
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                <div
                    className="flex flex-col items-center"
                    data-aos="fade-right"
                >
                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 p-[3px] shadow-[0_0_60px_rgba(168,85,247,0.7)]">
                        <img
                            src={profile}
                            alt="Foto de perfil"
                            className="w-full h-full rounded-full object-cover bg-[#040011]"
                        />
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <a
                            href="../../public/Kevin solarte cv Fullstack.pdf" 
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
                        >
                            Currículum
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kevsolarte/"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-2 rounded-full bg-[#131826] text-sm font-semibold text-white border border-blue-500/60 hover:bg-blue-600/70 transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Kevsolarte"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-2 rounded-full bg-[#0b0f1a] text-sm font-semibold text-gray-200 border border-gray-500/60 hover:bg-gray-800 transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                <div
                    className="flex-1 space-y-4 text-gray-200 text-sm md:text-base"
                    data-aos="fade-left"
                >
                    <p>
                        🎓 Soy <span className="font-semibold text-purple-300">Ingeniero Informático</span> con
                        alrededor de dos años de experiencia en el desarrollo{' '}
                        <span className="font-semibold">back-end</span> y{' '}
                        <span className="font-semibold">full-stack</span>, trabajando con
                        tecnologías modernas del ecosistema JavaScript y bases de datos relacionales.
                    </p>

                    <p>
                        📚 Actualmente estoy reforzando mis conocimientos mediante la creación de{' '}
                        <span className="font-semibold">proyectos personales</span>, explorando nuevas
                        herramientas, buenas prácticas y patrones de arquitectura que me permitan seguir
                        creciendo como desarrollador.
                    </p>

                    <p>
                        💻 Disfruto desarrollar tanto desde el <span className="font-semibold">frontend</span>{' '}
                        como desde el <span className="font-semibold">backend</span>, siempre priorizando la{' '}
                        <span className="font-semibold">calidad del código</span>, la mantenibilidad y una
                        experiencia de usuario clara y consistente.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
