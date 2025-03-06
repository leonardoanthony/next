// export async function GET() {
//     const response = await fetch('https://api.origamid.online/vendas', {
//         headers: {
//             apikey: 'ORIGAMID123456'
//         }
//     });

import { cookies } from "next/headers";
import { NextRequest } from "next/server";

    
//     const vendas = await response.json();
//   return Response.json(vendas);
// }

export async function GET() {
    const response = await fetch('https://api.origamid.online/conta/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: "dog",
            password: "dog",
        })
    });

    if(!response.ok){
        return Response.json({error: "Erro na api"});
    }
    
    const data = await response.json();
    (await cookies()).set('token', data.token, {
        httpOnly: true,
        secure: true,
    });
  return Response.json(data);
}

export async function POST(request: NextRequest) {
    const param = request.nextUrl.searchParams.get('busca');
    const body = await request.json();

    return Response.json({
        param,
        body
    })
}
