'use client'

import { Produto } from "@/@types/Produto";
import { addProdutoAction } from "@/actions/addProduto";
import { useState } from "react"

export function FormAddProduto(){

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const [estoque, setEstoque] = useState('');
    const [importado, setImportado] = useState(false);

    async function handleClick(){
        const produto: Produto = {
            nome,
            preco: Number(preco),
            descricao,
            estoque: Number(estoque),
            importado: importado ? 1 : 0
        }
       await addProdutoAction(produto);
    }

    return (
        <div>
          <label htmlFor="nome">Nome</label>
          <input value={nome} onChange={({target}) => setNome(target.value)} type="text" name="nome" id="nome" />
          <label htmlFor="preco">Preço</label>
          <input value={preco} onChange={({target}) => setPreco(target.value)} type="number" name="preco" id="preco" />
          <label htmlFor="descricao">Descrição</label>
          <input value={descricao} onChange={({target}) => setDescricao(target.value)} type="text" name="descricao" id="descricao" />
          <label htmlFor="estoque">Estoque</label>
          <input value={estoque} onChange={({target}) => setEstoque(target.value)} type="number" name="estoque" id="estoque" />
          
          <label htmlFor="importado"><input checked={importado} onChange={() => setImportado(!importado)} type="checkbox" name="importado" id="importado" />Importado</label>
          <button onClick={handleClick}>Adicionar</button>
        </div>
    )
}