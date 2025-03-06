'use client'

import { addProdutoAction } from "@/actions/addProduto";
import { useFormStatus } from "react-dom";

function Button(){
    const status = useFormStatus();
    return (
        <button type="submit" disabled={status.pending}>
            Adicionar
        </button>
    )
}

export function FormAddProduto(){
    return (
        <form action={addProdutoAction}>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" />
          <label htmlFor="preco">Preço</label>
          <input type="number" name="preco" id="preco" />
          <label htmlFor="descricao">Descrição</label>
          <input type="text" name="descricao" id="descricao" />
          <label htmlFor="estoque">Estoque</label>
          <input type="number" name="estoque" id="estoque" />
          
          <label htmlFor="importado">
            <input type="checkbox" name="importado" id="importado" />
            Importado
        </label>
          <Button />
        </form>
    )
}