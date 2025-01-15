import { View, Text } from "react-native";
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabStack from "./TabStack";

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: "red",
              justifyContent: "center",
            }}
          >
            <Text>Drawer</Text>
          </View>
        );
      }}
      screenOptions={{
        drawerType: "front",
      }}
    >
      <Drawer.Screen name="TabStack" component={TabStack} />
    </Drawer.Navigator>
  );
}

export default DrawerStack;
