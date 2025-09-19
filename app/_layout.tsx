import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { ImageBackground } from "react-native";
import Header from "../components/header";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    GermaniaOne: require("../assets/fonts/GermaniaOne-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <ImageBackground
      source={require("../assets/images/img-stars.jpg")}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.6)", "rgba(0,0,0,0.2)"]}
        style={{ flex: 1 }}
      >
        <Stack
          screenOptions={{
            header: () => <Header />,
            contentStyle: { backgroundColor: "transparent" },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="NextScreen" />
        </Stack>
      </LinearGradient>
    </ImageBackground>
  );
}
