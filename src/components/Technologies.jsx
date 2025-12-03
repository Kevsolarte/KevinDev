import React, { useState } from 'react';

const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'frontend', label: 'Front-end' },
    { id: 'backend', label: 'Back-end' },
    { id: 'devtools', label: 'DevTools' },
];

const skills = [
    {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        category: 'frontend',
    },
    {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        category: 'frontend',
    },
    {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        category: 'frontend',
    },
    {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        category: 'frontend',
    },
    {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
        category: 'frontend',
    },
    { name: 'SAP Fiori', icon: null, category: 'frontend' },
    { name: 'SAPUI5', icon: null, category: 'frontend' },
    {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        category: 'backend',
    },
    {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        category: 'backend',
    },
    { name: 'SAP CAP', icon: null, category: 'backend' },
    { name: 'Prisma', icon: null, category: 'backend' },
    {
        name: 'PostgreSQL',
        icon:
            'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        category: 'backend',
    },

    {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        category: 'devtools',
    },
    {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        category: 'devtools',
    },
    {
        name: 'VS Code',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        category: 'devtools',
    },
    { name: 'Postman', icon: null, category: 'devtools' },
];

function Technologies() {
    const [activeCategory, setActiveCategory] = useState('todos');

    const filteredSkills =
        activeCategory === 'todos'
            ? skills
            : skills.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="py-10 md:py-16" data-aos="fade-up">
            <div className="flex flex-col items-center mb-8">
                <h2 className="mt-1 text-3xl md:text-4xl font-extrabold text-white">
                    Stack<span className="text-purple-400">.</span>
                </h2>
                <p className="mt-2 text-xs md:text-sm text-gray-400 text-center max-w-xl">
                    Tecnologías que utilizo en el desarrollo de aplicaciones, desde el
                    frontend hasta el backend y las herramientas que uso en el día a día.
                </p>
            </div>

            <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>

                <div className="relative w-full max-w-xl">
                    <div className="flex justify-between text-xs md:text-sm text-gray-400">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                type="button"
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-2 pb-1 transition ${ activeCategory === cat.id
                                        ? 'text-purple-400 font-semibold'
                                        : 'hover:text-gray-200'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div className="mt-1 h-px w-full bg-gradient-to-r from-transparent via-purple-500/70 to-transparent" />
                    <div className="relative mt-[-2px] h-[2px]">
                        <div
                            className="absolute h-[2px] bg-purple-400 transition-all duration-300 rounded-full"
                            style={{
                                width: `${ 100 / categories.length }%`,
                                left: `${ (categories.findIndex((c) => c.id === activeCategory) * 100) /
                                    categories.length
                                    }%`,
                            }}
                        />
                    </div>
                </div>
            </div>

            <div
                className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
                data-aos="fade-up"
                data-aos-delay="150"
            >
                {filteredSkills.map((skill, idx) => (
                    <div
                        key={skill.name}
                        className="flex items-center gap-3 rounded-2xl bg-[#07081a]/90 border border-purple-500/25 px-3 py-2.5 md:px-4 md:py-3 shadow-[0_0_30px_rgba(88,28,135,0.35)]"
                        data-aos="zoom-in"
                        data-aos-delay={idx * 40}
                    >
                        <div className="flex items-center justify-center">
                            {skill.icon ? (
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    loading="lazy"
                                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                                />
                            ) : (
                                <div className="w-8 h-8 md:w-9 md:h-9 rounded-xl border border-purple-500/40 flex items-center justify-center text-[11px] md:text-xs font-bold text-purple-100">
                                    {skill.name[0]}
                                </div>
                            )}
                        </div>

                        <span className="text-[11px] md:text-sm text-gray-100 font-medium">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Technologies;
