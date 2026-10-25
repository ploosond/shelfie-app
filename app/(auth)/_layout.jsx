import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAppStore } from "../../store/useAppStore";

const AuthLayout = () => {
  const user = useAppStore((state) => state.user);
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
