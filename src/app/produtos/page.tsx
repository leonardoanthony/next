import { Produto } from "@/@types/Produto";

export default async function ProdutosPage() {

  const response = await fetch('https://api.origamid.online/produtos', {
                      next: {
                          revalidate: 10
                      }
                  })

  if(!response.ok) throw new Error('Erro ao carregar produtos');
  const produtos = await response.json() as Produto[];

  return (
    <main>
      <h1>Produtos</h1>
      <div>
        <ul>
          {produtos.map(produto => (
            <li key={produto.id}>{produto.nome}: R$ {produto.preco}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
