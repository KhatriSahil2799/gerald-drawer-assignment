import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Home Stack Types
export type HomeStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

// Bottom Tab Types
export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Contact: undefined;
};

// Drawer Types
export type DrawerParamList = {
  BottomTabStack: NavigatorScreenParams<BottomTabParamList>;
};

export type AppNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    NativeStackNavigationProp<HomeStackParamList>
  >
>;
