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
    className={`flex flex-col items-center justify-center w-40 h-24 rounded-lg transition-all duration-300 p-2 ${
      isSelected ? 'bg-white text-background scale-105' : 'bg-complementary text-white scale-100'
    }`}
  >
    <span className="text-lg font-bold">{fase.nombre}</span>
    <span className="text-sm">{fase.duracion} días</span>
  </button>
);

export default FaseCard;
