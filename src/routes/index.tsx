import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";

import { useAuth } from "../context/useAuth";
import PrivateRoutes from "./private.routes";
import { AppRoutes } from "./app.routes";
import LoginHome from "../screens/Login";

export function Routes() {
  const { signed } = useAuth();
  return (
    <Box flex={1}>
      <NavigationContainer>
        {signed ? <PrivateRoutes /> : <LoginHome />}
      </NavigationContainer>
    </Box>
  );
}
