import React, { createContext, useState } from 'react';

// Create the Auth Context
export const AuthContext = createContext();

// Create the Auth Provider
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // Perform login functionality
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Perform logout functionality
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
