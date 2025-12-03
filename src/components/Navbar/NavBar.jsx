import React from 'react'

function NavBar() {
    return (
        <div className='fixed top-0 left-0 w-full z-50'>

        <nav className="flex justify-evenly items-center p-4 081b29 text-white shadow-lg">
            <div>
                <strong className="text-2xl font-bold">KevDev</strong>
               
            </div>
            <ul className="hidden md:flex gap-14">
                <li><a href="/" className="hover:text-blue-200">Sobre mi</a></li>
                <li><a href="/contact" className="hover:text-blue-200">Habilidades</a></li>
                <li><a href="/about" className="hover:text-blue-200">Proyectos</a></li>
                <li><a href="/contact" className="hover:text-blue-200">Experiencia</a></li>
                <li><a href="/contact" className="hover:text-blue-200">Contacto</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar