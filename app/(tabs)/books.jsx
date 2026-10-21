import { StyleSheet } from "react-native";

import { View, Text, Spacer } from "../../components";

const Books = () => {
  return (
    <View style={styles.container} safe={true}>
      <Spacer />
      <Text title={true} style={styles.heading}>
        Your Reading List
      </Text>
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
});
