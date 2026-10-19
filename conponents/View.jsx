import { View as NativeView, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const View = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <NativeView
      style={[{ backgroundColor: theme.background }, style]}
      {...props}
    />
  );
};

export default View;
