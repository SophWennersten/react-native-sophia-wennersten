import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import RandomPhrases from "../components/random-phrases-homescreen";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && {
            transform: [{ scale: 0.96 }],
          },
        ]}
        onPress={() => router.push("NextScreen")} //Change this!!!
      >
        <RandomPhrases />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
