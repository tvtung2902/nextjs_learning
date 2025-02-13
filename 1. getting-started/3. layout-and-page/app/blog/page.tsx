import getPosts, { Post } from "_lib/posts";
import Link from "next/link";

export default function Page(){
    const posts: Post[] = getPosts();
    return(
        <>
            {posts.map((post) => (
                <Link href={`/blog/${post.id}`}><h1 key={post.id}>{post.name}</h1></Link>
            ))}
        </>
    )
}