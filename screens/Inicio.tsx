import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {Button, GridList, Card, Image} from 'react-native-ui-lib'
import React from 'react'

import {DrawerNavigationProp} from '@react-navigation/drawer';
import HeaderInicio from '../components/HeaderInicio';
import { SafeAreaView } from 'react-native-safe-area-context'

type info = {
  id: number,
  data?: string
}
const ItemCard = ({id}: {id: number}) => {
  return (
    <Card flex centerH style={{height: 100}}>
      <Text>Nombre Producto</Text>
      <Card.Image style={{width: 50, height: 70}} source={{uri: 'https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&q=80'}}/>
      <Text>abc {id.toString()}</Text>
    </Card>
  )
}


const Inicio = ({navigation}: {navigation: DrawerNavigationProp<any>}) => {
  const renderItem = ({info}: {info: info}) => {
    <ItemCard id={info.id} />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderInicio navigation={navigation}/>
      <View style={{flex:10}}>
        {/* Aqui Deben De Ir Las Tarjetas De Productos Agregados */}
        <GridList numColumns={2} data={[{id:1},{id:2},{id:3}]} renderItem={(e) => <ItemCard key={e.index} id={e.index} />} />
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