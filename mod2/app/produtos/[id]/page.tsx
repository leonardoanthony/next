type Produto = {
    id: number;
    nome: string;
    preco: number;
    descricao: string;
    estoque: number;
    importado: number;
}

type Params = {
    params: Promise<{ id: string }>
}
 

export default async function ProdutoInfoPage({params}: Params){
    const { id } = await params

    
    const response = await fetch(`https://api.origamid.online/produtos/${id}`);
    const data = await response.json() as Produto;

    return (
        <>
            <h1>{data.nome}</h1>
            <h2>R$ {data.preco}</h2>
            <p>{data.descricao}</p>

        </>
    )
}