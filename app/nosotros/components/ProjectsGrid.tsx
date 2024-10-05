// components/ProjectsGrid.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Control Automático de Invernadero',
    description: 'Sistema automatizado de monitoreo y control de variables ambientales en un invernadero utilizando sensores y actuadores conectados mediante ESP8266 y MQTT.',
    imageUrl: '/proyecto1.webp',
  },
  {
    title: 'Tablero Digital CrossFit',
    description: 'Un tablero digital para sesiones de CrossFit que permite monitorear y visualizar el tiempo y tipo de ejercicio en curso. Cuenta con funcionalidades de seguimiento automático para cada rutina, mostrando intervalos y registros de desempeño para mejorar el rendimiento de los atletas.',
    imageUrl: '/proyecto2.webp',
  },
  {
    title: 'Sistema de Monitoreo de Glucosa CGM Inteligente',
    description: 'Un sistema avanzado de monitoreo continuo de glucosa que se conecta constantemente para ofrecer datos en tiempo real. Este sistema permite a los usuarios tener un mejor control de sus niveles de glucosa, con alertas automáticas para situaciones críticas y conectividad con otros dispositivos para una gestión integral.',
    imageUrl: '/proyecto3.webp',
  },
];

const ProjectsGrid: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-4xl font-bold mb-8 text-green-500">Proyectos Finalizados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;