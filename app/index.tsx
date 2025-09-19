import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GetDailyRealityCheck from "../components/homeScreen/haptic-pressable-homeScreen";
import RandomPhrases from "../components/homeScreen/random-phrases-homescreen";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={{ flex: 0.4 }} />
      <View>
        <GetDailyRealityCheck href="/NextScreen">
          <RandomPhrases />
        </GetDailyRealityCheck>
      </View>
    </SafeAreaView>
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
});
