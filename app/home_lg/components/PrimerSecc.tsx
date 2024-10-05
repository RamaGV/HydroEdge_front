// PrimerSecc.tsx

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
    '/lab1.webp', // Imagen del laboratorio
    '/lab2.webp', // Otra imagen del laboratorio
    '/app1.webp', // Screenshot de la aplicación
    '/app2.webp', // Otro screenshot de la aplicación
  ];
  

const PrimerSecc: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Cambiar la imagen destacada cada 4 segundos
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Renderizar la imagen destacada
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Fondo dividido con imagen */}
            <div className="absolute inset-0 flex">
            {/* Parte izquierda con gradiente */}
            <div className="w-1/2 bg-gradient-to-br from-green-700 to-green-400 z-10 opacity-50 shadow-2xl"></div>
        
            {/* Parte derecha con la imagen */}
            <div className="w-1/2 relative">
                <Image
                src={images[currentImageIndex]}
                alt="Laboratorio de trabajo"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-1000" />
            </div>
        </div>

      {/* Contenido del hero */}
        <div className="relative z-10 flex items-center justify-start h-full px-16">
            <div className="text-white max-w-lg space-y-16 pb-24">
                <h2 className="text-5xl font-bold mb-4"> Cultivando el futuro de manera inteligente </h2>
                <p className="text-xl mb-8">
                    Soluciones automatizadas para cultivos sostenibles y eficientes. Lleva tu experiencia agrícola al siguiente nivel
                </p>
                <a href="#"
                    className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition">
                    Comenzar Ahora
                </a>
            </div>
        </div>
    </div>
    );
};

export default PrimerSecc;
