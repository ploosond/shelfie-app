import { StyleSheet } from "react-native";
import { View, Spacer, Text } from "../../components";
import { Link } from "expo-router";
import Pressable from "../../components/Pressable";

const Register = () => {
  const handleSubmit = () => {
    console.log("register form submitted");
  };
  return (
    <View style={styles.container}>
      <Spacer />
      <Text title={true} style={styles.title}>
        Register for an Account
      </Text>
      <Pressable onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </Pressable>
      <Spacer height={100} />
      <Link href={"/login"}>
        <Text style={{ textAlign: "center" }}>Login instead</Text>
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
});

export default Register;
