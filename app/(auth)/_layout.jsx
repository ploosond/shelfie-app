import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          animation: "none",
        }}
      ></Stack>
    </>
  );
};

export default AuthLayout;
