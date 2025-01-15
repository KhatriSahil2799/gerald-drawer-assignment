import { View, Text } from "react-native";
import React from "react";

import {
  createDrawerNavigator,
  useDrawerProgress,
} from "@react-navigation/drawer";
import TabStack from "./TabStack";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={DrawerComponent}
      screenOptions={{
        drawerType: "front",
        overlayColor: "transparent",
        headerShown: false,
        drawerStyle: {
          width: 180,
        },
      }}
    >
      <Drawer.Screen name="TabStack" component={TabStack} />
    </Drawer.Navigator>
  );
}

const AnimatedDrawerComponet = () => {
  const progress = useDrawerProgress();

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: interpolate(progress.value, [0, 1], [0, 70]) },
        // {
        //   rotateZ: `${interpolate(progress.value, [0, 1], [0, -15])}deg`,
        // },
      ],
    };
  });

  return (
    <Animated.View style={[{ flex: 1 }, style]}>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          justifyContent: "center",
        }}
      >
        <Text>Drawer</Text>
      </View>
    </Animated.View>
  );
};

const DrawerComponent = (props) => {
  return (
    // <DrawerContentScrollView>
    <AnimatedDrawerComponet />
    // </DrawerContentScrollView>
  );
};

export default DrawerStack;
