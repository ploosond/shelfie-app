import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import View from "../components/View";
import Text from "../components/Text";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact page</Text>
      <Link style={styles.link} href={"/"}>
        <Text>Back Home</Text>
      </Link>
    </View>
  );
};

export default Contact;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
