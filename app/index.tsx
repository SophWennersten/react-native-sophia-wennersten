import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HapticPressable from "../components/haptic-pressable";
import RandomPhrases from "../components/homeScreen/random-phrases-homescreen";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={{ flex: 0.4 }} />
      <View>
        <HapticPressable href="/main">
          <RandomPhrases />
        </HapticPressable>

        <HapticPressable href="/hp">
          <Text style={styles.buttonContent}>Spells if needed</Text>
        </HapticPressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  mainContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderWidth: 2,
    borderColor: "#B8860B",
    backgroundColor: "transparent",
    margin: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonContent: {
    flex: 0,
    color: "#B8860B",
    fontFamily: "GermaniaOne",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center",
    margin: 10,
  },
});
