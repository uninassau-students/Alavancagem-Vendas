import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";

import { useAuth } from "../context/useAuth";
import PrivateRoutes from "./private.routes";
import { AppRoutes } from "./app.routes";
import LoginHome from "../screens/Login";

export function Routes() {
  const { user } = useAuth();
  return (
    <Box flex={1}>
      <NavigationContainer>
        {user?.token ? <PrivateRoutes /> : <AppRoutes />}
      </NavigationContainer>
    </Box>
  );
}
