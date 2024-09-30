// components/Header.tsx

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
  const isDashboardPage = pathname === '/dashboard';

  if (isHomePage) {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="select-none
                        bg-background-light text--textlight 
                        dark:bg-background-dark dark:text-text-dark 
                        transition-colors duration-300">
          <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          
          <header className="fixed top-0 left-0 right-0 h-16 
            flex items-center justify-between p-4 
            bg-background-light dark:bg-background-dark shadow-md z-50">
            <button
              onClick={toggleSidebar}
              className="w-9 h-9 bg-primary rounded-full flex items-center justify-center"
            >
              <Leaf className="w-5 h-5 text-white" />
            </button>
            <div className="flex text-3xl font-bold ">
              <h1 className="text-primary dark:text-white ">Hydro</h1>
              <span className="light:text-black dark:text-primary ">Edge</span>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-accent text-gray-900 dark:bg-gray-800 dark:text-accent transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-6 h-6 text-accent" /> : <Moon className="w-6 h-6" />}
            </button>
          </header>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${isDarkMode ? 'dark' : 'light'}`}>
        <div className="select-none
                        bg-background-light text--textlight 
                        dark:bg-background-dark dark:text-text-dark 
                        transition-colors duration-300">
      <div className="fixed top-0 left-0 right-0 h-16 flex justify-between items-center p-4 bg-primary 
          dark:bg-primary-dark text-white dark:border-gray-700 shadow-md border-b border-gray-200 z-50">
        <div className="flex space-x-3 items-center">
          {showBackButton && (
            <Link href="/">
              <ArrowLeft className="w-6 h-6 text-white hover:text-gray-200 cursor-pointer" />
            </Link>
          )}
          <h1 className="text-2xl font-bold select-none">{title}</h1>
        </div>
        {isDashboardPage ? (
          <Bell className="w-6 h-6 text-white md:opacity-100 opacity-50" />
        ) : (
          showOptions && (
            <div className="flex space-x-2 opacity-50 select-none md:opacity-100 md:space-x-3 md:space-y-0">
              <button className="px-3 py-2 bg-secondary dark:bg-secondary-dark text-white rounded-full text-sm font-medium hover:bg-secondary-dark hover:opacity-80 transition duration-200 cursor-not-allowed">
                Agregar
              </button>
              <button className="px-3 py-2 bg-accent text-gray-900 rounded-full text-sm font-medium hover:bg-yellow-500 transition duration-200 cursor-not-allowed">
                Historial
              </button>
            </div>
          )
        )}
      </div>
      </div>
      </div>
    );
  }
}
