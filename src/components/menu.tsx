"use client";

import Link from 'next/link';
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

function Busca(){
  const searchParams = useSearchParams();
  const busca = searchParams.get('busca');
  return <div>Busca: {busca}</div>
}

export default function Menu() {
  const params = useParams();
  const pathName = usePathname();

  const router = useRouter();

  useEffect(() => {
    console.log('pathName', pathName);
    // setTimeout(() => {
    //   router.refresh();
    // }, 5000)
  }, [pathName])

  console.log(pathName)
  return (
    <>
    <Suspense fallback={'Carregando...'}>
      <Busca />
    </Suspense>
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
<<<<<<< HEAD
        <Link href="/produtos">Produtos</Link>
      </li>
      <li>
        <Link href="/cursos">cursos</Link>
      </li>
      <li>
        <Link href="/produtos/adicionar">Adicionar Produto</Link>
=======
        <Link href="/acoes/?busca=xpt">Ações</Link>
>>>>>>> aaa1d4d8790f52434e43bdad5afe2dc40f884fa4
      </li>
    </ul>
    </>
  );
}
