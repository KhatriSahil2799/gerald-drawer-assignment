import React from "react";
import DrawerStack from "./DrawerStack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

const MY_THEME = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#13122E", 
  },
};

const RootStack = () => {
  return (
    <NavigationContainer theme={MY_THEME}>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default RootStack;
