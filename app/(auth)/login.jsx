import { StyleSheet } from "react-native";
import { View, Spacer, Text } from "../../components";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import Pressable from "../../components/Pressable";

const Login = () => {
  const handleSubmit = () => {
    console.log("register form submitted");
  };
  return (
    <View style={styles.container}>
      <Spacer />
      <Text title={true} style={styles.title}>
        Login to Your Account
      </Text>
      <Pressable onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </Pressable>
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
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
});

export default Login;
