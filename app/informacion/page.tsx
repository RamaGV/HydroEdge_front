// pages/Informacion.tsx

import React from 'react';
import Header_lg from '@/components/Header_lg';
import InfoSection from './components/InfoSection';

const Informacion: React.FC = () => {
  return (
    <>
      <Header_lg />
      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] text-white p-8 flex justify-center items-center flex-col text-center font-sans select-none">
        <InfoSection />
      </div>
    </>
  );
};

export default Informacion;

