'use client'
import { useState } from 'react'
import { useAccount } from '@/contexts/AccountContext'

export default function LoginPage() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const { setIsLoggin } = useAccount()

  const handleSubmit = (e: React.FormEvent) => {
    //e.preventDefault()
    setIsLoggin(true)
    console.log('Form submitted:', { name, mobile, email })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4">
      <div className="w-full max-w-md relative">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md rounded-3xl" />
        <form onSubmit={handleSubmit} className="relative space-y-6 p-8 bg-black/20 backdrop-blur-md rounded-3xl shadow-2xl ">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Inicio de sesion</h2>
          <input
            type="tel"
            placeholder="Usuario"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:border-white ml-4"
          />
          <input
            type="email"
            placeholder="Contraseña"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-b border-white/50 text-white placeholder-white/50 focus:border-white ml-4"
          />
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-2" >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}