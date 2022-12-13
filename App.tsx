import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserContextProvide } from './context/LogginContext'
import { DataProviderTienda } from './context/TiendaContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <UserContextProvide>
        <DataProviderTienda>
          <Navigation />
        </DataProviderTienda>
      </UserContextProvide>
    </SafeAreaProvider>
  );
}
