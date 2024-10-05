'use client'

import { FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function Header_lg() {
  return (
    <>
      <header className="flex justify-between items-center p-6 shadow-lg bg-[#0A2540] text-white border-b-2 border-gray-800">
        <div className="flex text-4xl font-bold">
          <h1 className="text-green-500">Hydro</h1>
          <span className="text-gray-300">Edge</span>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-green-500 transition duration-300 ease-in-out">Inicio</Link>
          <Link href="/nosotros" className="hover:text-green-500 transition duration-300 ease-in-out">Sobre mí</Link>
          <Link href="/queOfrecemos" className="hover:text-green-500 transition duration-300 ease-in-out">Qué ofrecemos</Link>
          <Link href="/informacion" className="hover:text-green-500 transition duration-300 ease-in-out">Información</Link>
          <Link href="/contacto" className="hover:text-green-500 transition duration-300 ease-in-out">Contacto</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-6">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition duration-300 ease-in-out shadow-md">Atención Personalizada</button>
          <div className="flex items-center space-x-2 text-green-400">
            <FaPhoneAlt />
            <span>098 858 535</span>
          </div>
        </div>
      </header>
    </>
  )
}
