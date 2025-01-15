import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import { HomeStackParamList } from "../utils/types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
}

export default HomeStack;
