// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-[#0A2540] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <Image 
            src={imageUrl} 
            alt={title} 
            width={500} 
            height={300}
            className="w-full h-48 object-cover" />
        <div className="p-6">
        <h3 className="text-2xl font-bold text-green-400 mb-3">{title}</h3>
        <p className="text-base text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;