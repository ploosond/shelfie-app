import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../store/useAuth";
import { GuestOnly } from "../../components/auth/GuestOnly";

const AuthLayout = () => {
  const user = useAuth((state) => state.user);
  console.log(user);
  return (
    <GuestOnly>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          animation: "none",
          headerShown: false,
        }}
      ></Stack>
    </GuestOnly>
  );
};

export default AuthLayout;
