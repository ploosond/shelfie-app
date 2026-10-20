import { StyleSheet } from "react-native";
import { View, Spacer, Text } from "../../components";
import { Link } from "expo-router";

const Login = () => {
  return (
    <View style={styles.container}>
      <Spacer />
      <Text title={true} style={styles.title}>
        Login to Your Account
      </Text>
      <Spacer height={100} />
      <Link href={"/register"}>
        <Text style={{ textAlign: "center" }}>Register instead</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});

export default Login;
