import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'


import Inicio from '../screens/Inicio'
import VerProducto from '../screens/VerProducto'
import Pagar from '../screens/Pagar'

type StackNavigationParamList = {
  Inicio: undefined
  VerProducto: {i: number}
  comprar: undefined
}

export type StackVerProductoNavigationProps = StackNavigationProp<StackNavigationParamList, 'Inicio'>
export type PantallaVerProductoProps = StackScreenProps<StackNavigationParamList, 'VerProducto'>
// export type PantallaVerProductoProps = StackScreenProps<StackNavigationParamList, 'comprar'>

const Stack = createStackNavigator<StackNavigationParamList>()

const StackVerProducto = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="VerProducto" component={VerProducto}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="comprar" component={Pagar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
export { StackVerProducto }