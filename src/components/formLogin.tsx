'use client'

import { login } from "@/actions/login";
import { useState } from "react"

export default function FormLogin(){

    const [username, setUsarname] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(){
        // const response = await (await fetch('http://localhost:3000/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         username,
        //         password
        //     })
        // })).json();

        // if(response.status){
        //     window.location.reload();
        // }
        const response = await login(username, password);
        console.log(response);
    }

    return (
        <>
            <h1>Login</h1>
            <input value={username} onChange={({target}) => setUsarname(target.value)} placeholder="Login"/>
            <input value={password} onChange={({target}) => setPassword(target.value)} placeholder="Passoword" type="password"/>
            <button onClick={handleSubmit}>Entrar</button>
        </>
    )
}