import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { ImageBackground } from "react-native";

export default function Background(props: PropsWithChildren) {
  return (
    <ImageBackground
      source={require("../assets/images/img-stars.jpg")}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.2)"]}
        style={{ flex: 1 }}
      >
        {props.children}
      </LinearGradient>
    </ImageBackground>
  );
}
