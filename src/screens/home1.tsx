import React from 'react';
import { StyleSheet, Text,Image,View} from 'react-native';
import { NativeBaseProvider,Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { THEME } from '../styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"
//


function Home() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

    const navigation = useNavigation();
  
    const handlePress = () => {
      
      navigation.navigate('Login');
    };

  return (

    <NativeBaseProvider theme={THEME}>

      <View style={styles.container}>
        <Image source={require('../../assets/bemvindo.png')} style={{ width: '100%', height: '50%', position: 'absolute', top: -80, }} />
        <View style={styles.containerhome}>
          <Text style={{ fontSize: 40, paddingTop: 35, fontWeight: '400' }}>Bem-vindo</Text>
          <Text style={{ fontSize: 22, fontWeight: '400', marginTop: 50, color: 'black' }}>
            Veja formas de como poderá</Text>
          <Text style={{ fontSize: 22, fontWeight: '400'}}>
            aumentar suas vendas.</Text>
            <Button
  style={styles.button}
  onPress={handlePress}
>
  <Text style={styles.buttonText}>Continuar</Text>
</Button>

        </View>
        <StatusBar style="auto" />
      </View>

    </NativeBaseProvider>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerhome: {
    width: '80%',
    bottom: -180,
    textAlign: 'center',
    alignItems: 'center',



  },
  button: {
    borderRadius: 5,
    marginTop: 100,
    width: '100%',
    backgroundColor: '#9DD9E7',
    textAlign: 'center',
    alignItems: 'center',
    height: '12%',
    justifyContent: 'center'


  },
  buttonText: {
    color: 'white',
    fontSize: 20
  }
});

export default Home;