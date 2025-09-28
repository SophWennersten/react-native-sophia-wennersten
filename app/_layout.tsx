import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import Background from "../components/background";
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
    <Background>
      <Stack
        screenOptions={{
          header: () => <Header />,
          contentStyle: { backgroundColor: "transparent" },
          animation: "none",
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="main" />
        <Stack.Screen name="hp" />
      </Stack>
    </Background>
  );
}
