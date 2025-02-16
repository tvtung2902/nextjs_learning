import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: '900',
    subsets: ['latin'],
  })

export default function LFont(){
    return <section className={roboto.className}>
        <h1>gg font</h1>
    </section>
}
  