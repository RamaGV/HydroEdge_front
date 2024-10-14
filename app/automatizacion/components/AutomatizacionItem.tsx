// components/AutomatizacionItem.tsx

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface AutomatizacionItemProps {
  icon: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const fadeInVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const AutomatizacionItem: React.FC<AutomatizacionItemProps> = ({ icon, imageSrc, imageAlt, title, description }) => {
  return (
    <motion.div
        className="flex flex-col lg:flex-row items-center gap-16 
                   backdrop-blur-3xl bg-black/30 p-8 rounded-3xl w-full max-w-5xl mx-auto"
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
    >
        <Image src={imageSrc} alt={imageAlt} width={400} height={240} className="rounded-lg shadow-lg" />
        <div className="flex flex-col items-center items-start">
            <div className="flex items-center justify-center m-4 p-4 text-center opacity-90">
                {icon}
                <h3 className="text-2xl font-bold text-green-400 mb-4 ml-4">{title}</h3>
            </div>
            <p className="text-lg text-gray-300 text-center">{description}</p>
        </div>
    </motion.div>
  );
};

export default AutomatizacionItem;