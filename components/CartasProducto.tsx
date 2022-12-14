import { StyleSheet, View } from 'react-native'
import { Text, Image, Badge } from 'react-native-ui-lib'
import React from 'react'
import { COLORES } from '../Colores'

type Props = {}

const CartasProducto = ({item, index}: {item: {id: number}, index: number}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text text60>Titulo</Text>
        <Image style={styles.imgCar} source={{uri: 'https://assets.stickpng.com/images/58718a4a7b7f6103e35c6ce4.png'}} />
        <Badge label={`$ ${item.id}`} backgroundColor={COLORES.botonPrimario} />
      </View>
      
      <Badge label='11' backgroundColor={COLORES.botonPrimario} containerStyle={{ position: 'absolute', top: -4, right: -4 }} />
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
