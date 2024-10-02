// RecetaContext.tsx
'use client'; // Add this at the top of your RecetaContext

import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the context and types
const RecetaContext = createContext<{ recetaId: number ; setRecetaId: (id: number) => void } | undefined>(undefined);

export const RecetaProvider = ({ children }: { children: ReactNode }) => {
  const [recetaId, setRecetaId] = useState<number>(1);
  
  return (
    <RecetaContext.Provider value={{ recetaId, setRecetaId }}>
      {children}
    </RecetaContext.Provider>
  );
};

export const useReceta = () => {
  const context = useContext(RecetaContext);
  if (!context) {
    throw new Error('useCultivo must be used within a RecetaProvider');
  }
  return context;
};
