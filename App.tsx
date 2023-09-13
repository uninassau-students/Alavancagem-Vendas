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
import Home from "./src/screens/Home";
import LoginHome from "./src/screens/Login";
import Nicho from "./src/screens/SelectNicho";
import Registrar from "./src/screens/Register";
import SelectCalendar from "./src/screens/SelectCalendar";
import Calendarj from "./src/screens/calendar/CalendarJaneiro";
import Calendarf from "./src/screens/calendar/CalendarFevereiro";
import Calendarm from "./src/screens/calendar/CalendarMarco";
import Calendara from "./src/screens/calendar/CalendarAbril";
import Calendarma from "./src/screens/calendar/CalendarMaio";
import Calendarjun from "./src/screens/calendar/CalendarJunho";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
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
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
