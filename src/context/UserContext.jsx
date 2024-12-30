import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Manage user state

  const login = (userData) => setUser(userData); // Update user data
  const logout = () => {
    setUser(null);
    localStorage.removeItem('access_token'); // Optionally clear token
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
