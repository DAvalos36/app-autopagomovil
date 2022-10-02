import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Button} from 'react-native-ui-lib'
import React from 'react'

import {DrawerNavigationProp} from '@react-navigation/drawer';
import HeaderInicio from '../components/HeaderInicio';
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {}

const Inicio = ({navigation}: {navigation : DrawerNavigationProp<any>}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderInicio navigation={navigation}/>
      <View style={{flex:10}}>
        {/* Aqui Deben De Ir Las Tarjetas De Productos Agregados */}
        <Text>Inicio</Text>
        <TouchableOpacity ><Text>a</Text></TouchableOpacity>
      </View>
      <View style={{flex: 2}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'gray'}}>
          <View style={{flexDirection: 'row'}}>
            <Text>Num Productos: </Text>
            <Text>3</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>Total: </Text>
            <Text>$20</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
          <View style={{flex: 2, paddingHorizontal: 2}}>
            <Button label="Pagar" $backgroundDark />
          </View>
          <View style={{flex: 1, paddingHorizontal: 3}}>
            <Button label="Cancelar"  style={{backgroundColor: 'red'}}/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Inicio

const styles = StyleSheet.create({})