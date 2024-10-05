'use client'

import Image from 'next/image'
import logo from '@/public/logo.webp'
import { FaPhoneAlt } from 'react-icons/fa'


export default function Header_lg() {

    return (
        <>
            <header className="flex justify-between items-center p-4 shadow-md 
                bg-[#FFFFFF] text-[#081C3A]">
                <div className="flex items-center">
                    <Image src={logo} alt="Logo" width={50} height={50} />
                    <h1 className="ml-2 text-2xl font-bold">Laboix</h1>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-green-400">Inicio</a>
                    <a href="#" className="hover:text-green-400">Nosotros</a>
                    <a href="#" className="hover:text-green-400">Qué ofrecemos</a>
                    <a href="#" className="hover:text-green-400">Información</a>
                    <a href="#" className="hover:text-green-400">Blog</a>
                    <a href="#" className="hover:text-green-400">Hablemos</a>
                </nav>

                <div className="hidden md:flex items-center space-x-4">
                    <button className="bg-white text-[#081C3A] px-4 py-2 rounded font-bold">Atención Personalizada</button>
                    <div className="flex items-center space-x-2 text-green-400">
                    <FaPhoneAlt />
                    <span> 098 858 535 </span>
                    </div>
                </div>
            </header>
        </>
    )
}
