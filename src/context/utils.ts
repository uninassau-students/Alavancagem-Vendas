import { UserDataProps } from "../../@types/types";
import { api } from "../services/api";


export function serUserLocalStorage(user:UserDataProps | null) {
    localStorage.setItem('u', JSON.stringify(user));
}

export function getUserLocalStorage () {
    const json = localStorage.getItem('u');

    if(!json) {
        return null
    }

    const user = JSON.stringify(json)

    return user ?? null
}

export async function  LoginRequest(email:string, password: string) {
    try {
        const request = await api.post('/user', {email, password})

        return request.data;
    } catch (error) {
        console.log(error)
    }
}