import { create } from "zustand";
import { createAuthSlice } from "./authSlice";
import { createBooksSlice } from "./booksSlice";

export const useAppStore = create((...args) => ({
  ...createAuthSlice(...args),
  ...createBooksSlice(...args),
}));
