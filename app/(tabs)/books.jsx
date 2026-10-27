import { FlatList, StyleSheet, Pressable } from "react-native";

import { View, Text, Spacer, Card } from "../../components";
import { useEffect } from "react";
import { useAppStore } from "../../store/useAppStore";
import { Colors } from "../../constants/Colors";

const Books = () => {
  const { books, fetchBooks } = useAppStore();

  useEffect(() => {
    fetchBooks();
  }, [books, fetchBooks]);

  console.log(books);
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
          <Pressable>
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
