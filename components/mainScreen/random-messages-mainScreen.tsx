import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MockedMessages } from "../../data/dailyRealitycheck";

export default function RandomMessages() {
  const [messagesToUse] = useState(MockedMessages);
  const pickedMessage =
    messagesToUse[Math.floor(Math.random() * messagesToUse.length)];
  return (
    <View>
      <Text style={styles.messageText}> {pickedMessage.messages}</Text>
      <Text style={styles.vibeText}> Vibe: {pickedMessage.vibe}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageText: {
    color: "#B8860B",
    fontFamily: "GermaniaOne",
    fontSize: 40,
    textAlign: "center",
    margin: 20,
  },
  vibeText: {
    color: "#B8860B",
    fontFamily: "GermaniaOne",
    fontSize: 10,
    textAlign: "left",
    margin: 10,
  },
});
