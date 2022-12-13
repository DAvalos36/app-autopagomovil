import { StyleSheet } from 'react-native'
import { Button, Text, Incubator, Colors } from 'react-native-ui-lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { supabase } from '../supabase'
import { VerifyOtpParams } from '@supabase/supabase-js'


const Login = () => {
  const [cargando, setCargando] = useState<boolean>(false)
  const [esperando, setEsperando] = useState<boolean>(false)
  const [numCel, setNumCel] = useState<string>('')
  const [codigo, setCodigo] = useState<string>('')

  const login = async () => {
    setCargando(true)
    if (esperando){
      if (codigo.length == 6) {
        const { data, error } = await supabase.auth.verifyOtp({phone: numCel, token: codigo} as VerifyOtpParams)
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
      if (numCel.length == 10) {
        setNumCel(`+52${numCel}`)
        alert(numCel)
        // const { data, error } = await supabase.auth.signInWithOtp({ phone: numCel })
        // if (error) {
        //   alert('ocurrio un error')
        //   console.log(error)
        // }
        // else {
        //   alert('Se envio el codigo')
        //   setEsperando(true)
        // }
      }
      else {
        alert('El numero de celular debe ser de 10 digitos')
      }
    }
    setCargando(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Incubator.TextField
        editable={!esperando}
        value={numCel}
        placeholder={'Numero telefonico'}
        floatingPlaceholder
        onChangeText={(t) => setNumCel(t)}
        enableErrors
        validate={['required', 'number', (value: string | any[]) => value.length == 10 ]}
        validationMessage={['Campo es requerido', 'Tiene que ser un numero', 'Tiene que ser de 10 digitos']}
        showCharCounter
        maxLength={10}
        style={styles.inputs}
      />
      {esperando && 
      <Incubator.TextField
        value={codigo}
        placeholder={'Codigo de verificacion'}
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
      <Button disabled={cargando} label='Enviar' disabledBackgroundColor={Colors.$backgroundDisabled} activeBackgroundColor={Colors.$backgroundDarkActive} onPress={() => void login()} />
    </SafeAreaView>
  )
}
export default Login
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