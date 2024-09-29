'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'
import SensorActuadorCard from './components/SensorActuadorCard'
import Link from 'next/link'

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
  const [recetas, setRecetas] = useState<RecetaData[]>([]);
  const datePickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchRecetas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recetas/all');
        const data: RecetaData[] = await response.json();
        setRecetas(data);
        if (data.length > 0) {
          setSelectedFase(data[0].fases[0]); // Seleccionar la primera fase de la primera receta por defecto
        }
      } catch (error) {
        console.error('Error al obtener los datos de las recetas:', error);
      }
    };
    
    fetchRecetas();
  }, []);
  
  const scrollFases = (direction: 'left' | 'right') => {
    if (datePickerRef.current) {
      const scrollAmount = direction === 'left' ? -220 : 220; // Ajusta el scroll amount para mover la mitad del elemento
      datePickerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  // Función que recibe una receta y devuelve el total de días sumando las duraciones de las fases
  const contarDiasTotales = (receta: RecetaData | undefined): number => {
    if (!receta || !receta.fases) return 0;
    return receta.fases.reduce((total, fase) => total + fase.duracion, 0);
  };
  
  const firstRecipe = recetas[0];
  
  return (
    <div className="bg-background min-h-screen text-white p-4">
      <header className="flex justify-between items-center mb-6">
        <Link href="/">
          <ArrowLeft className="w-6 h-6 text-white hover:text-gray-200" />
        </Link>      
        <h1 className="text-xl font-bold mr-2">{firstRecipe?.nombre || 'Cargando...'}</h1>
        <h1 className="text-xl font-bold mr-2">{contarDiasTotales(firstRecipe)} Días</h1>
      </header>

      <div className="relative mb-6 overflow-hidden">
        <button onClick={() => scrollFases('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div ref={datePickerRef} className="flex overflow-x-auto scrollbar-hide space-x-4 py-2">
          {firstRecipe?.fases.map((fase, index) => (
            <FaseCard
              key={index}
              fase={fase}
              isSelected={fase === selectedFase}
              onClick={() => setSelectedFase(fase)}
            />
          ))}
        </div>
        <button onClick={() => scrollFases('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      <h2 className="text-xl font-semibold mb-4">{selectedFase?.nombre || 'Selecciona una fase'}</h2>
      
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

        {/* Mostrar los actuadores con duración */}
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
  );
};

export default UpcomingEvents;
