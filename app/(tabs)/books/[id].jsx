import { StyleSheet } from "react-native";
import {
  Text,
  View,
  Pressable,
  Card,
  Spacer,
  ActivityIndicator,
} from "../../../components";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useAppStore } from "../../../store/useAppStore";
import { useEffect } from "react";
import { Text as NativeText } from "react-native";
import { Colors } from "../../../constants/Colors";

const Book = () => {
  const { id } = useLocalSearchParams();
  const selectedBook = useAppStore((state) => state.selectedBook);
  const fetchBooksById = useAppStore((state) => state.fetchBooksById);
  const deleteBook = useAppStore((state) => state.deleteBook);
  const router = useRouter();

  const handleDelete = async () => {
    await deleteBook(id);
    router.replace("/books");
  };

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
      <Pressable style={styles.delete} onPress={handleDelete}>
        <NativeText style={{ color: "#fff", textAlign: "center" }}>
          Delete Book
        </NativeText>
      </Pressable>
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
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
});
