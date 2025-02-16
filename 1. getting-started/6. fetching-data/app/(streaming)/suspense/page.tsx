import Posts from "_ui/Posts";
import { Suspense } from "react"

async function getPosts(wait: number): Promise<{ id: string; title: string }[]> {
  await new Promise(resolve => setTimeout(resolve, wait));

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
  const posts_1: Promise<{ id: string; title: string }[]> = getPosts(1000);
  const posts_2: Promise<{ id: string; title: string }[]> = getPosts(2000);
  return (
    <>
      <div>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </div>

      <Suspense fallback={<div>loading posts_1...</div>}>
        <Posts posts={posts_1} />
      </Suspense>

      <Suspense fallback={<div>loading posts_2...</div>}>
        <Posts posts={posts_2} />
      </Suspense>
    </>
  )
}