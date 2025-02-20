import { useContext, createContext, useState } from 'react';

// Criação do contexto de autenticação
const AuthContext = createContext();

// Provedor de contexto de autenticação
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Função para fazer login
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Armazenar no localStorage
  };

  // Função para fazer logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remover do localStorage
  };

  // Função para verificar se o usuário está autenticado
  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto de autenticação
export function useAuth() {
  return useContext(AuthContext);
}