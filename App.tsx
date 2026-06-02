import { StatusBar } from 'expo-status-bar';

import './global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationScreen from './navigation';


export default function App() {
  return (
    <SafeAreaProvider>

      <NavigationScreen/>
     
   
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
