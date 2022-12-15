import { StyleSheet } from 'react-native'
import { Button, Text, Incubator, Colors, Image } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useContext, useEffect } from 'react'
import { supabase } from '../supabase'
import { SvgUri } from 'react-native-svg'
import { BarCodeScanner, BarCodeScannerResult, requestPermissionsAsync, getPermissionsAsync } from 'expo-barcode-scanner';

import { TiendaContext } from '../context/TiendaContext'
import PermisoQR from './PermisoQR'


const IngresarTienda = () => {
  const tiendaContext = useContext(TiendaContext)
  const [escanear, setEscanear] = useState(false)
  const [permiso, setPermiso] = useState(false)

  useEffect(() => {
    void solicitarPermiso()
  }, [])

  const solicitarPermiso = async () => {
    const { status } = await requestPermissionsAsync()
    if(status === 'granted'){
      setPermiso(true)
    }
  }

  const escaneo = ({ type, data }: BarCodeScannerResult) => {
    setEscanear(false)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

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

  if(!permiso){
    return <PermisoQR solicitarPermiso={solicitarPermiso} />
  }

  if (escanear){
    return <BarCodeScanner
    onBarCodeScanned={escaneo}
    style={StyleSheet.absoluteFillObject}
  />
  }
  return (
    <SafeAreaView style={styles.container}>
      <SvgUri
        uri='https://dthbdxcuhfeitijisuta.supabase.co/storage/v1/object/public/productos/EscanearTienda.svg'
        width='80%'
        height='80%'
        onPress={() => setEscanear(true)}

      />

      {/* <Button label='Entrar' onPress={} /> */}
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