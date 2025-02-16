'use client'
 
import { send } from 'actions'
import { useOptimistic } from 'react'
 
type Message = {
  message: string
}
 
function Thread({ messages }: { messages: Message[] }) {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic<
    Message[],
    string
  >(messages, (state, newMessage) => [...state, { message: newMessage }])
 
  const formAction = async (formData: FormData) => {
    const message = formData.get('message') as string
    addOptimisticMessage(message)
    await send(message)
  }
 
  return (
    <div>
      {optimisticMessages?.map((m, i) => (
        <div key={i}>{m.message}</div>
      ))}
      <form action={formAction}>
        <input type="text" name="message" />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default function Page(){
    return(
        <>
            <Thread messages={[]} />
        </>
    )
}