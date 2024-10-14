// components/AutomatizacionSection.tsx

import React from 'react';
import { FaLeaf, FaThermometerHalf, FaLightbulb } from 'react-icons/fa';
import AutomatizacionItem from './AutomatizacionItem';

const AutomatizacionSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center 
                        text-white p-8 text-center font-sans">
      <h1 className="text-4xl font-bold mb-10 text-green-500">Automatización del Proyecto</h1>
      <div className="w-full max-w-6xl space-y-16 mb-16">
        <AutomatizacionItem
          icon={<FaLeaf className="text-green-400 text-5xl mb-6" />}
          imageSrc="/vista_lg/automatizacion/dosificacion_nutrientes.webp"
          imageAlt="Dosificación Automática de Nutrientes"
          title="Dosificación Automática de Nutrientes"
          description="Utilizamos bombas automáticas para dosificar nutrientes en el agua de cultivo según el nivel de electroconductividad (EC), ajustándolo para cada etapa de desarrollo de las plantas de tomate."
        />
        <AutomatizacionItem
          icon={<FaThermometerHalf className="text-green-400 text-5xl mb-6" />}
          imageSrc="/vista_lg/automatizacion/actuadores_vinculados.webp"
          imageAlt="Control de Temperatura y pH"
          title="Control de Temperatura y pH"
          description="Sensores monitorean la temperatura y el pH del agua, activando celdas Peltier, resistencias eléctricas, o bombas de dosificación para mantener los niveles óptimos según los umbrales esperados almacenados en nuestra base de datos."
        />
        <AutomatizacionItem
          icon={<FaLightbulb className="text-green-400 text-5xl mb-6" />}
          imageSrc="/vista_lg/automatizacion/luces.webp"
          imageAlt="Control de Luz y Aire"
          title="Control de Luz y Aire"
          description="Las bombas de aire y las luces se encuentran ajustadas por un dimmer y se encienden cierta cantidad de horas de manera paulatina para no estresar a la planta, simulando ser la luz del sol."
        />
      </div>
      <p className="text-xl leading-relaxed max-w-4xl">
        La automatización en <span className="text-green-400 font-semibold">HydroEdge</span> asegura que los cultivos reciban las condiciones óptimas de manera constante, reduciendo la intervención manual y aumentando la eficiencia y sostenibilidad del proceso.
      </p>
    </section>
  );
};

export default AutomatizacionSection;