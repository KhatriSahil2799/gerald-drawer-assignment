import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import Contact from '../screens/Contact';

const Tab = createBottomTabNavigator();

function BottomTabStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Contact" component={Contact} />
    </Tab.Navigator>
  );
}
 

export default BottomTabStack