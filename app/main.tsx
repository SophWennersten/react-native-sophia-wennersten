import { StyleSheet, View } from "react-native";
import HapticPressable from "../components/haptic-pressable";
import RandomMessages from "../components/mainScreen/random-messages-mainScreen";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <HapticPressable>
          <RandomMessages />
        </HapticPressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
  },
  mainContainer: {
    flex: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
});
