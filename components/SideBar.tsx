// /components/SideBar.tsx
import { X, MessageSquare, Bell, Calendar, Book, PieChart, AreaChart, BarChart, CandlestickChart, LogIn, LogOut, UserPlus, Key, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { useUser } from '@/contexts/UserContext';
import Image from 'next/image';
import ProfileModal from '@/components/ProfileModal';

function SidebarSection({ title, items, activeItem, setActiveItem }: { title: string; items: string[]; activeItem: string; setActiveItem: (item: string) => void }) {
  const getIcon = (item: string) => {
    switch (item) {
      case 'Chat': return <MessageSquare className="w-5 h-5" />
      case 'Notas': return <Book className="w-5 h-5" />
      case 'Alertas': return <Bell className="w-5 h-5" />
      case 'Calendario': return <Calendar className="w-5 h-5" />
      case 'Line Chart': return <BarChart className="w-5 h-5" />
      case 'Doughnut & Pie': return <PieChart className="w-5 h-5" />
      case 'Area Chart': return <AreaChart className="w-5 h-5" />
      case 'Column Chart': return <BarChart className="w-5 h-5" />
      case 'Candlestick Chart': return <CandlestickChart className="w-5 h-5" />
      case 'Log in': return <LogIn className="w-5 h-5" />
      case 'Log out': return <LogOut className="w-5 h-5" />
      case 'Register': return <UserPlus className="w-5 h-5" />
      case 'Reset Password': return <Key className="w-5 h-5" />
      case 'Compras': return <ShoppingCart className="w-5 h-5" />
      default: return null
    }
  }
  
  return (
    <div className="mb-4">
      <h3 className="px-4 py-2 text-sm font-semibold text-green-100">{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <button
              onClick={() => setActiveItem(item)}
              className={`w-full flex items-center px-4 py-2 text-sm transition-colors duration-200 ${activeItem === item ? 'bg-green-600 text-white' : 'text-white hover:bg-green-500'}`}
            >
              {getIcon(item)}
              <span className="ml-3">{item}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function SideBar({ isSidebarOpen, toggleSidebar }: { isSidebarOpen: boolean, toggleSidebar: () => void }) {
  const [activeMenuItem, setActiveMenuItem] = useState('Moderno')
  const [isLoggedIn, setIsLoggedIn] = useState(false)



  const [isModalOpen, setIsModalOpen] = useState(false);  
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const user = useUser(); // Cargo el usuario, utilizando el contexto

  return (
    <>      
      {/* Modal de Perfil */}
      {isModalOpen && <ProfileModal onClose={toggleModal} />}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#4CD964] text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}>
        <div className="flex justify-between items-center p-4 border-b border-green-400">
          <button onClick={toggleSidebar} className="text-white hover:text-gray-200 transition-colors duration-200">
            <X className="w-6 h-6" />
          </button>
          
          <button
              onClick={toggleModal}
              className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center"
            >
            <Image 
              src={user?.profileImageUrl ?? ''} 
              alt={user?.name ?? ''} 
              width={36} 
              height={36} 
              className = "rounded-full"/>
          </button>
        </div>
        
        {/* Secciones del sidebar */}
        <nav className="mt-4 overflow-y-auto h-full">
          <SidebarSection 
            title="Panel de control" 
            items={['Moderno', 'Analítico']} 
            activeItem={activeMenuItem} 
            setActiveItem={setActiveMenuItem} />
          <SidebarSection 
            title="Herramientas" 
            items={['Chat', 'Notas', 'Alertas', 'Calendario']} 
            activeItem={activeMenuItem} 
            setActiveItem={setActiveMenuItem} />
          <SidebarSection 
            title="Recetas" 
            items={['Detalles', 'Mis recetas', 'Recetas populares', 'Todas las recetas']} 
            activeItem={activeMenuItem} 
            setActiveItem={setActiveMenuItem} />
          <SidebarSection 
            title="Datos" 
            items={['Line Chart', 'Gradient Chart', 'Doughnut & Pie', 'Area Chart', 'Column Chart', 'Candlestick Chart', 'Pie Chart']} 
            activeItem={activeMenuItem} 
            setActiveItem={setActiveMenuItem} />
          <SidebarSection 
            title="User Profile" 
            items={isLoggedIn ? ['Log out', 'Reset Password'] : ['Log in', 'Register']} 
            activeItem={activeMenuItem} 
            setActiveItem={setActiveMenuItem} />
          <SidebarSection 
            title="Ajustes" 
            items={['Theme Option', 'Theme Colors', 'Typography', 'Compras']} 
            activeItem={activeMenuItem} 
            setActiveItem={setActiveMenuItem} />
        </nav>
      </div>
    
    </>
  )
}
