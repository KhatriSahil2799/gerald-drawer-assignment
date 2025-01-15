import { StyleSheet, useWindowDimensions } from "react-native";
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
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Tab = createBottomTabNavigator();

function BottomTabStack() {
  const progress = useDrawerProgress();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const contianerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // Translate the Stack by around 16% so that after rotation it doesn't interfer with drawer
        { translateX: interpolate(progress.value, [0, 1], [0, width * 0.16]) },
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
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <AntDesign name="home" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Contact"
            component={Contact}
            options={{
              tabBarIcon: ({ color, size }) => {
                return (
                  <FontAwesome6 name="contact-card" color={color} size={size} />
                );
              },
            }}
          />
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
