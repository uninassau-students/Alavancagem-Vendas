import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginHome from "../screens/Login";
import Register from "../screens/register";
import Home from "../screens/Home";

export function AppRoutes() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginHome}
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
        name="Home"
        component={Home}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}
