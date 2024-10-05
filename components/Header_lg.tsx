// Header_lg.tsx

'use client'

import { FaPhoneAlt } from 'react-icons/fa'
import Link from 'next/link'

export default function Header_lg() {
  return (
    <>
      <header className="flex justify-between items-center p-4 shadow-lg bg-white text-[#081C3A] border-b-2 border-gray-200">
        <div className="flex text-3xl font-bold">
          <h1 className="text-green-600">Hydro</h1>
          <span className="text-gray-800">Edge</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-green-500 transition duration-300 ease-in-out">Inicio</Link>
          <Link href="/nosotros" className="hover:text-green-500 transition duration-300 ease-in-out">Nosotros</Link>
          <Link href="/queOfrecemos" className="hover:text-green-500 transition duration-300 ease-in-out">Qué ofrecemos</Link>
          <Link href="/informacion" className="hover:text-green-500 transition duration-300 ease-in-out">Información</Link>
          <Link href="/blog" className="hover:text-green-500 transition duration-300 ease-in-out">Blog</Link>
          <Link href="/hablemos" className="hover:text-green-500 transition duration-300 ease-in-out">Hablemos</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-700 transition duration-300 ease-in-out shadow-md">Atención Personalizada</button>
          <div className="flex items-center space-x-2 text-green-600">
            <FaPhoneAlt />
            <span>098 858 535</span>
          </div>
        </div>
      </header>
    </>
  )
}
