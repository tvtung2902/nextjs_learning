import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    const isAuthen = true;
    // continue...
    if(isAuthen){
        return NextResponse.next();
    }
    return NextResponse.redirect(new URL('login', request.url));
}