import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { MockedOpeningPhrases } from "../data/opening-phrases";

export default function RandomPhrases() {
  const [phrasesToUse] = useState(MockedOpeningPhrases);
  const pickedPhrase =
    phrasesToUse[Math.floor(Math.random() * phrasesToUse.length)];
  return <Text style={style.text}>{pickedPhrase.phrase}</Text>;
}

const style = StyleSheet.create({
  text: {
    flex: 0,
    color: "#B8860B",
    fontFamily: "GermaniaOne",
    fontSize: 40,
    flexWrap: "wrap",
    textAlign: "center",
    margin: 10,
  },
});
