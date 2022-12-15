import { StyleSheet, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import { TiendaContext } from '../context/TiendaContext' 


const HeaderInicio = ({navigation, contextoEscanear}: {navigation : DrawerNavigationProp<any>, contextoEscanear: (b: boolean) => void}) => {
  const tiendaContext = useContext(TiendaContext)

  return (
    <View style={{  backgroundColor:'transparent', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10}}>
      <Ionicons name="barcode-outline" size={40} color='black' onPress={() => void contextoEscanear(true)} />
      <Image source={ require('../assets/LogoInicio.png') } style={{ width: 60, height: 40 }} />
      <FontAwesome name="user" size={40} color='black' 
        onPress={() => {navigation.openDrawer()}}
      />
    </View>
  )
}

export default HeaderInicio

const styles = StyleSheet.create({})