import { NativeBaseProvider } from "native-base";
import { Routes } from "./src/routes";
import { enableScreens } from 'react-native-screens';

enableScreens();



export default function App() {
  return(
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  )
}