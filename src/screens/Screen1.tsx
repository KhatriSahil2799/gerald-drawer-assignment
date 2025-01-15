import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "../utils/types";

const Screen1 = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<AppNavigationProp>();

  const onPress = () =>
    navigation.navigate("BottomTabStack", {
      screen: "Home",
      params: {
        screen: "Screen2",
      },
    });

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Header title="Screen 1" />
      <View style={styles.content}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>Go to Screen 2</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding:8,
    paddingHorizontal:16,
    borderRadius:16,
    backgroundColor:'#0000FFAA'
  },
  text:{
    color:'#fff'
  }
});

export default Screen1;
