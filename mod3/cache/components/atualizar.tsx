'use client'

import { revalidatePathAction, revalidateTagAction } from "@/actions/revalidate-path"
// import { revalidatePath } from "next/cache";
import { useEffect } from "react"

export default function Atualizar(){

    function handleClick(){
        // revalidatePathAction('/acoes')
        revalidateTagAction('acoes')
    }

    // useEffect(() => {
    //     const intervalID = setInterval(() => {
    //         revalidatePathAction('/acoes');
    //         console.log('teste');
    //     }, 5000)
    //     return () => {
    //         clearInterval(intervalID);
    //     }
    // }, []);

    return (
        <button onClick={handleClick}>Atualizar</button>
    )
}