export default function UsuarioLogado({usuario} : {usuario: string}){
    return (
        <>
            <h1>Bem-vindo</h1>
            <p>{usuario}</p>
        </>
    )
}