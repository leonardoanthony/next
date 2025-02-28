import Atualizar from "@/components/atualizar";

type Acao = {
    nome: string;
    preco: number;
    atualizada: string;
}

// export const revalidate = 10

export default async function AcoesPage(){

    const response = await fetch('https://api.origamid.online/acoes/lua', {
        // cache: "no-store"
        next: {
            revalidate: 5
        }
    });

    const acao = await response.json() as Acao;

    return (
        <main>
            <h1>Ações</h1>
            <Atualizar />
            <h2>{acao.nome}</h2>
            <p>Preço: {acao.preco}</p>
            <p>Atualiza: {acao.atualizada}</p>
        </main>
    )
}