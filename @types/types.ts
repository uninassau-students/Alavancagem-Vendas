import { ReactNode} from "react";

export interface IAuthContextDataProps {
    authenticate: (email:string, password: string) => Promise<void>
    logout: ()=> void;
}

export interface IAuthProviderProps {
    children: ReactNode;
}

export interface UserDataProps {
    password?: string;
    email: string;
}

export interface TokenTypes {
    token: string;
    refresh: string;
}