// app/blog-1/[id]/page.tsx

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

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

// export default async function Page({ params }: { params: { id: string } }) {
//   const posts = await getPosts();
//   const post = posts.find((p) => p.id === params.id);

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>Content of post {post.id}</p>
//     </div>
//   );
// }
