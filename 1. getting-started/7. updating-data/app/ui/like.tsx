'use client'
import { incrementLike } from "action";
import { useState } from "react";

export default function LikeBtn({ initialLikes }: { initialLikes: number }){
    const [likes, setLikes] = useState(initialLikes);
    const handleLike = async () => {
        await incrementLike();
        setLikes(likes + 1);
    }
    return(
        <>
            <p>Total likes: {likes}</p>
            <button onClick={handleLike}>
                Like
            </button>
        </>
    )
}