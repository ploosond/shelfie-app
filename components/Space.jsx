import { View as NativeView } from "react-native";

const Space = ({ width = "100%", height = 40 }) => {
  return <NativeView style={{ width, height }} />;
};

export default Space;
