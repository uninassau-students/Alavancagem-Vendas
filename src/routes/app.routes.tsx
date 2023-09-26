import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
//
import Home from "../screens/Home";
import LoginHome from "../screens/Login";
import Nicho from "../screens/SelectNicho";
import Registrar from "../screens/register";
import SelectCalendar from "../screens/SelectCalendar";
import Calendarj from "../screens/calendar/CalendarJaneiro";
import Calendarf from "../screens/calendar/CalendarFevereiro";
import Calendarm from "../screens/calendar/CalendarMarco";
import Calendara from "../screens/calendar/CalendarAbril";
import Calendarma from "../screens/calendar/CalendarMaio";
import Calendarjun from "../screens/calendar/CalendarJunho";

export default function AppRoutes() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const Stack = createStackNavigator();
  return (

        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Login"
            component={LoginHome}
            options={{
              header: () => null,
             
            }}
          />
          <Stack.Screen
            name="Nicho"
            component={Nicho}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Registrar"
            component={Registrar}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="SelectCalendar"
            component={SelectCalendar}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Calendarj"
            component={Calendarj}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Calendarf"
            component={Calendarf}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Calendarm"
            component={Calendarm}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Calendara"
            component={Calendara}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Calendarma"
            component={Calendarma}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Calendarjun"
            component={Calendarjun}
            options={{
              header: () => null,
            }}
          />
        </Stack.Navigator>
      
    
  );
}
