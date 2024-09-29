import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
interface ActuadoresContextProps {
  actuadoresVisibles: string[];
  setActuadoresVisibles: (newState: string[]) => void;
}

const ActuadoresContext = createContext<ActuadoresContextProps>({
  actuadoresVisibles: [],
  setActuadoresVisibles: () => {}
});

// Proveedor del contexto que envolverá las páginas que necesiten acceder al estado
export const ActuadoresProvider = ({ children }: { children: React.ReactNode }) => {
  const [actuadoresVisibles, setActuadoresVisibles] = useState(['Res. Agua', 'Peltier', 'AC Calor', 'AC Frio']);

  return (
    <ActuadoresContext.Provider value={{ actuadoresVisibles, setActuadoresVisibles }}>
      {children}
    </ActuadoresContext.Provider>
  );
};

export const useActuadores = () => useContext(ActuadoresContext);  // Hook personalizado
