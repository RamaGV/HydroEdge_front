import React from 'react';
import Link from 'next/link';

interface RecetaData {
    _id: string;
    nombre: string;
    total_dias: number;
  }

const CultivoCard: React.FC<RecetaData> = ({ _id, nombre, total_dias }) => {
  return (
    <Link className="flex items-center" href={`/recetaDashboard`} >
      <div className="flex items-center w-full justify-between bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-400 rounded-full mr-4"></div>
          <span className="text-gray-800 font-medium">{nombre}</span>
        </div>
        <span className="text-gray-600 font-medium">{total_dias} días</span>
      </div>
    </Link>
  );
};

export default CultivoCard;
