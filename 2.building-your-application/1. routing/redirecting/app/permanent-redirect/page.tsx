'use server'
 
import { permanentRedirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'
 
export default async function updateUsername(username: string, formData: FormData) {
  username = 'tung';
  try {
    // Call database
  } catch (error) {
    // Handle errors
  }
 
//   revalidateTag('username')
  permanentRedirect(`/profile/${username}`)
}