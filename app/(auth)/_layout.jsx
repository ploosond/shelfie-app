import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../store/useAuth";

const AuthLayout = () => {
  const user = useAuth((state) => state.user);
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
