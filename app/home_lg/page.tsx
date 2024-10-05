// home_lg.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Header_lg from '@/components/Header_lg';
import PrimerSecc from './components/PrimerSecc';

const Home_lg: React.FC = () => {

  return (
    <>
      <div className="min-h-screen bg-[#081C3A] text-white font-sans select-none">
        {/* Header */}
        <Header_lg />
        <PrimerSecc />
      </div>
    </>
  );
};

export default Home_lg;
