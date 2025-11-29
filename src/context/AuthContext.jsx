import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  
  // Load saved user from localStorage on first load
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("authUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Login function
  function login(userData) {
    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
  }

  // Logout function
  function logout() {
    setUser(null);
    localStorage.removeItem("authUser");
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
