import Posts from "_ui/Posts";
import { Suspense } from "react"

async function getPosts(): Promise<{ id: string; title: string }[]> {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return [
      {
        id: '1', 
        title: 'post 1' 
      },
      {
        id: '2', 
        title: 'post 2'
      },
      {
        id: '3',
        title: 'post 3'
      }
    ];
  }


export default function Page() {
    const posts: Promise<{ id: string; title: string }[]> = getPosts();
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Posts posts = {posts}/>
        </Suspense>
    )
}