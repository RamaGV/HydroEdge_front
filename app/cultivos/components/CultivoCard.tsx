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
        bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer
        transform transition-transform duration-200 hover:scale-105 
        ${isSelected ? 'ring-2 ring-primary dark:ring-primary-dark' : ''}
      `}
      onClick={handleClick}
    >
      <div className="flex">
        {/* Imagen a la izquierda */}
        <div className="relative w-1/3 h-40">
          <Image src={imagen} alt={nombre_planta} layout="fill" objectFit="cover" />
        </div>
        
        {/* Información a la derecha */}
        <div className="w-2/3 p-4 flex flex-row justify-between">
          <div className='flex flex-col justify-between'>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{nombre}</h3>
            </div>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{fase_actual}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Día {diaActual} de {diasTotales}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Quedan {diasTotales - diaActual} días
              </p>
            </div>
          </div>
          <div className="border-l border-gray-400 mx-4"></div>

          <div className='flex flex-col justify-between'>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{nombre_planta}</h3>
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Sabor: {sabor}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Plantas: {numero_plantas}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Producc: {rendimiento_estimado} kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultivoCard;
