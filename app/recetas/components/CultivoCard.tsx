import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { useReceta } from '@/contexts/RecetaContext';

interface RecetaData {
  _id: number;
  nombre: string;
  totalDias: number;
  dificultad?: string; // Dificultad que extraerás de la base de datos
  resumen?: string; // Resumen o descripción adicional
}

const CultivoCard: React.FC<RecetaData> = ({
  _id,
  nombre,
  totalDias = 112,
  dificultad = 'Difícil',
  resumen = 'Ajuste de pH, EC y temperatura para todas las fases',
}) => {
  const { isDarkMode } = useTheme();
  const { setRecetaId } = useReceta();

  const handleSelectReceta = (id: number) => {
    setRecetaId(_id);
  };

  return (
    <div
      className={`rounded-lg shadow-lg transition-colors duration-300 mt-6 p-4 shadow-xl
        bg-gradient-to-br from-[#CFF5F4] to-background-light text-gray-700
        dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:text-white`}
    >
      <Link href={`/recetaDashboard`} className="block p-4" onClick={() => handleSelectReceta(_id)}>
        {/* Nombre del Cultivo */}
        <h2 className="text-2xl font-semibold mb-2 text-center">{nombre}</h2>

        {/* Información adicional en columnas */}
        <div className="flex flex-col text-center mt-6 justify-between items-center">
          <div className="flex flex-row w-full justify-between items-center">
            <span className="text-xl font-bold text-primary">{totalDias} Días</span>
            <div>
              <p className="font-semibold text-sm text-gray-600">Dificultad</p>
              <span
                className={`text-xl font-bold ${
                  dificultad === 'Fácil'
                    ? 'text-green-500'
                    : dificultad === 'Media'
                    ? 'text-yellow-500'
                    : 'text-red-500'
                }`}
              >
                {dificultad}
              </span>
            </div>
          </div>

          <div className="text-left w-full mt-4">
            <span className="font-light text-gray-600">{resumen}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CultivoCard;
