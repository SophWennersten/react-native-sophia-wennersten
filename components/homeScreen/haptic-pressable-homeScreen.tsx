import * as Haptics from "expo-haptics";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { ColorValue, Pressable, StyleSheet, ViewStyle } from "react-native";

interface HapticGradientButtonProps {
  href?: string;
  children: React.ReactNode;
  gradientColors?: readonly [ColorValue, ColorValue, ...ColorValue[]];
  hapticStyle?: Haptics.ImpactFeedbackStyle;
  style?: ViewStyle;
  onPress?: () => void;
  [key: string]: any;
}

export default function GetDailyRealityCheck({
  href,
  children,
  gradientColors = ["rgba(184, 134, 11, 0.05)", "rgba(184, 134, 11, 0.2)"],
  hapticStyle = Haptics.ImpactFeedbackStyle.Medium,
  style,
  onPress,
  ...pressableProps
}: HapticGradientButtonProps) {
  const handlePress = async () => {
    await Haptics.impactAsync(hapticStyle);

    if (onPress) {
      onPress();
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        pressed && {
          transform: [{ scale: 0.96 }],
        },
        style,
      ]}
      onPress={handlePress}
      {...pressableProps}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        {children}
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: "#B8860B",
    backgroundColor: "transparent",
    margin: 30,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});
