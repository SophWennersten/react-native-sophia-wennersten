import { StyleSheet, Text } from "react-native";

export default function Header() {
  return <Text style={styles.text}>Daily Reality Check</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    color: "#B8860B",
    fontFamily: "GermaniaOne",
    borderBottomColor: "#ffffff62",
    borderWidth: 1,
  },
});
