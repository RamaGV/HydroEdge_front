// /app/home/page.tsx
'use client';

import { useState } from 'react';
import { Leaf, Sun, Moon } from 'lucide-react';
import SideBar from '../../components/SideBar';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Añadimos o quitamos la clase 'dark' en el elemento raíz */}
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <div className="flex flex-col min-h-screen bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark transition-colors duration-300">
          <header className="flex justify-between items-center p-4">
            <button
              onClick={toggleSidebar}
              className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
            >
              <Leaf className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-accent text-gray-900 dark:bg-gray-800 dark:text-accent transition-colors duration-200"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </header>
          
          {/* Contenido de la página */}
          <main className="flex-grow p-4">
            <h1 className="text-3xl font-bold">¡Bienvenido a tu Sistema Hidropónico!</h1>
            {/* Agrega más contenido aquí */}
          </main>
        </div>
      </div>
    </>
  );
}
