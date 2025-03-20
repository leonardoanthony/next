'use client'

type ErrorParams = {
    error: Error,
    reset: () => void
}

export default  function ProdutosError({error, reset} : ErrorParams){
    return (
        <main>
            <h1>Um erro ocorreu</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Tente novamente</button>
        </main>
    )
}