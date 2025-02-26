import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest){

    const bodyRequest = await request.json();
    
    const response = await fetch('https://api.origamid.online/conta/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyRequest)
    });
    if(!response){
        return Response.json({status: false});
    }else{

        const data = await response.json();

            (await cookies()).set('token', data.token,{
                httpOnly: true,
            });
            
        return Response.json({status: true});
    }
}