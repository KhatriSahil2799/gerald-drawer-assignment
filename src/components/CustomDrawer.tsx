import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React from "react";

interface MenuItem {
  label: string;
  route: keyof TabStackParamList;
  isActive?: boolean;
}

const CustomDrawer = ({ navigation, }: DrawerContentComponentProps) => {
  const menuItems: MenuItem[] = [
    { label: "Start", route: "Home", isActive: true },
    { label: "Your Cart", route: "Cart" },
    { label: "Favourites", route: "Favourites" },
    { label: "Your Orders", route: "Orders" },
  ];

  return (
    <View style={styles.drawerContainer}>
      <Text style={styles.userName}>Gerald</Text>

      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.route}
            style={[styles.menuItem, item.isActive && styles.activeMenuItem]}
            onPress={() => {
              if (item.isActive) {
                navigation.closeDrawer();
              } else {
                navigation.navigate(item.route);
              }
            }}
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
        onPress={() => navigation.navigate("SignOut")}
      >
        <Text style={styles.menuText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#13122E",
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
  },
  menuContainer: {
    marginBottom: "auto",
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  activeMenuItem: {
    backgroundColor: "#402c33",
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
  },
  activeMenuText: {
    color: "#ff5a5f",
  },
  divider: {
    height: 1,
    backgroundColor: "#fff",
    opacity: 0.3,
    marginVertical: 20,
  },
});
