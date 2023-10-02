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
  const [selectedDate, setSelectedDate] = useState<string | null>("2023-01-01");
  const navigation = useNavigation();

  const [dailyTask, setDailyTask] = useState<string>("");

  const dailyTasks = {
    "2023-01-01":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-02":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-03":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-05":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-06":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-07":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-08":
      "Dedique esta semana para mostrar apreço aos seus clientes regulares. Ofereça a eles um desconto exclusivo em toda a loja ou em determinadas categorias de produtos. Além disso, envie mensagens de agradecimento personalizadas, mostrando o quanto você valoriza a sua lealdade.",
    "2023-01-09":
      "Dedique esta semana para mostrar apreço aos seus clientes regulares. Ofereça a eles um desconto exclusivo em toda a loja ou em determinadas categorias de produtos. Além disso, envie mensagens de agradecimento personalizadas, mostrando o quanto você valoriza a sua lealdade.",
    "2023-01-10":
      "Dedique esta semana para mostrar apreço aos seus clientes regulares. Ofereça a eles um desconto exclusivo em toda a loja ou em determinadas categorias de produtos. Além disso, envie mensagens de agradecimento personalizadas, mostrando o quanto você valoriza a sua lealdade.",
    "2023-01-11":
      "Dedique esta semana para mostrar apreço aos seus clientes regulares. Ofereça a eles um desconto exclusivo em toda a loja ou em determinadas categorias de produtos. Além disso, envie mensagens de agradecimento personalizadas, mostrando o quanto você valoriza a sua lealdade.",
    "2023-01-12":
      "Dedique esta semana para mostrar apreço aos seus clientes regulares. Ofereça a eles um desconto exclusivo em toda a loja ou em determinadas categorias de produtos. Além disso, envie mensagens de agradecimento personalizadas, mostrando o quanto você valoriza a sua lealdade.",
    "2023-01-13":
      "Dedique esta semana para mostrar apreço aos seus clientes regulares. Ofereça a eles um desconto exclusivo em toda a loja ou em determinadas categorias de produtos. Além disso, envie mensagens de agradecimento personalizadas, mostrando o quanto você valoriza a sua lealdade.",
    "2023-01-14":
      "Dedique esta semana para mostrar apreço aos seus clientes regulares. Ofereça a eles um desconto exclusivo em toda a loja ou em determinadas categorias de produtos. Além disso, envie mensagens de agradecimento personalizadas, mostrando o quanto você valoriza a sua lealdade.",
    "2023-01-15":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-16":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-17":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-18":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-19":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-20":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-21":
      "Aproveite o espírito festivo do Ano Novo e ofereça uma promoção especial para produtos populares em sua loja. Isso pode incluir descontos significativos, brindes ou frete grátis para compras acima de um determinado valor. Promova essa oferta por meio das redes sociais, e-mails e em seu site.",
    "2023-01-22":
      "A última semana do mês é uma ótima oportunidade para uma grande liquidação. Identifique os produtos em estoque que precisam ser movidos rapidamente e ofereça descontos significativos sobre esses itens. Promova a venda como uma 'Liquidação de Fim de Mês', incentivando as compras finais antes do mês terminar.",
    "2023-01-23":
      "A última semana do mês é uma ótima oportunidade para uma grande liquidação. Identifique os produtos em estoque que precisam ser movidos rapidamente e ofereça descontos significativos sobre esses itens. Promova a venda como uma 'Liquidação de Fim de Mês', incentivando as compras finais antes do mês terminar.",
    "2023-01-24":
      "A última semana do mês é uma ótima oportunidade para uma grande liquidação. Identifique os produtos em estoque que precisam ser movidos rapidamente e ofereça descontos significativos sobre esses itens. Promova a venda como uma 'Liquidação de Fim de Mês', incentivando as compras finais antes do mês terminar.",
    "2023-01-25":
      "A última semana do mês é uma ótima oportunidade para uma grande liquidação. Identifique os produtos em estoque que precisam ser movidos rapidamente e ofereça descontos significativos sobre esses itens. Promova a venda como uma 'Liquidação de Fim de Mês', incentivando as compras finais antes do mês terminar.",
    "2023-01-26":
      "A última semana do mês é uma ótima oportunidade para uma grande liquidação. Identifique os produtos em estoque que precisam ser movidos rapidamente e ofereça descontos significativos sobre esses itens. Promova a venda como uma 'Liquidação de Fim de Mês', incentivando as compras finais antes do mês terminar.",
    "2023-01-27":
      "A última semana do mês é uma ótima oportunidade para uma grande liquidação. Identifique os produtos em estoque que precisam ser movidos rapidamente e ofereça descontos significativos sobre esses itens. Promova a venda como uma 'Liquidação de Fim de Mês', incentivando as compras finais antes do mês terminar.",
    "2023-01-28":
      "A última semana do mês é uma ótima oportunidade para uma grande liquidação. Identifique os produtos em estoque que precisam ser movidos rapidamente e ofereça descontos significativos sobre esses itens. Promova a venda como uma 'Liquidação de Fim de Mês', incentivando as compras finais antes do mês terminar.",
    "2023-01-29":
      "A última semana do mês é uma ótima oportunidade para uma grande liquidação. Identifique os produtos em estoque que precisam ser movidos rapidamente e ofereça descontos significativos sobre esses itens. Promova a venda como uma 'Liquidação de Fim de Mês', incentivando as compras finais antes do mês terminar.",
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
      setDailyTask("Pedro matuê ❤️ Tereza");
    }
  };

  const markedDates: MarkedDates = {};
  if (selectedDate) {
    markedDates[selectedDate] = { dotColor: "blue", selected: true };
  }
  const renderHeader = () => null;

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Janeiro</Text>
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
        current={"2023-01-01"}
        minDate={"2023-01-01"}
        maxDate={"2023-01-30"}
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
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 10,
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
