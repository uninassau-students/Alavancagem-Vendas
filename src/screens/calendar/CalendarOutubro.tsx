import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import { Button, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import { MarkedDates } from "react-native-calendars/src/types";
import { useNavigation } from "@react-navigation/native";
import { useCheckbox } from "../../context/CheckboxContext";
import { Center } from "native-base";
import { LocaleConfig } from "react-native-calendars";
import { dailyTasksOutubro } from "../../lib/task";
interface Day {
  dateString: string;
}

function CalendarOutubro() {
  const [selectedDate, setSelectedDate] = useState<string | null>("2023-10-01");
  const initialDate = "2023-10-01";
  const initialTask = dailyTasksOutubro[initialDate] || "Nada a fazer hoje";
  const navigation = useNavigation();

  const { check, setCheck } = useCheckbox();

  const [dailyTask, setDailyTask] = useState<string>(initialTask);
  console.log(selectedDate);
  console.log(check);

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
      console.log(isChecked);
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
    if (dailyTasksOutubro[day.dateString]) {
      setDailyTask(dailyTasksOutubro[day.dateString]);
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
      <Text style={styles.txt}>Outubro</Text>
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
        current={"2023-10-01"}
        minDate={"2023-10-01"}
        maxDate={"2023-10-31"}
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

      <View style={styles.seeTask}>
        <CheckBox
          checked={check[selectedDate || ""] || false}
          onPress={() => {
            const updatedCheck = { ...check };
            updatedCheck[selectedDate || ""] =
              !updatedCheck[selectedDate || ""];
            setCheck(updatedCheck);
          }}
        />
        <Text
          style={{
            fontWeight: "400",
            fontSize: 25,
            marginRight: 50,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            paddingTop: 50,
          }}
        >
          {dailyTask}
        </Text>
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
    marginBottom: 10,
  },
  seeTask: {
    width: "auto",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});

export default CalendarOutubro;
