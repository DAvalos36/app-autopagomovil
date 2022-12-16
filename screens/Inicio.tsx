import { StyleSheet, View, ImageBackground } from 'react-native'
import {Button, GridList, Card, Text} from 'react-native-ui-lib'
import { BarCodeScanner, BarCodeScannerResult, requestPermissionsAsync } from 'expo-barcode-scanner';
import { SvgUri } from 'react-native-svg';
import React, { useState, useEffect, useContext } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';

import { StackVerProductoNavigationProps } from '../Navigation/StackVerProducto';
import HeaderInicio from '../components/HeaderInicio';
import { SafeAreaView } from 'react-native-safe-area-context'
import CartasProducto from '../components/CartasProducto'
import { COLORES } from '../Colores';
import PermisoQR from './PermisoQR';
import PantallaCamaraQR from './PantallaCamaraQR';
import { supabase } from '../supabase';

import { ProductoTienda } from '../types';

import { TiendaContext } from '../context/TiendaContext'

type info = {
  id: number,
  data?: string
}


const Inicio = ({navigation}: {navigation: DrawerNavigationProp<any>}) => {
  const nv = useNavigation<StackVerProductoNavigationProps>()
  const tiendaContext = useContext(TiendaContext)

  const [permiso, setPermiso] = useState(false)
  const [escanear, setEscanear] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    void solicitarPermiso()
    calcularTotal()
  }, [tiendaContext?.productos])
  

  const solicitarPermiso = async () => {
    const { status } = await requestPermissionsAsync()
    if(status === 'granted'){
      setPermiso(true)
    }
  }

  const resultadoEscaneo = ({ type, data }: BarCodeScannerResult) => {
    setEscanear(false)
    peticionProducto(data)
  };


  const peticionProducto = async (idProducto: string) => {
    let { data: tienda_productos, error } = await supabase
    .from('tienda_productos')
    .select(`
      id,
      precio,
      existe,
      productos_info (
        codigo,
        nombre,
        descripcion,
        link_img
      )
    `).eq('tienda', tiendaContext?.tiendaId)
    .eq('producto', idProducto)
    
    const info = tienda_productos as ProductoTienda[]

    if (info.length === 1){
      info[0].cantidad = 1
      tiendaContext?.insertarProducto(info[0])
      nv.navigate('VerProducto', {i: info.length - 1})
    }
    else {
      alert('No se encontro el producto; intente de nuevo')
    }

    console.log("Error: ", error)
    console.log("===Tienda_productos uwu===", info)


  }

  const calcularTotal = () => {
    let total = 0
    tiendaContext?.productos.forEach((producto) => {
      total += producto.precio * producto.cantidad!
    })
    setTotal(total)
  }

  const cancelar = () => {
    tiendaContext?.eliminarTodosProductos()
    void tiendaContext?.setTienda('')
  }

  const irAProducto = (i: number): void => {
    nv.navigate('VerProducto', {i})
  }

  if(!permiso){
    return <PermisoQR solicitarPermiso={solicitarPermiso} />
  }

  if (escanear){
    return <PantallaCamaraQR texto='Escanea codigo de barras del producto' contextoEscanear={setEscanear} resultado={resultadoEscaneo} />
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ImageBackground source={require('../assets/bgInicio.png')}  style={{flex:10}}> */}
      <View style={{flex:10}}>
        <SvgUri uri='https://dthbdxcuhfeitijisuta.supabase.co/storage/v1/object/public/productos/FondoPrincipal.svg'
          width='100%'
          height='100%' 
          style={StyleSheet.absoluteFillObject}
          />
        <HeaderInicio navigation={navigation} contextoEscanear={setEscanear}/>
        {/* Aqui Deben De Ir Las Tarjetas De Productos Agregados */}
        <GridList style={{flex: 1}} listPadding={20} numColumns={2} data={tiendaContext?.productos} renderItem={({item, index}) => <CartasProducto index={index} item={item} funcionIr={irAProducto}/> } />
      </View>
      {/* </ImageBackground> */}
      <View style={{flex: 2}}>
        <View style={ styles.contenedorTexto }>
          <View style={{alignItems: 'center'}}>
            <Text text60 color={COLORES.textoPrimario}>Num Productos: </Text>
            <Text text60 color='black'>{tiendaContext?.productos.length}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text text60 color={COLORES.textoPrimario}>Total: </Text>
            <Text text60 color='black'>${total.toFixed(2)}</Text>
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: 20 }}>
          <View style={{flex: 2, paddingHorizontal: 2}}>
            {/* PENDIENTE: agrandar tamaño de texto en botones */}
            <Button label="Pagar" borderRadius={5} backgroundColor={COLORES.botonPrimario} />
          </View>
          <View style={{flex: 1, paddingHorizontal: 3}}>
            <Button label="Cancelar"  borderRadius={5} backgroundColor={COLORES.botonSecundario} onPress={ cancelar }  />
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