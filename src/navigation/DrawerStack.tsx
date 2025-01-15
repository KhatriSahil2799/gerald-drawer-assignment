import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";

import AnimatedCustomDrawer from "../components/AnimatedCustomDrawer";
import BottomTabStack from "./BottomTabStack";
import { DrawerParamList } from "../utils/types";

const SCREEN_OPTIONS: DrawerNavigationOptions = {
  drawerType: "back",
  headerShown: false,
  overlayColor: "transparent",
};

const Drawer = createDrawerNavigator<DrawerParamList>();

function DrawerStack() {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <AnimatedCustomDrawer {...props} />}
      screenOptions={{
        ...SCREEN_OPTIONS,
        drawerStyle: {
          width: width * 0.48,
        },
      }}
    >
      <Drawer.Screen name="BottomTabStack" component={BottomTabStack} />
    </Drawer.Navigator>
  );
}

export default DrawerStack;
