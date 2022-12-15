import { StyleSheet } from 'react-native'
import { Button, Text } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import React from 'react'

import { COLORES } from '../Colores';

interface props {
  texto: string

  resultado: (info: BarCodeScannerResult) => void
  contextoEscanear: (b: boolean) => void
}

const PantallaCamaraQR = (props: props) => {

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20 }}>
      <BarCodeScanner
        onBarCodeScanned={props.resultado}
        style={StyleSheet.absoluteFillObject} />
      <Text text50 color={COLORES.textoPrimario}>{props.texto}</Text>
      <Button label='Cancelar' backgroundColor={COLORES.botonSecundario} onPress={() => void props.contextoEscanear(false)} />
    </SafeAreaView>
  )
}
export default PantallaCamaraQR
