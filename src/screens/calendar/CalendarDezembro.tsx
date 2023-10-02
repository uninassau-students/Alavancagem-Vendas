import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MarkedDates } from "react-native-calendars/src/types";
import { useNavigation } from "@react-navigation/native";
import { Center } from "native-base";
import { LocaleConfig } from "react-native-calendars";
interface Day {
  dateString: string;
}

function Calendarj() {
  LocaleConfig.locales["pt-br"] = {
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    dayNames: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
    dayNamesShort: ["Dom.", "Seg.", "Ter.", "Qua.", "Qui.", "Sex.", "Sáb."],
    today: "Hoje",
  };
  LocaleConfig.defaultLocale = "pt-br";
  const [selectedDate, setSelectedDate] = useState<string | null>("2023-12-01");
  const navigation = useNavigation();


  const [dailyTask, setDailyTask] = useState<string>("");

  const dailyTasks = {
    "2023-12-01": "Academia hoje hein!",
    "2023-12-20": "Hoje você vai descansar!",
    // Adicione mais datas conforme necessário
  };

  



  const handlepress = () => {
    console.log("Voltando");
    navigation.navigate("SelectCalendar");
  };

  const handlepressHome = () => {
    console.log("Home");
    navigation.navigate("Login");
  };
  
  const onDayPress = (day: Day) => {
    setSelectedDate(day.dateString);

    // Verifique se há uma tarefa para o dia clicado
    if (dailyTasks[day.dateString]) {
      setDailyTask(dailyTasks[day.dateString]);
    } else {
      // Se não houver tarefa definida, você pode definir uma mensagem padrão ou deixá-la vazia
      setDailyTask("Ainda estamos em desenvolvimento...");
    }
  };

  const markedDates: MarkedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = { dotColor: "blue", selected: true };
  }
  const renderHeader = () => null;

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Dezembro</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={markedDates}
        theme={{
          textSectionTitleColor: "blue",
          selectedDayBackgroundColor: "blue",
          selectedDayTextColor: "white",
          todayTextColor: "blue",
          dayTextColor: "black",
          textDisabledColor: "gray",
          dotColor: "blue",
          selectedDotColor: "white",
        }}
        current={"2023-12-01"}
        minDate={"2023-12-01"}
        maxDate={"2023-12-31"}
        hideArrows={true}
        hideMonthTitle={true}
        renderHeader={renderHeader}
      />
      <Text
        style={{
          fontWeight: "500",
          fontSize: 22,
          marginTop: 40,
          marginLeft: 20,
        }}
      >
        O que você vai fazer:
      </Text>
      <Text
        style={{
          fontWeight: "400",
          fontSize: 25,
          marginTop: 10,
          marginLeft: 0,
          justifyContent: "center",
          paddingTop: 80,
          textAlign: "center",
        }}
      >
        {dailyTask}
        
      </Text>
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
}

const styles = StyleSheet.create({
  txt: {
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "500",
    fontSize: 25,
  },
  body: {},
  container: {
    paddingHorizontal: 10,
    height: "100%",
    backgroundColor: "white",
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
    position: "relative",
    width: "100%",
    bottom: "-40%",
  },
});

export default Calendarj;
