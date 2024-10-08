// components/Header_md.tsx

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useHeader } from '@/contexts/HeaderContext';
import { useTheme } from '@/contexts/ThemeContext';
import { usePathname } from 'next/navigation';
import { ArrowLeft, Leaf, Sun, Moon, Bell } from 'lucide-react';
import SideBar from './SideBar';

export default function Header() {
  const { title, showBackButton, showOptions } = useHeader();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isRecetaDashboard = pathname === '/recetaDashboard';

  if (isHomePage) {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <header className="select-none border-gray-200
                        bg-background-light text--textlight 
                        dark:bg-background-dark dark:text-text-dark 
                        transition-colors duration-300">

          <div className='opacity-50 select-none cursor-not-allowed dark:opacity-100'>
            {/*
            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
             */}
          </div>

          <div className="fixed top-0 left-0 right-0 h-16 
                             flex items-center justify-between p-4 
                             bg-background-light dark:bg-background-dark shadow-md z-50">

            {/* Menu Lateral */}
            <button onClick={toggleSidebar}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-primary" >
              <Leaf className="w-5 h-5 text-white" />
            </button>
            
            {/* Logo */}
            <div className="flex text-3xl font-bold ">
              <h1 className="text-primary dark:text-white ">Hydro</h1>
              <span className="light:text-black dark:text-primary ">Edge</span>
            </div>

            {/* Switch entre modo Claro y Oscuro */}
            <button onClick={toggleDarkMode}
                    className="p-2 rounded-full transition-colors duration-200
                               bg-accent text-gray-900 
                               dark:bg-gray-800 dark:text-accent ">
              {isDarkMode ? <Sun className="w-6 h-6 text-accent" /> 
                          : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>
    );
  } else if (isRecetaDashboard) {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <header className="select-none text--textlight transition-colors duration-300
                        bg-background-light text--textlight
                        dark:bg-background-dark dark:text-text-dark">
          <div className="fixed top-0 left-0 right-0 h-16 flex justify-between items-center p-4 bg-primary shadow-md border-b z-50
              dark:bg-background-dark text-white 
              dark:border-gray-700">
            <div className="flex space-x-3 items-center">
              {showBackButton && (
                <Link href="/recetas">
                  <ArrowLeft className="w-6 h-6 text-white hover:text-gray-200 cursor-pointer" />
                </Link>
              )}
              <h1 className="text-2xl font-bold select-none">{title}</h1>
            </div>
            
            {/* Switch entre modo Claro y Oscuro */}
            <button onClick={toggleDarkMode}
                    className="p-2 rounded-full transition-colors duration-200
                               bg-accent text-gray-900 
                               dark:bg-gray-800 dark:text-accent ">
              {isDarkMode ? <Sun className="w-6 h-6 text-accent" /> 
                          : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>
    );
  } else {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <header className="select-none text--textlight transition-colors duration-300
                        bg-background-light text--textlight 
                        dark:bg-background-dark dark:text-text-dark 
                        transition-colors duration-300">
          <div className="fixed top-0 left-0 right-0 h-16 flex justify-between items-center p-4 bg-primary 
              dark:bg-background-dark text-white dark:border-gray-700 shadow-md border-b z-50">
            <div className="flex space-x-3 items-center">
                <Link href="/">
                  <ArrowLeft className="w-6 h-6 text-white hover:text-gray-200 cursor-pointer" />
                </Link>
              <h1 className="text-xl font-bold select-none">{title}</h1>
            </div>

            {/* Switch entre modo Claro y Oscuro */}
            <button onClick={toggleDarkMode}
                    className="p-2 rounded-full transition-colors duration-200
                               bg-accent text-gray-900 
                               dark:bg-gray-800 dark:text-accent ">
              {isDarkMode ? <Sun className="w-6 h-6 text-accent" /> 
                          : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </header>
      </div>
    );
  }
}
