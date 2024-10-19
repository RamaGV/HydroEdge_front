// components/InfoCard.tsx

import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="bg-[#0A2540] rounded-lg p-6 shadow-lg flex items-start space-x-4">
      {icon}
      <div>
        <h3 className="text-2xl font-bold text-green-400 mb-2">{title}</h3>
        <p className="text-base text-gray-300">
          {description}
          {link && (
            <a href={link} className="text-green-400 underline"> documentación completa</a>
          )}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;