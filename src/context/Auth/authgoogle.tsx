import React from 'react';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity, Text } from 'react-native';
import { View } from 'native-base';
import {Button} from '../../components/button';
import { type } from 'os';

const AuthLoginGoogle = () => {
    const [userInfo, setUserInfo] = React.useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "685725701624-ss5ib573u1scfa408fsaq0rjs5b4votf.apps.googleusercontent.com",
        iosClientId: "",
        webClientId: "685725701624-n9mdprlcvn990aoclpvthtoi3f13amq9.apps.googleusercontent.com"
    })
    async function HandleLoginGoggle (){
        const user = await AsyncStorage.getItem("@user");
        if (response?.type === "success" && response?.authentication) {
            if (!user) {
                await getUserInfo(response.authentication.accessToken);
            }
            
        }else{
            if(user){
            setUserInfo(JSON.parse(user))
        }
        }
    }

    const getUserInfo = async (token:any)=>{
        if(!token) return
        try{
            const response = await fetch (
            "https://www.googleapis.com/userinfo/v2/me",
            {
                headers:{Authorization: `Bearer ${token}`},
            });
            const user = await response.json();
            await AsyncStorage.setItem("@user",JSON.stringify(user))
            }catch(error){

            } 
            
        
   


    const handlePress = async () => {
        try {
            await promptAsync();
        } catch (error) {
            console.error('Erro ao autenticar com o Google:', error);
        }
    };


    return (
        <View>
  <Button text = "Sign google " onPress={handlePress} />
        </View>

    )
}
}
export default AuthLoginGoogle;