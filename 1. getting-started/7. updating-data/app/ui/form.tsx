import { cre } from "action";

export default function Form() {
    return <form action={cre}>
              <input type="text" name="title" />
              <button type="submit">Ok</button>
    </form>
}