'use server'

import { setCookie } from "./set-cookie";

export async function login(username: string, password: string){
    const response = await (await fetch('https://api.origamid.online/conta/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        })
    })).json();

    await setCookie('token', response.token);
    return response;
}