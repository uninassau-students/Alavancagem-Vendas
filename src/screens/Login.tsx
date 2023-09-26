import React from "react";
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button } from "native-base";
import { StyleSheet, Text, View, TextInput, Image } from "react-native"

function LoginHome() {
  const navigation = useNavigation();

  const handlePressRegistrar = () => {
    console.log("INDO PRA REGISTRAR");
    navigation.navigate("Registrar");
  };

/*const handlePress = () => {
  console.log("INDO PRA NICHO");
  navigation.navigate("Nicho");
};*/
  // PARTE DE AUTENTICAÇÃO>>>>>>>>>>
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
      androidClientId: "685725701624-ss5ib573u1scfa408fsaq0rjs5b4votf.apps.googleusercontent.com",
      clientId:"685725701624-ss5ib573u1scfa408fsaq0rjs5b4votf.apps.googleusercontent.com",
      iosClientId: "",
      webClientId: "685725701624-n9mdprlcvn990aoclpvthtoi3f13amq9.apps.googleusercontent.com"
  })

  React.useEffect(() =>{
    if(response){
      HandleLoginGoggle();
    }
    
  },[response]);


  async function HandleLoginGoggle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success" && response.authentication) {
        await getUserInfo(response.authentication.accessToken);
      }
    } else {
      if (user) {
        setUserInfo(JSON.parse(user));
      }
    }
    return null; // Retorna null ou outro valor apropriado, dependendo do seu caso.
  }
  
  

  const getUserInfo = async (token:any)=>{
      if(!token) return;
      try {
          const response = await fetch (
          "https://www.googleapis.com/userinfo/v2/me",
          {
              headers:{ Authorization: `Bearer ${token}`},
          }
        );
          const user = await response.json();
          await AsyncStorage.setItem("@user", JSON.stringify(user));
          return user
          }catch(error){
              console.log(error+"ERROOOOO ")
              return null
          } 
        }
          
      
 


  


  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "600",
          marginBottom: 5,
          marginTop: 100,
          marginLeft: 15,
        }}
      >
        Bem-vindo(a) de volta!
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "600",
          maxWidth: 300,
          marginLeft: 15,
        }}
      >
        Por favor, insira seu email e senha.
      </Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Seu email"
          style={{
            fontSize: 16,
            borderWidth: 1,
            color: "#8391A1",
            borderColor: "#E8ECF4",
            padding: 10,
            width: "100%",
          }}
        />
        <TextInput
          placeholder="Sua senha"
          secureTextEntry={true}
          style={{
            fontSize: 16,
            borderWidth: 1,
            color: "#8391A1",
            borderColor: "#E8ECF4",
            padding: 10,
            marginTop: 15,
            width: "100%",
            marginBottom: 35,
          }}
        />
      </View>
      <View style={styles.containerActive}>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <View>
        <Button onPress={() => promptAsync()}>
    <Text>LOGIN GOOGLE</Text>
    </Button>
        </View>

        <View style={styles.containerActiveGoogle}>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>
            {" "}
            Não tem conta ainda?{" "}
            <Text
              style={{ fontSize: 19, fontWeight: "600", paddingLeft: 5 }}
              onPress={handlePressRegistrar}
            >
              Clique aqui
            </Text>
          </Text>
          
          <Text style={{ fontSize: 18 }}>para se registrar ou entre com o</Text>

          <Image
            source={require("../assets1/google.png")}
            style={{ width: 45, height: 45, marginTop: 40 }}
            alt="google"
          />
        </View>
      </View>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: "#0000",
  },
  containerInput: {
    marginTop: "10%",
  },
  containerActive: {},
  button: {
    backgroundColor: "#9DD9E7",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 25,
  },
  buttonText: {
    padding: 7,
    color: "white",
    fontSize: 22,
  },
  containerActiveGoogle: {
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginHome;
