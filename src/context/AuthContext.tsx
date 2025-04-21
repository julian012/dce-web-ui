// context/AuthContext.tsx
import { createContext, useContext, ReactNode, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const login = (email: string, password: string) => {
    // Lógica de autenticación real iría aquí
    setIsAuthenticated(true);
  };

  const logout = () => setIsAuthenticated(false);

  const signup = (email: string, password: string) => {
    // Aquí iría tu lógica real de registro (ej: llamada a API)
    console.log('Registrando:', email);
    setIsAuthenticated(true); // Simulamos registro exitoso
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}

