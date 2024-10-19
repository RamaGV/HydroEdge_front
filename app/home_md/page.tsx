// app/home_md/page.tsx

'use client';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';
import { useCultivo } from '@/contexts/CultivoContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useAccount } from '@/contexts/AccountContext';
import WidgetHome from '@/components/WidgetHome';
import LoginPage from '@/app/login/page';
import { getWidgets } from '@/components/widgetsData';
import TipWidget from '@/components/TipWidget';
import Tour from '@/components/Tour';
import { useState } from 'react';

export default function Home_md() {
    const { isDarkMode } = useTheme();
    const { cultivoId } = useCultivo();
    const { isLoggin } = useAccount();
    const widgets = getWidgets(cultivoId);
    const [isTourVisible, setIsTourVisible] = useState(false);

    const handleStartTour = () => {
        setIsTourVisible(true);
    };

  return (
    <>
      {!isLoggin && <LoginPage />}
          {isLoggin && (
              <div className={`${isDarkMode ? 'dark' : 'light'}`}>
                <div className="flex flex-col min-h-screen select-none mt-16
                                bg-background-light text--textlight
                                dark:bg-background-dark dark:text-text-dark
                                transition-colors duration-300">
                {/* Widgets */}
                <main className="flex-grow px-4 py-4">
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

                    {/* Widget de Tip que ocupa 2 columnas, inicia el tour al clic */}
                    <div onClick={handleStartTour} className="cursor-pointer">
                      <TipWidget />
                    </div>
                    
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
              {isTourVisible && <Tour onClose={() => setIsTourVisible(false)} />}
            </div>
          )}
    </>
  )
}