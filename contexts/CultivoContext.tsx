// CultivoContext.tsx
'use client'; // Add this at the top of your CultivoContext

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context and types
const CultivoContext = createContext<{ cultivoId: string | null; setCultivoId: (id: string) => void } | undefined>(undefined);

export const CultivoProvider = ({ children }: { children: ReactNode }) => {
  const [cultivoId, setCultivoId] = useState<string | null>(null);
  
  return (
    <CultivoContext.Provider value={{ cultivoId, setCultivoId }}>
      {children}
    </CultivoContext.Provider>
  );
};

export const useCultivo = () => {
  const context = useContext(CultivoContext);
  if (!context) {
    throw new Error('useCultivo must be used within a CultivoProvider');
  }
  return context;
};
