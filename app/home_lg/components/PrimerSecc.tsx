import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
    '/lab1.webp', 
    '/lab2.webp',
    '/app1.webp', 
    '/app2.webp',
];

const PrimerSecc: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#081C3A] to-green-500">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gradient-to-br from-[#0A2540] via-[#081C3A] to-green-500 z-10 opacity-60 shadow-2xl"></div>
        <div className="w-1/2 relative">
          <Image
            src={images[currentImageIndex]}
            alt="Laboratorio de trabajo"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-1000"
          />
        </div>
      </div>
      <div className="relative z-20 flex items-center justify-start h-full px-16">
        <div className="text-white max-w-lg space-y-12 pb-24">
          <h2 className="text-5xl font-bold mb-4">Cultivando el futuro de manera inteligente</h2>
          <p className="text-xl mb-8">
            Soluciones automatizadas para cultivos sostenibles y eficientes. Lleva tu experiencia agrícola al siguiente nivel.
          </p>
          <a href="#"
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 ease-in-out">
            Comenzar Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrimerSecc;
