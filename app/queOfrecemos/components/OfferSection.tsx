// components/OfferSection.tsx

import React from 'react';
import { FaLeaf, FaSatelliteDish, FaCog, FaBolt } from 'react-icons/fa';

const OfferSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto mb-16">
      <h1 className="text-4xl font-bold mb-6 text-green-500">¿Qué Ofrecemos?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#0A2540] rounded-lg p-6 shadow-lg flex items-start space-x-4">
          <FaSatelliteDish className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Tecnología IoT y Control Remoto</h3>
            <p className="text-base text-gray-300">
              Utilizamos tecnología IoT y comunicación en tiempo real mediante MQTT para que tengas el control absoluto de tu cultivo desde cualquier lugar.
            </p>
          </div>
        </div>
        <div className="bg-[#0A2540] rounded-lg p-6 shadow-lg flex items-start space-x-4">
          <FaLeaf className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Gestión Integral y Sostenibilidad</h3>
            <p className="text-base text-gray-300">
              Nuestro sistema optimiza el uso del agua y la energía, asegurando el máximo rendimiento y reduciendo el impacto ambiental.
            </p>
          </div>
        </div>
        <div className="bg-[#0A2540] rounded-lg p-6 shadow-lg flex items-start space-x-4">
          <FaCog className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Sensores de Última Generación</h3>
            <p className="text-base text-gray-300">
              Sensores avanzados que monitorean pH, temperatura, humedad, y conductividad eléctrica para asegurar las mejores condiciones para tus cultivos.
            </p>
          </div>
        </div>
        <div className="bg-[#0A2540] rounded-lg p-6 shadow-lg flex items-start space-x-4">
          <FaBolt className="text-green-400 text-3xl" />
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Interfaz Amigable</h3>
            <p className="text-base text-gray-300">
              Controla todo desde una interfaz diseñada con React, intuitiva y fácil de usar, para mejorar tu experiencia y productividad.
            </p>
          </div>
        </div>
      </div>
      <p className="text-lg leading-relaxed">
        Nuestro objetivo en <span className="text-green-400 font-semibold">HydroEdge</span> es empoderar a los agricultores con herramientas que integren la automatización y la inteligencia tecnológica, haciendo que el proceso agrícola sea más intuitivo, preciso y escalable. Estamos comprometidos con el desarrollo de soluciones que impulsan la agricultura del futuro.
      </p>
    </section>
  );
};

export default OfferSection;