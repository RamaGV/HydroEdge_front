// /app/page.tsx

'use client';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import { useCultivo } from '@/contexts/CultivoContext';
import { useUser } from '@/contexts/UserContext';
import { useTheme } from '@/contexts/ThemeContext';
import { SiNotion } from 'react-icons/si';

import WidgetHome from '@/components/WidgetHome';
import { getWidgets } from '@/components/widgetsData';
import TipWidget from '@/components/TipWidget';

export default function HomePage() {
  const { isDarkMode } = useTheme();
  
  const { cultivoId } = useCultivo();
  const user = useUser();
  
  const widgets = getWidgets(cultivoId);
  
  return (
    <>
      {/* Contenido responsivo */}
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="flex flex-col min-h-screen select-none
                        bg-background-light text--textlight
                        dark:bg-background-dark dark:text-text-dark
                        transition-colors duration-300">
          {/* Widgets */}
          <main className="flex-grow px-4 py-4">
            <h1 className="text-xl font-bold">Hey {user?.name ?? ''}!</h1>
            <p className="mb-6">Revisa cómo están tus cultivos.</p>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              {widgets.slice(0, 2).map((widget, index) => (
                <WidgetHome
                  key={index}
                  link={widget.link}
                  titulo={widget.titulo}
                  layout={widget.layout}
                  icono={widget.icono}
                  finalizado={widget.finalizado}
                />
              ))}

              {/* Widget de Tip que ocupa 2 columnas */}
              <TipWidget />
              
              {/* Resto de los widgets */}
              {widgets.slice(2).map((widget, index) => (
                <WidgetHome
                  key={index}
                  link={widget.link}
                  titulo={widget.titulo}
                  layout={widget.layout}
                  icono={widget.icono}
                  finalizado={widget.finalizado}
                />
              ))}
            </div>

            {/* Imagen en la parte inferior */}
            <div className='flex flex-col items-center mt-8'>
              <h2 className='font-semibold text-gray-800 dark:text-gray-200 mb-6'>
                Desarrollado para automatizar y optimizar cultivos, HydroEdge está diseñado para el futuro.
              </h2>
              <div className="flex space-x-6 mb-20">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" size={24} />
                </a>
                <a href="https://notion.so" target="_blank" rel="noopener noreferrer">
                  <SiNotion className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white" size={24} />
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
