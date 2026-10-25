import { StyleSheet } from "react-native";

import { View, Text, Spacer, Pressable } from "../../components";
import { useAuth } from "../../store/useAuth";

const Profile = () => {
  const logout = useAuth((state) => state.logout);
  return (
    <View style={styles.container}>
      <Text title={true} style={styles.heading}>
        Your Email
      </Text>
      <Spacer />


      <Text>Time to start reading some books...</Text>
      <Spacer />
      <Pressable onPress={logout}>
        <Text style={{color: '#f2f2f2'}}>Logout</Text>
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
