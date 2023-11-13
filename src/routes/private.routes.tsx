import * as React from "react";

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
import Register from "../screens/register";
//calendarios de papelaria>
import SelectCalendar from "../screens/SelectCalendar";
import { CheckboxProviderRoupas } from "../context/CheckboxContextRoupas";
import { CheckboxProvider } from "../context/CheckboxContext";
import Calendarj from "../screens/calendar/CalendarJaneiro";
import Calendarf from "../screens/calendar/CalendarFevereiro";
import Calendarm from "../screens/calendar/CalendarMarco";
import Calendara from "../screens/calendar/CalendarAbril";
import Calendarma from "../screens/calendar/CalendarMaio";
import Calendarjun from "../screens/calendar/CalendarJunho";
import CalendarJulho from "../screens/calendar/CalendarJulho";
import CalendarAgosto from "../screens/calendar/CalendarAgosto";
import CalendarSetembro from "../screens/calendar/CalendarSetembro";
import CalendarOutubro from "../screens/calendar/CalendarOutubro";
import CalendarNovembro from "../screens/calendar/CalandarNovembro";
import CalendarDezembro from "../screens/calendar/CalendarDezembro";
//calendarios de roupas>
import SelectCalendarRoupas from "../screens/SelectCalendarRoupas";
import CalendarJaneiroRoupas from "../screens/calendario_roupas/CalendarJaneiroRoupas";
import CalendarFevereiroRoupas from "../screens/calendario_roupas/CalendarFevereiroRoupas";
import CalendarMarcoRoupas from "../screens/calendario_roupas/CalendarMarcoRoupas";
import CalendarAbrilRoupas from "../screens/calendario_roupas/CalendarAbrilRoupas";
import CalendarMaioRoupas from "../screens/calendario_roupas/CalendarMaioRoupas";
import CalendarJunhoRoupas from "../screens/calendario_roupas/CalendarJunhoRoupas";
import CalendarJulhoRoupas from "../screens/calendario_roupas/CalendarJulhoRoupas";
import CalendarAgostoRoupas from "../screens/calendario_roupas/CalendarAgostoRoupas";
import CalendarSetembroRoupas from "../screens/calendario_roupas/CalendarSetembroRoupas";
import CalendarOutubroRoupas from "../screens/calendario_roupas/CalendarOutubroRoupas";
import CalendarNovembroRoupas from "../screens/calendario_roupas/CalendarNovembroRoupas";
import CalendarDezembroRoupas from "../screens/calendario_roupas/CalendarDezembroRoupas";

export default function PrivateRoutes() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const Stack = createStackNavigator();
  return (
    <CheckboxProviderRoupas>
      <CheckboxProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="Registrar"
            component={Register}
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
          <Stack.Screen
            name="CalendarJulho"
            component={CalendarJulho}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarAgosto"
            component={CalendarAgosto}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarSetembro"
            component={CalendarSetembro}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarOutubro"
            component={CalendarOutubro}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarNovembro"
            component={CalendarNovembro}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarDezembro"
            component={CalendarDezembro}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="SelectCalendarRoupas"
            component={SelectCalendarRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarJaneiroRoupas"
            component={CalendarJaneiroRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarFevereiroRoupas"
            component={CalendarFevereiroRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarMarcoRoupas"
            component={CalendarMarcoRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarAbrilRoupas"
            component={CalendarAbrilRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarMaioRoupas"
            component={CalendarMaioRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarJunhoRoupas"
            component={CalendarJunhoRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarJulhoRoupas"
            component={CalendarJulhoRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarAgostoRoupas"
            component={CalendarAgostoRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarSetembroRoupas"
            component={CalendarSetembroRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarOutubroRoupas"
            component={CalendarOutubroRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarNovembroRoupas"
            component={CalendarNovembroRoupas}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="CalendarDezembroRoupas"
            component={CalendarDezembroRoupas}
            options={{
              header: () => null,
            }}
          />
        </Stack.Navigator>
      </CheckboxProvider>
    </CheckboxProviderRoupas>
  );
}
