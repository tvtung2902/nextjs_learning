import { signup } from "actions";
import { SubmitButton } from "./button";

export default function Page(){
    return(

        <form action={signup}>
            <SubmitButton />
        </form>
    )
}