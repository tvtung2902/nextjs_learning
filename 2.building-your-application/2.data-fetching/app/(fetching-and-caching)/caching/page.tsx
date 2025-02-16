import { unstable_cache } from 'next/cache'

const getPosts = unstable_cache(
  async () => {
    const response = await fetch('https://api.vercel.app/blog')
    return await response.json()
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)

export default async function Page() {
  const allPosts = await getPosts()

  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}