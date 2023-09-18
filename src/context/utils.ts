import { api } from "../services/api";


export async function  LoginRequest(email:string, password: string) {
    try {
        const request = await api.post('/user', {email, password})

        return request.data;
    } catch (error) {
        console.log(error)
    }
}