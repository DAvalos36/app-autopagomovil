import { StyleSheet, View, ImageBackground } from 'react-native'
import {Button, GridList, Card, Text} from 'react-native-ui-lib'
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
  const {i} = nav.route.params

  if (tiendaContext != null){
    const producto = tiendaContext.productos[i]
  }


  const [cantidad, setCantidad] = useState(tiendaContext?.productos[i].cantidad)
  const [escanear, setEscanear] = useState(false)
  const [total, setTotal] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={require('../assets/bgInicio.png')}  style={{flex:10}}> */}
        <SvgUri uri='https://dthbdxcuhfeitijisuta.supabase.co/storage/v1/object/public/productos/FondoPrincipal.svg'
          height='100%' 
          width={undefined}
          style={StyleSheet.absoluteFillObject}
          />
        <Text>{tiendaContext?.productos[i].productos_info.nombre}</Text>
        <Button label='KKAKSDKKSAKDSKAS' />
      {/* </ImageBackground> */}
    </SafeAreaView>
  )
}

export default VerProducto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenedorTexto:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  }
})