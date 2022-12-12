import { useContext } from 'react';
import { LoaderScreen, Colors } from 'react-native-ui-lib';
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer'
import { NavigationContainer } from "@react-navigation/native";

import Inicio from './screens/Inicio';
import Login from './screens/Login';
import Registro from './screens/Registro';

import HeaderInicio from './components/HeaderInicio';
import { LoggingContext } from './context/LogginContext';

const Drawer = createDrawerNavigator();

function MyTabs() {
  const loginContext = useContext(LoggingContext)

  if (loginContext?.cargando) {
    return <LoaderScreen message={'Cargando...'} color={Colors.grey40} />;
  }

  return (
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right'}}
    >
    { !loginContext?.sesionIniciada ? (
    <>
      <Drawer.Screen name="Login" component={Login}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Registro" component={Registro}
        options={{headerShown: false}}
      />
    </>
    ) : (
    <>
      <Drawer.Screen name="Home" component={Inicio} 
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Notifications" component={Login} />
      </>
    )}
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
