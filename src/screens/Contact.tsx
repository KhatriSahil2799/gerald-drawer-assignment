import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppNavigationProp } from "../utils/types";
import Header from "../components/Header";

const Contact  = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<AppNavigationProp>();
  
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Header title="Screen 2" />
      <View style={styles.content}>
        <Pressable style={styles.button} onPress={navigation.goBack}>
          <Text style={styles.text}>Go back to Home Stack</Text>
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
    padding: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#0000FFAA",
  },
  text: {
    color: "#fff",
  },
});


export default Contact