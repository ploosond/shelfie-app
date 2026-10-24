import { useState } from "react";
import { createContext } from "react";
import { account } from "../lib/appwrite";
import { ID } from "appwrite";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      const user = await account.get();
      setUser(user);
    } catch (error) {
      console.log("Login failed:", error.message);
    }
  };
  const register = async (email, password) => {
    try {
      await account.create({
        userId: ID.unique(),
        email: email,
        password: password,
      });
      await login(email, password);
    } catch (error) {
      console.log("Registration faield:", error.message);
    }
  };
  const logout = async () => {
    try {
      await account.deleteSession({ sessionId: "current" });
      setUser(null);
    } catch (error) {
      console.log("Logout failed:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
