import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import Navigation from './Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
