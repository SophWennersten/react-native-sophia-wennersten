import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import React, { PropsWithChildren } from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function Background(props: PropsWithChildren) {
  return (
    <ImageBackground
      source={require("../assets/images/img-stars.jpg")}
      style={{ flex: 1 }}
    >
      <LottieView
        source={require("../assets/animations/Stars.json")}
        autoPlay
        loop
        style={styles.lottie}
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.2)"]}
        style={{ flex: 1 }}
      >
        {props.children}
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  lottie: {
    position: "absolute",
    width: "150%",
    height: "150%",
    zIndex: 1,
    opacity: 0.3,
  },
});
