import { StyleSheet, View, TouchableOpacity } from 'react-native'
import {Button, GridList, Card, Text} from 'react-native-ui-lib'
import React from 'react'

import {DrawerNavigationProp} from '@react-navigation/drawer';
import HeaderInicio from '../components/HeaderInicio';
import { SafeAreaView } from 'react-native-safe-area-context'
import CartasProducto from '../components/CartasProducto'
import { COLORES } from '../Colores';

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
        <GridList listPadding={20} numColumns={2} data={[{id:1},{id:2},{id:3},{id:4},{id: 200}]} renderItem={CartasProducto} />
      </View>
      <View style={{flex: 2}}>
        <View style={ styles.contenedorTexto }>
          <View style={{flexDirection: 'row'}}>
            <Text text50 color={COLORES.botonPrimario}>Num Productos: </Text>
            <Text text50 color={COLORES.botonPrimario}>3</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text text50 color={COLORES.botonPrimario}>Total: </Text>
            <Text text50 color={COLORES.botonPrimario}>$20</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 20 }}>
          <View style={{flex: 2, paddingHorizontal: 2}}>
            {/* PENDIENTE: agrandar tamaño de texto en botones */}
            <Button label="Pagar" borderRadius={5} backgroundColor={COLORES.botonPrimario} />
          </View>
          <View style={{flex: 1, paddingHorizontal: 3}}>
            <Button label="Cancelar"  borderRadius={5} backgroundColor={COLORES.botonSecundario} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Inicio

const styles = StyleSheet.create({
  contenedorTexto:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 3,
    borderTopColor: COLORES.botonPrimario
  }
})