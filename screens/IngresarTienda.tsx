import { StyleSheet } from 'react-native'
import { Button, Text, Incubator, Colors } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useContext } from 'react'
import { supabase } from '../supabase'

import { TiendaContext } from '../context/TiendaContext'


const IngresarTienda = () => {
  const tiendaContext = useContext(TiendaContext)

  return (
    <SafeAreaView style={styles.container}>


      <Button label='Entrar' onPress={() => void tiendaContext?.setTienda('idk')} />
    </SafeAreaView>
  )
}
export default IngresarTienda
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputs: {
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
    // marginBottom: 10,
  }
})