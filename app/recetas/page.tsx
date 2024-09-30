'use client'

import CultivoCard from './components/CultivoCard';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useHeader } from '@/contexts/HeaderContext';
import Link from 'next/link';

interface RecetaData {
  _id: string;
  nombre: string;
  total_dias: number;
}

export default function CultivosPage() {
  const [recetas, setRecetas] = useState<RecetaData[]>([]);
  const { isDarkMode } = useTheme();
  const { setTitle, setShowBackButton, setShowOptions } = useHeader();
  
  useEffect(() => {
    setTitle("Recetas");
    const fetchCultivos = async () => {
      try {
        const respuesta = await fetch('https://hydroedgeback-production.up.railway.app/api/recetas/all');
        const data = await respuesta.json();
        
        setRecetas(data);
      } catch (error) {
        console.error('Error al obtener los datos de los cultivos:', error);
      }
    };
    
    fetchCultivos();
  }, []);
  
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <div className="min-h-screen p-4 pt-16 text-text bg-background dark:bg-background-dark dark:text-text-dark select-none">       
        <main className="flex-grow px-4 py-6 mt-6">
          <div className="space-y-4">
            {recetas.map((receta) => (
              <CultivoCard
                key={receta._id}
                _id={receta._id}
                nombre={receta.nombre}
                total_dias={receta.total_dias}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
