// DashboardPage.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useCultivo } from '@/contexts/CultivoContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useHeader } from '@/contexts/HeaderContext';
import ActuadorCard from './components/ActuadorCard';
import GrowthProgress from './components/GrowthProgress';
import SensorCard from './components/SensorCard';
import {
  Thermometer,
  CloudRain,
  Lightbulb,
  Sun,
  Snowflake,
  ArrowUp,
  ArrowDown,
  Droplet,
} from 'lucide-react';

interface SensorData {
  _id: string;
  nombre: string;
  medida_actual: number;
  umbral_maximo: number;
  umbral_minimo: number;
  eventos_umbral: number;
  estado_sensor: string;
  topic_mqtt: string;
  id_dashboard: string;
  parametro: string;
  imagen: string;
  modelo: string;
  fabricante: string;
}

interface ActuadorData {
  _id: string;
  nombre: string;
  is_active: boolean;
}

interface CultivoData {
  _id: string;
  nombre: string;
  fecha_inicio: string;
  fase_actual: string;
  sensores_visibles: { nombre: string }[];
  actuadores_visibles: { nombre: string }[];
}

const DashboardPage = () => {
  const { cultivoId } = useCultivo();
  const [cultivoNombre, setCultivoNombre] = useState<string | null>(null);
  const [actuadoresVisibles, setActuadoresVisibles] = useState<string[]>([]);
  const [actuadorData, setActuadorData] = useState<ActuadorData[]>([]);
  
  const [sensoresVisibles, setSensoresVisibles] = useState<string[]>([]);
  const [sensoresData, setSensoresData] = useState<SensorData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [diaActual, setDiaActual] = useState<number>(0);
  const [diasTotales, setDiasTotales] = useState<number>(112);

  const { isDarkMode } = useTheme();
  const { setTitle, setShowBackButton, setShowOptions } = useHeader();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener todos los cultivos
        const responseCultivos = await fetch('https://hydroedgeback-production.up.railway.app/api/cultivos/all');
        const cultivos: CultivoData[] = await responseCultivos.json();

        // Seleccionar el cultivo correspondiente al cultivoId del contexto
        const cultivoSelec = cultivos.find((cultivo) => cultivo._id === cultivoId);

        if (cultivoSelec) {
          setCultivoNombre(cultivoSelec.nombre);
          setTitle(cultivoSelec.nombre);
          setSensoresVisibles(cultivoSelec.sensores_visibles.map((sensor) => sensor.nombre));
          setActuadoresVisibles(cultivoSelec.actuadores_visibles.map((actuador) => actuador.nombre));

          const inicioCultivo = new Date(cultivoSelec.fecha_inicio);
          const hoy = new Date();
          const diasTranscurridos = Math.floor(
            (hoy.getTime() - inicioCultivo.getTime()) / (1000 * 60 * 60 * 24)
          );
          setDiaActual(diasTranscurridos);

          console.log(`Días transcurridos: ${diasTranscurridos}`);
        } else {
          console.error('Cultivo no encontrado');
        }

        // Obtener datos de sensores
        const responseSensores = await fetch('https://hydroedgeback-production.up.railway.app/api/sensores/all');
        const sensores: SensorData[] = await responseSensores.json();
        setSensoresData(sensores);
        
        // Obtener datos de actuadores
        const responseActuadores = await fetch('https://hydroedgeback-production.up.railway.app/api/actuadores/all');
        const actuadores: ActuadorData[] = await responseActuadores.json();
        setActuadorData(actuadores);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setIsLoading(false);
      }
    };
    
    if (cultivoId) {
      fetchData();
    }
  }, [cultivoId]);
  
  if (isLoading) {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="min-h-screen p-4 pt-16 text-text mb-12
        bg-background dark:bg-background-dark dark:text-text-dark select-none">
          <div className="text-center mt-24">Cargando...</div>
          </div>
      </div>
    );
  }
  
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <div className="min-h-screen p-4 pt-16 text-text mb-8 select-none
        bg-background-light  
        dark:bg-background-dark dark:text-text-dark">
        {/* Sección de Actuadores */}
        <section className="rounded-lg p-4 mb-6 mt-6 shadow-xl
          bg-[#E7FAFA]
          dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4 text-primary">Actuadores</h2>
          <div className="grid grid-cols-3 gap-4 
            dark:bg-gray-800">
            {actuadorData
              .filter((actuador) => actuadoresVisibles.includes(actuador.nombre))
              .map((actuador) => (
                <ActuadorCard
                  key={actuador._id}
                  icon={  
                    actuador.nombre === 'Res. Agua' ? (
                      <Droplet />
                    ) : actuador.nombre === 'Peltier' ? (
                      <Thermometer />
                    ) : actuador.nombre === 'Humid.' ? (
                      <CloudRain />
                    ) : actuador.nombre === 'AC Calor' ? (
                      <Sun />
                    ) : actuador.nombre === 'AC Frio' ? (
                      <Snowflake />
                    ) : actuador.nombre === 'Luces' ? (
                      <Lightbulb />
                    ) : actuador.nombre === 'pH+' ? (
                      <ArrowUp />
                    ) : actuador.nombre === 'pH-' ? (
                      <ArrowDown />
                    ) : (
                      <Droplet />
                    )
                  }
                  label={actuador.nombre}
                  is_active={actuador.is_active}
                />
              ))}
          </div>
        </section>
        
        {/* Sección de Sensores */}
        <section className="rounded-lg p-4 mb-6 mt-6 shadow-xl
          bg-[#E7FAFA]
          dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Sensores</h2>
          <div className="grid grid-cols-3 gap-4 dark:bg-gray-800">
            {sensoresData
              .filter((sensor) => sensoresVisibles.includes(sensor.nombre))
              .map((sensor) => (
                <SensorCard
                  key={sensor._id}
                  medida_actual={sensor.medida_actual}
                  umbral_minimo={sensor.umbral_minimo}
                  umbral_maximo={sensor.umbral_maximo}
                  label={sensor.id_dashboard}
                  unit={sensor.parametro}
                  imagen={sensor.imagen}
                  modelo={sensor.modelo}
                  fabricante={sensor.fabricante}
                />
              ))}
          </div>
        </section>
        
        {/* Sección de Progreso del Cultivo */}
        <section className="rounded-lg p-4 mb-6 mt-6 shadow-xl 
          bg-[#E7FAFA]
          dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Progreso del Cultivo</h2>
          <div className="flex justify-center">
            <GrowthProgress daysPassed={diaActual - 1} totalDays={diasTotales} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
