export default async function Page({params}: {params: Promise<{id: string}>}){
    const id = (await params).id;
    return (
        <h1>
            this is blog: {id}
        </h1>
    )
}