const { StyleSheet } = require("react-native");
import { Link } from "expo-router";
import { View, Text, Spacer, Logo } from "../components";
import { useAuth } from "../store/useAuth";

const Home = () => {
  const user = useAuth((state) => state.user);
  const isLogged = user !== null;
  return (
    <View style={styles.container}>
      <Logo />
      <Spacer height={20} />
      <Text style={styles.title} title={true}>
        The Number 1
      </Text>
      <Spacer height={10} />
      <Text>Reading List App</Text>
      <Spacer />
      <Link style={styles.link} href={"/login"}>
        <Text>Login Page</Text>
      </Link>
      <Link style={styles.link} href={"/register"}>
        <Text>Register Page</Text>
      </Link>
      <Link style={styles.link} href={isLogged ? "/profile" : "/login"}>
        <Text>Profile Page</Text>
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
