'use server'
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers'

export async function signup(formData: FormData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('success');
        }, 3000);
    });
}

export async function send(message: string){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('success');
        }, 3000);
    });
}

export async function updateUser(userId: string, formData: FormData) {
    console.log("id: ", userId);
    // revalidatePath('/user/${userId}') // on-demand revalidation with revalidatePath
    // redirect(`/users`) 
}


export async function incrementLike(likes: number) {
    await new Promise((resolve, _reject) => {
        setTimeout(() =>{
            resolve('increment like...')
        }, 100)
    })
    return likes + 1;
}

export async function incrementViews(views: number){
    await new Promise((resolve, _reject) => {
        setTimeout(() =>{
            resolve('increment like...')
        }, 100)
    })
    return views + 1;
}

export async function exCookies(){
    const cookieStore = await cookies()
    // get cookie
    console.log(cookieStore.get('name')?.value)
    //set cookie
    cookieStore.set('name', 'Delba')

}


// revalidate path

export async function createPost() {
    // Xóa cache chỉ của dữ liệu có tag 'posts'
    // revalidateTag('posts')
}