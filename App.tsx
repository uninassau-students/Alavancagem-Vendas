
import { NativeBaseProvider,Text,Center, Box,Button } from 'native-base';
import { useState } from 'react';
import { THEME } from './src/styles/theme';
import {useFonts, Roboto_400Regular,Roboto_500Medium, Roboto_700Bold} from "@expo-google-fonts/roboto"



export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular,Roboto_500Medium,Roboto_700Bold})



  const [contador,setContador] = useState(1);

  function handleOneMore(){
     setContador(valorAtual => valorAtual + 1);
  }
  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1}>
        
        <Text fontFamily="body">Hello Word!</Text>
        <Text>{contador}</Text>
        <Button bgColor='cyan.500' width={100} onPress={handleOneMore}>MAIS UM</Button>
        <Button bgColor='cyan.500' width={100} onPress={handleOneMore}>MAIS UM</Button>

      </Center>
    </NativeBaseProvider>
  );
}

