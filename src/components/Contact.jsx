import React from 'react';

function Contact() {
    return (
        <section
            id="contact"
            className="py-10 md:py-16"
            data-aos="fade-up"
        >
            <div className="flex flex-col items-center mb-10">
               
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                    Contacto<span className="text-purple-400">.</span>
                </h2>
                <p className="mt-2 text-xs md:text-sm text-gray-400 text-center max-w-xl">
                    ¿Te gustaría colaborar en un proyecto, tienes una oportunidad laboral o
                    simplemente quieres saludar? Déjame un mensaje y te responderé lo antes posible.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-[1.1fr,1.2fr] items-start">
                <div
                    className="rounded-3xl bg-[#07081a]/95 border border-purple-500/40 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_40px_rgba(88,28,135,0.45)] space-y-5"
                    data-aos="fade-right"
                >
                    <h3 className="text-lg md:text-xl font-semibold text-white">
                        Hablemos 🚀
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300">
                        Estoy abierto a oportunidades como desarrollador backend o full-stack,
                        así como a colaborar en proyectos interesantes relacionados con
                        aplicaciones web, APIs o soluciones empresariales.
                    </p>

                    <div className="space-y-3 text-xs md:text-sm text-gray-200">
                        <div>
                            <p className="font-semibold text-purple-300">Email</p>
                            <p>tucorreo@ejemplo.com</p> 
                        </div>
                        <div>
                            <p className="font-semibold text-purple-300">Ubicación</p>
                            <p>Tu ciudad, Tu país</p>
                        </div>
                        <div>
                            <p className="font-semibold text-purple-300">Redes</p>
                            <div className="flex flex-wrap gap-3 mt-1 text-xs md:text-sm">
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline underline-offset-4 text-gray-200 hover:text-purple-300 transition"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline underline-offset-4 text-gray-200 hover:text-purple-300 transition"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="pt-2 text-[11px] text-gray-500">
                        También puedes contactarme directamente por correo y compartir el
                        enlace a tu proyecto, descripción del puesto o cualquier detalle relevante.
                    </p>
                </div>

                <div
                    className="rounded-3xl bg-[#07081a]/95 border border-purple-500/40 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_40px_rgba(88,28,135,0.45)]"
                    data-aos="fade-left"
                >
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-4">
                        Envíame un mensaje
                    </h3>

                    <form className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="name"
                                    className="text-xs md:text-sm text-gray-200"
                                >
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full rounded-xl bg-[#050516] border border-purple-500/30 focus:border-purple-400 focus:outline-none text-xs md:text-sm text-gray-100 px-3 py-2.5 placeholder:text-gray-500"
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="email"
                                    className="text-xs md:text-sm text-gray-200"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    className="w-full rounded-xl bg-[#050516] border border-purple-500/30 focus:border-purple-400 focus:outline-none text-xs md:text-sm text-gray-100 px-3 py-2.5 placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="subject"
                                className="text-xs md:text-sm text-gray-200"
                            >
                                Asunto
                            </label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Motivo del mensaje"
                                className="w-full rounded-xl bg-[#050516] border border-purple-500/30 focus:border-purple-400 focus:outline-none text-xs md:text-sm text-gray-100 px-3 py-2.5 placeholder:text-gray-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="message"
                                className="text-xs md:text-sm text-gray-200"
                            >
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Cuéntame brevemente en qué puedo ayudarte..."
                                className="w-full rounded-xl bg-[#050516] border border-purple-500/30 focus:border-purple-400 focus:outline-none text-xs md:text-sm text-gray-100 px-3 py-2.5 placeholder:text-gray-500 resize-none"
                            />
                        </div>

                        <div className="pt-2">
                            <button
                                type="button" 
                                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-purple-500 hover:bg-purple-600 text-white text-xs md:text-sm font-semibold shadow-[0_0_25px_rgba(168,85,247,0.7)] transition"
                            >
                                Enviar mensaje
                            </button>
                        </div>

                    
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
