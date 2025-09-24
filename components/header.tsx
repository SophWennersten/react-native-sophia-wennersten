import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[{ paddingTop: insets.top }]}>
      <Pressable onPress={() => router.push("/")}>
        <Text style={styles.text}>Daily Reality Check</Text>
      </Pressable>
    </View>
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
