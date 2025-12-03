import React from 'react';
import Typewriter from './common/Typewriter.jsx';
import fondo from '../assets/Image/v1016-b-09.jpg';

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#040011]/85 via-[#040011]/90 to-[#040011]" />

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div
            className="flex-1 flex gap-4 items-start"
            data-aos="fade-right"
          >
            <div className="flex flex-col items-center mt-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <div className="w-1 h-32 bg-gradient-to-b from-purple-500 to-transparent" />
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-300">
                / Portafolio
              </p>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Hola, Soy{' '}
                <span className="text-purple-400">
                  Kevin lee
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl font-semibold">
                <span className="text-purple-400">
                  <Typewriter
                    words={[
                      'Full-Stack Developer',
                      'Front-End Developer',
                      'Back-End Developer',
                    ]}
                  />
                </span>
              </h2>

              <p className="max-w-xl text-gray-200 text-base md:text-lg">
                Bienvenido a mi portafolio. Soy Ingeniero Informático con casi dos años
                de experiencia en desarrollo web. En esta página obtendrás información
                sobre mí, mis proyectos y mi experiencia profesional.
              </p>
            </div>
          </div>

          <div
            className="flex-1 flex justify-center"
            data-aos="fade-left"
          >
            <div className="w-full max-w-md h-72 md:h-80 rounded-3xl bg-gradient-to-br from-purple-700/50 via-black/60 to-indigo-800/60 border border-purple-500/40 shadow-[0_0_40px_rgba(168,85,247,0.5)] flex items-center justify-center">
              <p className="text-gray-200 text-center px-6">
               
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
