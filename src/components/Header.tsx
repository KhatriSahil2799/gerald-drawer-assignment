import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigationProp } from "../utils/types";
import Feather from "@expo/vector-icons/Feather";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <View style={styles.container}>
      <Feather
        name="menu"
        size={30}
        color="black"
        onPress={navigation.openDrawer}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    columnGap: 24,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "grey",
  },
});

export default Header;
