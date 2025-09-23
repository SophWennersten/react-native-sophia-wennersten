import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Header() {
  return (
    <SafeAreaView>
      <Pressable>
        <Text style={styles.text}>Daily Reality Check</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    color: "#B8860B",
    fontFamily: "GermaniaOne",
    textAlign: "center",
  },
});
