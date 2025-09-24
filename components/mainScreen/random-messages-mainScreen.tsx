import { StyleSheet, Text, View } from "react-native";
import { MockedMessages } from "../../data/dailyRealitycheck";
import useDailyMessageSecureStore from "../../hooks/useDailyMessageSecureStore";

export default function RandomMessages() {
  const dailyMessage = useDailyMessageSecureStore(
    "dailyMessage",
    MockedMessages
  );

  return (
    <View>
      <Text style={styles.messageText}> {dailyMessage.messages}</Text>
      <Text style={styles.vibeText}> Vibe: {dailyMessage.vibe}</Text>
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
