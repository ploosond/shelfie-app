import { ID } from "appwrite";
import { create } from "zustand";
import { account } from "../lib/appwrite";

export const useAuth = create((set, get) => ({
  user: null,
  error: null,
  isLoading: false,
  authChecked: false,
  initAuth: async () => {
    try {
      const user = await account.get();
      set({ user });
    } catch (error) {
      set({ user: null });
    } finally {
      set({ authChecked: true });
    }
  },
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
    console.log("1. Login started");

    set({ error: null, isLoading: true });
    try {
      console.log("2. Creating session");

      await account.createEmailPasswordSession({
        email,
        password,
      });
      console.log("3. Session created");

      const user = await account.get();
      console.log("4. User fetched");

      set({ user });
    } catch (error) {
      console.log("Login failed:", error.message);
      set({ error: error.message });
      throw error;
    } finally {
      console.log("5. Resetting loading");

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
