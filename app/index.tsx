import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RandomPhrases from "../components/random-phrases-homescreen";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <View style={{ flex: 0.4 }} />
      <View>
        <Pressable
          style={({ pressed }) => [
            pressed && {
              transform: [{ scale: 0.96 }],
            },
          ]}
          onPress={() => router.push("NextScreen")} //Change this!!!
        >
          <LinearGradient
            colors={["rgba(184, 134, 11, 0.05)", "rgba(184, 134, 11, 0.2)"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <RandomPhrases />
          </LinearGradient>
        </Pressable>
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
