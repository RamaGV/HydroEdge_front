// components/InfoSection.tsx

import React from 'react';
import { FaBook, FaMicrochip, FaCogs, FaClipboardCheck } from 'react-icons/fa';
import InfoCard from './InfoCard';

const InfoSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto mb-16">
      <h1 className="text-4xl font-bold mb-6 text-green-500">Información del Proyecto</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <InfoCard
          icon={<FaBook className="text-green-400 text-3xl" />}
          title="Documentación General"
          description="Accede a la documentación completa donde se detallan las etapas del proyecto, las tareas en curso, y el manual del sistema."
          link="https://www.notion.so/ramagvr23/Desarrollo-y-Documentaci-n-del-Proyecto-HydroEdge-687363db18464821afbb84e0fd84535d"
        />
        <InfoCard
          icon={<FaMicrochip className="text-green-400 text-3xl" />}
          title="Mecatrónica"
          description="Áreas clave: Arquitectura de Comunicaciones, Automatización, Estructura 3D, y Electrónica. Cada una de estas áreas abarca la infraestructura y el diseño del sistema HydroEdge."
        />
        <InfoCard
          icon={<FaCogs className="text-green-400 text-3xl" />}
          title="Programación"
          description="Incluye Firmware IIoT, Frontend, Backend, y Testing. Estas secciones se enfocan en el desarrollo del software para la operación y monitoreo del sistema."
        />
        <InfoCard
          icon={<FaClipboardCheck className="text-green-400 text-3xl" />}
          title="Áreas del Proyecto"
          description="El proyecto se divide en 6 áreas principales: Mecatrónica y Programación, cada una con sus respectivas subcategorías que aseguran una integración eficiente y completa del sistema."
        />
      </div>
      <p className="text-lg leading-relaxed">
        Nuestro proyecto <span className="text-green-400 font-semibold">HydroEdge</span> está diseñado para integrar la automatización y la inteligencia tecnológica, logrando un proceso agrícola más eficiente, preciso y escalable. Accede a la documentación completa para conocer cada detalle técnico de nuestro desarrollo.
      </p>
    </section>
  );
};

export default InfoSection;