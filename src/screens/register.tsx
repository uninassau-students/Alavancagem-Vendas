import React, { useState } from "react";
import { Box, Center, Heading, Text, VStack, Image } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { Pressable } from "react-native";

export function Register() {


  return (
    <VStack flex={1} bgColor="#fff">
      <Center>
        <Heading textAlign="center" py={20} fontSize={30} fontWeight={"extrabold"}>
          Crie sua conta
        </Heading>
        <Input placeholder="Digite seu nome" type="text" />
        <Input placeholder="Digite seu email" type="text" />
        <Input
          placeholder="Digite sua senha"
          type="password"
          secureText={true}
        />
        <Button text={"Criar Conta"} />
      </Center>
      <Box justifyContent="center" alignItems="center">
        <Text textAlign="center" mt={10} fontSize={14}>
          Ou entrar com
        </Text>
        <Pressable>
            <Image source={require("../assets/G.png")} alt="google" size={20} />
        </Pressable>
        
      </Box>
    </VStack>
  );
}
