import { StyleSheet, View } from "react-native";
import RandomPhrases from "../components/random-phrases-homescreen";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <RandomPhrases />
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
});
