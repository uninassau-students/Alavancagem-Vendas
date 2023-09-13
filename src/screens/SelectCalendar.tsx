import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

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
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={{}} onPress={handlePressJ}>
            <Image
              source={require("../assets1/CalendarPng/janeiro.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Janeiro</Text>
        </View>

        <View style={styles.imageContainer}>
          <TouchableOpacity style={{}} onPress={handlePressF}>
            <Image
              source={require("../assets1/CalendarPng/fevereiro.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Fevereiro</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={{}} onPress={handlePressM}>
            <Image
              source={require("../assets1/CalendarPng/marco.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Março</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={{}} onPress={handlePressA}>
            <Image
              source={require("../assets1/CalendarPng/abril.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Abril</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={{}} onPress={handlePressMA}>
            <Image
              source={require("../assets1/CalendarPng/maio.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Maio</Text>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={{}} onPress={handlePressJUN}>
            <Image
              source={require("../assets1/CalendarPng/junho.png")}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={styles.text}>Junho</Text>
        </View>
      </View>
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
    </View>
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
