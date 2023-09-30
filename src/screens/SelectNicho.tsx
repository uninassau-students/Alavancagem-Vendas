import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { useAuth } from "../context/useAuth";




function Nicho() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const {user} = useAuth();



  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("SelectCalendar");
  };

  console.log(user)

  return (
    <NativeBaseProvider >
      <View style={styles.container}>
        <Image
          style={{ position: "absolute", right: 80, top: 45 }}
          source={require("../assets1/aviao.png")}
        ></Image>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "500",
            marginBottom: "30%",
            marginTop: "30%",
          }}
        >
          ESCOLHA SEU NICHO
        </Text>
          <View>
            <Text>
              {user && user.email}
              

            </Text>
          </View>
        <View style={styles.containerimg}>
          <View style={styles.containerimgtxt}>
            <TouchableOpacity onPress={handlePress}>
              <Image
                source={require("../assets1/papelaria.png")}
                style={{
                  width: 150,
                  height: 160,
                  marginTop: 0,
                  marginBottom: 0,
                  resizeMode: "stretch",
                  marginRight: 15,
                }}
              />
            </TouchableOpacity>
            <Text style={[styles.txt, { marginRight: 15, width: "90%" }]}>
              Papelaria
            </Text>
          </View>
          <View style={styles.containerimgtxt}>
            <TouchableOpacity onPress={handlePress}>
              <Image
                source={require("../assets1/roupas.png")}
                style={{
                  width: 150,
                  height: 160,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              />
            </TouchableOpacity>
            <Text style={[styles.txt, { width: "100%" }]}>Roupas</Text>
          </View>
        </View>
        <View style={styles.containerdown}>
          <Text style={{ fontWeight: "500", fontSize: 19, marginTop: "12%" }}>
            Com a sua escolha poderemos criar
          </Text>
          <Text style={{ fontWeight: "500", fontSize: 19 }}>
            {" "}
            uma série de atividades para você.
          </Text>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0000",
    alignItems: "center",
  },
  containerdown: {},
  containerimg: {
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  containerimgtxt: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  txt: {
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#9DD9E7",
    marginTop: 0,
    paddingVertical: 15,
  },
});
export default Nicho;
