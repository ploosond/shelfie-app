import { StyleSheet } from "react-native";

import { View, Text, Spacer } from "../../components";

const Create = () => {
  return (
    <View style={styles.container}>
      <Text title={true} style={styles.heading}>
        Add a New Book
      </Text>
      <Spacer />
    </View>
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
});
