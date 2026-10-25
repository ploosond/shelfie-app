export const createBooksSlice = (set) => ({
  books: [],
  isLoading: false,
  error: null,
  fetchBooks: async () => {
    try {
    } catch (error) {
      console.log("Failed books fetch", error.message);
    }
  },
  fetchBook: async () => {
    try {
    } catch (error) {
      console.log("Failed book fetch", error.message);
    }
  },
  createBook: async (data) => {
    try {
    } catch (error) {
      console.log("Failed book create", error.message);
    }
  },
  deleteBook: async (id) => {
    try {
    } catch (error) {
      console.log("Failed book delete", error.message);
    }
  },
});
