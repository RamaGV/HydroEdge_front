import React from 'react';
import Header_lg from '@/components/Header_lg';
import OfferSection from './components/OfferSection';

const QueOfrecemos: React.FC = () => {
  return (
    <>
      <Header_lg />
      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] text-white 
                      p-8 flex justify-center items-center flex-col text-center font-sans select-none">
        <OfferSection />
      </div>
    </>
  );
};

export default QueOfrecemos;
