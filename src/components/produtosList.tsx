'use client'

import { useEffect, useState } from "react";

type Produto = {
    id?: string;
    nome: string;
    preco: number;
    descricao: string;
    estoque: number;
    importado: 0 | 1;
}

export default function ProdutosList() {


const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        async function getProdutos(){
            const produtosList = await (await fetch('https://api.origamid.online/produtos')).json() as Produto[];
            setProdutos(produtosList)
        }
        getProdutos();
    })

  return (
    <ul>
        {produtos.map((produto) => (
            <li key={produto.id}>{produto.nome} - R$ {produto.preco}</li>
        ))}
    </ul>
  );
}