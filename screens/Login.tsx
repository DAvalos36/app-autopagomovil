import { StyleSheet } from 'react-native'
import { Button, Text, Incubator, Colors, Image } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { supabase } from '../supabase'
import { VerifyOtpParams } from '@supabase/supabase-js'
import { COLORES } from '../Colores'


const Login = () => {
  const [cargando, setCargando] = useState<boolean>(false)
  const [esperando, setEsperando] = useState<boolean>(false)
  const [numCel, setNumCel] = useState<string>('+52')
  const [codigo, setCodigo] = useState<string>('')

  const login = async () => {
    setCargando(true)
    if (esperando){
      if (codigo.length == 6) {
        const { data, error } = await supabase.auth.verifyOtp({phone: numCel, token: codigo, type: 'sms'})
        if (error) {
          alert('ocurrio un error')
          console.log(error)
        }
        else {
          alert('Verificacion exitosa')
        }
      }
      else {
        alert('El codigo debe ser de 6 digitos')
      }
    }
    else {
      if (numCel.length == 13) {
        // setNumCel(`+52${numCel}`)
        alert(numCel)
        const { data, error } = await supabase.auth.signInWithOtp({ phone: numCel })
        if (error) {
          alert('ocurrio un error')
          console.log(error)
        }
        else {
          alert('Se envio el codigo')
          setEsperando(true)
        }
      }
      else {
        alert('El numero de celular debe ser de 10 digitos')
      }
    }
    setCargando(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/LogoFI.png')} style={{ width:70, height: 79 }} />
      <Incubator.TextField
        editable={!esperando}
        value={numCel}
        placeholder={'Numero telefonico'}
        placeholderTextColor={COLORES.textoSecundario}
        labelColor={COLORES.textoSecundario}
        floatingPlaceholder
        onChangeText={(t) => setNumCel(t)}
        enableErrors
        validate={['required', 'number', (value: string | any[]) => value.length == 13 ]}
        validationMessage={['Campo es requerido', 'Tiene que ser un numero', 'Tiene que ser de 10 digitos']}
        showCharCounter
        maxLength={13}
        style={styles.inputs}
      />
      {esperando && 
      <Incubator.TextField
        value={codigo}
        placeholder={'Codigo de verificacion'}
        placeholderTextColor={COLORES.textoSecundario}
        labelColor={COLORES.textoSecundario}
        floatingPlaceholder
        onChangeText={(t) => setCodigo(t)}
        enableErrors
        validate={['required', (value: string | any[]) => value.length == 6 ]}
        validationMessage={['Campo es requerido', 'Tiene que ser 6 digitos']}
        showCharCounter
        maxLength={6}
        style={styles.inputs}
      />
  }
      <Button outline outlineColor={COLORES.botonPrimario} outlineWidth={2} disabled={cargando} label='Enviar' disabledBackgroundColor={Colors.$backgroundDisabled} activeBackgroundColor={Colors.$backgroundDarkActive} onPress={() => void login()} />
    </SafeAreaView>
  )
}
export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  inputs: {
    borderBottomColor: COLORES.botonPrimario,
    borderBottomWidth: 2,
    // marginBottom: 10,
  }
})