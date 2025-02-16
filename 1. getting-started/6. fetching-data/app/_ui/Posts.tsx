'use client'

import { use } from "react"

export default function Posts({
    posts,
}: {
    posts: Promise<{id: string, title: string}[]>
}){
    const postsData = use(posts);
    return(
        <ul>
            {postsData.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}