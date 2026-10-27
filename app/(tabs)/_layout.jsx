import { Tabs } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";
import Ionicons from "@react-native-vector-icons/ionicons";

const TabsLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <Tabs
        initialRouteName="profile"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90,
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
                name={focused ? "book" : "book-outline"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
                name={focused ? "create" : "create"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
                name={focused ? "person" : "person-outline"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="books/[id]"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TabsLayout;
