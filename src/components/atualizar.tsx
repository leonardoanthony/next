'use client'

import { revalidatePathAction } from "@/actions/revalidate-path"
import { revalidatePath } from "next/cache";
import { useEffect } from "react"

export default function Atualizar(){

    function handleClick(){
        revalidatePathAction('/acoes')
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            revalidatePath('/acoes')
        }, 5000)
        return () => {
            clearInterval(intervalID);
        }
    }, []);

    return (
        <button onClick={handleClick}>Atualizar</button>
    )
}