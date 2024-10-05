// components/AboutSection.tsx
import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto mb-16 flex flex-col md:flex-row items-center md:items-start md:space-x-16">
      {/* Imagen Personal */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0 flex justify-center mt-12">
        <Image
          src="/professional_photo.jpg"
          alt="Ramiro Vázquez"
          className="rounded-lg shadow-xl"
          width={400}
          height={400}
        />
      </div>

      {/* Texto de la descripción personal */}
      <div className="w-full md:w-2/3 space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-green-500">Sobre Mí</h1>
        <p className="text-lg leading-relaxed mb-4">
          Soy Ramiro Vázquez, estudiante de Ingeniería en Mecatrónica, con formación previa en Ingeniería en Sistemas en la Universidad ORT. Mi experiencia en sistemas me permite tener una visión más amplia y estratégica al abordar proyectos de ingeniería. Actualmente, estoy aplicando mis conocimientos de programación en el ámbito de la mecatrónica, un área que me apasiona y en la que me estoy especializando.
        </p>
        <p className="text-lg leading-relaxed">
          A lo largo de mi formación, he tenido la oportunidad de desarrollar proyectos que combinan la tecnología y la automatización, y mi objetivo es seguir creando soluciones innovadoras que impacten positivamente en diferentes industrias.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
