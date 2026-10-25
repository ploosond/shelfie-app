import { ID } from "appwrite";
import { create } from "zustand";
import { account } from "../lib/appwrite";

export const useAuth = create((set, get) => ({
  user: null,
  error: null,
  isLoading: false,
  register: async (email, password) => {
    set({ error: null, isLoading: true });
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
      });
      await get().login(email, password);
    } catch (error) {
      console.log("Register failed!", error.message);
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  login: async (email, password) => {
    set({ error: null, isLoading: true });
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });
      const user = await account.get();
      set({ user });
    } catch (error) {
      console.log("Login failed:", error.message);
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  logout: async () => {
    set({ error: null, isLoading: true });
    try {
      await account.deleteSession({ sessionId: "current" });
      set({ user: null });
    } catch (error) {
      console.log("Logout failed:", error.message);
      set({ error: error.message });
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
}));
