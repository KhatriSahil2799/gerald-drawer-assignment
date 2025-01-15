import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";
 import { getActiveScreen } from "../utils/utils";
import { HomeStackParamList } from "../utils/types";

// Define menu item type based on your navigation structure
interface MenuItem {
  label: string;
  stack?: "Home"; // These are your bottom tab routes
  screen?: keyof HomeStackParamList | 'Contact'; // Optional screen within Home stack
  isActive?: boolean;
}

const CustomDrawer = ({
  navigation,
  state,
  descriptors,
}: DrawerContentComponentProps) => {
  console.log(
    "🚀 ~ CustomDrawer ~ { navigation, state,descriptors }:",
    JSON.stringify({ navigation, state, descriptors }, null, 2)
  );

  const activeScreen = getActiveScreen(state);

  const menuItems: MenuItem[] = [
    {
      label: "Home (Screen 1)",
      stack: "Home",
      screen: "Screen1",
      isActive: activeScreen === "Screen1",
    },
    {
      label: "Screen 2",
      stack: "Home",
      screen: "Screen2",
      isActive: activeScreen === "Screen2",
    },
    {
      label: "Contact",
      screen: "Contact",
      isActive: activeScreen === "Contact",
    },
  ];

  const handleNavigation = (item: MenuItem) => {
    if (item.isActive) {
      navigation.closeDrawer();
      return;
    }

    if (item.stack === "Home" && item.screen) {
      // Navigate to screens in Home stack
      navigation.navigate("BottomTabStack", {
        screen: "Home",
        params: {
          screen: item.screen,
        },
      });
    } else {
      // Navigate to direct bottom tab screens
      navigation.navigate("BottomTabStack", {
        screen: item?.screen,
      });
    }
  };

  return (
    <View style={styles.drawerContainer}>
      <Text style={styles.userName}>Gerald</Text>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={`${item?.stack}-${String(item?.screen || "")}`}
            style={[styles.menuItem, item.isActive && styles.activeMenuItem]}
            onPress={() => handleNavigation(item)}
          >
            <Text
              style={[styles.menuText, item.isActive && styles.activeMenuText]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => {
          // You might want to handle sign out logic here
          // For now, just closing the drawer
          navigation.closeDrawer();
        }}
      >
        <Text style={styles.menuText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#13122E",
  },
  userName: {
    fontSize: 28,
    marginTop:40,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center", 
  },
  menuContainer: {
    marginTop: 45,
  },
  menuItem: {
    marginVertical:8,
    borderRadius: 10,
    paddingVertical: 15, 
    paddingHorizontal: 16
  },
  activeMenuItem: {
    backgroundColor: "#402c33",
  },
  menuText: {
    fontSize: 18,
    color: "#fff",
    fontWeight:'400'
  },
  activeMenuText: {
    color: "#ff5a5f",
  },
  divider: {
    height: 1,
    opacity: 0.3,
    marginVertical: 40, 
    backgroundColor: "#fff",
  },
});

export default CustomDrawer;
