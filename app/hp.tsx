import React from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useSpells from "../hooks/useSpells";

export default function App() {
  const insets = useSafeAreaInsets();
  const { data: Spells, loading, error } = useSpells();

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Spells data:", Spells);
  console.log("Spells length:", Spells?.length);

  if (loading)
    return (
      <View style={[{ paddingTop: insets.top }]}>
        <ActivityIndicator size="large" />
      </View>
    );
  if (error)
    return (
      <View style={[{ paddingTop: insets.top }]}>
        <Text>Error: {error}</Text>
      </View>
    );

  return (
    <ScrollView>
      <View style={[{ paddingTop: insets.top }]}>
        {Spells?.map((item, index) => (
          <View key={item.id} style={styles.container}>
            <Text style={styles.header}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#B8860B",
    borderWidth: 1,
    margin: 20,
    borderRadius: 8,
    padding: 2,
  },
  header: {
    color: "#B8860B",
    fontFamily: "GermaniaOne",
    fontSize: 30,
    textAlign: "center",
    paddingBottom: 8,
  },
  description: {
    color: "#B8860B",
    textAlign: "center",
    fontSize: 14,
    paddingBottom: 5,
  },
});
