import { StyleSheet } from 'react-native'
import { Button, Text, Incubator, Colors, Image } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useContext } from 'react'
import { supabase } from '../supabase'

import { TiendaContext } from '../context/TiendaContext'


const IngresarTienda = () => {
  const tiendaContext = useContext(TiendaContext)

  const solicitarTienda = async (id: string) => {
    const { data, error } = await supabase
      .from('tiendas')
      .select('*')
      .eq('id', id)
    if (error) {
      alert('ocurrio un error')
      console.log(error)
    }
    else {
      if (data?.length == 0) {
        alert('No se encontro la tienda')
      }
      else {
        tiendaContext?.setTienda(data[0].id)
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/EscanearTienda.png')}  />

      <Button label='Entrar' onPress={() => void tiendaContext?.setTienda('idk')} />
    </SafeAreaView>
  )
}
export default IngresarTienda
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