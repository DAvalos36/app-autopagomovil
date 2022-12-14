import { StyleSheet, View, ImageBackground } from 'react-native'
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


const Inicio = ({navigation}: {navigation: DrawerNavigationProp<any>}) => {

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground source={require('../assets/bgInicio.png')}  style={{flex:10}}>
        <HeaderInicio navigation={navigation}/>
        {/* Aqui Deben De Ir Las Tarjetas De Productos Agregados */}
        <GridList style={{flex: 1}} listPadding={20} numColumns={2} data={[{id:1},{id:2},{id:3},{id:4},{id: 200}, {id: 201}, {id: 203}  ]} renderItem={CartasProducto} />
      </ImageBackground>
      <View style={{flex: 2}}>
        <View style={ styles.contenedorTexto }>
          <View style={{alignItems: 'center'}}>
            <Text text60 color={COLORES.textoPrimario}>Num Productos: </Text>
            <Text text60 color='black'>3</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text text60 color={COLORES.textoPrimario}>Total: </Text>
            <Text text60 color='black'>$20</Text>
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
    alignItems: 'flex-end',
  }
})