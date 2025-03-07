'use client';
import { useEffect, useState } from 'react';

export default function BlogPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('caching/api') 
            .then(res => res.json())
            .then(data => setPosts(data.products))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}
