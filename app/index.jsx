const { StyleSheet } = require("react-native");
import { Link } from "expo-router";
import View from "../components/View";
import Logo from "../components/Logo";
import Space from "../components/Space";
import Text from "../components/Text";

const Home = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Space height={20} />
      <Text style={styles.title} title={true}>
        The Number 1
      </Text>
      <Space height={10} />
      <Text>Reading List App</Text>
      <Space />
      <Link style={styles.link} href={"/about"}>
        <Text>About Page</Text>
      </Link>
      <Link style={styles.link} href={"/contact"}>
        <Text>Contact Page</Text>
      </Link>
    </View>
  );
};

export default Home;
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
