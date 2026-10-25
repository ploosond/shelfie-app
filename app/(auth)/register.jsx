import { StyleSheet } from "react-native";
import { View, Spacer, Text } from "../../components";
import { Link } from "expo-router";
import Pressable from "../../components/Pressable";
import TextInput from "../../components/TextInput";
import { useState } from "react";
import { useAuth } from "../../store/useAuth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = useAuth((state) => state.register);

  const handleSubmit = async () => {
    try {
      await register(email, password);
    } catch (error) {
      console.log("");
    }
  };
  return (
    <View style={styles.container}>
      <Spacer />
      <Text title={true} style={styles.title}>
        Register for an Account
      </Text>
      <TextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={{ width: "80%", marginBottom: 20 }}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
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
