'use server'

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export default async function createPost(formData: FormData){
    // ...
    //revalidatePath('/posts');
    redirect('/post/1')
}