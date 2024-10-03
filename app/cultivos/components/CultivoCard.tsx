import React from 'react';
import Image from 'next/image';

interface CultivoCardProps {
  _id: string;
  nombre: string;            // Nombre del espacio de cultivo, ej. "Invernadero Norte"
  nombre_planta: string;      // Nombre de la planta, ej. "Tomate Kumato"
  fase_actual: string;
  imagen: string;
  onSelect: (id: string) => void;
  isSelected: boolean;
  diaActual: number;
  diasTotales: number;
  numero_plantas: number;
  tamaño: string;
  sabor: string;
  rendimiento_kg_planta: number;
  rendimiento_estimado: number;
  azucares: string;
  fibra: string;
}

const CultivoCard: React.FC<CultivoCardProps> = ({
  _id,
  nombre,
  nombre_planta,
  fase_actual,
  imagen,
  onSelect,
  isSelected,
  diaActual,
  diasTotales,
  numero_plantas,
  tamaño,
  sabor,
  rendimiento_kg_planta,
  rendimiento_estimado,
  azucares,
  fibra
}) => {
  const handleClick = () => {
    onSelect(_id);
  };
  
  return (
    <div
      className={`
        rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition-transform duration-200 
        bg-[#E7FAFA]
        dark:bg-background-dark 
        ${isSelected ? 'ring-2 ring-primary dark:ring-primary-dark' : ''}
      `} onClick={handleClick}>
      <div className="flex flex-row justify-between">
        {/* Imagen a la izquierda */}
        <div className="relative w-1/3">
          <Image src={imagen} alt={nombre_planta} layout="fill" objectFit="cover" />
        </div>
        
        {/* Información a la derecha */}
        <div className='flex flex-col justify-between w-1/3 m-2'>
          <h3 className="text-lg font-semibold 
            text-gray-800 
            dark:text-gray-200">{nombre}</h3>
          <div className='text-sm text-gray-600 dark:text-gray-400'>
            <p>{fase_actual}</p>
            <p>Día {diaActual} de {diasTotales}</p>
          </div>
        </div>
        
        <div className='flex flex-col justify-between w-1/3 m-2'>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{nombre_planta}</h3>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>Sabor: {sabor}</p>
            <p>Plantas: {numero_plantas}</p>
            <p>Prod. {rendimiento_estimado} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultivoCard;
