import { ReactNode,createContext, useEffect, useState } from "react";
import {IAuthContextDataProps, IAuthProviderProps, TokenTypes, UserDataProps} from '../../@types/types'
import { LoginRequest, getUserLocalStorage, serUserLocalStorage } from "./utils";



export const AuthContext = createContext({} as IAuthContextDataProps)




export function AuthContextProvider({children}: IAuthProviderProps){
    const[loading,setLoading] = useState(false);
    const[globalLoading,setGlobalLoading] = useState(false);
    const [userData,setUserData] = useState<UserDataProps | null>({} as UserDataProps);
    const [token,setToken] = useState<TokenTypes>()

    async function authenticate(email:string, password: string) {
        const response = await LoginRequest(email,password)   

        const payload = { token: response.token, email }

        setUserData(payload);
        serUserLocalStorage(payload);
    }

    function logout() {
        setUserData(null);
        serUserLocalStorage(null);
    }

    return(
    <div></div>
    )
}