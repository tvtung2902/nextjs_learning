import { updateUser } from "actions";

export default function UserProfile({userId = '1'}: {userId: string}){
    const updateUserWithId = updateUser.bind(null, userId)
    return(
        <form action={updateUserWithId}>
            <input type="text" name="name" />
            <button type="submit">Update User Name</button>
        </form>
    )
}