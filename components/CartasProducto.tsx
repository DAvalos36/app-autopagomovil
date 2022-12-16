import { StyleSheet, View } from 'react-native'
import { Text, Image, Badge } from 'react-native-ui-lib'
import React, {useContext} from 'react'
import { COLORES } from '../Colores'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import { ProductoTienda } from '../types'
import { StackVerProductoNavigationProps } from '../Navigation/StackVerProducto'
import { TiendaContext } from '../context/TiendaContext'

type Props = {}

const CartasProducto = ({item, index, funcionIr}: {item: ProductoTienda, index: number, funcionIr: (i: number) => void }) => {
  // const navigation = useNavigation<StackVerProductoNavigationProps>()
  const tiendaContext = useContext(TiendaContext)


  return (
    <TouchableOpacity >
      <TouchableOpacity style={styles.container} onPress={() => funcionIr(index) } onLongPress={() => tiendaContext?.eliminarProducto(index)} >
        <Text text60>{item.productos_info.nombre}</Text>
        <Image style={styles.imgCar} source={{uri: item.productos_info.link_img}} />
        <Badge label={`$ ${item.precio}`} backgroundColor={COLORES.botonPrimario} />
      </TouchableOpacity>
      
      <Badge label={item.cantidad?.toString()} backgroundColor={COLORES.botonPrimario} containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
    </TouchableOpacity>
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
