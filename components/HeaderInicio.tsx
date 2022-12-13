import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { COLORES } from '../Colores'


const HeaderInicio = ({navigation}: {navigation : DrawerNavigationProp<any>}) => {
  return (
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10}}>
      <Ionicons name="barcode-outline" size={40} color={COLORES.logosSuperiores} />
      <FontAwesome name="user" size={40} color={COLORES.logosSuperiores} 
        onPress={() => {navigation.openDrawer()}}
        // onPress={() => {alert('hola')}}
      />
    </View>
  )
}

export default HeaderInicio

const styles = StyleSheet.create({})