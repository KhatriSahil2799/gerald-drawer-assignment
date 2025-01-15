import React from "react";
import {
  DrawerContentComponentProps,
  useDrawerProgress,
} from "@react-navigation/drawer";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TOP_DRAWER_Y_TRANSLATION_IN_PX } from "../utils/constants";
import CustomDrawer from "./CustomDrawer";
import { StyleSheet } from "react-native";

const AnimatedCustomDrawer = (props: DrawerContentComponentProps) => {
  const progress = useDrawerProgress();
  const { top } = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, top + TOP_DRAWER_Y_TRANSLATION_IN_PX]
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <CustomDrawer {...props} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    justifyContent: "center",
    borderTopStartRadius: 16,
  },
});

export default AnimatedCustomDrawer;
