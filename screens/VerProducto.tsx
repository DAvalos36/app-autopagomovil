import { StyleSheet, View, ImageBackground } from 'react-native'
import { Button, Image, Badge, Text } from 'react-native-ui-lib'
import { SvgUri } from 'react-native-svg';
import React, { useState, useEffect, useContext } from 'react'

import { PantallaVerProductoProps } from '../Navigation/StackVerProducto';
import { SafeAreaView } from 'react-native-safe-area-context'
import CartasProducto from '../components/CartasProducto'
import { COLORES } from '../Colores';

import { ProductoTienda } from '../types';

import { TiendaContext } from '../context/TiendaContext'

type info = {
  id: number,
  data?: string
}


const VerProducto = (nav: PantallaVerProductoProps): JSX.Element => {
  const tiendaContext = useContext(TiendaContext)
  const { i } = nav.route.params

  const [cantidad, setCantidad] = useState(tiendaContext?.productos[i].cantidad)
  

  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={require('../assets/bgInicio.png')}  style={{flex:10}}> */}
      <SvgUri uri='https://dthbdxcuhfeitijisuta.supabase.co/storage/v1/object/public/productos/FondoPrincipal.svg'
        height='100%'
        width={undefined}
        style={StyleSheet.absoluteFillObject}
      />
      <View>
        <Image source={ require('../assets/LogoInicio.png') } style={{ width: 60, height: 40 }} />
      </View>

      <View style={styles.tarjeta} >
        <Text text30>{tiendaContext?.productos[i].productos_info.nombre}</Text>
        <Image style={styles.imgCar} source={{ uri: tiendaContext?.productos[i].productos_info.link_img }} />
        <Text text60>${tiendaContext?.productos[i].precio.toFixed(2)}</Text>
        <Text >{tiendaContext?.productos[i].productos_info.descripcion}</Text>
        <View style={styles.containerBotonesTarjeta}>
          <Button onPress={() => setCantidad(cantidad as number - 1)} label='-' outline outlineColor={COLORES.botonPrimario} outlineWidth={2} activeBackgroundColor='white' round disabled={cantidad as number <= 1} />
          <Badge label={cantidad?.toString()} backgroundColor={COLORES.botonPrimario} size={50} />
          <Button onPress={() => setCantidad(cantidad as number + 1)} label='+' outline outlineColor={COLORES.botonPrimario} outlineWidth={2} activeBackgroundColor='white' round />
        </View>
      </View>

      <View>
        <Button label='Guardar' />
        <Button label='Eliminar' />
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  )
}

export default VerProducto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contenedorTexto: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  contenedorSuperior: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tarjeta: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderColor: '#F2A007',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10
  },
  containerBotonesTarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '20%',
    marginTop: 10
  },
  imgCar:{
    width: '90%',
    aspectRatio: 1,
    height: undefined,
    borderRadius: 8,
    marginVertical: 3
  }
})