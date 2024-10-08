// home_lg.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Header_lg from '@/components/Header_lg';
import PrimerSecc from './components/PrimerSecc';

const Home_lg: React.FC = () => {

  return (
    <>
      <Header_lg />
      <div className="min-h-screen bg-gradient-to-br from-[#0A2540] text-white font-sans select-none">
        {/* Header */}
        <PrimerSecc />
      </div>
    </>
  );
};

export default Home_lg;
