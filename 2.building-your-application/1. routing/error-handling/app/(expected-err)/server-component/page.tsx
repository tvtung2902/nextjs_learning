export default async function Page() {
    const res = await fetch('https://api.vercel.app/posts', {
        method: 'POST',
        body: JSON.stringify({title: 'title', content : 'this is content'}),
      })
    if (!res.ok) {
        return 'There was an error.'
    }
    const posts = await res.json()
    return (
      <ul>
        {posts.map((post : any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }