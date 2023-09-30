import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, useToast } from "native-base";
import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import { useAuth } from "../context/useAuth";

function LoginHome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();

  const auth = useAuth();

  const handlePressRegistrar = () => {
    navigation.navigate("Registrar");
  };

  const { LoginToken } = auth;

  async function handleSignIn() {
    try {
      setLoading(true);
      const response = await auth.LoginToken(email, password);

      if (auth.signed) {
        navigation.navigate("Nicho");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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
            color: "#121212",
            borderColor: "#E8ECF4",
            padding: 10,
            width: "100%",
          }}
          onChangeText={(texto) => setEmail(texto)}
          value={email}
        />
        <TextInput
          placeholder="Sua senha"
          secureTextEntry={true}
          style={{
            fontSize: 16,
            borderWidth: 1,
            color: "#121212",
            borderColor: "#E8ECF4",
            padding: 10,
            marginTop: 15,
            width: "100%",
            marginBottom: 35,
          }}
          onChangeText={(texto) => setPassword(texto)}
          value={password}
        />
      </View>
      <View style={styles.containerActive}>
        <Button
          style={styles.button}
          onPress={handleSignIn}
          isLoading={isLoading}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Button>

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
