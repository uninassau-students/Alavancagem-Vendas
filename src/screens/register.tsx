import React, { useState } from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  Image,
  useToast,
  Input as InputNative,
} from "native-base";
import { Button } from "../components/button";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { api } from "../services/api";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const toast = useToast();
  const [isLoading, setLoading] = useState(false);

  const navigation = useNavigation();
  async function handleCreateUser() {
    // if (!email.trim() || !password.trim() || !username.trim()) {
    //   return toast.show({
    //     title: "preencha todos os campos",
    //     placement: "top",
    //     bgColor: "red.500",
    //   });
    // }

    try {
      setLoading(true);
      const response = await api.post("/user/create", {
        username: username,
        email: email,
        password: password,
      });

      console.log("Resposta da API:", response);
      toast.show({
        title: "criado com sucesso",
        placement: "top",
        bgColor: "green.500",
      });

      navigation.navigate("Login");
    } catch (error) {
      toast.show({
        title: "não foi possível criar usuário",
        placement: "top",
        bgColor: "red.500",
      });
      console.log(error);
    } finally {
      setLoading(false);
      console.log(email, password, username);
    }
  }

  return (
    <VStack flex={1} bgColor="#fff">
      <Center>
        <Heading
          textAlign="center"
          py={20}
          marginTop={5}
          marginBottom={5}
          fontSize={30}
          fontWeight={"extrabold"}
        >
          Crie sua conta
        </Heading>
        <InputNative
          marginX={4}
          padding={4}
          marginBottom={4}
          fontSize={15}
          placeholder="Digite seu nome"
          type="text"
          onChangeText={(texto) => setUsername(texto)}
          value={username}
        />

        <InputNative
          marginX={4}
          padding={4}
          marginBottom={4}
          fontSize={15}
          placeholder="Digite seu email"
          type="text"
          onChangeText={(texto) => setEmail(texto)}
          value={email}
        />
        <InputNative
          marginX={4}
          padding={4}
          marginBottom={4}
          fontSize={15}
          placeholder="Digite sua senha"
          type="password"
          onChangeText={(texto) => setPassword(texto)}
          value={password}
        />

        <Button
          isLoading={isLoading}
          onPress={handleCreateUser}
          text="Criar Conta"
        />
      </Center>
      <Box justifyContent="center" alignItems="center">
        <Text textAlign="center" mb={8} mt={10} fontSize={14}>
          Ou entrar com
        </Text>
        <Pressable>
          <Image
            source={require("../assets1/google.png")}
            alt="google"
            size={16}
          />
        </Pressable>
      </Box>
    </VStack>
  );
}
export default Register;
