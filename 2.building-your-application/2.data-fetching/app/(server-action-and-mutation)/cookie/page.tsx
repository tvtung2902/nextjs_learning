'use client'
import { exCookies } from "actions"

export default async function Page(){  
    return(
        <button onClick={() => exCookies()}>cookies</button>    
    )
}