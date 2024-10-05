// home_lg.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Header_lg from '@/components/Header_lg';
import Image from 'next/image';

const images = [
  '/lab1.webp', // Imagen del laboratorio
  '/lab2.webp', // Otra imagen del laboratorio
  '/app1.webp', // Screenshot de la aplicación
  '/app2.webp', // Otro screenshot de la aplicación
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
    <>
    <div className="min-h-screen bg-[#081C3A] text-white font-sans">
      {/* Header */}
      <Header_lg />

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
    </>
  );
};

export default Home_lg;
