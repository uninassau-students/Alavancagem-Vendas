import { createContext, useEffect, useState } from "react";
import { IAuthProps, IAuthProviderProps, IUser } from "./types";
import { api } from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext<IAuthProps>({} as IAuthProps);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);

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

  async function LoginToken(email: string, password: string): Promise<boolean> {
    try {
      const response = await api.post("/auth/user", { email, password });
      console.log(response.data);
      setUser(response.data);
      console.log(user);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        LoginToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
