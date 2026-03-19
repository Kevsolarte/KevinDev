import React, { useEffect, useState, useCallback } from 'react';
import Lenis from 'lenis';
import About from './components/About'; 
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const [introFinished, setIntroFinished] = useState(false);

    const handleIntroComplete = useCallback(() => setIntroFinished(true), []);

    useEffect(() => {
        if (!introFinished) return;

        // Scroll optimizado: lerp más alto = menos frames = menos lag en el carrusel horizontal
        const lenis = new Lenis({
            lerp: 0.08,    
            wheelMultiplier: 1.0, 
            touchMultiplier: 1.2,  
            smoothWheel: true,
            smoothTouch: false,
            syncTouch: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, [introFinished]);

    return (
        <div className="bg-[#050505] text-white selection:bg-[#2563EB] selection:text-white min-h-screen">
            <main className="relative z-10 w-full">
                <About onIntroComplete={handleIntroComplete} />
                
                {/* RESTO DE SECCIONES (Ocultas hasta que termine la intro) */}
                <AnimatePresence>
                    {introFinished && (
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative z-10 w-full flex flex-col"
                        >
                            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12">
                                <Experience />
                            </div>

                            <div className="w-full bg-[#050505]">
                                <Projects />
                            </div>

                            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-12 pt-12 pb-32">
                                <Contact />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
}

export default App;
