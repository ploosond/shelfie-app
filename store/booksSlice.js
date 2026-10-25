import { ID, Permission, Query } from "appwrite";
import { DATABASE_ID, TABLE_ID, tablesDB } from "../lib/appwrite";
import { Role } from "react-native-appwrite";

export const createBooksSlice = (set, get) => ({
  books: [],
  isLoading: false,
  error: null,
  fetchBooksById: async () => {
    try {
    } catch (error) {
      console.log("Failed books fetch  by Id", error.message);
    }
  },
  fetchBooks: async () => {
    try {
      const user = get().user;
      const books = await tablesDB.listRows({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        queries: [Query.equal("userId", user.$id)],
      });
      set({ books: books.rows });
    } catch (error) {
      console.log("Failed books fetch", error.message);
      throw error;
    }
  },
  createBook: async (data) => {
    set({ isLoading: true });
    try {
      const user = get().user;
      await tablesDB.createRow({
        databaseId: DATABASE_ID,
        tableId: TABLE_ID,
        rowId: ID.unique(),
        data: { ...data, userId: user.$id },
        permission: [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      });
    } catch (error) {
      console.log("Failed book create", error.message);
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  deleteBook: async (id) => {
    try {
    } catch (error) {
      console.log("Failed book delete", error.message);
    }
  },
});
