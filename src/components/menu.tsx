"use client";

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Menu() {
  const params = useParams();
  const pathName = usePathname();

  useEffect(() => {
    console.log('pathName', pathName)
  }, [pathName])

  console.log(pathName)
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
    </ul>
  );
}
