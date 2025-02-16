'use client'
import { useSearchParams } from "next/navigation";

export default function Sort(){
    const searchParams = useSearchParams();
    function updateSorting(order: string){
        const params = new URLSearchParams(searchParams.toString());
        params.set('sort', order);
        window.history.pushState(null, "", `?${params.toString()}`)
    }
    return(
        <>
            <button onClick={() => updateSorting('asc')}>sort asc</button>
            <button onClick={() => updateSorting('desc')}>sort desc</button>
        </>
    )
}