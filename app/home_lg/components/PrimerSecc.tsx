// HeroSection.tsx

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fondo dividido con imagen */}
      <div className="absolute inset-0 flex">
        {/* Parte izquierda con gradiente */}
        <div className="w-1/2 bg-gradient-to-br from-green-700 to-green-400"></div>
        
        {/* Parte derecha con la imagen */}
        <div className="w-1/2 relative">
          <img
            src="/path/to/your/image.jpg"
            alt="Laboratory background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contenido del hero */}
      <div className="relative z-10 flex items-center justify-start h-full px-16">
        <div className="text-white max-w-lg">
          <h2 className="text-5xl font-bold mb-4">
            Laboratory for testing and medical research
          </h2>
          <p className="text-xl mb-8">
            High quality laboratory services
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
