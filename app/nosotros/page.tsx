// pages/Nosotros.tsx
import React from 'react';
import AboutSection from './components/AbboutSection';
import ProjectsGrid from './components/ProjectsGrid';
import Header_lg from '@/components/Header_lg';

const Nosotros: React.FC = () => {
  return (
    <>
        <Header_lg />
        <div className="min-h-screen bg-gradient-to-br from-[#0A2540] text-white p-8 flex flex-col items-center text-center font-sans select-none">
          <AboutSection />
          <ProjectsGrid />
        </div>
    </>
  );
};

export default Nosotros;
