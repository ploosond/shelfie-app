import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../hooks/useAuth";

const AuthLayout = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          animation: "none",
          headerShown: false,
        }}
      ></Stack>
    </>
  );
};

export default AuthLayout;
