import { StyleSheet, View, ImageBackground } from 'react-native'
import { Button, Image, Badge, Text, ButtonSize } from 'react-native-ui-lib'
import { SvgUri } from 'react-native-svg';
import { supabase } from '../supabase';
import React, { useState, useEffect, useContext } from 'react'

import { PantallaVerProductoProps } from '../Navigation/StackVerProducto';
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORES } from '../Colores';

import { ProductoTienda } from '../types';

import { TiendaContext } from '../context/TiendaContext'
import { LoggingContext } from '../context/LogginContext';



const Pagar = (): JSX.Element => {
  const tiendaContext = useContext(TiendaContext)
  const logginContext = useContext(LoggingContext)

  const [pagado, setPagado] = useState(false)

  const funcionPagar = async () => {
    console.log('pagando')
    const res = await funcionAgregarDb()
    if (res){
      setPagado(true)
      tiendaContext?.eliminarTodosProductos()
      console.log('pagado')
    }
  }

  const funcionAgregarDb = async (): Promise<boolean> => {
    const { data, error } = await supabase
      .from('venta')
      .insert({ tienda: tiendaContext?.tiendaId, usuario: logginContext?.usuario?.id })
      .select('id')
    if (error !== null) {
      console.log(error)
      alert('Ocurrio un error al guardar la venta')
      return false
    }
    console.log(data)
    const res = data as any
    const id_venta: number = res[0].id
    let info: { cantidad: number, id_tienda_producto: number, id_venta: number }[] = []
    tiendaContext?.productos.forEach((producto) => {
      info.push({ cantidad: producto.cantidad as number, id_tienda_producto: producto.id as number, id_venta: id_venta })
    })



    const resp2 = await supabase
      .from('venta_detalle')
      .insert(info)
    if (resp2.error !== null) {
      console.log(resp2.error)
      alert('Ocurrio un error al guardar productos')
      return false
    }
    console.log(resp2)
    alert('Venta guardada')
    
    return true

  }


  return (
    <SafeAreaView style={styles.container}>
      {/* <ImageBackground source={require('../assets/bgInicio.png')}  style={{flex:10}}> */}
      <SvgUri uri='https://dthbdxcuhfeitijisuta.supabase.co/storage/v1/object/public/productos/FondoPrincipal.svg'
        height='100%'
        width={undefined}
        style={StyleSheet.absoluteFillObject}
      />
      <View>
        <Image source={require('../assets/LogoInicio.png')} style={{ width: 60, height: 40 }} />
      </View>
      <Text text50>Los productos se puede pagar por medio</Text>
      <Button size={ButtonSize.large} label='Pagar con tarjeta' />
      <Button size={ButtonSize.large} label='Pago en caja' />

      <View>
        <Button disabled={pagado} activeBackgroundColor='black' label="Guardar" style={{ marginBottom: 10 }} borderRadius={5} backgroundColor={COLORES.botonPrimario} onPress={ () => void funcionPagar() } />
        {/* <Button label="Eliminar"  borderRadius={5} backgroundColor={COLORES.botonSecundario} onPress={ funcionEliminar }  /> */}
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  )
}

export default Pagar

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
  imgCar: {
    width: '90%',
    aspectRatio: 1,
    height: undefined,
    borderRadius: 8,
    marginVertical: 3
  }
})