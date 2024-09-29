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
  nombre: string;               // Nombre del espacio de cultivo
  nombre_planta: string;        // Nombre de la planta
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
  const [cultivos, setCultivos] = useState<CultivosData[]>([]);
  const { cultivoId, setCultivoId } = useCultivo();
  const router = useRouter();
  const { isDarkMode } = useTheme();
  const { setTitle } = useHeader(); 
  
  useEffect(() => {
    setTitle('Mis Cultivos');
    
    const fetchCultivos = async () => {
      try {
        const response = await fetch('http://192.168.1.5:5000/api/cultivos/all');
        const data = await response.json();

        // Asignar imagen genérica si no existe
        const cultivosConImagen = data.map((cultivo: CultivosData) => ({
          ...cultivo,
          imagen: cultivo.imagen || '/images/default-plant.jpg',
        }));

        setCultivos(cultivosConImagen);
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
  
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="min-h-screen p-4 pt-16 text-text bg-background dark:bg-background-dark dark:text-text-dark select-none">
        {/* Cards en dos columnas */}
        <main className="flex-grow px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
