import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Center, HStack } from "native-base";

const SelectCalendar = () => {
  const navigation = useNavigation();

  const handlepressHome = () => {
    console.log("home");
    navigation.navigate("Login");
  };

  const handlepress = () => {
    console.log("voltando");
    navigation.navigate("Nicho");
  };

  const handlePressJ = () => {
    console.log("indo pro calendario");
    navigation.navigate("Calendarj");
  };
  const handlePressF = () => {
    console.log("indo pro calendario");
    navigation.navigate("Calendarf");
  };
  const handlePressM = () => {
    console.log("indo pro calendario");
    navigation.navigate("Calendarm");
  };
  const handlePressA = () => {
    console.log("indo pro calendario");
    navigation.navigate("Calendara");
  };
  const handlePressMA = () => {
    console.log("indo pro calendario");
    navigation.navigate("Calendarma");
  };
  const handlePressJUN = () => {
    console.log("indo pro calendario");
    navigation.navigate("Calendarjun");
  };

  return (
    <HStack flex={1} justifyContent={"center"}>
      <TouchableOpacity style={{}} onPress={handlePressJ}>
        <Image
          source={require("../assets1/CalendarPng/janeiro.png")}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>Janeiro</Text>

      <View style={styles.bottomButtons}>
        <Button
          icon={<Icon name="keyboard-arrow-left" size={30} color="#9DD9E7" />}
          title=""
          buttonStyle={styles.button}
          onPress={handlepress}
        />
        <Button
          icon={<Icon name="home" size={30} color="#9DD9E7" />}
          buttonStyle={styles.button}
          onPress={handlepressHome}
        />
      </View>
    </HStack>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginHorizontal: 15,
    marginVertical: 8,
  },
  image: {
    width: 140,
    height: 140,
    resizeMode: "contain",
  },
  text: {
    marginTop: 5,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "white",
    borderColor: "#9DD9E7",
    borderWidth: 3,
    borderRadius: 50,
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
});

export default SelectCalendar;
