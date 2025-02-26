import FormLogin from "@/components/formLogin";
import UsuarioLogado from "@/components/usuarioLogado";
import { cookies } from "next/headers";

export default async function Login() {

    const token = (await cookies()).get('token')
    const response = await fetch('https://api.origamid.online/conta/perfil', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token?.value}` 
        }
    });
    
    const result = await response.json();
    
    return (
        <>
            {!result.autorizado && <FormLogin />}
            {result.autorizado && <UsuarioLogado usuario={result.usuario} />}
        </>
    )
}