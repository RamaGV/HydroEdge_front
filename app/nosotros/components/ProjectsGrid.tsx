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
    title: 'Panel de Monitoreo Hidropónico',
    description: 'Desarrollo de un dashboard para visualizar datos de sensores de una instalación hidropónica, utilizando React y comunicación en tiempo real con MQTT.',
    imageUrl: '/proyecto2.webp',
  },
  {
    title: 'Robot de Inspección Autónomo',
    description: 'Robot móvil con sensores ultrasónicos para la inspección de áreas de difícil acceso, con control remoto desde una aplicación móvil.',
    imageUrl: '/proyecto3.webp',
  },
];

const ProjectsGrid: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-4xl font-bold mb-8 text-green-500">Proyectos Finalizados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
