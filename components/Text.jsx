import { Text as NativeText, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

const Text = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const textColor = title ? theme.title : theme.text;
  return <NativeText style={[{ color: textColor }, style]} {...props} />;
};

export default Text;
