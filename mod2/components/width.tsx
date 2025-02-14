'use client'

// import dynamic from "next/dynamic";
// dynamic(() => import('@/components/width'), {ssr: false})

import React from "react";

export function Width(){

    const [width, setWidth] = React.useState(0);

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(document.documentElement.clientWidth);
        }
        handleResize();
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const [ativo, setAtivo] = React.useState(false);
    return (
        <>
            <h2 style={{color: ativo ? '#680' : '#b00'}}>Largura da tela: {width}</h2>
            <button onClick={() => setAtivo((b) => !b)}>Ativar</button>
        </>
    )
}