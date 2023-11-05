import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MarkedDates } from "react-native-calendars/src/types";
import { useNavigation } from "@react-navigation/native";
import { useCheckbox } from '../../context/CheckboxContext';
import { Center } from "native-base";
import { LocaleConfig } from "react-native-calendars";
import { dailyTasksAgosto } from "../../lib/task";
interface Day {
  dateString: string;
}

function CalendarAgostoRoupas() {
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
  const [selectedDate, setSelectedDate] = useState<string | null>("2023-08-01");
  const initialDate = "2023-08-01";
  const initialTask = dailyTasksAgosto[initialDate] || "Nada a fazer hoje";
  const navigation = useNavigation();


  const { check, setCheck } = useCheckbox();


  const [dailyTask, setDailyTask] = useState<string>(initialTask);
  console.log(selectedDate)
  console.log(check)

  useEffect(() => {
    if (selectedDate) {
      const isChecked = check[selectedDate] || true;

      if (isChecked === undefined) {
        setCheck({ ...check, [selectedDate]: false });
      } else if (isChecked === true) {
        setCheck({ ...check });
      } else {
        setCheck({ ...check, [selectedDate]: false });
      }
      console.log(isChecked)
    }

  }, [selectedDate]);

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
    if (dailyTasksAgosto[day.dateString]) {
      setDailyTask(dailyTasksAgosto[day.dateString]);
    } else {
      // Se não houver tarefa definida, você pode definir uma mensagem padrão ou deixá-la vazia
      setDailyTask("Nada a fazer hoje");
    }
  };

  const markedDates: MarkedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = { dotColor: "blue", selected: true };
  }
  const renderHeader = () => null;

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Agosto</Text>
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
        current={"2023-08-01"}
        minDate={"2023-08-01"}
        maxDate={"2023-08-31"}
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
          fontSize: 20,
          marginTop: 10,
          marginLeft: 0,
          justifyContent: "center",
          paddingTop: 80,
          textAlign: "center",
        }}
      >
        {dailyTask}

      </Text><CheckBox
        checked={check[selectedDate || ""] || false}
        onPress={() => {
          const updatedCheck = { ...check };
          updatedCheck[selectedDate || ""] = !updatedCheck[selectedDate || ""];
          setCheck(updatedCheck);
        }}
      />

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
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginLeft: 10,
    marginBottom: 10
  },
});

export default CalendarAgostoRoupas;
