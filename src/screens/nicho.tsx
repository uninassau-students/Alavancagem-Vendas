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

        navigation.navigate('SelectCalendar');
    };

    return (

        <NativeBaseProvider theme={THEME}>

            <View style={styles.container}>
                <Image style={{position:'absolute', right:80,top:45}} source={require('../../assets/aviao.png')}></Image>
                <Text style={{ fontSize: 30, fontWeight: '500', marginBottom: '30%',marginTop: '30%'}}>ESCOLHA SEU NICHO</Text>
                <View style={styles.containerimg}>

                    <View style={styles.containerimgtxt}>
                        <Image source={require('../../assets/Frame1.jpg')} style={{
                            width: 150, height: 200,
                            marginTop: 0, marginBottom: 0, resizeMode: 'stretch', marginRight: 15
                        }} />
                        <Text style={[styles.txt, { marginRight: 15, width: '90%' }]}>Papelaria</Text>

                    </View>
                    <View style={styles.containerimgtxt}>
                        <Image source={require('../../assets/Frame45.png')} style={{
                            width: 150, height: 200,
                            marginTop: 0, marginBottom: 0, resizeMode: 'stretch',
                        }} />
                        <Text style={[styles.txt, { width: '100%' }]}>Roupas</Text>
                    </View>


                </View>
                <View style={styles.containerdown}>
                    <Text style={{ fontWeight: '500', fontSize: 16, marginTop: '12%' }}>Com a sua escolha poderemos criar</Text>
                    <Text style={{ fontWeight: '500', fontSize: 16 }}> uma série de atividades para você.</Text>



                </View>
                <Button style={styles.button} 
                onPress={handlePress}>

                    <Image source={require('../../assets/Vector.png')} />

                </Button>
            </View>

        </NativeBaseProvider>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000',
        alignItems: 'center',
     

    },
    containerdown: {

    },
    containerimg: {
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'

    }, containerimgtxt: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    txt: {
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        fontSize: 16,
        fontWeight: "500",
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD9E7',
        marginTop: 0,
        paddingVertical: 15,
    },
    button: {

        position: 'absolute',
        right: 0,
        bottom: 0,
        marginBottom:25,
        marginRight:25,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#9DD9E7',
    }


});

export default Nicho;