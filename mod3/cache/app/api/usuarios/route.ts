export async function GET(){
    return Response.json({ok: true, method: 'GET', page: 'usuarios'});
}