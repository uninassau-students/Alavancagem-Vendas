import * as React from 'react';
import { NativeBaseProvider } from 'native-base'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto"
//
import Home from './src/screens/home1';
import LoginHome from './src/screens/LoginHome';
import Nicho from './src/screens/nicho';
import Registrar from './src/screens/register';
import SelectCalendar from './src/screens/SelectCalendar';
import Calendarj from './src/screens/calendarsScreens/Calendarjaneiro'; 
import Calendarf from './src/screens/calendarsScreens/Calendarfevereiro';  
import Calendarm from './src/screens/calendarsScreens/Calendarm'; 
import Calendara from './src/screens/calendarsScreens/Calendara'; 
import Calendarma from './src/screens/calendarsScreens/Calendarma'; 
import Calendarjun from './src/screens/calendarsScreens/Calendarjun'; 

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  const Stack = createStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Login" component={LoginHome} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Nicho" component={Nicho} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Registrar" component={Registrar} options={{
            header: () => null,
          }} />
          <Stack.Screen name="SelectCalendar" component={SelectCalendar} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Calendarj" component={Calendarj} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Calendarf" component={Calendarf} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Calendarm" component={Calendarm} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Calendara" component={Calendara} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Calendarma" component={Calendarma} options={{
            header: () => null,
          }} />
          <Stack.Screen name="Calendarjun" component={Calendarjun} options={{
            header: () => null,
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
