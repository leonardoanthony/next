import { Produto } from "@/@types/Produto";

export default async function ProdutosLista(){
    let produtos: Produto[] = []
    const response = await fetch('https://api.origamid.online/produtoss', {
                          next: {
                              revalidate: 10
                          }
                      })
    
    try {
        if(!response.ok) throw new Error('Erro ao carregar produtos');
        produtos = await response.json() as Produto[]; 
    } catch (error) {
        return <p>Ocorreu um erro ao renderizar lista</p>
    }

      return (
        <ul>
          {produtos.map(produto => (
            <li key={produto.id}>{produto.nome}: R$ {produto.preco}</li>
          ))}
        </ul>
      )
}