import Link from "next/link";

type Curso = {
    id: number;
    slug: string;
    nome: string;
    total_aulas: number;
    total_horas: number;
}

export default async function CursosPage(){

    const response = await fetch('https://api.origamid.online/cursos');
    const data = await response.json() as Curso[];


    return (
        <>
            <h1>Cursos</h1>
            <ul>
                {data.map((curso) => (
                    <li><Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link></li>
                ))}
            </ul>
        </>
    )
}