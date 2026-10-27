import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAppStore } from "../../store/useAppStore";

const AuthLayout = () => {
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
