import { StyleSheet } from "react-native";

import { View, Text, Spacer, Pressable } from "../../components";
import { useAppStore } from "../../store/useAppStore";

const Profile = () => {
  const user = useAppStore((state) => state.user);
  const logout = useAppStore((state) => state.logout);
  return (
    <View style={styles.container}>
      <Text title={true} style={styles.heading}>
        {user?.email}
      </Text>
      <Spacer />

      <Text>Time to start reading some books...</Text>
      <Spacer />
      <Pressable onPress={logout}>
        <Text style={{ color: "#f2f2f2" }}>Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
