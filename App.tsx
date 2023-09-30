import { NativeBaseProvider } from "native-base";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthProvider/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </AuthProvider>
  );
}
