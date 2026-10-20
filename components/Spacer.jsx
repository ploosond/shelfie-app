import { View as NativeView } from "react-native";

export const Spacer = ({ width = "100%", height = 40 }) => {
  return <NativeView style={{ width, height }} />;
};
