import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStack from "./HomeStack";
import Contact from "../screens/Contact";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator();

function BottomTabStack() {
  const progress = useDrawerProgress();
  console.log("🚀 ~ BottomTabStack ~ progress:", progress.value);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: interpolate(progress.value, [0, 1], [0, 300]) },
        {
          rotateZ: `${interpolate(progress.value, [0, 1], [0, -15])}deg`,
        },
        { translateY: interpolate(progress.value, [0, 1], [0, 70]) },
      ],
    };
  });

  return (
    <Animated.View style={[style, { flex: 1 }]}>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </Animated.View>
  );
}

export default BottomTabStack;
