import ProdutosLista from "../../components/produtos-lista";
import { Suspense } from "react";

export default async function ProdutosPage() {

  return (
    <main>
      <h1>Produtos</h1>
      <p>Lista de Produtos</p>
      <Suspense fallback={<p>Carregando...</p>}>
        <ProdutosLista />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <ProdutosLista espera={3000} />
      </Suspense>
    </main>
  );
}
