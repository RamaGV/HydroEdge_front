// pages/Nosotros.tsx
import React from 'react';
import AboutSection from './components/AbboutSection';
import ProjectsGrid from './components/ProjectsGrid';
import Header_lg from '@/components/Header_lg';

const Nosotros: React.FC = () => {
  return (
    <>
        <Header_lg />
        <div className="min-h-screen bg-[#081C3A] text-white p-8">
          <AboutSection />
          <ProjectsGrid />
        </div>
    </>
  );
};

export default Nosotros;
