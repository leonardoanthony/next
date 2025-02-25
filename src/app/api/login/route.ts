import { cookies } from "next/headers";

export async function GET(){
    
    const response = await fetch('https://api.origamid.online/conta/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: 'dog',
            password: 'dogs'
        })
    });
    if(!response){
        return Response.json(response);
    }else{

        const data = await response.json();

            (await cookies()).set('token', data.token,{
                httpOnly: true,
            });
            
        return Response.json(data);
    }
}