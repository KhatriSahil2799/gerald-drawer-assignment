import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "../utils/types";

const Screen2 = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<AppNavigationProp>();
  
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Header title="Screen 2" />
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
          <Text style={styles.text}>Go to Screen 1</Text>
        </TouchableOpacity>
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

export default Screen2;
