async function getItem(id:string){
    const data = await fetch('https://api.vercel.app/blog/1')
    const posts = await data.json()
    return posts
}

async function checkIsAvailable() {
    return true;
}

const preload = (id: string) => {
    void getItem(id)
}


async function Item({ id }: { id: string }) {
    const result = await getItem(id)
    return <h1>
        {result.title}
    </h1>
  }
  

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const { id } = await params

    preload(id)

    const isAvailable = await checkIsAvailable()
   
    return isAvailable ? <Item id={id} /> : null
}
  