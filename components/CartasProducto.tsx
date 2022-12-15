import { StyleSheet, View } from 'react-native'
import { Text, Image, Badge } from 'react-native-ui-lib'
import React from 'react'
import { COLORES } from '../Colores'

import { ProductoTienda } from '../types'

type Props = {}

const CartasProducto = ({item, index}: {item: ProductoTienda, index: number}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text text60>{item.productos_info.nombre}</Text>
        <Image style={styles.imgCar} source={{uri: item.productos_info.link_img}} />
        <Badge label={`$ ${item.precio}`} backgroundColor={COLORES.botonPrimario} />
      </View>
      
      <Badge label={item.cantidad?.toString()} backgroundColor={COLORES.botonPrimario} containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
    </View>
  )
}

export default CartasProducto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderColor: '#F2A007',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5
  },
  imgCar:{
    width: '80%',
    aspectRatio: 1,
    height: undefined,
    borderRadius: 8,
    marginVertical: 3
  }

})
