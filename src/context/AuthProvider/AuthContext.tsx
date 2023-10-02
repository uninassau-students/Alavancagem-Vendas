import { createContext, useEffect, useState } from "react";
import { IAuthProps, IAuthProviderProps, IUser } from "./types";
import {
  LoginRequest,
  getUserLocalStorage,
  getUserLocalStorageToken,
  setUserLocalStorage,
} from "./utils";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext<IAuthProps>({} as IAuthProps);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

  // useEffect(() => {
  //   async function loadUser() {
  //     const loadedUser = await getUserLocalStorage();

  //     if (loadedUser) {
  //       setUser(loadedUser);
  //     }
  //   }

  //   loadUser();
  // }, []);

  useEffect(() => {
    const loadingStoreData = async () => {
      const loadUserString = await AsyncStorage.getItem("@Auth:user");
      const loadToken = await AsyncStorage.getItem("@Auth:token");

      let parsedUser: IUser | null = null;

      if (loadUserString) {
        try {
          parsedUser = JSON.parse(loadUserString);
        } catch (error) {
          console.log(error);
        }
      }

      if (parsedUser && loadToken) {
        setUser(parsedUser);
      }

      return loadUserString;
    };

    loadingStoreData();
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);

    console.log(response);
  }

  function logout() {
    setUser(null);
  }

  const LoginToken = async (email: string, password: string) => {
    const response = await api.post("/auth", { email, password });
    if (response.data.error) {
      alert(response.data.error);
      return false;
    } else {
      setUser(response.data.user);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;
      AsyncStorage.setItem("@Auth:token", response.data.token);
      const json = JSON.stringify(response.data);
      AsyncStorage.setItem("@Auth:user", json);
      return true;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,

        authenticate,
        logout,
        LoginToken,
        signed: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
