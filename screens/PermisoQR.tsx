import { StyleSheet } from 'react-native'
import { Button, Text, Colors, Image } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORES } from '../Colores';

interface props {
  solicitarPermiso: () => void
}

const PermisoQR = (props: props) => {

  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons name="camera-off" size={100} color="black" />
      <Text text70>Es necesario brindar permisos para utilizar la aplicacion</Text>
      <Button outline outlineColor={COLORES.botonPrimario} outlineWidth={2} label='Solicitar' disabledBackgroundColor={Colors.$backgroundDisabled} activeBackgroundColor={Colors.$backgroundDarkActive} onPress={() => void props.solicitarPermiso()} />
    </SafeAreaView>
  )
}
export default PermisoQR
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputs: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    // marginBottom: 10,
  }
})