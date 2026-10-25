import { TextInput as NativeTextInput, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

export const TextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <NativeTextInput
      placeholderTextColor={theme.text}
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.text,
          padding: 20,
          borderRadius: 6,
        },
        style,
      ]}
      {...props}
    />
  );
};
