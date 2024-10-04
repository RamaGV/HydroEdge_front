// home_lg.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/public/logo.webp'; // Cambia el path a la ruta correcta de tu logo

const images = [
  '/public/lab1.jpg', // Imagen del laboratorio
  '/public/lab2.jpg', // Otra imagen del laboratorio
  '/public/app1.png', // Screenshot de la aplicación
  '/public/app2.png', // Otro screenshot de la aplicación
];

const Home_lg: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambiar la imagen destacada cada 4 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#081C3A] text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} />
          <h1 className="ml-2 text-2xl font-bold">Laboix</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-green-400">Home</a>
          <a href="#" className="hover:text-green-400">About</a>
          <a href="#" className="hover:text-green-400">Services</a>
          <a href="#" className="hover:text-green-400">Pages</a>
          <a href="#" className="hover:text-green-400">Blog</a>
          <a href="#" className="hover:text-green-400">Contact</a>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-white text-[#081C3A] px-4 py-2 rounded font-bold">Appointment</button>
          <div className="flex items-center space-x-2 text-green-400">
            <FaPhoneAlt />
            <span>+92 3800 8060</span>
          </div>
        </div>
      </header>

      {/* Sección Destacada */}
      <section className="relative flex flex-col md:flex-row items-center p-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-green-400 text-xl mb-4">High quality laboratory services</h2>
          <h1 className="text-5xl font-bold mb-6">Laboratory for testing and medical research</h1>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-600">Get Started</button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <Image
            src={images[currentImageIndex]}
            alt="Laboratory Image"
            className="w-full rounded-lg shadow-lg"
            width={600}
            height={400}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-green-500 opacity-20 pointer-events-none" />
        </div>
      </section>
    </div>
  );
};

export default Home_lg;
