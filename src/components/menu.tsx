import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/loginServer">Login Server</Link>
      </li>
      <li>
        <Link href="/acoes">Ações</Link>
      </li>
    </ul>
  );
}
