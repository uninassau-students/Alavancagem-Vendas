import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Button, useTheme } from 'native-base';
import { StyleSheet, Text, View, TextInput,Image} from 'react-native';


function LoginHome() {
    const theme = useTheme();
    const handlePress = () => {


    };


    return (
        <View style={styles.container}>

            <Text style={{ fontSize: 32, fontWeight: '600', marginBottom: 5, marginTop: 100, marginLeft: 15 }}>
                Seja bem-vindo de volta!
            </Text>
            <Text style={{ fontSize: 30, fontWeight: '600', maxWidth: 300, marginLeft: 15 }}>
                Por favor, inserir email e senha.
            </Text>
            <View style={styles.containerInput}>
                <TextInput
                    placeholder="Seu email"

                    style={{fontSize:16,  borderWidth: 1, color: "#8391A1", borderColor: '#E8ECF4', padding: 10, width: "100%" }}
                />
                <TextInput
                    placeholder="Sua senha"

                    style={{ fontSize:16, borderWidth: 1, color: "#8391A1", borderColor: '#E8ECF4', padding: 10, marginTop: 15, width: "100%", marginBottom: 35 }}
                />

            </View>
            <View style={styles.containerActive}>

                <Button
                    style={styles.button}
                    onPress={handlePress}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Button>

                <View style={styles.containerActiveGoogle}>
                <Text style={{fontSize:15,marginBottom:5}}> Não tem conta ainda? <Text style={{fontSize:15,fontWeight:'600',paddingLeft:5}}>Registre-se</Text></Text>
                <Text style={{fontSize:15}}>Ou entrar com </Text>

                <Image  source={require('../../assets/google_ic.png')} style={{ width:28, height:28,marginTop:60 }} />
       
                </View>

            </View>


            <StatusBar style="auto" />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: '#0000',
    },
    containerInput: {
        marginTop: "10%",
    },
    containerActive: {},
    button: {
        backgroundColor: '#9DD9E7',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom:25

    },
    buttonText: {
        padding: 10,
        color: 'white',
        fontSize: 15,
    },
    containerActiveGoogle:{
        fontSize:30,
        justifyContent:"center",
        alignItems:'center',

    },
});
export default LoginHome;