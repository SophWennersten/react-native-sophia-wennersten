import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Open up App.tsx to start working on your app!
      </Text>
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
  header: {
    flex: 0,
    color: "#B8860B",
    fontFamily: "GermaniaOne",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center",
    margin: 10,
  },
});
