// app/automatizacion/page.tsx
'use client'
import React from 'react';
import Header_lg from '@/components/Header_lg';
import AutomatizacionSection from './components/AutomatizacionSection';

const Automatizacion: React.FC = () => {
  return (
    <>
      <Header_lg />
      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] text-white 
                      opacity-90 text-center font-sans select-none">
        <AutomatizacionSection />
      </div>
    </>
  );
};

export default Automatizacion;