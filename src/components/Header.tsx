import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProp } from '../utils/types'

const Header = () => {
    const navigation = useNavigation<AppNavigationProp>()
    
  return (
    <View >
      <Text onPress={navigation.openDrawer}>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

})