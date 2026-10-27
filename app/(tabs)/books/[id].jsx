import { StyleSheet } from "react-native";
import { Text, View, Pressable, Card, Spacer } from "../../../components";
import { useLocalSearchParams } from "expo-router";

const Book = () => {
  const { id } = useLocalSearchParams();
  return (
    <View safe={true} style={styles.container}>
      <Text>Book Details: {id}</Text>
    </View>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
});
