import { StyleSheet } from "react-native";

import { View, Text, Spacer } from "../../components";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text title={true} style={styles.heading}>
        Your Email
      </Text>
      <Spacer />

      <Text>Time to start reading some books...</Text>
      <Spacer />
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
