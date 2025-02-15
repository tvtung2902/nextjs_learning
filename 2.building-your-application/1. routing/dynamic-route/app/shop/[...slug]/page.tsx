export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string[] }>
  }) {
    const {slug} = await params;
    return(
        <>
            {slug.map((it, key) =>(
            <h1 key={key}>
                {it}
            </h1>
        ))}   
        </> 
    )
}