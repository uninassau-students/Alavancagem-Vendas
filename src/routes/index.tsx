import { NavigationContainer } from "@react-navigation/native";
import { Box } from "native-base";
import AppRoutes from "./app.routes";
import LoginHome from "../screens/Login";


export function Routes() {

    return(
        <Box flex={1}>
            <NavigationContainer>
                <AppRoutes /> 
            </NavigationContainer>
        </Box>
    )
}