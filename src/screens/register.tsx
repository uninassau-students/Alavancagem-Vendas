import React, { useState } from "react";
import { Box, Center, Heading, Text, VStack, Image } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Pressable } from "react-native";
import {useNavigation} from '@react-navigation/native'

export function Register() {

  const navigation = useNavigation()
  const handlePressLogin= () => {
    navigation.navigate('Login')
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
        <Input placeholder="Digite seu nome" type="text" />
        <Input placeholder="Digite seu email" type="text" />
        <Input
          placeholder="Digite sua senha"
          type="password"
          secureText={true}
        />

        <Button onPress={handlePressLogin} text="Criar Conta" />
      </Center>
      <Box justifyContent="center" alignItems="center">
        <Text textAlign="center" mb={8} mt={10} fontSize={14}>
          Ou entrar com
        </Text>
        <Pressable>
          <Image
            source={require("../../assets/Google_Button.png")}
            alt="google"
            size={16}
          />
        </Pressable>
      </Box>
    </VStack>
  );
}
export default Register;
