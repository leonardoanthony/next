'use client'

import { setCookie } from "@/actions/set-cookie";
import { useState } from "react";

export default function HomePage() {

  const [valor, setValor] = useState('');


  async function handleClick(){
    console.log('teste');
    const response = await setCookie('segredo', '123456');
    console.log(response);
    setValor(response.value);
  }

  return (
    <main>
      <h1>Home {valor}</h1>
      <button onClick={handleClick}>Definir Cookie</button>
    </main>
  );
}
