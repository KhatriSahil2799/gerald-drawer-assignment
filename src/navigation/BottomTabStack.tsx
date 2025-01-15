import { StyleSheet } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Contact from "../screens/Contact";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { TOP_DRAWER_Y_TRANSLATION_IN_PX } from "../utils/constants";

const Tab = createBottomTabNavigator();

function BottomTabStack() {
  const progress = useDrawerProgress();
  const { top } = useSafeAreaInsets();

  const contianerStyle = useAnimatedStyle(() => {
    return {
        transform: [
          { translateX: interpolate(progress.value, [0, 1], [0, 75]) },
          {
            rotateZ: `${interpolate(progress.value, [0, 1], [0, -10])}deg`,
          },
          {
            scale: interpolate(progress.value, [0, 1], [1, 0.95]),
          },
        ],
        borderTopStartRadius: interpolate(
          progress.value,
          [0, 0.3, 1],
          [0, 28, 28]
        ),
    };
  });

  const boxStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        progress.value,
        [0, 1],
        [0, top + TOP_DRAWER_Y_TRANSLATION_IN_PX]
      ),
    };
  });

  return (
    <>
      <Animated.View style={[styles.box, boxStyle]} />

      <Animated.View style={[styles.container, contianerStyle]}>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    overflow: "hidden",
    borderTopStartRadius: 16,
  },
});

export default BottomTabStack;
