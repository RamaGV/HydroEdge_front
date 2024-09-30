/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

interface SensorProps {
  medida_actual: number;
  umbral_minimo: number;
  umbral_maximo: number;
  label: string;
  unit: string;
  imagen: string;
  modelo: string;
  fabricante: string;
}

const SensorCard: React.FC<SensorProps> = ({
  medida_actual,
  umbral_minimo,
  umbral_maximo,
  label,
  unit,
  imagen,
  modelo,
  fabricante,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const percentage = umbral_maximo !== 0 ? (medida_actual / umbral_maximo) * 100 : 0;
  
  // Determinar el color en base a los umbrales
  let pathColor = '#00C853'; // Verde por defecto
  if (medida_actual < umbral_minimo || medida_actual > umbral_maximo) {
    pathColor = '#FF5252'; // Rojo si está fuera de los umbrales
  }
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center perspective" onClick={handleCardClick}>
        {!isFlipped ? (
          <motion.div
            key="front"
            className="flip-card flip-card-inner"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.5 }}
          >
            {/* Cara frontal */}
            <div className="flex flex-col items-center justify-between
              bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md"
              style={{ height: '180px', width: '90px' }}>
              {/* Contenido de la cara frontal */}
                <div>
                  <CircularProgressbar
                    value={percentage}
                    maxValue={100}
                    styles={buildStyles({
                      rotation: 0.75,
                      strokeLinecap: 'round',
                      trailColor: '#e0e0e0',
                      pathColor: pathColor,
                      textColor: '#000',
                    })}
                    circleRatio={0.75}
                  />
                <p className="font-semibold text-gray-800 dark:text-gray-200 pt-2"> {medida_actual} {unit} </p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 pt-2">{label}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="flip-card flip-card-inner"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.5 }}
          >
            {/* Cara trasera */}
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              style={{ height: '180px', width: '90px' }}>
              {/* Contenido de la cara trasera */}

              <div className='flex flex-col items-center justify-between w-full h-full'>
                <div className="relative w-full h-1/2">
                  <Image src="/planta_1.png" alt={label} layout="fill" objectFit="cover"/>
                </div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{modelo}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 pb-2">{fabricante}</p>
              </div>
            </div>
          </motion.div>
        )}
    </div>
  );
};

export default SensorCard;
