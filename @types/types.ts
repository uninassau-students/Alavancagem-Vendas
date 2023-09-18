import { ReactNode} from "react";

export interface IAuthContextDataProps {
    
}

export interface IAuthProviderProps {
    children: ReactNode;
}

export interface UserDataProps {
    username: string;
    password: string;
    email: string;
}