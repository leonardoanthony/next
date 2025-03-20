import { getCurso, getCursos } from "@/api/cursos";


type Aula = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    curso_id: number;
    tempo: number;
    ordem?: number;
}

type Curso = {
    id: number;
    slug: string;
    nome: string;
    descricao: string;
    total_aulas: number;
    total_horas: number;
    aulas: Aula[]
}

type Params = {
    params: Promise<{ slug: string[] }>
}

export async function generateStaticParams(){

    const cursos = await getCursos();
    const aulas = await Promise.all(cursos.map(curso => getCurso(curso.slug)));

    const response =  aulas
        .reduce((acc: Aula[], curso) => acc.concat(curso.aulas), [])
        // .map(aula => (
        //     {
        //         aula: aula.slug,
        //         curso: cursos.find(curso => curso.id === aula.curso_id)?.slug
        //     }
        // ))

        console.log(response);

        return response
        .map(aula => (
            {
                aula: aula.slug,
                curso: cursos.find(curso => curso.id === aula.curso_id)?.slug
            }
        ));
        



}
 
export default async function CursosPage({params}: Params){

    const {slug} = await params

    const [cursoNome] = slug; 
    const response = await fetch(`https://api.origamid.online/cursos/${cursoNome}`);
    const curso = await response.json() as Curso
    ;
    return (
        <>
            <h1>Cursos</h1>
            <h2>{curso.descricao}</h2>
            <p>Total de {curso.total_aulas} aulas em {curso.total_horas} horas</p>
            <ul>
                {curso.aulas.map((aula) => (
                    <li key={aula.id}>{aula.ordem}. {aula.nome}</li>
                ))}
            </ul>
        </>
    )
}