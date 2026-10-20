import { View as NativeView, useColorScheme, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

export const Card = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <NativeView
      style={[{ backgroundColor: theme.background }, styles.card, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
