'use client'
import { useEffect, useState } from "react"

export default function Posts(){
    const[posts, setPosts] = useState(null);
    
    useEffect(() => {
        async function fetchAPI(){
            try {
                const response = await fetch("https://api.vercel.app/blog");
          
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
          
                const data = await response.json();
                console.log(data); // Check the data in the console
              } catch (error) {
                console.error("Fetch error:", error);
              }
            };
        fetchAPI()
    }, [])
    
    if(!posts){
        return <>loading...</>
    }

    return(
        <ul>
            {posts.map(post =>(
                <li key={post.id}>
                    {post.title}
                </li>
            ))}    
        </ul>
    )
}