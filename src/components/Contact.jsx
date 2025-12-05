import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="py-10 md:py-16"
      data-aos="fade-up"
    >
      {/* Título */}
      <div className="flex flex-col items-center mb-10">
       
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Contacto<span className="text-purple-400">.</span>
        </h2>
        <p className="mt-2 text-xs md:text-sm text-gray-400 text-center max-w-xl">
          Si tienes una oportunidad laboral, deseas colaborar en un proyecto o simplemente
          quieres ponerte en contacto conmigo, aquí tienes mis datos directos.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 items-start">
        {/* Texto principal */}
        <div
          className="rounded-3xl bg-[#07081a]/95 border border-purple-500/40 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_40px_rgba(88,28,135,0.45)] space-y-5"
          data-aos="fade-right"
        >
          <h3 className="text-lg md:text-xl font-semibold text-white">
            ¿Trabajamos juntos? 
          </h3>
          <p className="text-xs md:text-sm text-gray-300">
            Estoy abierto a oportunidades como desarrollador <span className="text-purple-300">backend</span> o
            <span className="text-purple-300"> full-stack</span>, así como a colaborar en proyectos personales o
            freelance relacionados con aplicaciones web, APIs y soluciones empresariales.
          </p>
          <p className="text-xs md:text-sm text-gray-300">
            Puedes contactarme directamente por correo o por teléfono. También puedes
            escribirme por LinkedIn o revisar mi trabajo en GitHub.
          </p>
          
        </div>

        {/* Datos de contacto */}
        <div
          className="rounded-3xl bg-[#07081a]/95 border border-purple-500/40 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_40px_rgba(88,28,135,0.45)] space-y-4"
          data-aos="fade-left"
        >
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 flex items-center justify-center text-lg">
              📧
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Email
              </span>
              <a
                href="ksolarte14@gmail.com" 
                className="text-sm md:text-base text-purple-200 hover:text-purple-400 transition"
              >
                ksolarte14@gmail.com
              </a>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 flex items-center justify-center text-lg">
              📱
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Teléfono / WhatsApp
              </span>
              <a
                href="tel:+584246777164"    
                className="text-sm md:text-base text-purple-200 hover:text-purple-400 transition"
              >
                +58 4246777164
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 flex items-center justify-center text-lg">
              💼
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/kevsolarte" // 👈 CAMBIA ESTO
                target="_blank"
                rel="noreferrer"
                className="text-sm md:text-base text-purple-200 hover:text-purple-400 transition"
              >
                linkedin.com/in/kevsolarte
              </a>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 flex items-center justify-center text-lg">
              🧑‍💻
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-gray-400">
                GitHub
              </span>
              <a
                href="https://github.com/kevsolarte"    
                target="_blank"
                rel="noreferrer"
                className="text-sm md:text-base text-purple-200 hover:text-purple-400 transition"
              >
                github.com/kevsolarte
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
