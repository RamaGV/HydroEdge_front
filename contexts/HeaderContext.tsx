// contexts/HeaderContext.tsx

import React, { createContext, useContext, useState } from 'react';

interface HeaderContextProps {
  title: string;
  setTitle: (title: string) => void;
  showBackButton: boolean;
  setShowBackButton: (show: boolean) => void;
  showOptions: boolean;
  setShowOptions: (show: boolean) => void;
}

const HeaderContext = createContext<HeaderContextProps>({
  title: 'HydroEdge',
  setTitle: () => {},
  showBackButton: false,
  setShowBackButton: () => {},
  showOptions: false,
  setShowOptions: () => {},
});

export const useHeader = () => useContext(HeaderContext);

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [title, setTitle] = useState('HydroEdge');
  const [showBackButton, setShowBackButton] = useState(true);
  const [showOptions, setShowOptions] = useState(true);

  return (
    <HeaderContext.Provider value={{ title, setTitle, showBackButton, setShowBackButton, showOptions, setShowOptions }}>
      {children}
    </HeaderContext.Provider>
  );
};
