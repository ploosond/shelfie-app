import { useRouter } from "expo-router";
import { useAuth } from "../../store/useAuth";
import { useEffect } from "react";
import { Text } from "../Text";

export const GuestOnly = ({ children }) => {
  const { user, authChecked } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authChecked && user !== null) {
      router.replace("/profile");
    }
  }, [user, authChecked]);

  if (!authChecked || user) {
    <Text>Loading</Text>;
  }

  return children;
};
