import "./gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./src/navigation";

export default function AnimatedStyleUpdateExample(props) {
  console.log("🚀 ~ AnimatedStyleUpdateExample ~ props:", props);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
