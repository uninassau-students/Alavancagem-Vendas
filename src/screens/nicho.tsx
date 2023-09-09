import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { NativeBaseProvider, Button } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { THEME } from '../styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"
//


function Nicho() {

    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

    const navigation = useNavigation();

    const handlePress = () => {


    };

    return (

        <NativeBaseProvider theme={THEME}>

            <View style={styles.container}>
                <Text style={{ fontSize: 35, fontWeight: '600' }}>ESCOLHA SEU NICHO</Text>
                <View style={styles.containerimg}>

                    <View style={styles.containerimgtxt}>
                        <Image source={require('../../assets/Frame1.jpg')} style={{ width: 150, height: 320, marginTop: 0, resizeMode: 'contain' }} />
                        <Text  style = {styles.txt}>Papelaria</Text>

                    </View>
                    <View style={styles.containerimgtxt}>
                        <Image source={require('../../assets/Frame45.png')} style={{ width: 150, height: 320, marginTop: 0, resizeMode: 'contain' }} />
                        <Text style = {styles.txt}>Roupas</Text>
                    </View>

                </View>
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
    containerimg: {

        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'

    }, containerimgtxt: {

    },txt:{

    }


});

export default Nicho;