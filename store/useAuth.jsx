import { ID } from "appwrite";
import { create } from "zustand";
import { account } from "../lib/appwrite";

export const useAuth = create((set, get) => ({
  user: null,
  register: async (email, password) => {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
      });
      await get().login(email, password);
    } catch (error) {
      console.log("Register failed!", error.message);
      throw error;
    }
  },
  login: async (email, password) => {
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });
      const user = await account.get();
      set({ user });
    } catch (error) {
      console.log("Login failed:", error.message);
      throw error;
    }
  },
  logout: async () => {
    try {
      await account.deleteSession({ sessionId: "current" });
      set({ user: null });
    } catch (error) {
      console.log("Logout failed:", error.message);
      throw error;
    }
  },
}));
