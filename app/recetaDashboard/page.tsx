'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SensorActuadorCard from './components/SensorActuadorCard';
import { useTheme } from '@/contexts/ThemeContext';
import { useReceta } from '@/contexts/RecetaContext';
import FaseCard from './components/FaseCard';
import { useHeader } from '@/contexts/HeaderContext';

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
        const response = await fetch(
          `https://hydroedgeback-production.up.railway.app/api/recetas/all`
        );
        const data: RecetaData[] = await response.json();
        // cargo setReceta utilizando el contexto de receta
        const recetaObtenida = data[recetaId - 1];
        setReceta(recetaObtenida);
        if (recetaObtenida) {
          setSelectedFase(recetaObtenida.fases[0]);
        }
      } catch (error) {
        console.error('Error al obtener los datos de la receta:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReceta();
  }, [recetaId]);

  // Mover setTitle a un useEffect separado
  useEffect(() => {
    if (receta) {
      setTitle(receta.nombre);
    }
  }, [receta, setTitle]);

  const scrollFases = (direction: 'left' | 'right') => {
    const scrollAmount = direction === 'left' ? -220 : 220;
    document
      .getElementById('fase-scroll')
      ?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div
          className="min-h-screen p-4 pt-16 text-text mb-12
        bg-background-light
        dark:bg-background-dark dark:text-text-dark select-none"
        >
          <div className="text-center mt-24">Cargando...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <div
        className="min-h-screen p-4 pt-16 mb-12 select-none
          bg-background-light
          dark:bg-background-dark dark:text-text-dark"
      >
        <div className="min-h-screen text-white p-4">
          {/* Mostrar las fases con estilo carrusel */}
          <div className="relative mb-6 overflow-hidden">

            <div
              id="fase-scroll"
              className="flex overflow-x-auto scrollbar-hide space-x-4 py-2" 
            >
              {receta &&
                receta.fases.map((fase, index) => (
                  <FaseCard
                    key={index}
                    fase={fase}
                    isSelected={fase === selectedFase}
                    onClick={() => setSelectedFase(fase)}
                  />
                ))}
            </div>

          </div>

          {/* Título de fase seleccionada */}
          <h2 className="text-xl font-semibold mb-4">
            {selectedFase?.nombre || 'Selecciona una fase'}
          </h2>

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
                  selectedFase.actuadores
                    ? selectedFase.actuadores
                        .filter(
                          (actuador) =>
                            actuador.sensor_vinculado === sensor.nombre
                        )
                        .map((actuador) => ({ nombre: actuador.nombre }))
                    : []
                }
              />
            ))}

            {/* Mostrar los actuadores con activación diaria */}
            {Array.isArray(selectedFase?.actuadores) &&
              selectedFase.actuadores
                .filter((actuador) => actuador.duracion)
                .map((actuador) => (
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
  );
};

export default UpcomingEvents;
