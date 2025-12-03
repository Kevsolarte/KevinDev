import React from 'react';

const items = [
    {
        type: 'Título universitario',
        title: 'Ingeniería Informática',
        date: '2019 - 2024',
        place: 'Nombre de tu universidad',
        badgeLabel: 'Estado',
        badgeValue: 'Completado',
    },
    {
        type: 'Diplomado',
        title: 'Full Stack Developer',
        date: 'Año del diplomado',
        place: 'Nombre de la institución',
        badgeLabel: 'Duración',
        badgeValue: 'X meses',
    },
    {
        type: 'Curso',
        title: 'React: De 0 a Experto',
        date: 'Año de finalización',
        place: 'Udemy',
        badgeLabel: 'Plataforma',
        badgeValue: 'Udemy',
    },
];

function Education() {
    return (
        <section
            id="education"
            className="py-10 md:py-16"
            data-aos="fade-up"
        >
            <div className="flex flex-col items-center mb-10">
                <div className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-white">
                    <span className="text-purple-400 text-3xl">🎓</span>
                    <span>
                        Educacion <span className="text-purple-400">y Certificados</span>
                    </span>
                </div>
                <p className="mt-2 text-xs md:text-sm text-gray-400 text-center">
                    Mi formación académica y certificaciones más relevantes.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                {items.map((item, idx) => (
                    <article
                        key={item.title}
                        className="rounded-3xl border border-purple-500/40 bg-[#060516]/80 px-6 py-6 md:px-8 md:py-8 shadow-[0_0_40px_rgba(88,28,135,0.45)] flex flex-col justify-between"
                        data-aos="fade-up"
                        data-aos-delay={idx * 100}
                    >
                        <div className="space-y-2">
                            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">
                                {item.type}
                            </p>
                            <h3 className="text-lg md:text-xl font-semibold text-white">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-300">
                                {item.date}
                            </p>

                            <div className="flex items-center gap-2 mt-3">
                                <span className="text-purple-400 text-lg">🎓</span>
                                <span className="text-xs md:text-sm text-purple-300 font-semibold">
                                    {item.badgeLabel}: {item.badgeValue}
                                </span>
                            </div>
                        </div>

                        <p className="mt-5 text-xs md:text-sm text-gray-400">
                            {item.place}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Education;
