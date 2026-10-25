import {
  useColorScheme,
  ActivityIndicator as NativeActivityIndicator,
} from "react-native";
import { Colors } from "../constants/Colors";

export const ActivityIndicator = (props) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return <NativeActivityIndicator size="large" color={theme.text} {...props} />;
};
