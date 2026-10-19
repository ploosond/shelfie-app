import { Image, useColorScheme } from "react-native";
import lightLogo from "../assets/img/logo_light.png";
import darkLogo from "../assets/img/logo_dark.png";

const Logo = (props) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "light" ? lightLogo : darkLogo;
  return <Image source={logo} {...props} />;
};

export default Logo;
