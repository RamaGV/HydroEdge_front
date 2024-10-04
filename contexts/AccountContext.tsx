import React, { createContext, useState, useContext } from 'react';

interface AccountContextProps {
    isLoggin: boolean;
    setIsLoggin: (isLoggin: boolean) => void;
}

const AccountContext = createContext<AccountContextProps>({
  isLoggin: true,
  setIsLoggin: () => {}
});

// Proveedor del contexto que envolverá las páginas que necesiten acceder al estado
export const AccountProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoggin, setIsLoggin] = useState(false);

    return (
    <AccountContext.Provider value={{ isLoggin, setIsLoggin }}>
        {children}
    </AccountContext.Provider>
    );
};

export const useAccount = () => useContext(AccountContext);  // Hook personalizado
