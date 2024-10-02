// pages/recetaDashboard/[id].tsx

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import SensorActuadorCard from './components/SensorActuadorCard';
import FaseCard from './components/FaseCard';
import Link from 'next/link';

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
  _id: number; 
  nombre: string;
  total_dias: number;
  fases: FasesData[];
}

const RecetaDashboard = () => {
    const router = useRouter();
    const { id } = router.query;
    
    const [selectedFase, setSelectedFase] = useState<FasesData | null>(null);
    const [receta, setReceta] = useState<RecetaData | null>(null);
    
    useEffect(() => {
        if (!id) return;
        
        const fetchReceta = async () => {
            try {
            const response = await fetch(`https://hydroedgeback-production.up.railway.app/api/recetas/${id}`);
            const data: RecetaData = await response.json();
            setReceta(data);
            setSelectedFase(data.fases[0]); // Seleccionar la primera fase por defecto
            } catch (error) {
            console.error('Error al obtener los datos de la receta:', error);
            }
        };

        fetchReceta();
    }, [id]);

    if (!receta) {
        return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
    }

    const scrollFases = (direction: 'left' | 'right') => {
        const scrollAmount = direction === 'left' ? -220 : 220; // Ajusta el scroll amount para mover la mitad del elemento
        document.getElementById('fase-scroll')?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    return (
    <div className="bg-background min-h-screen text-white p-4">

        <div className="relative mb-6 overflow-hidden">
        <button onClick={() => scrollFases('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <ChevronLeft className="w-6 h-6" />
        </button>
        <div id="fase-scroll" className="flex overflow-x-auto scrollbar-hide space-x-4 py-2">
            {receta.fases.map((fase, index) => (
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

export default RecetaDashboard;
