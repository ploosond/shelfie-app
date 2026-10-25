import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../store/useAuth";
import { useEffect } from "react";
import { ActivityIndicator, View } from "../components";

const ScreenLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const user = useAuth((state) => state.user);
  const authChecked = useAuth((state) => state.authChecked);
  const initAuth = useAuth((state) => state.initAuth);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  if (!authChecked) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  const isLogged = user !== null;

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
        <Stack.Protected guard={!isLogged}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={isLogged}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack.Protected>
      </Stack>
    </>
  );
};

export default ScreenLayout;
const styles = StyleSheet.create({});
