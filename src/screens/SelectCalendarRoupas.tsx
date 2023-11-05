import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const SelectCalendarRoupas = () => {
  const navigation = useNavigation();

  const handlepressHome = () => {
    console.log("home");
    navigation.navigate("Login");
  };

  const handlepressBack = () => {
    console.log("voltando");
    navigation.navigate("Nicho");
  };

  const handlePressJ = () => {
    console.log("indo pro calendario roupas | Janeiro");
    navigation.navigate("CalendarJaneiroRoupas");
  };
  const handlePressF = () => {
    console.log("Indo para o Calendário de Roupas | Fevereiro");
    navigation.navigate("CalendarFevereiroRoupas");
};

const handlePressM = () => {
    console.log("Indo para o Calendário de Roupas | Março");
    navigation.navigate("CalendarMarcoRoupas");
};

const handlePressA = () => {
    console.log("Indo para o Calendário de Roupas | Abril");
    navigation.navigate("CalendarAbrilRoupas");
};

const handlePressMai = () => {
    console.log("Indo para o Calendário de Roupas | Maio");
    navigation.navigate("CalendarMaioRoupas");
};

const handlePressJun = () => {
    console.log("Indo para o Calendário de Roupas | Junho");
    navigation.navigate("CalendarJunhoRoupas");
};

const handlePressJul = () => {
    console.log("Indo para o Calendário de Roupas | Julho");
    navigation.navigate("CalendarJulhoRoupas");
};

const handlePressAgo = () => {
    console.log("Indo para o Calendário de Roupas | Agosto");
    navigation.navigate("CalendarAgostoRoupas");
};

const handlePressSet = () => {
    console.log("Indo para o Calendário de Roupas | Setembro");
    navigation.navigate("CalendarSetembroRoupas");
};

const handlePressOut = () => {
    console.log("Indo para o Calendário de Roupas | Outubro");
    navigation.navigate("CalendarOutubroRoupas");
};

const handlePressN = () => {
    console.log("Indo para o Calendário de Roupas | Novembro");
    navigation.navigate("CalendarNovembroRoupas");
};

const handlePressDez = () => {
    console.log("Indo para o Calendário de Roupas | Dezembro");
    navigation.navigate("CalendarDezembroRoupas");
};

  return (
    <ScrollView style={{ flex: 1 }}>
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
            <TouchableOpacity style={{}} onPress={handlePressMai}>
              <Image
                source={require("../assets1/CalendarPng/maio.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Maio</Text>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity style={{}} onPress={handlePressJun}>
              <Image
                source={require("../assets1/CalendarPng/junho.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Junho</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={{}} onPress={handlePressJul}>
              <Image
                source={require("../assets1/CalendarPng/julho.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Julho</Text>
          </View>

          <View style={styles.imageContainer}>
            <TouchableOpacity style={{}} onPress={handlePressAgo}>
              <Image
                source={require("../assets1/CalendarPng/agosto.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Agosto</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={{}} onPress={handlePressSet}>
              <Image
                source={require("../assets1/CalendarPng/setembro.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Setembro</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={{}} onPress={handlePressOut}>
              <Image
                source={require("../assets1/CalendarPng/outubro.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Outubro</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={{}} onPress={handlePressN}>
              <Image
                source={require("../assets1/CalendarPng/novembro.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Novembro</Text>
          </View>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={{}} onPress={handlePressDez}>
              <Image
                source={require("../assets1/CalendarPng/dezembro.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Dezembro</Text>
          </View>
        </View>

        <View style={styles.bottomButtons}>
          <Button
            icon={<Icon name="keyboard-arrow-left" size={30} color="#9DD9E7" />}
            title=""
            buttonStyle={styles.button}
            onPress={handlepressBack}
          />
          <Button
            icon={<Icon name="home" size={30} color="#9DD9E7" />}
            buttonStyle={styles.button}
            onPress={handlepressHome}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom:60,
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

  monthContainer: {
    alignItems: "center",
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
    marginTop:50,
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
});

export default SelectCalendarRoupas;
