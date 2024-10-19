// HeroSection_1.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    '/lab1.webp', 
    '/lab2.webp', 
    '/app1.webp', 
    '/app2.webp', 
];

const phrases = [
  "Soluciones automatizadas para cultivos sostenibles y eficientes.",
  "Automatiza y optimiza tu cultivo hidropónico con tecnología avanzada.",
  "Innovación al alcance de tu huerto.",
  "Controla tu cultivo desde cualquier lugar con HydroEdge."
];

const PrimerSecc: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);

    return () => {
      clearInterval(phraseInterval);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-background-dark via-background-mid to-primary opacity-90">
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-gradient-to-br from-background-dark via-background-mid to-primary z-10 opacity-60 shadow-2xl"></div>
        <div className="w-1/2 relative">
          <Image
            src={images[currentImageIndex]}
            alt={
              currentImageIndex === 0 ? 'Laboratorio de trabajo 1' :
              currentImageIndex === 1 ? 'Laboratorio de trabajo 2' :
              currentImageIndex === 2 ? 'Aplicación móvil 1' :
              'Aplicación móvil 2'
            }
            fill
            className="transition-opacity duration-1000 object-cover"
          />
        </div>
      </div>
      <div className="relative z-20 flex items-center justify-start h-full px-16">
        <div className="text-white max-w-lg space-y-12 pb-24">
          <h2 className="text-5xl font-bold mb-4" aria-label="Cultiva mejor con HydroEdge">Cultiva mejor con HydroEdge</h2>
          <AnimatePresence mode="wait">
            <motion.p
              className="text-xl mb-8 min-h-[4rem]"
              initial={{ x: '-50%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '50%', opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              key={currentPhraseIndex}
            >
              {phrases[currentPhraseIndex]}
            </motion.p>
          </AnimatePresence>
          <Link href="/prueba" 
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300 ease-in-out ">
            Probar HydroEdge
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrimerSecc;
