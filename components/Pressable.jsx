import { Pressable as NativePressable, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export const Pressable = ({ style, ...props }) => {
  return (
    <NativePressable
      style={({ pressed }) => [styles.btn, pressed && styles.pressed, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 6,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});

