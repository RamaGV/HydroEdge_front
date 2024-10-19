// contexts/TourContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TourContextProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  isTourRunning: boolean;
  setIsTourRunning: (isRunning: boolean) => void;
}

const TourContext = createContext<TourContextProps | undefined>(undefined);

export const TourProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isTourRunning, setIsTourRunning] = useState<boolean>(false);

  return (
    <TourContext.Provider value={{ currentStep, setCurrentStep, isTourRunning, setIsTourRunning }}>
      {children}
    </TourContext.Provider>
  );
};

export const useTour = (): TourContextProps => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};