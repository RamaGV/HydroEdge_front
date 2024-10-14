// app/calibracion/page.tsx

'use client'

import React from 'react';
import Header_lg from '@/components/Header_lg';
import PhCalibrationSection from './components/PhCalibrationSection';

const Calibracion: React.FC = () => {
  return (
    <>
      <Header_lg />
      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] text-white 
                      opacity-90 text-center font-sans select-none">
        <PhCalibrationSection />
      </div>
    </>
  );
};

export default Calibracion;