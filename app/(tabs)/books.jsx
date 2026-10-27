import { FlatList, StyleSheet, Pressable } from "react-native";

import { View, Text, Spacer, Card } from "../../components";
import { useEffect } from "react";
import { useAppStore } from "../../store/useAppStore";
import { Colors } from "../../constants/Colors";
import { DATABASE_ID, TABLE_ID, realtime } from "../../lib/appwrite";
import { useRouter } from "expo-router";

const Books = () => {
  const user = useAppStore((state) => state.user);
  const books = useAppStore((state) => state.books);
  const fetchBooks = useAppStore((state) => state.fetchBooks);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      useAppStore.setState({ books: [] });
      return;
    }

    fetchBooks();

    const channel = `tablesdb.${DATABASE_ID}.tables.${TABLE_ID}.rows`;

    const unsubscribe = realtime.subscribe(channel, (response) => {
      const { events, payload } = response;

      if (events.some((event) => event.includes(".create"))) {
        useAppStore.setState((state) => {
          if (state.books.some((book) => book.$id === payload.$id)) {
            return state;
          }

          return { books: [...state.books, payload] };
        });
      }

      if (events.some((event) => event.includes(".delete"))) {
        useAppStore.setState((state) => ({
          books: state.books.filter((book) => book.$id !== payload.$id),
        }));
      }

      if (events.some((event) => event.includes(".update"))) {
        useAppStore.setState((state) => ({
          books: state.books.map((book) =>
            book.$id === payload.$id ? payload : book,
          ),
        }));
      }
    });

    return () => unsubscribe();
  }, [user?.$id, fetchBooks]);

  return (
    <View style={styles.container} safe={true}>
      <Spacer />
      <Text title={true} style={styles.heading}>
        Your Reading List
      </Text>
      <Spacer />
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
            <Card style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>Written by {item.author}</Text>
            </Card>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "stretch",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  list: {
    marginTop: 40,
  },
  card: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 10,
    padding: 10,
    paddingLeft: 14,
    borderLeftColor: Colors.primary,
    borderLeftWidth: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
