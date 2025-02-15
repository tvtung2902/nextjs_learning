import { cookies } from "next/headers";

export async function GET(request: Request){
    const cookieStore = await cookies(); // get cookie from request
    console.log("cookieStore: ", cookieStore);
    const token = cookieStore.get('token'); // get value from key 'token'
    // const token = request.cookies.get('token')
    // const token = {value: 'abc'};
    return new Response(
        'nextjs response',
        {
            status: 200,
            headers:{'Set-Cookie': `token=${token.value}`}
        }
    )
}

// headers
// redirects
// dynamic route
// url query
// streaming
// request body
// request body form data
// cors
// webhooks