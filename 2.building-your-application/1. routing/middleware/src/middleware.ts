import { NextRequest } from "next/server";
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    //rewrite, redirect
    // if(request.nextUrl.pathname.startsWith('/about')){
    //     return NextResponse.rewrite(new URL('about-2', request.url))
    // }

    // Assume a "Cookie:{name='name', value='messi'}"

    // cookie
    // let cookie = request.cookies.get('name');
    // console.log(cookie);
    // const allCookies = request.cookies.getAll();
    // console.log(allCookies);

    // console.log(request.cookies.has('name'));
    // request.cookies.delete('name')
    // console.log(request.cookies.has('name'))

    // const response = NextResponse.next()
    // console.log("response: ", response);
    // response.cookies.set('name', 'tung');
    // return response;

    //headers
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-hello-from-middleware1', 'hello')
   
    const response = NextResponse.next()

    response.headers.set('x-hello-from-middleware2', 'hello')

    //CORS//.....

    return response;
}

export const config = {
    matcher: ['/about/:path*', '/api/:path*'],
}