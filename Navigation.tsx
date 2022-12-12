import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer'
import { NavigationContainer } from "@react-navigation/native";

import Inicio from './screens/Inicio';
import Login from './screens/Login';
import Registro from './screens/Registro';

import HeaderInicio from './components/HeaderInicio';

const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Drawer.Navigator
      screenOptions={{drawerPosition: 'right'}}
    >
    { !false ? (
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
