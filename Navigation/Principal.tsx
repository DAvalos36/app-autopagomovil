import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'


import Login from '../screens/Login'
import Registro from '../screens/Registro'

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type StackNavigationParamList = {
  Login: undefined
  Registro: undefined
}

// export type HStackNavigationProp = StackNavigationProp<StackNavigationParamList, 'Problema'>
// export type PantallaProblemaProps = StackScreenProps<StackNavigationParamList, 'Problema'>

const Stack = createStackNavigator<StackNavigationParamList>()

const StackNavigationLogin = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Registro" component={Registro}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
export { StackNavigationLogin }