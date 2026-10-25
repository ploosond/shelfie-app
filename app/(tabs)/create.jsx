import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useAppStore } from "../../store/useAppStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Pressable, Spacer } from "../../components";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const createBook = useAppStore((state) => state.createBook);
  const isLoading = useAppStore((state) => state.isLoading);
  const router = useRouter();

  async function handleSubmit() {
    if (!title.trim() || !author.trim() || !description.trim()) return;

    await createBook({ title, author, description });

    setTitle("");
    setAuthor("");
    setDescription("");

    router.replace("/books");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text title={true} style={styles.heading}>
          Add a New Book
        </Text>
        <Spacer />

        <TextInput
          style={styles.input}
          placeholder="Book Title"
          value={title}
          onChangeText={setTitle}
        />
        <Spacer />

        <TextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
        />
        <Spacer />

        <TextInput
          style={styles.multiline}
          placeholder="Book Description"
          value={description}
          onChangeText={setDescription}
          multiline={true}
        />
        <Spacer />

        <Pressable onPress={handleSubmit} disabled={isLoading}>
          <Text style={{ color: "#fff" }}>
            {isLoading ? "Saving..." : "Create Book"}
          </Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  input: {
    padding: 20,
    borderRadius: 6,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
  multiline: {
    padding: 20,
    borderRadius: 6,
    minHeight: 100,
    alignSelf: "stretch",
    marginHorizontal: 40,
  },
});
