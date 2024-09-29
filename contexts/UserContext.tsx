// contexts/UserContext.tsx

import React, { createContext, useContext } from 'react';

interface User {
  name: string;
  apellido: string;
  profileImageUrl: string;
}

const UserContext = createContext<User | null>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = {
    name: 'Gregorio',
    apellido: 'Vazquez',
    profileImageUrl: '/ramiro_vazquez.jpg',
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
