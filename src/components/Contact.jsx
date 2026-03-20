import React, { useState } from 'react';
import { motion } from 'framer-motion';

const contactMethods = [
    {
        id: 'gmail',
        label: 'Gmail',
        tag: '// EMAIL_DIRECT',
        value: 'ksolarte14@gmail.com',
        action: 'mailto:ksolarte14@gmail.com',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
        ),
        cta: '[ ENVIAR EMAIL ]',
        copyable: true
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        tag: '// DIRECT_MESSAGE',
        value: '+58 424 677 7164',
        action: 'https://wa.me/584246777164?text=Hola%20Kevin%2C%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte.',
        icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
        ),
        cta: '[ ABRIR CHAT ]',
        copyable: false
    }
];

function Contact() {
    const [copied, setCopied] = useState(null);

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section id="contacto" className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute top-0 -right-20 font-archivo text-[25vw] leading-none opacity-[0.015] select-none pointer-events-none uppercase tracking-tighter">
                CONTACT
            </div>

            <div className="relative z-10 flex flex-col gap-12 md:gap-16">
                
                <div className="flex flex-col gap-4">
                    <span className="font-mono text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.4em]">
                        // COMMUNICATION_PROTOCOL
                    </span>
                    <h2 className="text-4xl md:text-7xl lg:text-8xl font-archivo leading-[0.85] tracking-tighter uppercase text-left text-white">
                        HABLEMOS <br />
                        <span className="text-[#2563EB] italic">DE TRABAJO_</span>
                    </h2>
                    <p className="font-space text-sm text-gray-500 max-w-lg leading-relaxed mt-2">
                        ¿Tienes un proyecto, una oportunidad laboral o quieres explorar una colaboración? Elige el canal que prefieras y te respondo en menos de 24h.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactMethods.map((method) => (
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#080808] border border-white/5 p-8 flex flex-col justify-between gap-8 group hover:border-[#2563EB]/20 transition-colors duration-500 relative overflow-hidden"
                        >
                            <div className="absolute -bottom-6 -right-4 opacity-[0.015] scale-[4] text-white pointer-events-none select-none">
                                {method.icon}
                            </div>

                            <div className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="text-[#2563EB]">{method.icon}</div>
                                    <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest">
                                        {method.tag}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">
                                        {method.label}
                                    </span>
                                    <span className="font-archivo text-2xl md:text-3xl text-white tracking-tight">
                                        {method.value}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 relative z-10 pt-4 border-t border-white/5">
                                <a
                                    href={method.action}
                                    target={method.id === 'whatsapp' ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className="font-mono text-[10px] text-[#2563EB] hover:text-white uppercase tracking-widest transition-colors"
                                >
                                    {method.cta}
                                </a>

                                {method.copyable && (
                                    <button
                                        onClick={() => handleCopy(method.value, method.id)}
                                        className="ml-auto font-mono text-[9px] text-white/20 hover:text-white/60 uppercase tracking-widest transition-colors flex items-center gap-2"
                                    >
                                        {copied === method.id ? (
                                            <span className="text-green-500">[ COPIADO ✓ ]</span>
                                        ) : (
                                            '[ COPIAR ]'
                                        )}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/5 pt-8">
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Ubicación</span>
                        <span className="font-mono text-sm text-white/60">Maracaibo, Venezuela — Remote</span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Disponibilidad</span>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="font-mono text-sm text-green-400">Disponible Ahora</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Respuesta</span>
                        <span className="font-mono text-sm text-white/60">{"< 24h"}</span>
                    </div>
                </div>

                {/*FOOTER*/}
                <div className="border-t border-white/5 pt-12 pb-4 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <h3 className="text-3xl md:text-5xl font-archivo font-black tracking-tighter uppercase leading-none">
                            KEVIN<span className="text-[#2563EB]">.</span>DEV
                        </h3>
                        <div className="flex gap-8 font-mono text-[9px] text-white/20 tracking-[0.3em] uppercase">
                            <span>© 2026 ALL_RIGHTS_RESERVED</span>
                            <span className="hidden md:inline">DESIGNED_BY_VKS</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 font-mono text-[9px] text-white/30 uppercase tracking-widest">
                        <a href="https://linkedin.com/in/kevsolarte" target="_blank" rel="noreferrer" className="hover:text-[#2563EB] transition-colors">LinkedIn</a>
                        <a href="https://github.com/kevsolarte" target="_blank" rel="noreferrer" className="hover:text-[#2563EB] transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
