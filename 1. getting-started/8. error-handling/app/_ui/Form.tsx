'use client'
import { createPost } from "action";
import { useActionState } from "react";
const innitState = {
    message: '',
  }

export function Form() {
    const [state, formAction, pending] = useActionState(createPost, innitState);
    return (
        <form action={formAction}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" required />
        {state?.message && <p aria-live="polite">{state.message}</p>}
        <button disabled={pending}>Create Post</button>
      </form>
    )
}