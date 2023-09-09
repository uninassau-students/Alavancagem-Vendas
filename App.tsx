
import { NativeBaseProvider,Text,Center, Box,Button } from 'native-base';
import { THEME } from './src/styles/theme';
import {useFonts, Roboto_400Regular,Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto"
import { Register } from './src/screens/register';




export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_500Medium,Roboto_700Bold})

  return (
    <NativeBaseProvider theme={THEME}>
      <Register />
    </NativeBaseProvider>
  );
}

