import { ReactNode,createContext, useState } from "react";
import {IAuthContextDataProps, IAuthProviderProps} from '../../@types/types'



export const AuthContext = createContext({} as IAuthContextDataProps)

export function AuthContextProvider({children}: IAuthProviderProps){
    const[loading,setLoading] = useState(false);
    const[globalLoading,setGlobalLoading] =useState(false);
    const [useData,setUserData] = useState()

    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}