import { StyleSheet } from "react-native";
import {
  Text,
  View,
  Pressable,
  Card,
  Spacer,
  ActivityIndicator,
} from "../../../components";
import { useLocalSearchParams } from "expo-router";
import { useAppStore } from "../../../store/useAppStore";
import { useEffect } from "react";

const Book = () => {
  const { id } = useLocalSearchParams();
  const selectedBook = useAppStore((state) => state.selectedBook);
  const fetchBooksById = useAppStore((state) => state.fetchBooksById);

  useEffect(() => {
    fetchBooksById(id);
  }, [id, fetchBooksById]);

  if (!selectedBook) {
    return (
      <View safe={true} style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View safe={true} style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>{selectedBook.title}</Text>
        <Text>Written by {selectedBook.author}</Text>
        <Spacer />

        <Text title={true}>Book description:</Text>
        <Spacer height={10} />

        <Text>{selectedBook.description}</Text>
      </Card>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20,
  },
});
