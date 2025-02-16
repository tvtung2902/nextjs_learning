'use client'
import { incrementLike } from "actions"
import { useState } from "react"

function LikeBtn({ initialLikes }: { initialLikes: number }){
    const [likes, setLikes] = useState(initialLikes)

    return(
        <>
        <p>Total Likes: {likes}</p>
        <button
          onClick={async () => {
            const updatedLikes = await incrementLike(likes)
            setLikes(updatedLikes)
          }}
        >
          Like
        </button>
      </>
    )
}

export default function Page(){
    return(
        <LikeBtn initialLikes={0}/>
    )
}