import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppNavigationProp, HomeStackParamList, RootStackParamList } from "../utils/types";

 

const Screen1 = ( ) => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<AppNavigationProp>();
 
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white", paddingTop: top }}>
        <Header />
        <Text onPress={() => navigation.jumpTo}>Screen1</Text>
      </View>
    </>
  );
};

export default Screen1;
