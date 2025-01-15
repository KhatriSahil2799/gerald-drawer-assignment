import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppNavigationProp } from "../utils/types";
import Header from "../components/Header";

const Contact  = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation<AppNavigationProp>();
  
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Header title="Contact" />
      <View style={styles.content}>
        <Text>Contact Screen</Text>
        <TouchableOpacity style={styles.button} onPress={navigation.goBack}>
          <Text style={styles.text}>Go back to Home Stack</Text>
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
    rowGap:16,
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