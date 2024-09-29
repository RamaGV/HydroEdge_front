'use client'

import { useState } from 'react'
import { Home, Leaf, Settings } from 'lucide-react'
import Link from 'next/link'

export default function CropsPage() {
  const [activeNav, setActiveNav] = useState('crops')

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="flex justify-between items-center p-4 bg-[#4CD964] text-white">
        <h1 className="text-2xl font-bold">Grow Hub 1</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white text-[#4CD964] rounded-full text-sm font-medium">Niwa Recipes</button>
          <button className="px-4 py-2 bg-[#3BB954] text-white rounded-full text-sm font-medium">My Recipes</button>
        </div>
      </header>
      
      <main className="flex-grow px-4 py-6">
        <div className="space-y-4">
          <CropItem name="AK-24" stages={1} />
          <CropItem name="bloom" stages={2} />
          <CropItem name="veg" stages={1} />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          <NavItem icon={<Home className="w-6 h-6" />} name="home" activeNav={activeNav} setActiveNav={setActiveNav} />
          <NavItem icon={<Leaf className="w-6 h-6" />} name="crops" activeNav={activeNav} setActiveNav={setActiveNav} />
          <NavItem icon={<Settings className="w-6 h-6" />} name="settings" activeNav={activeNav} setActiveNav={setActiveNav} />
        </div>
      </footer>
    </div>
  )
}

function CropItem({ name, stages }: { name: string; stages: number }) {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-red-500 rounded-full mr-4"></div>
        <span className="text-gray-800 font-medium">{name}</span>
      </div>
      <span className="text-gray-600">Stages: {stages}</span>
    </div>
  )
}

function NavItem({
  icon,
  name,
  activeNav,
  setActiveNav,
}: {
  icon: React.ReactNode
  name: string
  activeNav: string
  setActiveNav: (name: string) => void
}) {
  const isActive = name === activeNav
  return (
    <Link href={name === 'home' ? '/' : `/${name}`}>
      <button
        className={`flex flex-col items-center ${
          isActive ? 'text-[#4CD964]' : 'text-gray-400'
        }`}
        onClick={() => setActiveNav(name)}
      >
        {icon}
        {isActive && (
          <div className="w-1 h-1 bg-[#4CD964] rounded-full mt-1"></div>
        )}
      </button>
    </Link>
  )
}