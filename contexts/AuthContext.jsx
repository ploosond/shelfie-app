import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = async (email, password) => {};
  const register = async (email, password) => {};
  const logout = async () => {};

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
