type PageParams = {
    params: {
        slug: string[]
    }
}

export default async function CursosPage({params}: PageParams){

    const {slug} = await params

    return (
        <>
            <h1>Cursos</h1>
            <p>{slug.join('/')}</p>
        </>
    )
}