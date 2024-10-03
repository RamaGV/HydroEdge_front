// recetaDashboard.tsx

'use client'
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import SensorActuadorCard from './components/SensorActuadorCard'
import { useTheme } from '@/contexts/ThemeContext'
import { useReceta } from '@/contexts/RecetaContext'
import { useHeader } from '@/contexts/HeaderContext'

// Define correctamente las interfaces para receta y fases
interface SensorData {
  nombre: string;
  min: number;
  max: number;
  parametro: string;
}

interface ActuadorData {
  nombre: string;
  hora_encendido?: string[];
  duracion?: number;
  sensor_vinculado?: string;
}

interface FasesData {
  nombre: string;
  duracion: number;
  sensores: SensorData[];
  actuadores: ActuadorData[];
}

interface RecetaData {
  _id: string;
  nombre: string;
  total_dias: number;
  fases: FasesData[];
}

const FaseCard = ({ fase, isSelected, onClick }: { fase: FasesData; isSelected: boolean; onClick: () => void }) => (
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

const UpcomingEvents = () => {
  const [selectedFase, setSelectedFase] = useState<FasesData | null>(null); 
  const [receta, setReceta] = useState<RecetaData | null>(null);
  const [isLoading, setIsLoading] = useState(true); 
  const { isDarkMode } = useTheme(); 
  const { setTitle } = useHeader(); 
  const { recetaId } = useReceta(); 
  
  useEffect(() => {
    const fetchReceta = async () => {
      try {
        const response = await fetch(`https://hydroedgeback-production.up.railway.app/api/recetas/all`);
        const data: RecetaData[] = await response.json();
        // cargo setReceta con utilizando el contexto de receta
        const receta = data[recetaId - 1];
        setReceta(receta);
        if(recetaId - 1 > 0){
          setSelectedFase(receta.fases[0]);
          setTitle(receta.nombre);
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error al obtener los datos de la receta:', error);
      }
    };
    
    fetchReceta();
  }, []);
  
  const scrollFases = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -220 : 220; // Ajusta el scroll amount para mover la mitad del elemento
    document.getElementById('fase-scroll')?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };
  
  if (isLoading) {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="min-h-screen p-4 pt-16 text-text mb-12
        bg-background-light
        dark:bg-background-dark dark:text-text-dark select-none">
          <div className="text-center mt-24">Krgndo...</div>
          </div>
      </div>
    );
  }
  
  return (
    <>
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="min-h-screen p-4 pt-16 mb-12 select-none
          bg-background-light
          dark:bg-background-dark dark:text-text-dark">      
          <div className="min-h-screen text-white p-4">
            {/* Mostrar las fases con estilo carrusel */}
            <div className="relative mb-6 overflow-hidden">
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={() => scrollFases('left')}>
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div id="fase-scroll" className="flex overflow-x-auto scrollbar-hide space-x-4 py-2">
                {receta && receta.fases.map((fase, index) => (
                  <FaseCard
                    key={index}
                    fase={fase}
                    isSelected={fase === selectedFase}
                    onClick={() => setSelectedFase(fase)}
                  />
                ))
                }
              </div>
              <button onClick={() => scrollFases('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Titulo de fase seleccionada */}
            <h2 className="text-xl font-semibold mb-4">{selectedFase?.nombre || 'Selecciona una fase'}</h2>
            
            {/* Muestra sensores y actuadores vinculados a la fase */}
            <div className="space-y-4">
              {/* Mostrar los sensores */}
              {selectedFase?.sensores.map((sensor) => (
                <SensorActuadorCard
                  key={sensor.nombre}
                  nombre={sensor.nombre}
                  umbral_min={sensor.min}
                  umbral_max={sensor.max}
                  tipo="sensor"
                  actuadores_vinculados={
                    // Filtra los actuadores que están vinculados a este sensor
                    selectedFase.actuadores.filter(actuador => actuador.sensor_vinculado === sensor.nombre).map(actuador => ({ nombre: actuador.nombre }))
                  }
                />
              ))}

              {/* Mostrar los actuadores con activación diaria */}
              {Array.isArray(selectedFase?.actuadores) && selectedFase.actuadores.filter(actuador => actuador.duracion).map((actuador) => (
                <SensorActuadorCard
                  key={actuador.nombre}
                  nombre={actuador.nombre}
                  hora_encendido={actuador.hora_encendido}
                  duracion={actuador.duracion}
                  tipo="actuador"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
