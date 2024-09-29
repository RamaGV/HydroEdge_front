'use client'

import { useState } from 'react'
import { Home, Leaf, Settings } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const [activeNav, setActiveNav] = useState('home')
  
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md">
      <div className="flex justify-around items-center h-16">
        <NavItem icon={<Home className="w-6 h-6" />} name="home" activeNav={activeNav} setActiveNav={setActiveNav} />
        <NavItem icon={<Leaf className="w-6 h-6" />} name="dashboard" activeNav={activeNav} setActiveNav={setActiveNav} />
        <NavItem icon={<Settings className="w-6 h-6" />} name="settings" activeNav={activeNav} setActiveNav={setActiveNav} />
      </div>
    </footer>
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
