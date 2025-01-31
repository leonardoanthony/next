'use client'

import { useState } from "react"

export const Form = () => {

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);
    const [classificacao, setClassificacao] = useState('');

    function classificarIMC(imc: number) {
        if (imc < 18.5) return "Abaixo do peso";
        if (imc < 24.9) return "Peso normal";
        if (imc < 29.9) return "Sobrepeso";
        if (imc < 34.9) return "Obesidade grau 1";
        if (imc < 39.9) return "Obesidade grau 2";
        return "Obesidade grau 3";
    }

    const handleClick = () => {
        const result = peso / (altura * altura);
        setImc(result);
        setClassificacao(classificarIMC(result));
    }

    return (
        <>
            <input type="number" onChange={({target}) => setPeso(+target.value)} placeholder="Peso (kg)" name="" id="" />
            <input type="number" onChange={({target}) => setAltura(+target.value / 100)} placeholder="Altura (cm)" name="" id="" />
            <button onClick={handleClick}>Calcular</button>
            <p>Índice de Massa Corporal: {imc.toFixed(2)}</p>
            <p>{classificacao}</p>
        </>
    )
}