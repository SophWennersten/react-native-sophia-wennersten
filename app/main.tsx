import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HapticPressable from "../components/haptic-pressable";
import RandomMessages from "../components/mainScreen/random-messages-mainScreen";

export default function MainScreen() {
  const insets = useSafeAreaInsets();

  
  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
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
