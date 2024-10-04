import React from 'react';

interface FaseData{
    nombre: string;
    duracion: number;
}
interface FaseCardProps {
  fase: FaseData;
  isSelected: boolean;
  onClick: () => void;
}

const FaseCard: React.FC<FaseCardProps> = ({ fase, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full h-24 rounded-lg bg-primary transition-all duration-300 p-2 m-2 hover:scale-105 
      ${ isSelected ? ' text-background scale-105' : 'text-background scale-100 opacity-65' }`}
  >
    <span className="text-lg font-bold">{fase.nombre}</span>
    <span className="text-sm">{fase.duracion} días</span>
  </button>
);

export default FaseCard;
