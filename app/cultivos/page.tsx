'use client';

import React, { useEffect, useState } from 'react';
import { useCultivo } from '@/contexts/CultivoContext';
import { useTheme } from '@/contexts/ThemeContext';
import CultivoCard from './components/CultivoCard';
import { useRouter } from 'next/navigation';
import { useHeader } from '@/contexts/HeaderContext';

// Actualizar la interfaz para incluir los nuevos datos
interface CultivosData {
  _id: string; 
  nombre: string; 
  nombre_planta: string; 
  fase_actual: string; 
  dia_actual: number; 
  dias_totales: number; 
  imagen: string; 
  numero_plantas: number; 
  tamaño: string; 
  sabor: string; 
  rendimiento_kg_planta: number; 
  rendimiento_estimado: number; 
  azucares: string; 
  fibra: string; 
}

export default function CultivosPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cultivos, setCultivos] = useState<CultivosData[]>([]);
  const { cultivoId, setCultivoId } = useCultivo();
  const router = useRouter();
  const { isDarkMode } = useTheme();
  const { setTitle } = useHeader(); 
  
  useEffect(() => {
    setTitle('Mis Cultivos');
    
    const fetchCultivos = async () => {
      try {
        const response = await fetch('https://hydroedgeback-production.up.railway.app/api/cultivos/all');
        const data = await response.json();

        // Asignar imagen genérica si no existe
        const cultivosConImagen = data.map((cultivo: CultivosData) => ({
          ...cultivo,
          imagen: cultivo.imagen || '/images/default-plant.jpg',
        }));

        setCultivos(cultivosConImagen);
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos de los cultivos:', error);
      }
    };
    
    fetchCultivos();
  }, []);
  
  const handleSeleccionCultivo = (id: string) => {
    setCultivoId(id);

    router.push('/dashboard');
  };
  
  if (isLoading) {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="min-h-screen p-4 pt-16 mb-12 select-none
        bg-background-light
        dark:bg-background-dark dark:text-text-dark">
          <div className="text-center mt-24">Cargando...</div>
          </div>
      </div>
    );
  }
  
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <div className="min-h-screen p-4 pt-16 select-none
        bg-background-light
        dark:bg-background-dark dark:text-text-dark">
        <main className="flex-grow px-2 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultivos.map((cultivo) => (
              <CultivoCard
                key={cultivo._id}
                _id={cultivo._id}
                nombre={cultivo.nombre}
                nombre_planta={cultivo.nombre_planta}  // Pasar nombre de la planta
                fase_actual={cultivo.fase_actual}
                imagen={cultivo.imagen}
                onSelect={handleSeleccionCultivo}
                isSelected={cultivo._id === cultivoId}
                diaActual={cultivo.dia_actual || 0}
                diasTotales={cultivo.dias_totales}
                numero_plantas={cultivo.numero_plantas} // Pasar número de plantas
                tamaño={cultivo.tamaño}                // Pasar tamaño de la planta/fruto
                sabor={cultivo.sabor}                  // Pasar sabor de la planta
                rendimiento_kg_planta={cultivo.rendimiento_kg_planta}  // Rendimiento por planta
                rendimiento_estimado={cultivo.rendimiento_estimado}    // Rendimiento estimado total
                azucares={cultivo.azucares}            // Pasar contenido de azúcares
                fibra={cultivo.fibra}                  // Pasar contenido de fibra
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
