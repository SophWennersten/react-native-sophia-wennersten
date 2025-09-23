import { StyleSheet, Text, View } from "react-native";
import GetDailyRealityCheck from "../components/homeScreen/haptic-pressable-homeScreen";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <GetDailyRealityCheck>
        <Text style={{ color: "#fff" }}> BAJS</Text>;
      </GetDailyRealityCheck>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
});
