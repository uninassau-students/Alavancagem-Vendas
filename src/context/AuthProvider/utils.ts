import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "./types";
import { api } from "../../services/api";

export async function setUserLocalStorage(user: IUser | null) {
  const json = JSON.stringify(user);
  await AsyncStorage.setItem("@asyncStorage:u", json);
}

export async function getUserLocalStorage() {
  const json = await AsyncStorage.getItem("@asyncStorage:u");

  if (!json) {
    return null;
  }

  const user = JSON.parse(json) as IUser;

  return user ?? null;
}

export async function getUserLocalStorageToken() {
  const storageUser = await AsyncStorage.getItem("@Auth:token");
  const storageToken = await AsyncStorage.getItem("@Auth:user");

  if (!storageUser) {
    return null;
  }
  if (!storageToken) {
    return null;
  }
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await api.post("/auth/user", {
      email,
      password,
      getUserLocalStorage,
    });

    console.log(request);
    return request.data;
  } catch (error) {
    return null;
  }
}
