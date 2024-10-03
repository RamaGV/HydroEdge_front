'use client';

import CultivoCard from './components/CultivoCard';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useHeader } from '@/contexts/HeaderContext';

interface RecetaData {
  _id: number;
  nombre: string;
  total_dias: number;
  dificultad?: string;
  resumen?: string;
}

export default function CultivosPage() {
  const [recetas, setRecetas] = useState<RecetaData[]>([]);
  const { isDarkMode } = useTheme();
  const { setTitle } = useHeader();
  
  useEffect(() => {
    setTitle('Recetas');
    
    const fetchRecetas = async () => {
      try {
        const response = await fetch('https://hydroedgeback-production.up.railway.app/api/recetas/all');
        const data = await response.json();
        setRecetas(data);
      } catch (error) {
        console.error('Error al obtener los datos de las recetas:', error);
      }
    };
    
    fetchRecetas();
  }, []);
  
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <div className="min-h-screen p-4 pt-16 select-none
        bg-background-light
        dark:bg-background-dark">
        <main className="flex-grow px-2 mb-20">
          <div>
            {recetas.map((receta) => (
              <CultivoCard
                key={receta._id}
                _id={receta._id}
                nombre={receta.nombre}
                totalDias={receta.total_dias}
                dificultad={receta.dificultad}  // Asegúrate de tener la dificultad en tu base de datos
                resumen={receta.resumen}        // Asegúrate de tener un campo resumen en tu base de datos
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
