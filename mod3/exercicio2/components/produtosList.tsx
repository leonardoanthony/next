'use client'

import { Produto } from "@/@types/Produto";
import { useEffect, useState } from "react";

export default function ProdutosList() {


const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        async function getProdutos(){
            const produtosList = await (await fetch('https://api.origamid.online/produtos', {
                next: {
                    revalidate: 10
                }
            })).json() as Produto[];
            setProdutos(produtosList)
        }
        getProdutos();
    }, [])

  return (
    <ul>
        {produtos.map((produto) => (
            <li key={produto.id}>{produto.nome}: R$ {produto.preco}</li>
        ))}
    </ul>
  );
}