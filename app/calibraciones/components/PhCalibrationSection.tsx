// components/PhCalibrationSection.tsx

import React from 'react';
import PhCalibrationItem from './PhCalibrationItem';

const PhCalibrationSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center 
                        text-white p-8 text-center font-sans ">
      <h1 className="text-4xl font-bold mb-10 text-green-500">Calibración de Sensores</h1>
      <div className="w-full max-w-6xl space-y-16 mb-16">
        <PhCalibrationItem
          imageSrc="/vista_lg/calibraciones/materiales.webp"
          imageAlt="Materiales para Calibración de pH"
          title="Materiales Utilizados"
          description="Utilizamos soluciones buffer de pH 4.01, 7.00 y 9.21, junto con varios sensores de pH, para lograr una calibración precisa y asegurarnos de que el monitoreo de pH sea confiable."
        />
        <PhCalibrationItem
          imageSrc="/vista_lg/calibraciones/proceso.webp"
          imageAlt="Proceso de Calibración de pH"
          title="Proceso de Calibración"
          description="El proceso de calibración se realiza en tres puntos usando las soluciones buffer. Cada sensor se enjuaga, se sumerge en las soluciones, y se ajusta para garantizar la precisión."
        />
        <PhCalibrationItem
          imageSrc="/vista_lg/calibraciones/resultados.webp"
          imageAlt="Resultados y Registro de Calibración"
          title="Resultados y Registro"
          description="Los datos de calibración se registran y almacenan para su uso futuro. Esto asegura que podamos monitorear y ajustar el pH de manera continua según las necesidades del cultivo."
        />
      </div>
    </section>
  );
};

export default PhCalibrationSection;