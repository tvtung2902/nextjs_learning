'use client'
 
import { incrementViews } from 'actions'
import { useState, useEffect } from 'react'
 
function ViewCount({ initialViews }: { initialViews: number }) {
  const [views, setViews] = useState(initialViews)
 
  useEffect(() => {
    const updateViews = async () => {
      const updatedViews = await incrementViews(initialViews)
      setViews(updatedViews)
    }
 
    updateViews()
  }, [])
 
  return <p>Total Views: {views}</p>
}

export default function Page(){
    return(
        <ViewCount initialViews={1}/>
    )
}