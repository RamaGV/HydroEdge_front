'use client'

import { useState } from 'react'
import { Home, Leaf, Settings } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import Link from 'next/link'

export default function Footer() {
  const [activeNav, setActiveNav] = useState('')
  const { isDarkMode } = useTheme()
  
  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <footer className="fixed bottom-0 left-0 right-0 h-16 transition-colors duration-300
                        bg-background-light text--textlight 
                        dark:bg-background-dark dark:text-text-dark 
                        border-g shadow-2xl z-50">
        <div className="flex justify-around items-center h-16">
          <NavItem icon={<Home className="w-6 h-6" />} name="" activeNav={activeNav} setActiveNav={setActiveNav} />
          <NavItem icon={<Leaf className="w-6 h-6" />} name="dashboard" activeNav={activeNav} setActiveNav={setActiveNav} />
          <NavItem icon={<Settings className="w-6 h-6" />} name="settings" activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>
      </footer>
    </div>
  )
}

function NavItem({ icon, name, activeNav, setActiveNav }: { icon: React.ReactNode; name: string; activeNav: string; setActiveNav: (name: string) => void }) {
  const isActive = name === activeNav
  
  return (
    <Link href={`/${name}`}>
      <button 
        className={`flex flex-col items-center ${isActive ? 'text-[#4CD964]' : 'text-gray-400'}`}
        onClick={() => setActiveNav(name)}
      >
        {icon}
        {isActive && <div className="w-1 h-1 bg-[#4CD964] rounded-full mt-1"></div>}
      </button>
    </Link>
  )
}
