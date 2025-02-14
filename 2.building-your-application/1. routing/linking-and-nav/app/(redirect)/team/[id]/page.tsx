import { redirect } from "next/navigation";

async function fetchData(id: String) {
    return undefined;
}

export default async function Profile({params}:{params:Promise<{id: String}>}){
    const id = (await params).id;
    if(!id){
        redirect('/login');
    }
    const team = await fetchData(id);
    if(!team) {
        redirect('/dashboard')
    }
}